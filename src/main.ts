/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/**
 * A library to display text on 7 segment displays.
 *
 * @packageDocumentation
 */

import type {
  Char,
  CharVisible,
  FunctionOptions,
  InstanceOptions,
  Justify,
  TextElement,
  TextGeneralOptions,
  TextStringOptions,
  TextStringSpecificOptions,
  VariationMap
} from "./types"

type CharMap = { [key: string]: Char }

/*

    a
  f   b
    g
  e   c
    d

  abcdefgP
  00000000

*/

import punctuation from './chars/punctuation'
import diacritics from './chars/diacritics'
import numbers from './chars/numbers'
import latin from './chars/latin'
import cyrillic from './chars/cyrillic'
import greek from './chars/greek'
import cjkNumbers from './chars/cjk_numbers'
import cjkPunctuation from './chars/cjk_punctuation'
import japanese from './chars/japanese'
import korean from './chars/korean'

export const libChars: Char[] =
[
	...punctuation,
	...diacritics,
	...numbers,
	...latin,
	...cyrillic,
	...greek,
	...cjkNumbers,
	...cjkPunctuation,
	...japanese,
	...korean,
]

const decimalPoint = "00000001"
const decimalPointModChar = "\0" // null

function escapeRegExp(string: string)
{
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function bits2byte(bits: string)
{
  return parseInt(bits, 2)
}

function byte2bits(byte: number)
{
  return byte.toString(2).padStart(8, "0")
}

function getVariation(varMap: VariationMap, varKeys: string[])
{
  for (const key of varKeys)
  {
    if (key in varMap) return varMap[key]
  }
  if (varKeys.includes("*"))
  {
    return (Object.entries(varMap)[0]||[])[1]
  }
  return varMap["_"] || null
}

function isLowerCase(str: string)
{
  return str != str.toUpperCase()
}

function getNormalizedChr(str: string)
{
  return str.normalize("NFD")[0]
}

function orPinMap(a: string, b: string)
{
  return a.split('').map((ac, i) =>
    ac == '1' || b[i] == '1' ? '1' : '0').join('')
}

type BreakCheck = (visible: CharVisible | undefined) => boolean

const isVisibleWithinLine: BreakCheck = (visible) =>
{
  return visible == 'hide-on-break' || typeof visible == 'undefined'
}

const isVisibleOnBreak: BreakCheck = (visible) =>
{
  return visible == 'show-on-break' || typeof visible == 'undefined'
}

function toSimpleChar(element: TextElement)
{
  return { pin: element.pin }
}

function blankFill(length: number): TextElement[]
{
  return Array(Math.max(length, 0)).fill({pin: '00000000'})
}

type Hyphenation = 'soft' | 'always'

type WrapOptions = {
  length?: number
  justify?: Justify
  hyphenation?: Hyphenation
}

/**
 * An object containing the converted string with methods for outputting
 * into various convenient formats.
 */
export class SevenSegmentLine
{
  private elements: TextElement[]
  private properties: Required<TextGeneralOptions>
  constructor(elements: TextElement[])
  {
    this.elements = elements
    this.properties = {
      pinMap: null
    }
  }

  /**
   * Split the seven segment line into fixed width lines for outputting
   * to panels.
   *
   * Takes into account soft and line break characters and whether they
   * are still visible on break or hidden on break.
   *
   * Examples of soft and line breaks and their visibility:
   * soft break:
   *   space: hide on break
   *   soft-hyphen: show on break
   *   hard-hyphen: always shown
   *   zero-width space: never shown
   * line break:
   *   new line: hide on break
   *
   * @param options - Optional parameters.
   * @returns An array of strings
   */
  public wrap(options: WrapOptions)
  {
    const opts: Required<WrapOptions> =
    {
      length: 24,
      justify: 'left',
      hyphenation: 'soft',
      ...options,
    }

    const lines: TextElement[][] = []
    let line: TextElement[] = []
    let part: TextElement[] = []
    let lineJustify: Justify = opts.justify

    let breakElement: TextElement | null = null

    function pushBreakElement(check: BreakCheck)
    {
      if (breakElement && check(breakElement.visible))
        line.push(toSimpleChar(breakElement))
      breakElement = null
    }

    function pushPart()
    {
      pushBreakElement(isVisibleWithinLine)
      line = line.concat(part)
      part = []
    }

    function pushLine()
    {
      pushBreakElement(isVisibleOnBreak)
      const remaining = opts.length - line.length

      let left = 0
      let right = 0
      if (lineJustify == "left")
        right = remaining
      else if (lineJustify == "right")
        left = remaining
      else if (lineJustify == "center")
      {
        left = Math.floor(remaining/2)
        right = remaining - left
      }
      line = blankFill(left).concat(line, blankFill(right))
      lines.push(line)
      line = []
      lineJustify = opts.justify
    }

    const processElement = (el: TextElement, index: number) =>
    {
      const lineLength = line.length
        + (breakElement && isVisibleWithinLine(breakElement.visible) ? 1 : 0)
        + part.length

      if (el.justify)
      {
        lineJustify = el.justify
      }

      if (el.break)
      {
        if (isVisibleOnBreak(el.visible) && (lineLength + 1 > opts.length))
          pushLine() // line with break char would exceed max length
        pushPart()
        breakElement = el
        if (el.break == "line")
          pushLine()
      }
      else if (el.visible != 'never')
      {
        if (lineLength + 1 > opts.length)
        {
          if (line.length == 0)
            pushPart() // part exceeds max length
          pushLine()
        }
        part.push(el)

        const oneAhead = this.elements[index+1]
        if (opts.hyphenation == 'always'
          && lineLength + 3 > opts.length
          && oneAhead && !oneAhead.break)
        {
          if (oneAhead.pin == '00000000'
             || oneAhead.pin == '00000010')
            oneAhead.break = "soft"
          else
            processElement({ pin: '00000010',
              break: 'soft', visible: 'show-on-break' }, index)
        }
      }
    }

    this.elements.forEach(processElement)
    pushPart()
    if (line.length) pushLine()
    return lines.map(line => new SevenSegmentLine(line))
  }

  /**
   * Output an array of strings representing the 8 segments
   * as '1' or '0'.
   * @param options - Optional parameters.
   * @returns An array of strings
   */
  public toPinsArray(options?: TextGeneralOptions)
  {
    const opts: Required<TextGeneralOptions> = {
      ...this.properties,
      ...options,
    }
    return this.elements
      .filter(el => el.visible != 'never'
        && el.visible != 'show-on-break')
      .map(el =>
    {
      return opts.pinMap
        ? opts.pinMap.map(i => el.pin[i]).join("")
        : el.pin
    })
  }

  /**
   * Output an array of bytes, a compact format for
   * data tranfer.
   * @param options - Optional parameters.
   * @returns An array of bytes
   */
  public toBytes(options?: TextGeneralOptions)
  {
    const opts: Required<TextGeneralOptions> = {
      ...this.properties,
      ...options,
    }
    return this.toPinsArray(options).map(bits2byte)
  }

  /**
   * Output a string of bytes.
   * @param options - Optional parameters.
   * @returns A string of bytes
   */
  public toString(options?: TextStringOptions)
  {
    const opts: Required<TextStringSpecificOptions> = {
      startCharCode: 0,
      ...options,
    }
    const bytes = this.toBytes(options)
    const chars: string[] = []
    for (let i=0; i<bytes.length; i++)
    {
      chars.push(String.fromCharCode(opts.startCharCode + bytes[i]!))
    }
    return chars.join("")
  }

  /**
   * Output a string for displaying using the DSEG 7-segment
   * font (at least v0.5beta1:
   * https://github.com/keshikan/DSEG/releases/tag/v0.50beta1)
   * @param options - Optional parameters.
   * @returns A string of bytes
   */
  public toDsegString(options?: TextStringOptions)
  {
    return this.toString({
      pinMap: [7,6,5,4,3,2,1,0],
      startCharCode: 0x2800,
      ...options,
    })
  }
}

/**
 * The class from which to create a `SevenSegmentType` instance for
 * converting text to display on 7 segment displays.
 */
export default class SevenSegmentType
{
  /**
   * The properties of the class, set by the options of the constructor.
   */
  private properties: Required<InstanceOptions>
  /**
   * The processed character mapping.
   */
  private charMap: CharMap

  /**
   * The constructor of the `SevenSegmentType` class.
   * @param options - Optional parameters.
   */
  constructor(options?: InstanceOptions)
  {
    this.properties =
    {
      characters: libChars,
      mods: [],
      enhanceNumbers: true,
      numberDecimalSeparator: ".",
      numberGroupSeparator: ",",
      ...options,
    }

    this.charMap = Object.fromEntries(
      this.properties.characters.map(char => [char.chr, char]))
  }

  /**
   * Convert a string to a seven segment line object.
   * @param text - The text to convert.
   * @param options - Instance properties to adjust.
   * @returns An instance of the
   *   {@link SevenSegmentLine | `SevenSegmentLine`} class.
   */
  public convert(text: string, options?: FunctionOptions)
  {
    const opts: Required<InstanceOptions> =
    {
      ...this.properties,
      ...options
    }

    const mods = this.properties.mods.concat(opts.mods)

    if (opts.enhanceNumbers)
    {
      const regexDigits = "[" + numbers.map(num => num.chr).join("") + "]"
      const regexGroupSeparator = escapeRegExp(opts.numberGroupSeparator)
      const regexDecimalSeparator = escapeRegExp(opts.numberDecimalSeparator)

      const regexGroupSep = new RegExp(
        `(${regexDigits})${regexGroupSeparator}(${regexDigits})`, "gu")
      const regexDecimalSep = new RegExp(
        `(${regexDigits})${regexDecimalSeparator}(${regexDigits})`, "gu")

      text = text
        .replace(regexGroupSep, "$1$2")
        .replace(regexDecimalSep, `$1${decimalPointModChar}$2`)
    }

    const splitText = text.split('')

    const resolveChr = (chr: string, index: number): string | string[] =>
    {
      if (chr == decimalPointModChar) return chr
      let char = this.charMap[chr]
      let variation = null
      if (char && char.var)
      {
        variation = getVariation(char.var, mods)
        if (variation)
        {
          if (typeof variation !== 'string')
          {
            const varIndex = (index+1 < splitText.length &&
              isLowerCase(splitText[index+1]!)) ? 1 : 0
            variation = variation[varIndex]
          }
          return variation.split('').flat()
        }
      }
      if (!char || (!char.pin && !variation))
      {
        // remove diacritics if possible and add DP
        return getNormalizedChr(chr) + decimalPointModChar
      }
      return chr
    }

    // Replace chrs in text with variations
    const processedText = splitText.map(resolveChr).flat()

    // convert text to 7s bytes
    const elements: TextElement[] = []
    processedText.join("").split('').forEach(chr =>
    {
      const char = this.charMap[chr]

      if ((chr == decimalPointModChar || (char && char.dp))
        && elements.length > 0)
      {
        // insert dec point into previous char if exists
        const lastIndex = elements.length-1
        elements[lastIndex]!.pin =
          orPinMap(elements[lastIndex]!.pin, decimalPoint)
      }
      else if (!char)
      {
        // append dec point on its own if no char
        elements.push({pin: decimalPoint})
      }
      else
      {
        elements.push({
          pin: typeof char.pin !== "string" ? decimalPoint : char.pin,
          break: char.break,
          visible: char.visible,
          justify: char.justify,
        })
      }
    })

    return new SevenSegmentLine(elements)
  }
}
