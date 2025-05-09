import type { Char } from "../types"

const chars: Char[] = [
  { chr: "0", pin: "11111100" },
  { chr: "1", pin: "01100000" },
  { chr: "2", pin: "11011010" },
  { chr: "3", pin: "11110010" },
  { chr: "4", pin: "01100110" },
  { chr: "5", pin: "10110110" },
  { chr: "6", pin: "10111110" },
  { chr: "7", pin: "11100100" },
  { chr: "8", pin: "11111110" },
  { chr: "9", pin: "11110110" },

  // Don Hammond's proposal
  // http://www.dozenalsociety.org.uk/basicstuff/hammond.html
  // https://dozenal.org/drupal/content/dsa-symbology-synopsis.html
  { chr: "↊", pin: "01011010" },
  { chr: "↋", pin: "00011110" },

  { chr: "Ⅰ", pin: "00001100" },
  { chr: "Ⅱ", pin: "11111100" },
  { chr: "Ⅲ", var: { _: "ⅡⅠ" } },
  { chr: "Ⅳ", var: { _: "IⅤ" } },
  { chr: "Ⅴ", pin: "01001110" },
  { chr: "Ⅵ", var: { _: "ⅤⅠ" } },
  { chr: "Ⅶ", var: { _: "ⅤⅡ" } },
  { chr: "Ⅷ", var: { _: "ⅤⅡⅠ" } },
  { chr: "Ⅸ", var: { _: "IⅩ" } },
  { chr: "Ⅹ", pin: "00100110" },
  { chr: "Ⅺ", var: { _: "ⅩⅠ" } },
  { chr: "Ⅻ", var: { _: "ⅩⅡ" } },
  { chr: "Ⅼ", var: { _: "L" } },
  { chr: "Ⅽ", var: { _: "C" } },
  { chr: "Ⅾ", var: { _: "D" } },
  { chr: "Ⅿ", var: { _: "M" } },

  { chr: "ⅰ", pin: "10001000" },
  { chr: "ⅱ", pin: "10101010" }, // may change
  { chr: "ⅲ", var: { _: "ⅱⅰ" } },
  { chr: "ⅳ", var: { _: "iⅴ" } },
  { chr: "ⅴ", pin: "00111000" },
  { chr: "ⅵ", var: { _: "ⅴⅰ" } },
  { chr: "ⅶ", var: { _: "ⅴⅱ" } },
  { chr: "ⅷ", var: { _: "ⅴⅱⅰ" } },
  { chr: "ⅸ", var: { _: "iⅹ" } },
  { chr: "ⅹ", pin: "00010010" },
  { chr: "ⅺ", var: { _: "ⅹⅰ" } },
  { chr: "ⅻ", var: { _: "ⅹⅱ" } },
  { chr: "ⅼ", var: { _: "l" } },
  { chr: "ⅽ", var: { _: "c" } },
  { chr: "ⅾ", var: { _: "d" } },
  { chr: "ⅿ", var: { _: "m" } },
]
export default chars
