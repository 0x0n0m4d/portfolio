<script setup lang="ts">
defineProps<{
  title: String,
  knowledge: {
    title: String,
    company: String | null,
    years: String,
    description: String,
  }[]
}>()
</script>

<template>
  <div class="summary">
    <h2>
      {{ title }}
    </h2>
    <div class="container">
      <div v-for="(card, index) in knowledge" :key="index" :class="{
        card: true, bbottom:
          index != knowledge.length - 1
      }">
        <h3>
          {{ card.title }}
        </h3>
        <div>
          {{ card.company && card.company + " /" }} {{ card.years }}
        </div>
        <p>
          {{ card.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.summary {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 630px;
}

h2 {
  font-size: 1.75rem;
  font-weight: 600;
}

.container {
  min-height: 754px;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  margin-top: 1rem;
  border-left: solid 1px var(--primary-soft);
  padding: 0 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
}

h3 {
  font-size: 1.3125rem;
  font-weight: 500;
}

.card>div {
  font-size: 1rem;
}

.card>p {
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text-mute);
}

.bbottom {
  padding-bottom: 1rem;
  border-bottom: solid 1px var(--color-background-soft)
}

@media only screen and (max-width: 1400px) {
  .summary {
    max-width: 530px;
  }
}
</style>
