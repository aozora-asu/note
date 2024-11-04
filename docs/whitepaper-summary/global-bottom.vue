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
  <footer
    v-if="
      $slidev.nav.currentPage !== 1 &&
      $slidev.nav.currentPage !== $slidev.nav.total
    "
    class="absolute bottom-0 right-0 px-4 font-size-5 w-full bg-blue-500 text-right opacity-70"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </footer>
</template>
