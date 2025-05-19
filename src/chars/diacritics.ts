import type { Char } from "../types"

const chars: Char[] = [
  { chr: "̃", pin: 0b01000010 },
  { chr: "̄", pin: 0b10000000 },
  { chr: "̀", pin: 0b00000100 },
  { chr: "`", pin: 0b00000100 },
  { chr: "́", pin: 0b01000000 },
  { chr: "´", pin: 0b01000000 },
  { chr: "¨", pin: 0b01000100 },
  { chr: "̂", pin: 0b11000100 },
  { chr: "̊", pin: 0b11000110 },
  { chr: "̧", pin: 0b01000010 },
  { chr: "̆", pin: 0b01000110 },
  { chr: "̨", pin: 0b00000110 },
  { chr: "̇", pin: 0b01000000 },
  { chr: "̌", pin: 0b01000110 },
  { chr: "̋", pin: 0b01000010 },
  { chr: "̛", pin: 0b01000010 },
  { chr: "̏", pin: 0b00000110 },
  { chr: "̑", pin: 0b11000100 },
  { chr: "̦", pin: 0b00000100 },

  { chr: "̈", pin: "\u0300\u0301" },
]
export default chars
