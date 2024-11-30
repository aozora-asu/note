<template>
  <div>
    <div v-if="isActive" ref="typingContainer" class="typing_text"></div>
    <slot v-else></slot>
  </div>
</template>

<script setup>
import { onSlideEnter, onSlideLeave, useIsSlideActive } from "@slidev/client";
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  speed: {
    type: Number,
    default: 100,
  },
  words: {
    type: Array,
    required: true,
  },
});

const isActive = useIsSlideActive();
const typingContainer = ref(null);

// タイピングアニメーションを開始する関数
const startTyping = () => {
  const targets = document.getElementsByClassName("typing_text");
  const speed = props.speed; // 修正: thisではなくpropsから取得
  const word = props.words; // 修正: thisではなくpropsから取得

  if (!targets || targets.length === 0 || !Array.isArray(word) || isNaN(speed))
    return;

  Array.from(targets).forEach((target) => {
    let elapsed = 0;

    const create_word = (array, index, parent = null) => {
      let count = 0;
      const finish = array.length - 1;
      const objItems = document.createElement("span");
      objItems.className = `t${index}`;
      parent === null
        ? target.appendChild(objItems)
        : parent.appendChild(objItems);

      const time = setInterval(() => {
        const entryText = array[count];
        const temp_text = objItems.innerHTML;
        objItems.innerHTML = temp_text + entryText;
        count++;
        if (count > finish) {
          objItems.innerHTML = entryText;
          clearInterval(time);
        }
      }, speed);
    };

    for (let index = 0; index < word.length; index++) {
      let counter = index + 1;
      const objItems = word[index];
      const type = typeof objItems;

      if (type === "object") {
        if (!Array.isArray(objItems)) {
          const createElement = document.createElement("span");
          createElement.className = `wrp${index}`;
          const value = Object.values(objItems);
          let object_counter = 0;

          setTimeout(() => {
            target.appendChild(createElement);
          }, elapsed + speed);

          for (const test of value) {
            for (const item of test) {
              const array_counter = counter + object_counter;
              setTimeout(() => {
                create_word(item, array_counter, createElement);
              }, elapsed);
              elapsed += item.length * speed;
              object_counter++;
            }
          }

          setTimeout(() => {
            createElement.innerHTML = "";
            createElement.innerHTML = Object.keys(objItems);
          }, elapsed + speed);
          elapsed += speed;
        } else {
          setTimeout(() => {
            create_word(objItems, counter);
          }, elapsed);
          elapsed += objItems.length * speed;
        }
      } else if (type === "string") {
        setTimeout(() => {
          create_word(objItems, counter);
        }, elapsed);
        elapsed += objItems.length * speed;
      }
    }
  });
};

// onMounted(() => {
//   if (isActive.value) {
//     setTimeout(startTyping, 40); // スライドが表示されたときにタイピングを開始
//   }
// });

// watch(isActive, (newActiveState) => {
//   if (newActiveState) {
//     setTimeout(startTyping, 40); // スライドが表示された時に再度タイピングを開始
//   }
// });

// スライドが表示されたときにタイピングを開始
onSlideEnter(() => {
  if (isActive.value) {
    setTimeout(startTyping, 40);
  }
});

// スライドが非表示になったときにコンテンツをクリア
// onSlideLeave(() => {
//   if (typingContainer.value) {
//     typingContainer.value.innerHTML = "";
//   }
// });
</script>

<style scoped>
@keyframes flash {
  10% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  41% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.typing_text {
  display: inline-block;
  min-height: 2em;
  padding-right: 0.4em;
  position: relative;
  font-size: 33px;
  font-weight: bold;
}

.typing_text::after {
  content: "";
  width: 2px;
  height: 60%;
  background-color: #3b81f6;
  position: absolute;
  top: 7.5%;
  right: 0;
  animation: flash 0.7s ease-in-out infinite both;
}
</style>
