<script setup lang="ts">
import Masthead from './components/Masthead.vue'
</script>

<template>
  <header>
    <Masthead />
  </header>

  <main>
    ( ._.) 404: Error
  </main>
</template>

<style scoped>
main {
  font-family: 'Roboto';
  font-weight: 600;
  color: var(--primary);
}

@font-face {
  font-family: 'ShortStack-Regular';
  src: url('~@/assets/fonts/ShortStack/ShortStack-Regular.ttf');
}

@font-face {
  font-family: 'Roboto';
  src: url('~@/assets/fonts/Roboto/Roboto-VariableFont_wdth,wght.ttf');
}
</style>
