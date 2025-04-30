<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import SevenSegmentType from '../../src/'

export interface Props {
  sst?: SevenSegmentType,
  text: string,
  color?: string,
  split?: number,
}

const props = withDefaults(defineProps<Props>(), {
  sst: () => new SevenSegmentType(),
  color: "#00ff3f",
  split: 4*6,
})

const lines = ref<string[]>([])

watch(props, () =>
{
  lines.value = props.sst.convert(props.text)
    .split(props.split)
    .map(line => line.toDsegString())
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
      <tr class="sevensegment-line sevensegment-text" v-for="line in lines">
        <td>
          <div class="off-line">{{ "8".repeat(line.length) }}</div>
          <div class="on-line" :style="lineStyle">{{ line }}</div>
        </td>
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
  padding-bottom: 5px;
}

.off-line
{
  position: absolute;
  color: rgb(43, 43, 43);
  z-index: -1;
}
</style>
