import type { Char } from "../types"

export default <Char[]> [
  { chr: "〇", pin: "11111100" },
  { chr: "〈", pin: "01100010" },
  { chr: "〉", pin: "00001110" },
  { chr: "「", pin: "10001100" },
  { chr: "」", pin: "01110000" },
  { chr: "【", pin: "10000110" },
  { chr: "】", pin: "11000010" },
  { chr: "〒", pin: "10100010" },

  { chr: "〝", pin: "01000100" },
  { chr: "〞", pin: "01000100" },
  { chr: "〟", pin: "00101000" },

  { chr: "　", var: { _: " " } },
  { chr: "、", var: { _: "," } },
  { chr: "。", var: { _: "." } },
  { chr: "〃", var: { _: "\"" } },
  { chr: "《", var: { _: "〈〈" } },
  { chr: "》", var: { _: "〉〉" } },
  { chr: "『", var: { _: "「「" } },
  { chr: "』", var: { _: "」」" } },
  { chr: "〓", var: { _: "=" } },

  { chr: "｛", var: { _: "{" } },
  { chr: "｝", var: { _: "}" } },
  { chr: "（", var: { _: "(" } },
  { chr: "）", var: { _: ")" } },
  { chr: "［", var: { _: "[" } },
  { chr: "］", var: { _: "]" } },
  { chr: "，", var: { _: "、" } },
  { chr: "゠", var: { _: "=" } },
  { chr: "＝", var: { _: "=" } },
  { chr: "：", var: { _: ":" } },
  { chr: "！", var: { _: "!" } },
  { chr: "？", var: { _: "?" } },
]
