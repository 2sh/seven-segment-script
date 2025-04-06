/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export type Variation = string | [string, string]
export type VariationMap = {[key: string]: Variation}

export type Char = {
  chr: string
  pin?: string
  var?: VariationMap
}

export type Pins =
  [number, number, number, number, number, number, number, number]

export interface FunctionOptions
{
  locales?: string[],
  variationKeys?: string[],
  improveNumbers?: boolean,
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