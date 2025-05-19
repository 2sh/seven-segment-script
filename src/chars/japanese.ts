import type { Char } from "../types"

/**
 * Katakana mapping by いかづちSqueak
 *   (https://wentwayup.tamaliver.jp/e67936.html)
 */
const chars: Char[] = [
  { chr: "ア", pin: 0b11001000 }, { chr: "あ", pin: "ア" },
  { chr: "イ", pin: 0b01001010 }, { chr: "い", pin: "イ" },
  { chr: "ウ", pin: 0b10101010 }, { chr: "う", pin: "ウ" },
  { chr: "エ", pin: 0b11011010 }, { chr: "え", pin: "エ" },
  { chr: "オ", pin: 0b11101000 }, { chr: "お", pin: "オ" },

  { chr: "カ", pin: 0b00101110 }, { chr: "か", pin: "カ" },
  { chr: "キ", pin: 0b01110010 }, { chr: "き", pin: "キ" },
  { chr: "ク", pin: 0b11100100 }, { chr: "く", pin: "ク" },
  { chr: "ケ", pin: 0b00100110 }, { chr: "け", pin: "ケ" },
  { chr: "コ", pin: 0b11110000 }, { chr: "こ", pin: "コ" },

  { chr: "ガ", pin: "カ゛" }, { chr: "が", pin: "カ゛" },
  { chr: "ギ", pin: "キ゛" }, { chr: "ぎ", pin: "キ゛" },
  { chr: "グ", pin: "ク゛" }, { chr: "ぐ", pin: "ク゛" },
  { chr: "ゲ", pin: "ケ゛" }, { chr: "げ", pin: "ケ゛" },
  { chr: "ゴ", pin: "コ゛" }, { chr: "ご", pin: "コ゛" },

  { chr: "サ", pin: 0b01101110 }, { chr: "さ", pin: "サ" },
  { chr: "シ", pin: 0b00010100 }, { chr: "し", pin: "シ" },
  { chr: "ス", pin: 0b11101010 }, { chr: "す", pin: "ス" },
  { chr: "セ", pin: 0b11011100 }, { chr: "せ", pin: "セ" },
  { chr: "ソ", pin: 0b00110100 }, { chr: "そ", pin: "ソ" },

  { chr: "ザ", pin: "サ゛" }, { chr: "ざ", pin: "サ゛" },
  { chr: "ジ", pin: "シ゛" }, { chr: "じ", pin: "シ゛" },
  { chr: "ズ", pin: "ス゛" }, { chr: "ず", pin: "ス゛" },
  { chr: "ゼ", pin: "セ゛" }, { chr: "ぜ", pin: "セ゛" },
  { chr: "ゾ", pin: "ソ゛" }, { chr: "ぞ", pin: "ソ゛" },

  { chr: "タ", pin: 0b11100110 }, { chr: "た", pin: "タ" },
  { chr: "チ", pin: 0b10001110 }, { chr: "ち", pin: "チ" },
  { chr: "ツ", pin: 0b01010100 }, { chr: "つ", pin: "ツ" },
  { chr: "テ", pin: 0b10001010 }, { chr: "て", pin: "テ" },
  { chr: "ト", pin: 0b00001110 }, { chr: "と", pin: "ト" },

  { chr: "ダ", pin: "タ゛" }, { chr: "だ", pin: "タ゛" },
  { chr: "ヂ", pin: "チ゛" }, { chr: "ぢ", pin: "チ゛" },
  { chr: "ヅ", pin: "ツ゛" }, { chr: "づ", pin: "ツ゛" },
  { chr: "デ", pin: "テ゛" }, { chr: "で", pin: "テ゛" },
  { chr: "ド", pin: "ト゛" }, { chr: "ど", pin: "ト゛" },

  { chr: "ナ", pin: 0b01100010 }, { chr: "な", pin: "ナ" },
  { chr: "ニ", pin: 0b10010000 }, { chr: "に", pin: "ニ" },
  { chr: "ヌ", pin: 0b11101110 }, { chr: "ぬ", pin: "ヌ" },
  { chr: "ネ", pin: 0b11111010 }, { chr: "ね", pin: "ネ" },
  { chr: "ノ", pin: 0b01110000 }, { chr: "の", pin: "ノ" },

  { chr: "ハ", pin: 0b00101100 }, { chr: "は", pin: "ハ" },
  { chr: "ヒ", pin: 0b00011110 }, { chr: "ひ", pin: "ヒ" },
  { chr: "フ", pin: 0b11100000 }, { chr: "ふ", pin: "フ" },
  { chr: "ヘ", pin: 0b11000100 }, { chr: "へ", pin: "ヘ" },
  { chr: "ホ", pin: 0b10101000 }, { chr: "ほ", pin: "ホ" },

  { chr: "バ", pin: "ハ゛" }, { chr: "ば", pin: "ハ゛" },
  { chr: "ビ", pin: "ヒ゛" }, { chr: "び", pin: "ヒ゛" },
  { chr: "ブ", pin: "フ゛" }, { chr: "ぶ", pin: "フ゛" },
  { chr: "ベ", pin: "ヘ゛" }, { chr: "べ", pin: "ヘ゛" },
  { chr: "ボ", pin: "ホ゛" }, { chr: "ぼ", pin: "ホ゛" },

  { chr: "パ", pin: "ハ゜" }, { chr: "ぱ", pin: "ハ゜" },
  { chr: "ピ", pin: "ヒ゜" }, { chr: "ぴ", pin: "ヒ゜" },
  { chr: "プ", pin: "フ゜" }, { chr: "ぷ", pin: "フ゜" },
  { chr: "ペ", pin: "ヘ゜" }, { chr: "ぺ", pin: "ヘ゜" },
  { chr: "ポ", pin: "ホ゜" }, { chr: "ぽ", pin: "ホ゜" },

  { chr: "マ", pin: 0b11010010 }, { chr: "ま", pin: "マ" },
  { chr: "ミ", pin: 0b10010010 }, { chr: "み", pin: "ミ" },
  { chr: "ム", pin: 0b00111100 }, { chr: "む", pin: "ム" },
  { chr: "メ", pin: 0b01101010 }, { chr: "め", pin: "メ" },
  { chr: "モ", pin: 0b10011110 }, { chr: "も", pin: "モ" },

  { chr: "ヤ", pin: 0b11001100 }, { chr: "や", pin: "ヤ" },
  { chr: "ユ", pin: 0b11010000 }, { chr: "ゆ", pin: "ユ" },
  { chr: "ヨ", pin: 0b11110010 }, { chr: "よ", pin: "ヨ" },

  { chr: "ラ", pin: 0b10100010 }, { chr: "ら", pin: "ラ" },
  { chr: "リ", pin: 0b01110100 }, { chr: "り", pin: "リ" },
  { chr: "ル", pin: 0b01101000 }, { chr: "る", pin: "ル" },
  { chr: "レ", pin: 0b00011100 }, { chr: "れ", pin: "レ" },
  { chr: "ロ", pin: 0b11111100 }, { chr: "ろ", pin: "ロ" },

  { chr: "ワ", pin: 0b11110100 }, { chr: "わ", pin: "ワ" },
  { chr: "ヰ", pin: 0b01111010 }, { chr: "ゐ", pin: "ヰ" },
  { chr: "ヱ", pin: 0b11011000 }, { chr: "ゑ", pin: "ヱ" },
  { chr: "ヲ", pin: 0b11100010 }, { chr: "を", pin: "ヲ" },

  { chr: "ン", pin: 0b10110000 }, { chr: "ん", pin: "ン" },

  { chr: "ァ", pin: 0b00100010 }, { chr: "ぁ", pin: "ァ" },
  { chr: "ィ", pin: 0b00100000 }, { chr: "ぃ", pin: "ィ" },
  { chr: "ゥ", pin: 0b00101010 }, { chr: "ぅ", pin: "ゥ" },
  { chr: "ェ", pin: 0b00011010 }, { chr: "ぇ", pin: "ェ" },
  { chr: "ォ", pin: 0b00110000 }, { chr: "ぉ", pin: "ォ" },

  { chr: "ャ", pin: 0b00001010 }, { chr: "ゃ", pin: "ャ" },
  { chr: "ュ", pin: 0b00010010 }, { chr: "ゅ", pin: "ュ" },
  { chr: "ョ", pin: 0b00110010 }, { chr: "ょ", pin: "ョ" },

  { chr: "ッ", pin: 0b00101000 }, { chr: "っ", pin: "ッ" },

  { chr: "ヮ", pin: 0b00111010 }, { chr: "ゎ", pin: "ヮ" },

  { chr: "ヴ", pin: "ウ゛" },
  { chr: "ヷ", pin: "ワ゛" },
  { chr: "ヸ", pin: "ヰ゛" },
  { chr: "ヹ", pin: "ヱ゛" },
  { chr: "ヺ", pin: "ヲ゛" },
  { chr: "ヾ", pin: "ヽ゛" },

  { chr: "゛", pin: 0b01000100 },
  { chr: "゜", pin: 0b11000110 },
  { chr: "ー", pin: 0b00000010 },
  { chr: "・", pin: 0b00000100 },
  { chr: "ヽ", pin: 0b11000000 },
  { chr: "ヿ", pin: 0b11100000 },
]
export default chars
