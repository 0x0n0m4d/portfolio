<script setup lang="ts">
import Sun from "./icons/Sun.vue"
import Menu from "./icons/Menu.vue"
</script>

<template>
  <nav class="navbar">
    <div class="content">
      <div class="logo">
        <h1>
          LUCAS
        </h1>
      </div>
      <div class="menu">
        <button class="theme">
          <Sun />
        </button>
        <button>
          <Menu />
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: var(--vt-black-soft);
  width: 100%;
  padding: 10px 50px;
  position: sticky;
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1140px;
}

div.logo {
  font-size: 20px;
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
  color: var(--primary-hover);
  transition: 0.5s;
}

@media only screen and (max-width: 829px) {
  .navbar {
    padding: 10px 20px;
  }

  div.logo {
    font-size: 16px;
  }
}
</style>
