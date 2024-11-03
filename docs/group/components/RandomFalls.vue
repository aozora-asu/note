<template>
  <fall
    v-for="fallText in fallTexts"
    :key="fallText.id"
    :x="fallText.x"
    :y="fallText.y"
    :rotate="fallText.rotate"
    :scale="fallText.scale"
    :speed="props.speed"
    v-bind="$attrs"
  >
    <slot></slot>
  </fall>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps<{
  speed: number;
  interval: number;
  max: number;
}>();
interface FallText {
  id: string;
  x: number;
  y: number;
  rotate: number;
  scale: number;
}
const fallTexts = ref<FallText[]>([]);
const generateInterval = () =>
  setInterval(() => {
    fallTexts.value.push({
      id: new Date().getTime().toString(),
      x: Math.round(Math.random() * 980) - 50,
      y: -Math.round(Math.random() * 100) - 100,
      rotate: Math.round(Math.random() * 360),
      scale: -1,
    });
  }, props.interval);
setInterval(() => {
  if (fallTexts.value.length > props.max) {
    for (; fallTexts.value.length > props.max; ) {
      fallTexts.value.shift();
    }
  }
}, 10);
const interval = ref(generateInterval());
watch(
  () => props.interval,
  () => {
    clearInterval(interval.value);
    interval.value = generateInterval();
  }
);
</script>
