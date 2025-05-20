import type { Char } from "../types"

const chars: Char[] = [
  { chr: "\x01", pin: 0b00000010, align: 'center', visible: 'never' }, // start of heading: center text
  { chr: "\x02", pin: 0b00001100, align: 'left', visible: 'never' }, // start of text: left align
  { chr: "\x03", pin: 0b01100000, align: 'right', visible: 'never' }, // end of text: right align

  { chr: "\t", pin: "  " }, // tab
  { chr: "\n", pin: 0b00000000, break: 'line', visible: 'hide-on-break' }, // line feed / new line
  { chr: "\r", pin: 0b00001010, visible: 'never' }, // carriage return

  { chr: "\x1E", pin: 0b00000001 }, // record separator
  { chr: "\x1F", pin: 0b00000001, dp: true }, // unit separator

  // Basic Latin
  { chr: " ", pin: 0b00000000, break: 'soft', visible: 'hide-on-break' }, // space
  { chr: "!", pin: 0b01010000 },
  { chr: '"', pin: 0b01000100 },
  { chr: "#", pin: 0b10010010 },
  { chr: "$", pin: 0b10110100 },
  { chr: "%", pin: 0b01001010 },
  { chr: "&", pin: 0b11111010 },
  { chr: "'", pin: 0b00000100 },
  { chr: "(", pin: 0b10000100 },
  { chr: ")", pin: 0b11000000 },
  { chr: "*", pin: 0b01000000 },
  { chr: "+", pin: 0b01100010 },
  { chr: ",", pin: 0b00001000 },
  { chr: "-", pin: 0b00000010, break: 'soft' }, // minus-hyphen
  { chr: ".", pin: 0b00010000 },
  { chr: "/", pin: 0b01001000 },
  // 0-9
  { chr: ":", pin: 0b10010000 },
  { chr: ";", pin: 0b10001000 },
  { chr: "<", pin: 0b10000110 },
  { chr: "=", pin: 0b10000010 },
  { chr: ">", pin: 0b11000010 },
  { chr: "?", pin: 0b11010000 },
  { chr: "@", pin: 0b11011110 },
  // A-Z
  { chr: "[", pin: 0b10000110 },
  { chr: "\\", pin: 0b00100100 },
  { chr: "]", pin: 0b11000010 },
  { chr: "^", pin: 0b11000100 },
  { chr: "_", pin: 0b00010000 },
  { chr: "`", pin: 0b01000000 },
  // a-z
  { chr: "{", pin: 0b01000010 },
  { chr: "|", pin: 0b00001100 },
  { chr: "}", pin: 0b00000110 },
  { chr: "~", pin: 0b01000010 },

  // 0x00A1 - 0x00BF (Latin-1 Supplement)
  { chr: "\u00A0", pin: 0b00000000 }, // non-breaking space
  { chr: "¡", pin: 0b00010100 },
  { chr: "¢", pin: 0b10010110 },
  { chr: "£", pin: 0b00011110 },
  { chr: "¥", pin: 0b01100110 },
  { chr: "¤", pin: 0b11000110 },
  { chr: "¦", pin: 0b00001100 },
  { chr: "§", pin: 0b10110100 },
  { chr: "¨", pin: 0b01000100 },
  { chr: "©", pin: 0b10010110 },
  { chr: "ª", pin: 0b11000010 },
  { chr: "¬", pin: 0b00100010 },
  { chr: "\u00AD", pin: 0b00000010, break: 'soft', visible: 'show-on-break' }, // soft-hyphen
  { chr: "®", pin: 0b10001010 },
  { chr: "¯", pin: 0b10000000 },
  { chr: "°", pin: 0b11000110 },
  { chr: "±", pin: 0b01110010 },
  { chr: "²", pin: 0b11001010 },
  { chr: "³", pin: 0b11100010 },
  { chr: "´", pin: 0b00000100 },
  { chr: "µ", pin: 0b01001110 },
  { chr: "¶", pin: 0b11100110 },
  { chr: "·", pin: 0b00000010 },
  { chr: "¸", pin: 0b00110000 },
  { chr: "¹", pin: 0b01000000 },
  { chr: "º", pin: 0b11000110 },
  { chr: "¿", pin: 0b10010100 },
  { chr: "×", pin: 0b00101000 },
  { chr: "÷", pin: 0b00100010 },

  { chr: "¼", pin: "1/4" },
  { chr: "½", pin: "1/2" },
  { chr: "¾", pin: "3/4" },
  { chr: "«", pin: "<<" },
  { chr: "»", pin: ">>" },

  // 0x2010 - 0x203E (General Punctuation)
  { chr: "\u2000", pin: " " }, // en quad
  { chr: "\u2001", pin: " " }, // em quad
  { chr: "\u2002", pin: " " }, // en space
  { chr: "\u2003", pin: " " }, // em space
  { chr: "\u2004", pin: " " }, // three-per-em space
  { chr: "\u2005", pin: " " }, // four-per-em space
  { chr: "\u2006", pin: " " }, // six-per-em space
  { chr: "\u2007", pin: " " }, // figure space
  { chr: "\u2008", pin: " " }, // punctuation space
  { chr: "\u2009", pin: " " }, // thin space
  { chr: "\u200A", pin: " " }, // hair space
  { chr: "\u200B", pin: 0b00000000, break: 'soft', visible: 'never' }, // zero-width space
  { chr: "\u200C", pin: 0b00000000, visible: 'never' }, // zero-width non-joiner
  { chr: "\u200D", pin: 0b00000000, visible: 'never' }, // zero-width joiner
  { chr: "\u202F", pin: "\u00A0" }, // narrow no-brake space
  { chr: "\u205F", pin: " " }, // medium mathematical space
  { chr: "‐", pin: 0b00000010, break: 'soft' }, // hyphen
  { chr: "‑", pin: 0b00000010 }, // non-breaking hyphen
  { chr: "\u2212", pin: "‑" }, // mathematical minus
  { chr: "‒", pin: 0b00000010 },
  { chr: "–", pin: 0b00000010 },
  { chr: "‖", pin: 0b01101100 },
  { chr: "‗", pin: 0b00010010 },
  { chr: "‘", pin: 0b01000000 },
  { chr: "’", pin: 0b00000100 },
  { chr: "‚", pin: 0b00100000 },
  { chr: "‛", pin: 0b00000100 },
  { chr: "“", pin: 0b01000100 },
  { chr: "”", pin: 0b01000100 },
  { chr: "„", pin: 0b00101000 },
  { chr: "‟", pin: 0b01000100 },
  { chr: "†", pin: 0b00001110 },
  { chr: "‡", pin: 0b00011110 },
  { chr: "•", pin: 0b00000010 },
  { chr: "‣", pin: 0b00000010 },
  { chr: "․", pin: 0b00010000 },
  { chr: "‧", pin: 0b00000010 },
  { chr: "′", pin: 0b00000100 },
  { chr: "‵", pin: 0b01000000 },
  { chr: "‸", pin: 0b00101010 },
  { chr: "‹", pin: 0b10000110 },
  { chr: "›", pin: 0b11000010 },
  { chr: "※", pin: 0b10010010 },
  { chr: "‾", pin: 0b10000000 },

  { chr: "—", pin: "--" },
  { chr: "―", pin: "--" },
  { chr: "‥", pin: "․․" },
  { chr: "…", pin: "․․․" },
  { chr: "‰", pin: "%o" },
  { chr: "‱", pin: "%oo" },
  { chr: "″", pin: "′′" },
  { chr: "‴", pin: "′′′" },
  { chr: "‶", pin: "‵‵" },
  { chr: "‷", pin: "‵‵‵" },
  { chr: "‼", pin: "!!" },
  { chr: "‽", pin: "!?" },

  { chr: "ǀ", pin: "|" },
  { chr: "ǁ", pin: "‖" },
  { chr: "ǂ", pin: "‡" },
  { chr: "ǃ", pin: "!" },
]
export default chars
