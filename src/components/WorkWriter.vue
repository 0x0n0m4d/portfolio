<script setup lang="ts">
import { ref } from "vue"

const works = ["HACKER", "DEVELOPER", "SCRAPER", "RESEARCHER"]

const typeValue = ref("")
const typeStatus = ref(false)
const arrayIndex = ref(0)
const charIndex = ref(0)

function type() {
  if (charIndex.value < works[arrayIndex.value].length) {
    if (!typeStatus.value) {
      typeStatus.value = true;
    }

    typeValue.value += works[arrayIndex.value].charAt(charIndex.value);
    charIndex.value += 1;
    setTimeout(type, 100);
  } else {
    typeStatus.value = false;
    setTimeout(eraser, 2000);
  }
}

function eraser() {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = works[arrayIndex.value].substring(0, charIndex.value - 1);
    charIndex.value -= 1;
    setTimeout(eraser, 50);
  } else {
    typeStatus.value = false;
    arrayIndex.value += 1;
    if (arrayIndex.value >= works.length) arrayIndex.value = 0;
    setTimeout(type, 200);
  }
}

setTimeout(type, 100);
</script>

<template>
  <h2>
    {{ typeValue }}
    <div :class="{ blink: !typeStatus }">|</div>
  </h2>
</template>

<style scoped>
h2 {
  height: 6.5rem;
  display: flex;
  align-items: center;
  color: var(--vt-black-soft);
  font-weight: 600;
  font-size: 5rem;
  line-height: 1.3;
  margin-left: -.25rem !important;
}

@keyframes blink_cursor {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 100%;
  }

  100% {
    opacity: 0;
  }
}

.blink {
  animation: blink_cursor 0.7s infinite;
}
</style>
