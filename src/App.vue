<script setup lang="ts">
import { ref, watch } from 'vue';

import Navbar from './components/Navbar.vue'
import Masthead from './components/Masthead.vue'
import AboutMe from './components/AboutMe.vue'
import Services from './components/Services.vue'
import Resume from './components/Resume.vue'
import ContactMe from './components/ContactMe.vue'
import Footer from './components/Footer.vue'

const section = ref(window.location.href.split("/#")[1])

console.log(section.value)

watch(section, () => {
  const el = document.getElementById(section.value)
  if (el) {
    window.scrollTo({
      top: el.offsetTop,
      left: 0,
      behavior: "smooth"
    });
  }
})
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
    <Footer />
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  overflow-x: hidden;
}
</style>
