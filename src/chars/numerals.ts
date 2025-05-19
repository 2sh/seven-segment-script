import type { Char } from "../types"

const chars: Char[] = [
  { chr: "0", pin: 0b11111100 },
  { chr: "1", pin: 0b01100000 },
  { chr: "2", pin: 0b11011010 },
  { chr: "3", pin: 0b11110010 },
  { chr: "4", pin: 0b01100110 },
  { chr: "5", pin: 0b10110110 },
  { chr: "6", pin: { _: 0b10111110, five_segment_six: 0b00111110 } },
  { chr: "7", pin: { _: 0b11100000, four_segment_seven: 0b11100100 } },
  { chr: "8", pin: 0b11111110 },
  { chr: "9", pin: { _: 0b11110110, five_segment_nine: 0b11100110 } },

  // Dozenal 10 and 11
  { chr: "↊", pin: { _: 0b10001100, hammond_ten: 0b01011010 } },
  { chr: "↋", pin: { _: 0b10011110, hammond_elf: 0b00011110 } },

  // Roman
  { chr: "Ⅰ", pin: 0b00001100 },
  { chr: "Ⅱ", pin: 0b11111100 },
  { chr: "Ⅲ", pin: "ⅡⅠ" },
  { chr: "Ⅳ", pin: "IⅤ" },
  { chr: "Ⅴ", pin: 0b01001110 },
  { chr: "Ⅵ", pin: "ⅤⅠ" },
  { chr: "Ⅶ", pin: "ⅤⅡ" },
  { chr: "Ⅷ", pin: "ⅤⅡⅠ" },
  { chr: "Ⅸ", pin: "IⅩ" },
  { chr: "Ⅹ", pin: 0b00100110 },
  { chr: "Ⅺ", pin: "ⅩⅠ" },
  { chr: "Ⅻ", pin: "ⅩⅡ" },
  { chr: "Ⅼ", pin: "L" },
  { chr: "Ⅽ", pin: "C" },
  { chr: "Ⅾ", pin: "D" },
  { chr: "Ⅿ", pin: "M" },

  // Roman small
  { chr: "ⅰ", pin: 0b10001000 },
  { chr: "ⅱ", pin: 0b10101010 }, // may change
  { chr: "ⅲ", pin: "ⅱⅰ" },
  { chr: "ⅳ", pin: "iⅴ" },
  { chr: "ⅴ", pin: 0b00110000 },
  { chr: "ⅵ", pin: "ⅴⅰ" },
  { chr: "ⅶ", pin: "ⅴⅱ" },
  { chr: "ⅷ", pin: "ⅴⅱⅰ" },
  { chr: "ⅸ", pin: "iⅹ" },
  { chr: "ⅹ", pin: 0b00010010 },
  { chr: "ⅺ", pin: "ⅹⅰ" },
  { chr: "ⅻ", pin: "ⅹⅱ" },
  { chr: "ⅼ", pin: "l" },
  { chr: "ⅽ", pin: "c" },
  { chr: "ⅾ", pin: "d" },
  { chr: "ⅿ", pin: "m" },

  // CJK
  { chr: "一", pin: 0b00000010 },
  { chr: "二", pin: 0b10010000 },
  { chr: "三", pin: 0b10010010 },
  { chr: "四", pin: 0b11111100 },
  { chr: "五", pin: 0b10111110 },
  { chr: "六", pin: 0b10101000 },
  { chr: "七", pin: 0b00011110 },
  { chr: "八", pin: 0b11101000 },
  { chr: "九", pin: 0b00101110 },
  { chr: "十", pin: 0b01100010 },
  { chr: "百", pin: 0b11111110 },
  { chr: "千", pin: 0b11100010 },
  { chr: "万", pin: 0b10101110 },
]
export default chars
