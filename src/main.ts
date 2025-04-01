import type {
  Char,
  FunctionOptions,
  InstanceOptions,
  PinMap,
  VariationMap
} from "./types"

function escapeRegExp(string: string)
{
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

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

export const decimalPointByte = 0b00000001
export const decimalPointModChar = "\x1F"

export function bits2byte(bits: string)
{
  return parseInt(bits, 2)
}

export function byte2bits(byte: number)
{
  return byte.toString(2).padStart(8, "0")
}

export function mapPins(byte: number | string, pinMap: PinMap)
{
	const byteString = typeof byte == "string" ? byte : byte2bits(byte)
	return bits2byte(pinMap.map(i => byteString[i]).join(""))
}

function getVariation(varMap: VariationMap, varKeys: string[])
{
  for (const key of varKeys)
  {
    if (key in varMap) return varMap[key]
  }
  if (varKeys.includes("*"))
  {
    return Object.entries(varMap)[0][1]
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

type InternalChar = {
  chr: string
  byte?: number
  var?: VariationMap
}

type CharMap = { [key: string]: InternalChar }

export default class SevenSegmentScript
{
  private instanceOptions: Required<InstanceOptions>
  private charMap: CharMap

  constructor(options?: InstanceOptions)
  {
    this.instanceOptions =
    {
      pinMap: [0,1,2,3,4,5,6,7],
      startCharCode: 0,
      characters: libChars,
      unknownCharacterMap: 0b00000001,
      locales: [],
      variationKeys: [],
      improveNumbers: true,
      numberDecimalSeparator: ".",
      numberGroupSeparator: ",",
      ...options,
    }

    this.charMap = Object.fromEntries(
      this.instanceOptions.characters.map(char => [char.chr, <InternalChar> {
        chr: char.chr,
        byte: char.map ? bits2byte(char.map) : undefined,
        var: char.var
      }]))
  }

  public static forDsegFont(options?: InstanceOptions)
  {
    return new this({
      // default reversed for DSEG 7-segment font
      pinMap: [7,6,5,4,3,2,1,0],
      // used by the DSEG 7-segment font (at least v0.5beta1:
      // https://github.com/keshikan/DSEG/releases/tag/v0.50beta1)
      startCharCode: 0x2800,
      ...options
    })
  }

  public toBytes(text: string, options?: FunctionOptions)
  {
    const opts: Required<InstanceOptions> =
    {
      ...this.instanceOptions,
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

    // Replace chrs in text with variations
    for (let c=0; c<splitText.length; c++)
    {
      let chr = splitText[c]
      // skip mod char
      if (chr == decimalPointModChar) continue
      let char = this.charMap[chr]
      if (!char)
      {
        // remove diacritics if possible and
        // check if normalised char is in map
        chr = splitText[c] = getNormalizedChr(chr) + decimalPointModChar
        char = this.charMap[chr]
      }
      if (char && char.var)
      {
        const variation = getVariation(char.var, variationKeys)
        if (variation)
        {
          if (typeof variation == 'string')
          {
            splitText[c] = variation
          }
          else
          {
            const index =
              (c+1 < splitText.length && isLowerCase(splitText[c+1])) ? 1 : 0
            splitText[c] = variation[index]
          }
        }
        else if(!char.byte)
        {
          splitText[c] = getNormalizedChr(chr) + decimalPointModChar
        }
      }
    }

    // convert text to 7s bytes
    const bytes: number[] = []
    splitText.join("").split('').forEach(chr =>
    {
      // add dec point to previous char if there is one,
      // otherwise append it
      if (chr == decimalPointModChar)
      {
        if (bytes.length)
        {
          const lastByte = bytes[bytes.length-1]
          // check if dec point is already set
          if (!(lastByte & decimalPointByte))
            bytes[bytes.length-1] += decimalPointByte
        }
        else
        {
          bytes.push(decimalPointByte)
        }
        return
      }

      // append unknown char if not mapped
      const char = this.charMap[chr]
      if (!char || typeof char.byte !== "number")
      {
        bytes.push(opts.unknownCharacterMap)
        return
      }

      const byte = char.byte
      bytes.push(byte)
    })

    // map pins
    if (opts.pinMap)
    {
      for (let i=0; i<bytes.length; i++)
      {
        bytes[i] = mapPins(bytes[i], opts.pinMap)
      }
    }

    return new Uint8Array(bytes)
  }

  public toByteString(
    text: string | number[] | Uint8Array,
    options?: FunctionOptions)
  {
    const opts: Required<InstanceOptions> =
    {
      ...this.instanceOptions,
      ...options
    }

    const bytes = typeof text === 'string'
      ? this.toBytes(text, opts)
      : text

    const chars: string[] = []
    for (let i=0; i<bytes.length; i++)
    {
      chars.push(String.fromCharCode(opts.startCharCode + bytes[i]))
    }
    return chars.join("")
  }
}
