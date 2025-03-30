export interface ByteMap
{
  [character: string]: number,
}

export type Variation = string | [string, string]
export type VariationMap = {[key: string]: Variation}

export type Char = {
  chr: string
  map?: string
  var?: VariationMap
}

export type PinMap = [number, number, number, number, number, number, number, number]

export interface FunctionOptions
{
  pinMap?: PinMap | null,
  startCharCode?: number,
  unknownCharacterMap?: number,
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
