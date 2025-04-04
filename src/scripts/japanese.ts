import type { Char } from "../types"

/**
 * Katakana mapping by いかづちSqueak
 *   (https://wentwayup.tamaliver.jp/e67936.html)
 */
export default <Char[]> [
  { chr: "ア", pin: "11001000" }, { chr: "あ", var: { _: "ア" } },
  { chr: "イ", pin: "01001010" }, { chr: "い", var: { _: "イ" } },
  { chr: "ウ", pin: "10101010" }, { chr: "う", var: { _: "ウ" } },
  { chr: "エ", pin: "11011010" }, { chr: "え", var: { _: "エ" } },
  { chr: "オ", pin: "11101000" }, { chr: "お", var: { _: "オ" } },

  { chr: "カ", pin: "00101110" }, { chr: "か", var: { _: "カ" } },
  { chr: "キ", pin: "01110010" }, { chr: "き", var: { _: "キ" } },
  { chr: "ク", pin: "11100100" }, { chr: "く", var: { _: "ク" } },
  { chr: "ケ", pin: "00100110" }, { chr: "け", var: { _: "ケ" } },
  { chr: "コ", pin: "11110000" }, { chr: "こ", var: { _: "コ" } },

  { chr: "ガ", var: { _: "カ゛" } }, { chr: "が", var: { _: "カ゛" } },
  { chr: "ギ", var: { _: "キ゛" } }, { chr: "ぎ", var: { _: "キ゛" } },
  { chr: "グ", var: { _: "ク゛" } }, { chr: "ぐ", var: { _: "ク゛" } },
  { chr: "ゲ", var: { _: "ケ゛" } }, { chr: "げ", var: { _: "ケ゛" } },
  { chr: "ゴ", var: { _: "コ゛" } }, { chr: "ご", var: { _: "コ゛" } },

  { chr: "サ", pin: "01101110" }, { chr: "さ", var: { _: "サ" } },
  { chr: "シ", pin: "00010100" }, { chr: "し", var: { _: "シ" } },
  { chr: "ス", pin: "11101010" }, { chr: "す", var: { _: "ス" } },
  { chr: "セ", pin: "11011100" }, { chr: "せ", var: { _: "セ" } },
  { chr: "ソ", pin: "00110100" }, { chr: "そ", var: { _: "ソ" } },

  { chr: "ザ", var: { _: "サ゛" } }, { chr: "ざ", var: { _: "サ゛" } },
  { chr: "ジ", var: { _: "シ゛" } }, { chr: "じ", var: { _: "シ゛" } },
  { chr: "ズ", var: { _: "ス゛" } }, { chr: "ず", var: { _: "ス゛" } },
  { chr: "ゼ", var: { _: "セ゛" } }, { chr: "ぜ", var: { _: "セ゛" } },
  { chr: "ゾ", var: { _: "ソ゛" } }, { chr: "ぞ", var: { _: "ソ゛" } },

  { chr: "タ", pin: "11100110" }, { chr: "た", var: { _: "タ" } },
  { chr: "チ", pin: "10001110" }, { chr: "ち", var: { _: "チ" } },
  { chr: "ツ", pin: "01010100" }, { chr: "つ", var: { _: "ツ" } },
  { chr: "テ", pin: "10001010" }, { chr: "て", var: { _: "テ" } },
  { chr: "ト", pin: "00001110" }, { chr: "と", var: { _: "ト" } },

  { chr: "ダ", var: { _: "タ゛" } }, { chr: "だ", var: { _: "タ゛" } },
  { chr: "ヂ", var: { _: "チ゛" } }, { chr: "ぢ", var: { _: "チ゛" } },
  { chr: "ヅ", var: { _: "ツ゛" } }, { chr: "づ", var: { _: "ツ゛" } },
  { chr: "デ", var: { _: "テ゛" } }, { chr: "で", var: { _: "テ゛" } },
  { chr: "ド", var: { _: "ト゛" } }, { chr: "ど", var: { _: "ト゛" } },

  { chr: "ナ", pin: "01100010" }, { chr: "な", var: { _: "ナ" } },
  { chr: "ニ", pin: "10010000" }, { chr: "に", var: { _: "ニ" } },
  { chr: "ヌ", pin: "11101110" }, { chr: "ぬ", var: { _: "ヌ" } },
  { chr: "ネ", pin: "11111010" }, { chr: "ね", var: { _: "ネ" } },
  { chr: "ノ", pin: "01110000" }, { chr: "の", var: { _: "ノ" } },

  { chr: "ハ", pin: "00101100" }, { chr: "は", var: { _: "ハ" } },
  { chr: "ヒ", pin: "00011110" }, { chr: "ひ", var: { _: "ヒ" } },
  { chr: "フ", pin: "11100000" }, { chr: "ふ", var: { _: "フ" } },
  { chr: "ヘ", pin: "11000100" }, { chr: "へ", var: { _: "ヘ" } },
  { chr: "ホ", pin: "10101000" }, { chr: "ほ", var: { _: "ホ" } },

  { chr: "バ", var: { _: "ハ゛" } }, { chr: "ば", var: { _: "ハ゛" } },
  { chr: "ビ", var: { _: "ヒ゛" } }, { chr: "び", var: { _: "ヒ゛" } },
  { chr: "ブ", var: { _: "フ゛" } }, { chr: "ぶ", var: { _: "フ゛" } },
  { chr: "ベ", var: { _: "ヘ゛" } }, { chr: "べ", var: { _: "ヘ゛" } },
  { chr: "ボ", var: { _: "ホ゛" } }, { chr: "ぼ", var: { _: "ホ゛" } },

  { chr: "パ", var: { _: "ハ゜" } }, { chr: "ぱ", var: { _: "ハ゜" } },
  { chr: "ピ", var: { _: "ヒ゜" } }, { chr: "ぴ", var: { _: "ヒ゜" } },
  { chr: "プ", var: { _: "フ゜" } }, { chr: "ぷ", var: { _: "フ゜" } },
  { chr: "ペ", var: { _: "ヘ゜" } }, { chr: "ぺ", var: { _: "ヘ゜" } },
  { chr: "ポ", var: { _: "ホ゜" } }, { chr: "ぽ", var: { _: "ホ゜" } },

  { chr: "マ", pin: "11010010" }, { chr: "ま", var: { _: "マ" } },
  { chr: "ミ", pin: "10010010" }, { chr: "み", var: { _: "ミ" } },
  { chr: "ム", pin: "00111100" }, { chr: "む", var: { _: "ム" } },
  { chr: "メ", pin: "01101010" }, { chr: "め", var: { _: "メ" } },
  { chr: "モ", pin: "10011110" }, { chr: "も", var: { _: "モ" } },

  { chr: "ヤ", pin: "11001100" }, { chr: "や", var: { _: "ヤ" } },
  { chr: "ユ", pin: "11010000" }, { chr: "ゆ", var: { _: "ユ" } },
  { chr: "ヨ", pin: "11110010" }, { chr: "よ", var: { _: "ヨ" } },

  { chr: "ラ", pin: "10100010" }, { chr: "ら", var: { _: "ラ" } },
  { chr: "リ", pin: "01110100" }, { chr: "り", var: { _: "リ" } },
  { chr: "ル", pin: "01101000" }, { chr: "る", var: { _: "ル" } },
  { chr: "レ", pin: "00011100" }, { chr: "れ", var: { _: "レ" } },
  { chr: "ロ", pin: "11111100" }, { chr: "ろ", var: { _: "ロ" } },

  { chr: "ワ", pin: "11110100" }, { chr: "わ", var: { _: "ワ" } },
  { chr: "ヰ", pin: "01111010" }, { chr: "ゐ", var: { _: "ヰ" } },
  { chr: "ヱ", pin: "11011000" }, { chr: "ゑ", var: { _: "ヱ" } },
  { chr: "ヲ", pin: "11100010" }, { chr: "を", var: { _: "ヲ" } },

  { chr: "ン", pin: "10110000" }, { chr: "ん", var: { _: "ン" } },

  { chr: "ァ", pin: "00100010" }, { chr: "ぁ", var: { _: "ァ" } },
  { chr: "ィ", pin: "00100000" }, { chr: "ぃ", var: { _: "ィ" } },
  { chr: "ゥ", pin: "00101010" }, { chr: "ぅ", var: { _: "ゥ" } },
  { chr: "ェ", pin: "00011010" }, { chr: "ぇ", var: { _: "ェ" } },
  { chr: "ォ", pin: "00110000" }, { chr: "ぉ", var: { _: "ォ" } },

  { chr: "ャ", pin: "00001010" }, { chr: "ゃ", var: { _: "ャ" } },
  { chr: "ュ", pin: "00010010" }, { chr: "ゅ", var: { _: "ュ" } },
  { chr: "ョ", pin: "00110010" }, { chr: "ょ", var: { _: "ョ" } },

  { chr: "ッ", pin: "00101000" }, { chr: "っ", var: { _: "ッ" } },

  { chr: "ヮ", pin: "00111010" }, { chr: "ゎ", var: { _: "ヮ" } },

  { chr: "ヴ", var: { _: "ウ゛" } },
  { chr: "ヷ", var: { _: "ワ゛" } },
  { chr: "ヸ", var: { _: "ヰ゛" } },
  { chr: "ヹ", var: { _: "ヱ゛" } },
  { chr: "ヺ", var: { _: "ヲ゛" } },
  { chr: "ヾ", var: { _: "ヽ゛" } },

  { chr: "゛", pin: "01000100" },
  { chr: "゜", pin: "11000110" },
  { chr: "ー", pin: "00000010" },
  { chr: "・", pin: "00000100" },
  { chr: "ヽ", pin: "11000000" },
  { chr: "ヿ", pin: "11100000" },
]
