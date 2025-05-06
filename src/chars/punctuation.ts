import type { Char } from "../types"

const chars: Char[] = [
  { chr: "\x01", pin: "00000010", justify: 'center', visible: 'never' }, // start of heading: center text
  { chr: "\x02", pin: "00001100", justify: 'left', visible: 'never' }, // start of text: left justify
  { chr: "\x03", pin: "01100000", justify: 'right', visible: 'never' }, // end of text: right justify

  { chr: "\t", var: { _: "  " } }, // tab
  { chr: "\n", pin: "00000000", break: 'line', visible: 'hide-on-break' }, // line feed / new line
  { chr: "\r", pin: "00001010", visible: 'never' }, // carriage return

  { chr: "\x1E", pin: "00000001" }, // record separator
  { chr: "\x1F", pin: "00000001", dp: true }, // unit separator

  // Basic Latin
  { chr: " ", pin: "00000000", break: 'soft', visible: 'hide-on-break' }, // space
  { chr: "!", pin: "01010000" },
  { chr: '"', pin: "01000100" },
  { chr: "#", pin: "10010010" },
  { chr: "$", pin: "10110100" },
  { chr: "%", pin: "01001010" },
  { chr: "&", pin: "11111010" },
  { chr: "'", pin: "00000100" },
  { chr: "(", pin: "10000100" },
  { chr: ")", pin: "11000000" },
  { chr: "*", pin: "01000000" },
  { chr: "+", pin: "01100010" },
  { chr: ",", pin: "00001000" },
  { chr: "-", pin: "00000010", break: 'soft' }, // minus-hyphen
  { chr: ".", pin: "00010000" },
  { chr: "/", pin: "01001000" },
  // 0-9
  { chr: ":", pin: "10010000" },
  { chr: ";", pin: "10001000" },
  { chr: "<", pin: "10000110" },
  { chr: "=", pin: "10000010" },
  { chr: ">", pin: "11000010" },
  { chr: "?", pin: "11010000" },
  { chr: "@", pin: "11011110" },
  // A-Z
  { chr: "[", pin: "10011100" },
  { chr: "\\", pin: "00100100" },
  { chr: "]", pin: "11110000" },
  { chr: "^", pin: "11000100" },
  { chr: "_", pin: "00010000" },
  { chr: "`", pin: "01000000" },
  // a-z
  { chr: "{", pin: "01100010" },
  { chr: "|", pin: "00001100" },
  { chr: "}", pin: "00001110" },
  { chr: "~", pin: "01000010" },

  // 0x00A1 - 0x00BF (Latin-1 Supplement)
  { chr: "\u00A0", pin: "00000000" }, // non-breaking space
  { chr: "¡", pin: "00010100" },
  { chr: "¢", pin: "10010110" },
  { chr: "£", pin: "00011110" },
  { chr: "¥", pin: "01100110" },
  { chr: "¤", pin: "11000110" },
  { chr: "¦", pin: "00001100" },
  { chr: "§", pin: "10110100" },
  { chr: "¨", pin: "01000100" },
  { chr: "©", pin: "10010110" },
  { chr: "ª", pin: "11000010" },
  { chr: "¬", pin: "00100010" },
  { chr: "\u00AD", pin: "00000010", break: 'soft', visible: 'show-on-break' }, // soft-hyphen
  { chr: "®", pin: "10001010" },
  { chr: "¯", pin: "10000000" },
  { chr: "°", pin: "11000110" },
  { chr: "±", pin: "01110010" },
  { chr: "²", pin: "11001010" },
  { chr: "³", pin: "11100010" },
  { chr: "´", pin: "00000100" },
  { chr: "µ", pin: "01001110" },
  { chr: "¶", pin: "11100110" },
  { chr: "·", pin: "00000010" },
  { chr: "¸", pin: "00110000" },
  { chr: "¹", pin: "01000000" },
  { chr: "º", pin: "11000110" },
  { chr: "¿", pin: "10010100" },
  { chr: "×", pin: "00101000" },
  { chr: "÷", pin: "00100010" },

  { chr: "¼", var: { _: "1/4" } },
  { chr: "½", var: { _: "1/2" } },
  { chr: "¾", var: { _: "3/4" } },
  { chr: "«", var: { _: "<<" } },
  { chr: "»", var: { _: ">>" } },

  // 0x2010 - 0x203E (General Punctuation)
  { chr: "\u2000", var: { _: " " } }, // en quad
  { chr: "\u2001", var: { _: " " } }, // em quad
  { chr: "\u2002", var: { _: " " } }, // en space
  { chr: "\u2003", var: { _: " " } }, // em space
  { chr: "\u2004", var: { _: " " } }, // three-per-em space
  { chr: "\u2005", var: { _: " " } }, // four-per-em space
  { chr: "\u2006", var: { _: " " } }, // six-per-em space
  { chr: "\u2007", var: { _: " " } }, // figure space
  { chr: "\u2008", var: { _: " " } }, // punctuation space
  { chr: "\u2009", var: { _: " " } }, // thin space
  { chr: "\u200A", var: { _: " " } }, // hair space
  { chr: "\u200B", pin: "00000000", break: 'soft', visible: 'never' }, // zero-width space
  { chr: "\u200C", pin: "00000000", visible: 'never' }, // zero-width non-joiner
  { chr: "\u200D", pin: "00000000", visible: 'never' }, // zero-width joiner
  { chr: "\u202F", var: { _: "\u00A0" } }, // narrow no-brake space
  { chr: "\u205F", var: { _: " " } }, // medium mathematical space
  { chr: "‐", pin: "00000010", break: 'soft' }, // hyphen
  { chr: "‑", pin: "00000010" }, // non-breaking hyphen
  { chr: "‒", pin: "00000010" },
  { chr: "–", pin: "00000010" },
  { chr: "‖", pin: "01101100" },
  { chr: "‗", pin: "00010010" },
  { chr: "‘", pin: "01000000" },
  { chr: "’", pin: "00000100" },
  { chr: "‚", pin: "00100000" },
  { chr: "‛", pin: "00000100" },
  { chr: "“", pin: "01000100" },
  { chr: "”", pin: "01000100" },
  { chr: "„", pin: "00101000" },
  { chr: "‟", pin: "01000100" },
  { chr: "†", pin: "00001110" },
  { chr: "‡", pin: "00011110" },
  { chr: "•", pin: "00000010" },
  { chr: "‣", pin: "00000010" },
  { chr: "․", pin: "00010000" },
  { chr: "‧", pin: "00000010" },
  { chr: "′", pin: "00000100" },
  { chr: "‵", pin: "01000000" },
  { chr: "‸", pin: "00101010" },
  { chr: "‹", pin: "10000110" },
  { chr: "›", pin: "11000010" },
  { chr: "※", pin: "10010010" },
  { chr: "‾", pin: "10000000" },

  { chr: "—", var: { _: "--" } },
  { chr: "―", var: { _: "--" } },
  { chr: "‥", var: { _: "․․" } },
  { chr: "…", var: { _: "․․․" } },
  { chr: "‰", var: { _: "%o" } },
  { chr: "‱", var: { _: "%oo" } },
  { chr: "″", var: { _: "′′" } },
  { chr: "‴", var: { _: "′′′" } },
  { chr: "‶", var: { _: "‵‵" } },
  { chr: "‷", var: { _: "‵‵‵" } },
  { chr: "‼", var: { _: "!!" } },
  { chr: "‽", var: { _: "!?" } },

  { chr: "ǀ", var: { _: "|" } },
  { chr: "ǁ", var: { _: "‖" } },
  { chr: "ǂ", var: { _: "‡" } },
  { chr: "ǃ", var: { _: "!" } },
]
export default chars
