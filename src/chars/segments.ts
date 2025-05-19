import { bits2byte, byte2bits } from "../main"
import type { Char } from "../types"

// Any possible combination of segments in the braille unicode range,
// same as used in the DSEG font.
const chars: Char[] = []
for (let byte=0; byte<2**8; byte++)
{
  const bits = byte2bits(byte)
  const rByte = bits2byte(bits.split('').toReversed().join(''))
  chars.push({
    chr: String.fromCharCode(0x2800 + rByte),
    pin: byte,
  })
}
export default chars

