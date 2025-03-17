<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Masthead from './components/Masthead.vue'
import AboutMe from './components/AboutMe.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <Masthead />
    <AboutMe />
  </main>
</template>

<style scoped>
@font-face {
  font-family: 'Poppins';
  src: url('~@/assets/fonts/Poppins/Poppins-Regular.ttf');
}

* {
  font-family: 'Poppins';
}
</style>
