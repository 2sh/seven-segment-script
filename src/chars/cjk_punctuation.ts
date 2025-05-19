import type { Char } from "../types"

const chars: Char[] = [
  { chr: "〇", pin: 0b11111100 },
  { chr: "〈", pin: 0b10000110 },
  { chr: "〉", pin: 0b11000010 },
  { chr: "「", pin: 0b10000100 },
  { chr: "」", pin: 0b01000010 },
  { chr: "【", pin: 0b10000110 },
  { chr: "】", pin: 0b11000010 },
  { chr: "〒", pin: 0b10100010 },

  { chr: "〝", pin: 0b01000100 },
  { chr: "〞", pin: 0b01000100 },
  { chr: "〟", pin: 0b00101000 },

  { chr: "　", pin: " " },
  { chr: "、", pin: "," },
  { chr: "。", pin: "." },
  { chr: "〃", pin: "\"" },
  { chr: "《", pin: "〈〈" },
  { chr: "》", pin: "〉〉" },
  { chr: "『", pin: "「「" },
  { chr: "』", pin: "」」" },
  { chr: "〓", pin: "=" },

  { chr: "｛", pin: "{" },
  { chr: "｝", pin: "}" },
  { chr: "（", pin: "(" },
  { chr: "）", pin: ")" },
  { chr: "［", pin: "[" },
  { chr: "］", pin: "]" },
  { chr: "，", pin: "、" },
  { chr: "゠", pin: "=" },
  { chr: "＝", pin: "=" },
  { chr: "：", pin: ":" },
  { chr: "！", pin: "!" },
  { chr: "？", pin: "?" },
]
export default chars
