<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Masthead from './components/Masthead.vue'
import AboutMe from './components/AboutMe.vue'
import Services from './components/Services.vue'
import Resume from './components/Resume.vue'
import ContactMe from './components/ContactMe.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <Masthead />
    <AboutMe />
    <Services />
    <Resume />
    <ContactMe />
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  overflow-x: hidden;
}
</style>
