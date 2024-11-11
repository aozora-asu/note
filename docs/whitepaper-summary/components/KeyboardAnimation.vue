<!-- components/AnimatedText.vue -->
<template>
  <div class="slidev-animated-text">
    <p class="cursor-wrapper">
      <ruby
        v-for="(item, index) in textItems"
        :key="index"
        :class="['text', item.className]"
      >
        <span
          ><slot :name="'text-' + index">{{ item.text }}</slot></span
        >
        <rt
          ><slot :name="'reading-' + index">{{ item.reading }}</slot></rt
        >
      </ruby>
      <span class="cursor"></span>
    </p>
  </div>
</template>

<script>
export default {
  name: "AnimatedText",
  props: {
    textItems: {
      type: Array,
      default: () => [
        { text: "文字", reading: "もじ", className: "moji" },
        { text: "入力", reading: "にゅうりょく", className: "nyuryoku" },
        { text: "風", reading: "ふう", className: "fu" },
        {
          text: "アニメーション",
          reading: "あにめーしょん",
          className: "animation",
        },
      ],
    },
  },
};
</script>

<style>
.slidev-animated-text {
  --duration-base: 0.1s;
  --total-duration: calc(
    (7 + 1 + 2 + 1 + 6 + 1 + 2 + 1) * var(--duration-base)
  );
}

.slidev-animated-text ruby,
.slidev-animated-text rt {
  display: inline-block;
  font-size: 16px;
}

.slidev-animated-text .cursor-wrapper {
  font-size: 16px;
  position: relative;
  display: inline-flex;
  align-items: center;
}

.slidev-animated-text .cursor {
  display: inline-block;
  width: 1px;
  height: 1em;
  background: currentColor;
  margin-left: 1px;
  vertical-align: middle;
  animation:
    caret-blink 0.8s step-end infinite,
    caret-hide var(--total-duration) step-end forwards;
}

.slidev-animated-text .text {
  overflow: hidden;
}

.slidev-animated-text .text > span {
  line-height: 1;
  vertical-align: middle;
}

.slidev-animated-text .text rt {
  width: 0;
  height: 1em;
  line-height: 1;
  overflow: hidden;
  vertical-align: middle;
  text-decoration: underline;
}

.slidev-animated-text .moji > span {
  width: 2em;
  animation: henkan step-end;
  animation-duration: calc((2 + 1) * var(--duration-base));
}

.slidev-animated-text .moji rt {
  animation:
    moji steps(2),
    moji-hide step-end;
  animation-duration: calc((2 + 1) * var(--duration-base)), var(--duration-base);
  animation-delay: 0s, calc(2 * var(--duration-base));
}

.slidev-animated-text .nyuryoku > span {
  width: 6em;
  animation: henkan step-end;
  animation-duration: calc((6 + 1 + 2 + 1) * var(--duration-base));
}

.slidev-animated-text .nyuryoku rt {
  animation:
    nyuryoku steps(6),
    nyuryoku-hide step-end;
  animation-duration: calc((6 + 1) * var(--duration-base)), var(--duration-base);
  animation-delay: calc((2 + 1) * var(--duration-base)),
    calc((6 + 2 + 1) * var(--duration-base));
}

.slidev-animated-text .fu > span {
  width: 2em;
  animation: henkan step-end;
  animation-duration: calc((2 + 1 + 6 + 1 + 2 + 1) * var(--duration-base));
}

.slidev-animated-text .fu rt {
  animation:
    fu steps(2),
    fu-hide step-end;
  animation-duration: calc((2 + 1) * var(--duration-base)), var(--duration-base);
  animation-delay: calc((6 + 1 + 2 + 1) * var(--duration-base)),
    calc((2 + 6 + 1 + 2 + 1) * var(--duration-base));
}

.slidev-animated-text .animation > span {
  width: 7em;
  animation: henkan step-end;
  animation-duration: calc(
    (7 + 1 + 2 + 1 + 6 + 1 + 2 + 1) * var(--duration-base)
  );
}

.slidev-animated-text .animation rt {
  animation:
    animation steps(7),
    animation-hide step-end;
  animation-duration: calc((7 + 1) * var(--duration-base)), var(--duration-base);
  animation-delay: calc((2 + 1 + 6 + 1 + 2 + 1) * var(--duration-base)),
    calc((7 + 2 + 1 + 6 + 1 + 2 + 1) * var(--duration-base));
}

@keyframes moji {
  to {
    width: 2em;
  }
}

@keyframes moji-hide {
  from {
    width: 2em;
  }
}

@keyframes nyuryoku {
  to {
    width: 6em;
  }
}

@keyframes nyuryoku-hide {
  from {
    width: 6em;
  }
}

@keyframes fu {
  to {
    width: 2em;
  }
}

@keyframes fu-hide {
  from {
    width: 2em;
  }
}

@keyframes animation {
  to {
    width: 7em;
  }
}

@keyframes animation-hide {
  from {
    width: 7em;
  }
}

@keyframes henkan {
  from {
    position: absolute;
    left: -10000px;
  }
}

@keyframes caret-blink {
  50% {
    opacity: 0;
  }
}

@keyframes caret-hide {
  0%,
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
