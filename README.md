# Seven Segment Script

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

## Stylistic Choice
- Characters are allowed to look the same as the numerals.
- **Lowercase letters** are designed to have more
  weight in the lower 4 segments of the seven-segment display,
  ensuring a distinct visual difference from uppercase letters.
  This requires the "invention" of some new characters, which may take
  some time to become familiar with and read fluently at first.
- **Uppercase and lowercase letters** are distinct from one another.
- Aside from its numerical usage, the **decimal point (DP)**
  is used to mark unknown characters or variations of diacritics or letters.
  However, it should be used as a last resort as some displays might not
  include it.

## Help required
Areas for improvement:
  - **Languages using the Latin alphabet with diacritics**
  - **Greek**
  - **Languages using Cyrillic**
  - **Hiragana** (Maybe)
  - **Korean**
  - **Any other writing systems**

This project requires contributors who are native speakers or highly
familiar with these languages, as it can be difficult to
determine if words with their diacritics and special letter variations are
both legible and visually appealing when displayed on seven-segment displays.

Many diacritics map to the same seven-segment characters, so adjustments
may be necessary for each language to better differentiate them.

### Development

To view all the characters in use on a web page, run:
```sh
yarn dev
```

### Build

To build the project, run:
```sh
yarn build
```
