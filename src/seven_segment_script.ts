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
  FunctionOptions,
  InstanceOptions,
  LineGeneralOptions,
  Pins,
  LineStringOptions,
  LineStringSpecificOptions,
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

import punctuation from './scripts/punctuation'
import diacritics from './scripts/diacritics'
import numbers from './scripts/numbers'
import latin from './scripts/latin'
import cyrillic from './scripts/cyrillic'
import greek from './scripts/greek'
import cjkNumbers from './scripts/cjk_numbers'
import cjkPunctuation from './scripts/cjk_punctuation'
import japanese from './scripts/japanese'
import korean from './scripts/korean'

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

export const libLocaleVarMap: { [loc: string]: string[] } = {}

export const decimalPoint = "00000001"
export const decimalPointModChar = "\x1F"

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

function andPinMap(a: string, b: string)
{
  return a.split('').map((ac, i) =>
    ac == '1' || b[i] == '1' ? '1' : '0').join('')
}

/**
 * An object containing the converted string with methods for outputting
 * into various convenient formats.
 */
export class SevenSegmentLine
{
  private pinsLine: string[]
  private properties: Required<LineGeneralOptions>
  constructor(pinsLine: string[])
  {
    this.pinsLine = pinsLine
    this.properties = {
      pinMap: null
    }
  }

  /**
   * Outputs the line as an array of strings representing the 8 segments
   * as '1' or '0'.
   * @param options - Optional parameters.
   * @returns An array of strings
   */
  public toPinsArray(options?: LineGeneralOptions)
  {
    const opts: Required<LineGeneralOptions> = {
      ...this.properties,
      ...options,
    }
    return this.pinsLine.map((pins) =>
    {
      return opts.pinMap
        ? opts.pinMap.map(i => pins[i]).join("")
        : pins
    })
  }

  /**
   * Outputs the line as an array of bytes, a compact format for
   * data tranfer.
   * @param options - Optional parameters.
   * @returns An array of bytes
   */
  public toBytes(options?: LineGeneralOptions)
  {
    const opts: Required<LineGeneralOptions> = {
      ...this.properties,
      ...options,
    }
    return this.toPinsArray(options).map(bits2byte)
  }

  /**
   * Output the line as a string of bytes.
   * @param options - Optional parameters.
   * @returns A string of bytes
   */
  public toString(options?: LineStringOptions)
  {
    const opts: Required<LineStringSpecificOptions> = {
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
   * Output the line as a string for displaying using the DSEG 7-segment
   * font (at least v0.5beta1:
   * https://github.com/keshikan/DSEG/releases/tag/v0.50beta1)
   * @param options - Optional parameters.
   * @returns A string of bytes
   */
  public toDsegString(options?: LineStringOptions)
  {
    return this.toString({
      pinMap: [7,6,5,4,3,2,1,0],
      startCharCode: 0x2800,
      ...options,
    })
  }
}

/**
 * The class from which to create a `SevenSegmentScript` instance for
 * converting text to display on 7 segment displays.
 */
export default class SevenSegmentScript
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
   * The constructor of the `SevenSegmentScript` class.
   * @param options - Optional parameters.
   */
  constructor(options?: InstanceOptions)
  {
    this.properties =
    {
      characters: libChars,
      locales: [],
      variationKeys: [],
      improveNumbers: true,
      numberDecimalSeparator: ".",
      numberGroupSeparator: ",",
      ...options,
    }

    this.charMap = Object.fromEntries(
      this.properties.characters.map(char => [char.chr, char]))
  }

  /**
   * Convert a string to a line object.
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

    const variationKeys = [
      ...opts.variationKeys,
      ...opts.locales,
      ...opts.locales.map(key => libLocaleVarMap[key] || []).flat()
    ]

    if (opts.improveNumbers)
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
      if (!char)
      {
        // remove diacritics if possible and add DP
        return getNormalizedChr(chr) + decimalPointModChar
      }
      if (char.var)
      {
        let variation = getVariation(char.var, variationKeys)
        if (variation)
        {
          if (typeof variation !== 'string')
          {
            const varIndex = (index+1 < splitText.length &&
              isLowerCase(splitText[index+1]!)) ? 1 : 0
            variation = variation[varIndex]
          }
          return variation.split('').map(resolveChr).flat()
        }
      }
      return chr
    }

    // Replace chrs in text with variations
    const processedText = splitText.map(resolveChr).flat()

    // convert text to 7s bytes
    const pinsLine: string[] = []
    processedText.join("").split('').forEach(chr =>
    {
      // add dec point to previous char if there is one,
      // otherwise append it
      if (chr == decimalPointModChar)
      {
        if (pinsLine.length)
        {
          const lastIndex = pinsLine.length-1
          pinsLine[lastIndex]! =
            andPinMap(pinsLine[lastIndex]!, decimalPoint)
        }
        else
        {
          pinsLine.push(decimalPoint)
        }
        return
      }

      // append DP if not mapped
      const char = this.charMap[chr]
      if (!char || typeof char.pin !== "string")
      {
        pinsLine.push(decimalPoint)
        return
      }

      pinsLine.push(char.pin)
    })

    return new SevenSegmentLine(pinsLine)
  }
}
