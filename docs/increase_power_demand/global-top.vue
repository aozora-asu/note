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
    v-if="$slidev.nav.currentPage !== $slidev.nav.total"
    class="absolute top-0 left-0 font-size-5 w-full"
  >
    <div
      class="bg-blue-500 h-7"
      :style="{
        width:
          (($slidev.nav.currentPage - 1) / ($slidev.nav.total - 2)) * 100 + '%',
        transition: 'width 0.3s ease',
      }"
    ></div>
    <p class="absolute top-0 right-5">EV充電需要と送配電ネットワーク</p>

    <p class="absolute top-0 left-5">2025/1/27</p>
  </header>
</template>
