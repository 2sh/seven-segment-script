<script setup lang="ts">
import SevenSegmentScript, { libChars } from "../src/"
import type { Char } from "../src/types"
import sst from './components/sst.vue'
import SevenSegmentText from './components/SevenSegmentText.vue'

import { computed, ref } from "vue"

const chars: Char[] = libChars
  .toSorted((c1, c2) => c1.chr.charCodeAt(0)-c2.chr.charCodeAt(0))

const generalSss = new SevenSegmentScript()
const gridSss = new SevenSegmentScript({
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
const color = ref('#00ff3f')
const customText = ref('Custom text input')
const customTextLines = computed(() => customText.value.split(/\r\n|\n|\r/))

const sections = computed<[SevenSegmentScript, LanguageSection][]>(() =>
{
  return languageSections.map(section =>
  {
    const ssd = section.code
      ? new SevenSegmentScript({locales: [section.code]})
      : new SevenSegmentScript()

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

const wrappingTextExample = "Testing hyphenating sen\u00ADtence and some no\u00A0break\u00A0spaces. With many many words to test the wrapping of the text and also\na newline character."

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
          <sst v-for="line in customTextLines" :color="color" :sss="generalSss" :text="line"></sst>
        </div>
      </div>
      <div v-for="([ssd, section]) in sections">
        <h2>{{ section.name }}</h2>
        <div>
          <div class="subsection">
            <sst v-for="line in section.chars" :color="color" :sss="ssd" :text="line" individual></sst>
          </div>
          <div class="subsection">
            <sst v-for="line in section.examples" :color="color" :sss="ssd" :text="line"></sst>
          </div>
        </div>
      </div>
      <div>
        <h2>Text Wrapping Test</h2>
        <div style="margin: 10px;">
          <SevenSegmentText :text="wrappingTextExample"></SevenSegmentText>
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
