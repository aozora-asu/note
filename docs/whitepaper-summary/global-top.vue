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
    class="absolute top-0 right-0 px-4 font-size-4 opacity-60"
  >
    <p>エネルギー白書要約</p>
  </header>
  <header
    v-if="
      $slidev.nav.currentPage !== 1 &&
      $slidev.nav.currentPage !== $slidev.nav.total
    "
    class="absolute top-0 left-0 px-4 font-size-4 opacity-60"
  >
    <p>2022/12/02</p>
  </header>
</template>
