<script setup lang="ts">
import Sun from "./icons/Sun.vue"
import Moon from "./icons/Moon.vue"
import Menu from "./icons/Menu.vue"
import ModalMenu from "./ModalMenu.vue"

import { ref, onMounted } from 'vue'
import useTheme from "@/hooks/useTheme"

const { initTheme, toggleTheme } = useTheme();
const isScrollY0 = ref(true);
const isDarkTheme = ref(false)
const showModal = ref(false)

const openModal = () => {
  showModal.value = true;
}

const handleTheme = () => {
  const theme = toggleTheme()
  isDarkTheme.value = theme === "dark"
}

window.addEventListener("scroll", (event) => {
  isScrollY0.value = window.scrollY === 0;
});

onMounted(() => {
  initTheme();
  isDarkTheme.value = document.documentElement.dataset.theme === 'dark'
})
</script>

<template>
  <nav :class="{ navbar: true, navOntop: isScrollY0 }">
    <div class="content">
      <div class="logo">
        <h1>
          LUCAS
        </h1>
      </div>
      <div class="menu">
        <button v-show="isDarkTheme" class="theme" :class="{ navOntop: isScrollY0 }" @click="handleTheme">
          <Sun />
        </button>
        <button v-show="!isDarkTheme" class="theme" :class="{ navOntop: isScrollY0 }" @click="handleTheme">
          <Moon />
        </button>
        <button :class="{ navOntop: isScrollY0 }" @click="openModal">
          <Menu />
        </button>
      </div>
    </div>
  </nav>
  <Teleport to="body">
    <ModalMenu :show="showModal" @close="showModal = false" />
  </Teleport>
</template>

<style scoped>
* {
  transition: background-color 0.3s;
  transition: color 0.3s;
}

.navOntop {
  background-color: var(--vt-primary-soft) !important;
  color: var(--vt-black) !important;
}

.navbar {
  background-color: var(--color-background);
  width: 100%;
  padding: 0.8rem 3.125rem;
  position: fixed;
  top: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  z-index: 10;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1320px;
}

.logo h1 {
  font-size: 28px;
  font-weight: 700;
}

.menu {
  display: flex;
  gap: 0px 2em;
}

.menu button {
  outline: none;
  border: none;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  color: var(--color-text-mute);
}

.menu button:hover {
  color: var(--color-text);
  transition: 0.5s;
}

button.theme {
  color: var(--primary);
}

button.theme:hover {
  color: var(--primary-soft);
  transition: 0.5s;
}

@media only screen and (max-width: 1400px) {

  .navbar {
    padding: 0.5rem 8.5rem;
  }
}

@media only screen and (max-width: 993px) {

  .navbar {
    padding: 0.5rem 5rem;
  }
}

@media only screen and (max-width: 577px) {

  .navbar {
    padding: 0.5rem 0.6rem;
  }
}
</style>
