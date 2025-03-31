<script setup lang="ts">
import { ref, watch } from 'vue'

import SevenSegmentScript from '../../src/main'

export interface Props {
  sss?: SevenSegmentScript,
  individual?: boolean
  text: string
}

const props = withDefaults(defineProps<Props>(), {
  sss: () => new SevenSegmentScript(),
})

const inParts = ref<string[]>([])
const outParts = ref<string[]>([])

watch(props, () =>
{
  inParts.value = props.individual
    ? props.text.split('')
    : props.text.split(/(?<=\s+)/)
  outParts.value = inParts.value.map(part => props.sss.toByteString(part))
}, { immediate: true })

</script>

<template>
<div>
  <table>
    <tbody>
      <tr class="sevensegment-line sevensegment-text">
        <td v-for="part in outParts">
          <div class="off-line">{{ "8".repeat(part.length) }}</div>
          <div>{{ part }}</div>
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
