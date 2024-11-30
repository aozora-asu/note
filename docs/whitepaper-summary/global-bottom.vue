<script setup>
import {
  useNav,
  useSlideContext,
  onSlideEnter,
  onSlideLeave,
} from "@slidev/client";

// Slidev のナビゲーション情報を取得
const { $slidev } = useSlideContext();
const { currentPage, total } = useNav();

onSlideEnter(() => {
  /* 必要に応じてスライドが表示されたときの処理 */
});

onSlideLeave(() => {
  /* 必要に応じてスライドが離れたときの処理 */
});
</script>

<template>
  <footer
    v-if="
      $slidev.nav.currentPage !== 1 &&
      $slidev.nav.currentPage !== $slidev.nav.total
    "
    class="absolute bottom-0 right-0 font-size-5 w-full text-right"
  >
    <div class="px-4">
      {{ $slidev.nav.currentPage - 1 }} / {{ $slidev.nav.total - 2 }}
    </div>
    <div
      class="bg-blue-500 h-2"
      :style="{
        width:
          (($slidev.nav.currentPage - 1) / ($slidev.nav.total - 2)) * 100 + '%',
        transition: 'width 0.3s ease',
      }"
    ></div>
  </footer>
</template>
<!-- <script setup>
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
</template> -->
