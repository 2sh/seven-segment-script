<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import SevenSegmentType, { SevenSegmentLine } from '../../src'

type Mode =
  | 'line'
  | 'individual'
  | 'word'
  | 'split'

export interface Props {
  sst?: SevenSegmentType,
  mode?: Mode,
  pin?: string | string[],
  text?: string,
  color?: string,
  split?: number,
}

const props = withDefaults(defineProps<Props>(), {
  sst: () => new SevenSegmentType(),
  mode: "line",
  text: "",
  pin: () => [],
  color: "#00ff3f",
  split: 4*6,
})

const lines = ref<string[][]>([])

const textParts = ref<string[]>([])
//const outParts = ref<string[]>([])

watch(props, () =>
{
  if (props.mode == 'individual' || props.mode == 'word')
  {
    textParts.value = props.mode == 'individual'
      ? props.text.split('')
      : props.text.split(/(?<=\s+)/)
    lines.value = [textParts.value.map(text =>
      props.sst.convert(text).toDsegString())]
  }
  else
  {
    textParts.value = []
    let line: SevenSegmentLine
    if (props.pin.length)
    {
      const pins = typeof props.pin == "string" ? [props.pin] : props.pin
      line = new SevenSegmentLine(pins.map(pin => { return {pin} } ))
    }
    else
    {
      line = props.sst.convert(props.text)
    }

    if (props.mode == 'split')
    {
      lines.value = line.split(props.split).map(l => [l.toDsegString()])
    }
    else
    {
      lines.value = [[line.toDsegString()]]
    }
  }
}, { immediate: true })

const lineStyle = computed(() =>
{
  return {
    color: props.color,
    textShadow: `0 0 3px ${props.color}`
  }
})
</script>

<template>
<div class="seven-segment-panel">
  <div class="line" v-for="line in lines">
    <div class="part" v-for="(part, i) in line">
      <div class="displays sevensegment-text">
        <div class="off">{{ "8".repeat(part.length) }}</div>
        <div class="on" :style="lineStyle">{{ part }}</div>
      </div>
      <div v-if="textParts.length" class="plain"><div>{{ textParts[i] }}</div></div>
    </div>
  </div>
</div>
</template>

<style scoped>
.seven-segment-panel
{
  display: inline-block;

}

.part
{
  display: inline-block;
}

.off
{
  position: absolute;
  color: rgb(43, 43, 43);
  z-index: -1;
}

.plain
{
  width: 0;
  position: relative;
  height: 30px;
  font-family: monospace;
  font-size: 0.8em;
}

.plain div
{
  position: absolute;
  left: 0;
  top: 0;
  line-height: 30px;
  white-space: nowrap;
}
</style>
