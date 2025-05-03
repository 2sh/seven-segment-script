<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import { SevenSegmentLine } from '../../src/'

export interface Props {
  pin: string,
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  pin: '00000000',
  color: "#00ff3f",
})

const char = ref<string>('')

watch(props, () =>
{
  props.pin
  char.value = (new SevenSegmentLine([{pin: props.pin}])).toDsegString()
}, { immediate: true })

const charStyle = computed(() =>
{
  return {
    color: props.color,
    textShadow: `0 0 3px ${props.color}`
  }
})
</script>

<template>
<div class="seven-segment-display sevensegment-text">
  <div class="off-line">8</div>
  <div class="on-line" :style="charStyle">{{ char }}</div>
</div>
</template>

<style scoped>
.seven-segment-display
{
  display: inline-block;
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
