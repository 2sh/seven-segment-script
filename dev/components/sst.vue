<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import SevenSegmentScript from '../../src/'

export interface Props {
  sss?: SevenSegmentScript,
  individual?: boolean,
  text: string,
  color?: string,
}

const props = withDefaults(defineProps<Props>(), {
  sss: () => new SevenSegmentScript(),
  color: "#00ff3f"
})

const inParts = ref<string[]>([])
const outParts = ref<string[]>([])

watch(props, () =>
{
  inParts.value = props.individual
    ? props.text.split('')
    : props.text.split(/(?<=\s+)/)
  outParts.value = inParts.value.map(part =>
    props.sss.convert(part).toDsegString())
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
<div>
  <table>
    <tbody>
      <tr class="sevensegment-line sevensegment-text">
        <td v-for="part in outParts">
          <div class="off-line">{{ "8".repeat(part.length) }}</div>
          <div class="on-line" :style="lineStyle">{{ part }}</div>
        </td>
      </tr>
      <tr class="plain-line">
        <td v-for="part in inParts"><div>{{ part }}</div></td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<style scoped>
table
{
  border-collapse: collapse;
  border: none;
}

td
{
  padding: 0;
  margin: 0;
}

.sevensegment-line td
{

  font-size: 20px;
  position: relative;
}

.off-line
{
  position: absolute;
  color: rgb(43, 43, 43);
  z-index: -1;
}

.plain-line td
{
  width: 0;
  position: relative;
  height: 30px;
  font-size: 16px;
  font-family: monospace;
}

.plain-line td div
{
  position: absolute;
  left: 0;
  top: 0;
  line-height: 30px;
}
</style>
