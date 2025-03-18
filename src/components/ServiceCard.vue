<script setup lang="ts">
const props = defineProps({
  icon: Object,
  title: String,
  content: String,
})
</script>

<template>
  <div class="card">
    <component :is="icon" class="icon"></component>
    <h3 class="title">
      {{ title }}
    </h3>
    <div class="content">
      {{ content }}
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem 0;
}

.icon {
  color: var(--primary-soft);
  width: 64px;
  height: 64px;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-text);
}

.content {
  text-align: center;
  color: var(--color-text-mute);
  font-size: 1rem;
  max-width: 520px;
}

@media only screen and (max-width: 1400px) {
  .content {
    max-width: 480px;
  }
}

@media only screen and (max-width: 1198px) {
  .content {
    max-width: 420px;
  }
}

@media only screen and (max-width: 993px) {
  .title {
    font-size: 1.25rem;
  }

  .content {
    font-size: 0.813rem;
    max-width: 380px;
  }
}

@media only screen and (max-width: 815px) {
  .title {
    font-size: 1.5rem;
  }

  .content {
    font-size: 1rem;
    max-width: 100vw;
    padding: 0 8.5rem;
  }
}
</style>
