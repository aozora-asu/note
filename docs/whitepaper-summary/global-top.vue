<template>
  <header
    v-if="
      $slidev.nav.currentPage !== 1 &&
      $slidev.nav.currentPage !== $slidev.nav.total
    "
    class="absolute top-0 right-0 p-2"
  >
    エネルギー白書要約
  </header>
</template>
