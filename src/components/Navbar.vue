<script setup lang="ts">
import Sun from "./icons/Sun.vue"
import Menu from "./icons/Menu.vue"

import { ref } from 'vue'

const isScrollY0 = ref(true)
</script>

<template>
  <nav class="navbar" :class="{ navOntop: isScrollY0 }">
    <div class="content">
      <div class="logo">
        <h1>
          LUCAS
        </h1>
      </div>
      <div class="menu">
        <button class="theme" :class="{ navOntop: isScrollY0 }">
          <Sun />
        </button>
        <button :class="{ navOntop: isScrollY0 }">
          <Menu />
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navOntop {
  background-color: var(--primary-soft) !important;
  color: var(--vt-black) !important;
}

.navbar {
  background-color: var(--vt-black-soft);
  width: 100%;
  padding: 0.5rem 3.125rem;
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

div.logo {
  font-size: 14px;
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
