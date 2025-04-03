# Seven-Segment Script

This library allows you to display text on seven-segment display panels.
It currently supports converting the following:
- **Numerals**
- **Punctuation**
- **Alphabets** (both uppercase and lowercase):
  - **Latin alphabet**, including many supplemental characters and diacritics
  - **Greek alphabet**, including some accented characters
  - **Cyrillic alphabet**, including some supplemental characters
- **Japanese Katakana**, with mappings from Hiragana
- **Korean Hangul Jamo**

You can also specify locales to improve the mapping of characters,
particularly diacritics.
For example, for the German ('de') locale, the characters Ä, Ö and Ü
are mapped to AE, OE and UE, but by default to A, O and U.

[Development page with all the characters](https://2sh.github.io/seven-segment-script/)

## Usage

```js
const displayScript = new SevenSegmentScript()
const fontScript = SevenSegmentScript.forDsegFont()
const displayScriptForGerman = new SevenSegmentScript({
  locale: ['de']
})

const fontScriptMultiLang = SevenSegmentScript.forDsegFont({
  locale: ['fr', 'it', 'de'] // Ü would map to UE even in French text
})

const stringOutput = fontScript.toByteString(
  "Text to be rendered with the DSEG font")

const byteArrayOutput = displayScript.toBytes(
  "Text to be fed to seven segment displays")
```

The font to use is [DSEG font v0.50beta1](https://github.com/keshikan/DSEG/releases/tag/v0.50beta1). The current NPM stable release does not include the
correct structure for displaying the characters programmatically.

## Stylistic Choice
- Characters are allowed to look the same as the numerals.
- **Lowercase letters** are generally designed to have more weight in
  the lower 4 segments and to never have the upper 4 segments all lit
  at once,
  ensuring a distinct visual difference from uppercase letters.
  This may require the "invention" of some new characters, which may take
  some time to become familiar with and read fluently at first.
- **Uppercase and lowercase letters** should ideally all be distinct
  from one another.
- Aside from its numerical usage, the **decimal point (DP)**
  is used to mark unknown characters or variations of diacritics or letters.
  However, it should be used sparingly as some displays might not
  include it.

## Help required
Potential areas for improvement:
  - **Languages using the Latin alphabet with diacritics**
  - **Greek**
  - **Languages using Cyrillic**
  - **Hiragana** (Maybe)
  - **Korean**
  - **Any other writing systems**

This project needs contributors who are native speakers or highly
familiar with the languages being worked on as it's important to have a strong sense of how words in these languages are meant to look.
This helps determine whether they remain visually recognizable and
aesthetically pleasing on seven-segment displays.

Many diacritics map to the same seven-segment characters, so adjustments
may be necessary for each language to better differentiate them.

Don't hesitate to [suggest](https://github.com/2sh/seven-segment-script/discussions) major changes, as this project is still very
much a work in progress...

## Development
### Dev Web View

To view all the characters in use on a web page, run:
```sh
yarn dev
```

### Build

To build the library, run:
```sh
yarn build
```
