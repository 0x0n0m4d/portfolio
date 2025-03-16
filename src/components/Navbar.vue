<script setup lang="ts">
import Sun from "./icons/Sun.vue"
import Moon from "./icons/Moon.vue"
import Menu from "./icons/Menu.vue"
import ModalMenu from "./ModalMenu.vue"

import { ref } from 'vue'

const isScrollY0 = ref(true)
const isDarkTheme = ref(localStorage.getItem('theme') === 'dark')
const showModal = ref(false)

const handleTheme = () => {
  const theme = isDarkTheme.value ? 'dark' : 'light'

  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  isDarkTheme.value = !isDarkTheme.value
}

const openModal = () => {
  showModal.value = true;
}

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
        <button v-show="!isDarkTheme" class="theme" :class="{ navOntop: isScrollY0 }" @click="handleTheme">
          <Sun />
        </button>
        <button v-show="isDarkTheme" class="theme" :class="{ navOntop: isScrollY0 }" @click="handleTheme">
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
.navOntop {
  background-color: var(--vt-primary-soft) !important;
  color: var(--vt-black) !important;
}

.navbar {
  background-color: var(--vt-black-soft);
  width: 100%;
  padding: 0.8rem 3.125rem;
  position: sticky;
  display: flex;
  justify-content: center;
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
  font-weight: 900;
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
