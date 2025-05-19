/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export type Variation = string | [string, string]
export type Pin = number | Variation
export type PinMap = {[key: string]: Pin}

export type CharBreak =
    'line'
  | 'soft'
  //| 'never'
export type CharVisible =
    // default
    // use: hard-hyphen with soft break
  //  'always'
    // use: Zero-width space with soft break
  'never'
    // hidden if unbroken
    // use: soft-hyphen with soft break
  | 'show-on-break'
    // visible if unbroken
    // use: newline with hard break
  | 'hide-on-break'

export type Align =
  'center'
  | 'left'
  | 'right'

export interface Char {
  chr: string
  pin?: PinMap | Pin
  dp?: boolean
  break?: CharBreak
  visible?: CharVisible
  align?: Align
  // charAfterBreak?: boolean
}

export interface TextElement {
  pin: number,
  break?: CharBreak
  visible?: CharVisible
  align?: Align
}

export type Pins =
  [number, number, number, number, number, number, number, number]

export interface FunctionOptions
{
  mods?: string[],
  enhanceNumbers?: boolean,
  numberDecimalSeparator?: string,
  numberGroupSeparator?: string,
}

export interface InstanceOptions extends FunctionOptions
{
  characters?: Char[],
}

export interface TextGeneralOptions {
  pinMap?: Pins | null,
}

export interface TextStringSpecificOptions {
  startCharCode?: number
}

export interface TextStringOptions extends
  TextStringSpecificOptions, TextGeneralOptions {}

export type WrapOptions = {
  length?: number
  align?: Align
  justify?: boolean
  justifyLastLine?: boolean
  breakWordAnywhere?: boolean
  breakPin?: number | null
}