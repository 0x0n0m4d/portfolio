<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Masthead from './components/Masthead.vue'
import AboutMe from './components/AboutMe.vue'
import Services from './components/Services.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <Masthead />
    <AboutMe />
    <Services />
  </main>
</template>

<style scoped>
@font-face {
  font-family: 'Poppins';
  src: url('~@/assets/fonts/Poppins/Poppins-Regular.ttf');
}

* {
  overflow-x: hidden;
  font-family: 'Poppins';
}
</style>
