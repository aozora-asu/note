<script setup>
import {
  onSlideEnter,
  onSlideLeave,
  useDarkMode,
  useIsSlideActive,
  useNav,
  useSlideContext,
} from "@slidev/client";

const { $slidev } = useSlideContext();
const { currentPage, currentLayout, currentSlideRoute } = useNav();
const { isDark } = useDarkMode();
const isActive = useIsSlideActive();
onSlideEnter(() => {
  /* ... */
});
onSlideLeave(() => {
  /* ... */
});
// ...
</script>
<template>
  <header
    v-if="
      $slidev.nav.currentPage !== 1 &&
      $slidev.nav.currentPage !== $slidev.nav.total
    "
    class="absolute top-0 left-0 font-size-5 w-full"
  >
    <div
      class="bg-blue-400 h-7"
      :style="{
        width:
          (($slidev.nav.currentPage - 1) / ($slidev.nav.total - 2)) * 100 + '%',
        transition: 'width 0.3s ease',
      }"
    ></div>
    <p class="absolute top-0 right-5">Tight-Binding Model</p>
    <p class="absolute top-0 left-5">2022/12/14</p>
  </header>
</template>
