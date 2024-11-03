<template>
  <div :class="$style.text">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  speed: number;
  x: number;
  y: number;
  rotate: number;
  scale: number;
}>();
const initRotate = -Math.round(Math.random() * 360);
const animationDuration = computed(() => `${552 / props.speed}s`);
const pixel = computed(() => ({
  x: `${props.x}px`,
  y: `${props.y}px`,
}));
const transform = computed(() => ({
  begin: `translateY(${props.y}px) scaleX(-1) rotate(${initRotate}deg)`,
  end: `translateY(${Math.abs(props.y) + 552 + 30}px) scaleX(-1) rotate(${props.rotate}deg)`,
}));
</script>

<style module>
.text {
  position: absolute;
  overflow: none;
  top: v-bind("pixel.y");
  left: v-bind("pixel.x");
  animation: fall linear;
  animation-duration: v-bind(animationDuration);
}

@keyframes fall {
  0% {
    transform: v-bind("transform.begin");
  }
  100% {
    transform: v-bind("transform.end");
  }
}
</style>
