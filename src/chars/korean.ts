import type { Char } from "../types"

/**
 * Mapping found on: https://ko.wikipedia.org/wiki/7%EC%84%B8%EA%B7%B8%EB%A8%BC%ED%8A%B8_%ED%91%9C%EC%8B%9C_%EC%9E%A5%EC%B9%98
 */
const chars: Char[] = [
  { chr: "ㄱ", pin: 0b11100000 }, { chr: "ᄀ", pin: "ㄱ" },
  { chr: "ㄴ", pin: 0b00011100 }, { chr: "ᆫ", pin: "ㄴ" },
  { chr: "ㄷ", pin: 0b10011100 }, { chr: "ᄃ", pin: "ㄷ" },
  { chr: "ㄹ", pin: 0b11011010 }, { chr: "ᄅ", pin: "ㄹ" },
  { chr: "ㅁ", pin: 0b11111100 }, { chr: "ᆷ", pin: "ㅁ" },
  { chr: "ㅂ", pin: 0b01111110 }, { chr: "ᄇ", pin: "ㅂ" },
  { chr: "ㅅ", pin: 0b11101100 }, { chr: "ᄉ", pin: "ㅅ" },
  { chr: "ㅇ", pin: 0b00111010 }, { chr: "ᄋ", pin: "ㅇ" },
  { chr: "ㅈ", pin: 0b01101010 }, { chr: "ᄌ", pin: "ㅈ" },
  { chr: "ㅊ", pin: 0b11101010 }, { chr: "ᄎ", pin: "ㅊ" },
  { chr: "ㅋ", pin: 0b11100010 }, { chr: "ᄏ", pin: "ㅋ" },
  { chr: "ㅌ", pin: 0b10011110 }, { chr: "ᄐ", pin: "ㅌ" },
  { chr: "ㅍ", pin: 0b10111000 }, { chr: "ᄑ", pin: "ㅍ" },
  { chr: "ㅎ", pin: 0b10111010 }, { chr: "ᄒ", pin: "ㅎ" },
  { chr: "ㅏ", pin: 0b00001110 }, { chr: "ᅡ", pin: "ㅏ" },
  { chr: "ㅐ", pin: 0b01101110 }, { chr: "ᅢ", pin: "ㅐ" },
  { chr: "ㅑ", pin: 0b10001110 }, { chr: "ᅣ", pin: "ㅑ" },
  { chr: "ㅒ", pin: 0b11101110 }, { chr: "ᅤ", pin: "ㅒ" },
  { chr: "ㅓ", pin: 0b01100010 }, { chr: "ᅥ", pin: "ㅓ" },
  { chr: "ㅕ", pin: 0b11100010 }, { chr: "ᅧ", pin: "ㅕ" },
  { chr: "ㅗ", pin: 0b00011000 }, { chr: "ᅩ", pin: "ㅗ" },
  { chr: "ㅛ", pin: 0b00111000 }, { chr: "ᅭ", pin: "ㅛ" },
  { chr: "ㅜ", pin: 0b00001010 }, { chr: "ᅮ", pin: "ㅜ" },
  { chr: "ㅠ", pin: 0b00101010 }, { chr: "ᅲ", pin: "ㅠ" },
  { chr: "ㅡ", pin: 0b00000010 }, { chr: "ᅳ", pin: "ㅡ" },
  { chr: "ㅢ", pin: 0b01110000 }, { chr: "ᅴ", pin: "ㅢ" },
  { chr: "ㅣ", pin: 0b01100000 }, { chr: "ᅵ", pin: "ㅣ" },

  { chr: "ㄲ", pin: "ㄱ\x1Fㄱ" }, { chr: "ᄁ", pin: "ㄱ\x1Fㄱ" },
  { chr: "ㄸ", pin: "ㄷ\x1Fㄷ" }, { chr: "ᄄ", pin: "ㄷ\x1Fㄷ" },
  { chr: "ㅃ", pin: "ㅂ\x1Fㅂ" }, { chr: "ᄈ", pin: "ㅂ\x1Fㅂ" },
  { chr: "ㅆ", pin: "ㅅ\x1Fㅅ" }, { chr: "ᆺ", pin: "ㅅ\x1Fㅅ" },
  { chr: "ㅉ", pin: "ㅈ\x1Fㅈ" }, { chr: "ᄍ", pin: "ㅈ\x1Fㅈ" },
  { chr: "ㅔ", pin: "ㅓ\x1F|" }, { chr: "ᅦ", pin: "ㅓ\x1F|" },
  { chr: "ㅖ", pin: "ㅕ\x1F|" }, { chr: "ᅨ", pin: "ㅕ\x1F|" },
  { chr: "ㅘ", pin: "ㅗ\x1Fㅏ" }, { chr: "ᅪ", pin: "ㅗ\x1Fㅏ" },
  { chr: "ㅙ", pin: "ㅗ\x1Fㅐ" }, { chr: "ᅫ", pin: "ㅗ\x1Fㅐ" },
  { chr: "ㅚ", pin: "ㅗ\x1F|" }, { chr: "ᅬ", pin: "ㅗ\x1F|" },
  { chr: "ㅝ", pin: "ㅜ\x1Fㅓ" }, { chr: "ᅯ", pin: "ㅜ\x1Fㅓ" },
  { chr: "ㅞ", pin: "ㅜ\x1Fㅐ" }, { chr: "ᅰ", pin: "ㅜ\x1Fㅐ" },
  { chr: "ㅟ", pin: "ㅜ\x1F|" }, { chr: "ᅱ", pin: "ㅜ\x1F|" },
]
export default chars
