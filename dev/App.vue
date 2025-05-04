<script setup lang="ts">
import SevenSegmentType, { libChars } from "../src/"
import type { Char } from "../src/types"
import sst from './components/SevenSegmentText.vue'

import { computed, ref } from "vue"

const chars: Char[] = libChars
  .toSorted((c1, c2) => c1.chr.charCodeAt(0)-c2.chr.charCodeAt(0))

const generalSss = new SevenSegmentType()
const gridSss = new SevenSegmentType({
  variationKeys: ["*"]
})

function codeString(start: number, end: number)
{
	let t = ""
	for (let i=0; i<(end+1)-start; i++)
	{
		t += String.fromCharCode(i+start)
	}
	return t
}

// https://clagnut.com/blog/2380


type LanguageSection = {
  name: string,
  code?: string,
  chars?: string[],
  examples?: string[]
}

const languageSections: LanguageSection[] = [
  {
    name: "General",
    chars: [
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "abcdefghijklmnopqrstuvwxyz",
      "0123456789↊↋",
      "!\"#$%&'()*+,-./ :;<=>?@ [\\]^_` {|}~",
      "þðʒȝŋñĳ āēèíìıōúūùû",
      codeString(0x00A0, 0x00FF),
      codeString(0x2010, 0x203E),
      codeString(0x0100, 0x017F),
      codeString(0x0180, 0x024F),
    ],
    examples: [
      "CPU=14 MEM=50 SWP=00",
      "A cost of 100,766.35 dollars"
    ]
  },
  {
    name: "English",
    code: "en",
    examples: [
      "The quick brown fox jumps over the lazy dog.",
      "Pack my box with five dozen liquor jugs.",
      "The five boxing wizards jump quickly.",
      "aquittal aquifer aquattic aqua",
      "How quickly daft jumping zebras vex!",
      "Sixty zippers were quickly picked from the woven jute bag.",
      "Farmer Jack realized that big yellow quilts were expensive.",
      "Just keep examining every low bid quoted for zinc etchings.",
    ]
  },
  {
    name: "French",
    code: "fr",
    chars: [
      "Àà Ââ Ææ Çç Éé Èè Êê Ëë Îî Ïï Ôô Œœ Ùù Ûû Üü Ÿÿ"
    ],
    examples: [
      "Voix ambiguë d'un cœur qui, au zéphyr, préfère les jattes de kiwis.",
    ]
  },
  {
    name: "Italian",
    code: "it",
    chars: [
      "Àà Éé Èè Ìì Óó Òò Ùù Îî"
    ],
    examples: [
      "Pranzo d'acqua fa volti sghembi.",
      "Cantami o Diva del pelide Achille l'ira funesta."
    ]
  },
  {
    name: "Spanish",
    code: "es",
    chars: [
      "Áá Éé Íí Óó Úú Üü Ññ ¿¡!?"
    ],
    examples: [
      "Benjamín pidió una bebida de kiwi y fresa. Noé, sin vergüenza, la más exquisita champaña del menú.",
    ]
  },
  {
    name: "Portuguese",
    code: "pt",
    chars: [
      "Áá Àà Ââ Ãã Éé Êê Íí Óó Ôô Õõ Úú"
    ],
    examples: [
      "Luís argüia à Júlia que «brações, fé, chá, óxido, pôr, zângão» eram palavras do português.",
    ]
  },
  {
    name: "Romanian",
    code: "ro",
    chars: [
      "Ăă Ââ Îî Șș Țț"
    ],
    examples: [
      "Muzicologă în bej vând whisky și tequila, preț fix.",
    ]
  },
  {
    name: "Latin",
    code: "la",
    chars: [
      "Āā Ēē Īī Ōō Ūū Ȳȳ"
    ],
    examples: [
      "Sīc fugiēns, dux, zēlotypos, quam Karus habēris.",
    ]
  },
  {
    name: "German",
    code: "de",
    chars: [
      "Ää Öö Üü ßẞ"
    ],
    examples: [
      "Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.",
      "Falsches Üben von Xylophonmusik quält jeden größeren Zwerg.",
      "Jörg bäckt quasi zwei Haxenfüße vom Wildpony.",
      "Zwölf laxe Typen qualmen verdächtig süße Objekte.",
      "Franz jagt im komplett verwahrlosten Taxi quer durch Bayern.",
      "Äußerst Öl Über",
    ]
  },
  {
    name: "Icelandic",
    code: "is",
    chars: [
      "Áá Ðð Éé Íí Óó Úú Ýý Þþ Ææ Öö"
    ],
    examples: [
      "Kæmi ný öxi hér, ykist þjófum nú bæði víl og ádrepa.",
    ]
  },
  {
    name: "Danish",
    code: "da",
    chars: [
      "Ææ Øø Åå"
    ],
    examples: [
      "Quizdeltagerne spiste jordbær med fløde, mens cirkusklovnen Walther spillede på xylofon.",
    ]
  },
  {
    name: "Norwegian",
    code: "no",
    chars: [
      "Ææ Øø Åå Éé Èè Êê Óó Òò Ôô Ùù"
    ],
    examples: [
      "Jeg begynte å fortære en sandwich mens jeg kjørte taxi på vei til quiz.",
    ]
  },
  {
    name: "Swedish",
    code: "sv",
    chars: [
      "Åå Ää Öö"
    ],
    examples: [
      "Flygande bäckasiner söka hwila på mjuka tuvor.",
    ]
  },
  {
    name: "Finnish",
    code: "fi",
    chars: [
      "Ää Öö Åå Šš Žž"
    ],
    examples: [
      "Albert osti fagotin ja töräytti puhkuvan melodian.",
    ]
  },
  {
    name: "Polish",
    code: "pl",
    chars: [
      "Ąą Ćć Ęę Łł Ńń Óó Śś Źź Żż"
    ],
    examples: [
      "Jeżu klątw, spłódź Finom część gry hańb!",
    ]
  },
  {
    name: "Czech",
    code: "cs",
    chars: [
      "Áá Čč Ďď Éé Ěě Íí Ňň Óó Řř Šš Ťť Úú Ůů Ýý Žž"
    ],
    examples: [
      "Příliš žluťoučký kůň úpěl ďábelské ódy.",
    ]
  },
  {
    name: "Lithuanian",
    code: "lt",
    chars: [
      "Ąą Čč Ęę Ėė Įį Šš Ųų Ūū Žž"
    ],
    examples: [
      "Įlinkdama fechtuotojo špaga sublykčiojusi pragręžė apvalų arbūzą.",
    ]
  },
  {
    name: "Irish",
    code: "ga",
    chars: [
      "Áá Óó Úú Éé Íí"
    ],
    examples: [
      "D’fhuascail Íosa Úrmhac na hÓighe Beannaithe pór Éava agus Ádhaimh.",
    ]
  },
  {
    name: "Russian",
    code: "ru",
    chars: [
      "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ",
      "абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
    ],
    examples: [
      "Съешь ещё этих мягких французских булок, да выпей же чаю.",
      "Шеф взъярён тчк щипцы с эхом гудбай Жюль",
      "Эх чужд кайф сплющь объём вши грызя цент",
    ]
    // https://en.wikipedia.org/wiki/Cyrillic_script
  },
  {
    name: "Serbian",
    code: "sr",
    chars: [
      "АБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШ",
      "абвгдђежзијклљмнњопрстћуфхцчџш",
    ],
  },
  {
    name: "Greek",
    code: "el",
    chars: [
      "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",
      "αβγδεζηθικλμνξοπρστυφχψω",
      "Άά Έέ Ήή Ίί Όό Ύύ Ώώ ΐ ΰ Ϊϊ Ϋϋ"
    ],
    examples: [
      "Ξεσκεπάζω τὴν ψυχοφθόρα βδελυγμία.",
    ]
    // https://en.wikipedia.org/wiki/Greek_diacritics
  },
  {
    name: "CJK",
    chars: [
      codeString(0x3001, 0x303F),
      "一二三四五六七八九十百千万",
    ]
  },
  {
    name: "Japanese",
    code: "ja",
    chars: [
      "ヵヮャ　ァンワラヤマハナタサカア",
      "　　　　ィ゛ヰリ　ミヒニチシキイ",
      "　　ュッゥ゜　ルユムフヌツスクウ",
      "ヶ　　　ェーヱレ　メヘネテセケエ",
      "　　ョ　ォ　ヲロヨモホノトソコオ",
    ],
    examples: [
      "いろはにほへと　ちりぬるを　わかよたれそ　つねならむ　うゐのおくやま　けふこえて　あさきゆめみし　ゑひもせす",
      "やまざとにかぜわたる　こもれびゆらしいろを　ほんのりそめてふくあ　すはようみちなきおね　へつえむけぬ",
    ] // https://web.archive.org/web/20090330125307/http://admac.jp/pangram/sakuhin.html
  },
  {
    name: "Korean",
    code: "ko",
    chars: [
      "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ",
      "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ",
    ],
    examples: [
      "다람쥐 헌 쳇바퀴에 타고파.",
    ]
  },
  {
    name: "Misc",
    chars: [
      "AbCdEFGHIJKLMNoPQRsTUVWXYz",
    ],
    examples: [
      "ON OPEN PLAY StOP OFF CLOSE Error",
    ]
  },
]

const caseMode = ref('normal')
const enableRemovingDiacritics = ref(false)
const hideTranscriptions = ref(false)
const color = ref('#00ff3f')
const customText = ref('Custom text input')
const customTextLines = computed(() => customText.value.split(/\r\n|\n|\r/))

const sections = computed<[SevenSegmentType, LanguageSection][]>(() =>
{
  return languageSections.map(section =>
  {
    const ssd = section.code
      ? new SevenSegmentType({locales: [section.code]})
      : new SevenSegmentType()

    let examples = section.examples
    if (examples)
    {
      if (section.code == "ko")
      {
        examples = examples.map(e => e.normalize("NFKD").split('').join(''))
      }
      else
      {
        examples = examples.map(example =>
        {
          if (caseMode.value == "upper")
            example = example.toLocaleUpperCase()
          else if (caseMode.value == "lower")
            example = example.toLocaleLowerCase()
          if (enableRemovingDiacritics.value)
            example = example.normalize("NFD").replace(/\p{Diacritic}/gu, "")
          return example
        })
      }
    }

    return [ssd, {
      name: section.name,
      chars: section.chars,
      examples
    }]
  })
})

function onColorPreset(e: Event)
{
  const target = e.target as HTMLSelectElement
  color.value = target.value
  target.value = ''
}

const wrappingTextExample = "\x01Title\n\x03Right aligned\n123456789012345678901234 Testing hyphenating sen\u00ADtence and some no\u00A0break\u00A0spaces. With many many words to test the wrapping of seven\u2010segment text and also\na newline character."

</script>

<template>
  <div id="main">
    <div>
      <div class="options">
        <div>
          <label>Colour:
            <input style='width: 60px; font-family:monospace' v-model="color" value="#00ff3f"/>
            <select v-on:change="onColorPreset">
            <option disabled selected value="">Preset</option>
            <option value="#00ff3f">Green</option>
            <option value="#ff3333">Red</option>
            <option value="#FFA500">Orange</option>
            <option value="#0c5afc">Blue</option>
            <option value="#ffff00">Yellow</option>
          </select></label>
        </div>
        <div>
          <label>Hide transcriptions: <input type="checkbox" v-model="hideTranscriptions"></label>
        </div>
      </div>
      <div class="options">
        <div class="options-header">
        Options for the examples:
        </div>
        <div>
          <label>Casing: <select v-model="caseMode">
            <option value="normal">Normal</option>
            <option value="upper">All uppercase</option>
            <option value="lower">All lowercase</option>
          </select></label>
        </div>
        <div>
          <label>Remove diacritics: <input type="checkbox" v-model="enableRemovingDiacritics"></label>
        </div>
      </div>
      <div id="custom-text-section">
        <div>
          <textarea v-model="customText"></textarea>
        </div>
        <div id="custom-text-output">
          <sst v-for="line in customTextLines" :color="color" :mode="hideTranscriptions ? 'line' : 'word'" :sst="generalSss" :text="line"></sst>
        </div>
      </div>
      <div v-for="([ssd, section]) in sections">
        <h2>{{ section.name }}</h2>
        <div>
          <div class="subsection">
            <div v-for="line in section.chars">
              <sst :color="color" :mode="hideTranscriptions ? 'line' : 'individual'" :sst="ssd" :text="line"></sst>
            </div>
          </div>
          <div class="subsection">
            <div v-for="line in section.examples">
              <sst :color="color" :mode="hideTranscriptions ? 'line' : 'word'" :sst="ssd" :text="line"></sst>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Text Wrapping Test</h2>
        <div style="margin: 10px;">
          <sst :mode="'split'" :text="wrappingTextExample" :split="24"></sst>
        </div>
      </div>
      <div>
        <h2>Notes</h2>
        <div>
          a <sst pin="00110010"/> : Considered was <sst pin="00100010"/> as it would mirror 'e' <sst pin="00011000"/>, and <sst pin="00110010"/> could then be used for `s` perhaps, but using it also for Greek and Cyrillic `a` would conflict with their `t` <sst pin="00100010"/>. it also makes words a bit less recognisable.
        </div>
        <div>
          f <sst pin="00001110"/> : A strong contender is <sst pin="10001010"/> but that one can be used for r with diacritics: ř. May still change though.
        </div>
        <div>
          g <sst pin="00100010"/> : Maybe a stretch... but it's the hook of G, has the downward motion of g, and mirrors <sst pin="00001010"/> used for Cyrillic г and and Greek γ. <sst pin="10010110"/> and <sst pin="11110110"/> are too top heavy. A strong contender is <sst pin="10011010"/> but that one can be used for c with diacritics: č. May still change though.
        </div>
        <div>
          m <sst pin="10101000"/> : Not <sst pin="10101010"/> to allow ñ to use it. Same as w <sst pin="01010100"/> upside down.
        </div>
        <div>
          R <sst pin="11101010"/> : Could perhaps also be <sst pin="10001100"/> but then it wouldn't feel like a proper unique capital letter and also wouldn't mirror Cyrillic Я <sst pin="10101110"/>.
        </div>
        <div>
          T <sst pin="11100000"/> : Not <sst pin="10001100"/> to allow Greek Γ and Cyrillic Г to use it and for all 'T's to look the same. Opposite segments of t <sst pin="00011110"/>.
        </div>
        <div>
          w <sst pin="01010100"/> : Not <sst pin="10111000"/> to allow ū to use it. Same as m <sst pin="10101000"/> upside down.
        </div>
        <div>
          X <sst pin="01101100"/> : Not <sst pin="10010010"/> to allow Cyrillic Ш and Greek Ξ to use it and for all 'X's to look the same.
        </div>
        <div>
          x <sst pin="00101000"/> : <sst pin="00010010"/> is already used by Cyrillic к and Greek κ.
        </div>
        <div>
          y <sst pin="01100010"/> : Like a y but rotated to make the right line vertical. <sst pin="01100110"/> looks too top heavy. Could also be <sst pin="01110010"/> but it feels a bit less recognisable.
        </div>
        <div>
          Ĳ <sst pin="01110100"/> : Does not require upper and lowercase versions, because "When a Dutch word starting with IJ is capitalised, the entire digraph is capitalised" (e.g. Ĳmuiden becomes IJmuiden not Ijmuiden)
        </div>
        <div>
          i <sst pin="10100000"/>, m <sst pin="10101000"/> & w <sst pin="01010100"/> : Don't want too many disconnected base characters.
        </div>
        <div>
          Italian locale ò <sst pin="10111010"/> and ó <sst pin="10111011"/> : ó gets the decimal point as it has a low occurrence in Italian.
        </div>
      </div>
      <div>
        <h2>Character Map</h2>
        <div id="character-map">
          <div class="character" v-bind:class="{'has-pinmap': typeof char.pin !== 'undefined'}" v-for="char in chars">
            <div class="title">{{ char.chr }}</div>
            <div class="ssbox sevensegment-text"><div>{{ gridSss.convert(char.chr).toDsegString() }}</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.options
{
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.options-header
{
  font-weight: bold;
}

#custom-text-section
{
  margin: 10px;
}

#custom-text-section textarea
{
  width: 600px;
  height: 100px;
  background-color: black;
  color: white;
}

#custom-text-output
{
  margin-top: 10px;
}

#character-map
{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.character
{
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  width: 30px;
}

.title
{
  text-align: center;
  background-color: rgb(180, 180, 180);
  color: black;
  vertical-align: middle;
  line-height: 22px;
  height: 22px;
}

.character:not(.has-pinmap) .title
{
  background-color: #ffdbb3;
}

.ssbox
{
  vertical-align: middle;
  flex-grow: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px;
}

h2
{
  margin: 0;
}

.subsection
{
  margin: 10px 0 20px 10px;
}

.test-line
{
  margin: 10px;
}
</style>
