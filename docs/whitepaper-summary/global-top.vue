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
    class="absolute top-0 right-0 px-4 font-size-3 opacity-60"
  >
    エネルギー白書要約
  </header>
</template>
