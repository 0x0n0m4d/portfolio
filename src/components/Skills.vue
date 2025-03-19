<script setup lang="ts">
const skills = [
  {
    "skill": "Web Testing",
    "percentage": "89%",
  },
  {
    "skill": "API Testing",
    "percentage": "100%",
  },
  {
    "skill": "Pentesting",
    "percentage": "65%",
  },
  {
    "skill": "Researching",
    "percentage": "90%",
  },
  {
    "skill": "Web Development",
    "percentage": "90%",
  },
  {
    "skill": "Data Scraping",
    "percentage": "70%",
  },
]
</script>

<template>
  <div class="skills_container">
    <h2>
      My Skills
    </h2>
    <div class="skills">
      <div v-for="(skill, index) in skills" :key="index" class="skill">
        <p>
          <span>{{ skill.skill }}</span>
          <span>{{ skill.percentage }}</span>
        </p>
        <div class="percentage_line">
          <div class="percentage_fill" :style="{ width: skill.percentage }" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem 0;
}

h2 {
  font-size: 1.75rem;
  font-weight: 600;
}

.skills {
  width: 100%;
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  align-items: center;
  grid-gap: 2rem 0;
}

.skill {
  min-width: 630px;
  max-width: 630px;
  display: flex;
  flex-direction: column;
}

p {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.percentage_line {
  width: 100%;
  height: 0.5rem;
  background-color: var(--vt-white-mute);
}

.percentage_fill {
  z-index: 2;
  height: 0.5rem;
  background-color: var(--primary-soft);
}

@media only screen and (max-width: 1400px) {
  .skill {
    min-width: calc(1rem + 35vw);
    max-width: calc(1rem + 35vw);
  }
}

@media only screen and (max-width: 1198px) {
  .skill {
    min-width: calc(1rem + 33vw);
    max-width: calc(1rem + 33vw);
  }
}

@media only screen and (max-width: 993px) {
  .skill {
    min-width: calc(1rem + 30vw);
    max-width: calc(1rem + 30vw);
  }
}

@media only screen and (max-width: 815px) {
  .skills {
    grid-template-columns: 100%;
  }

  .skill {
    min-width: 100%;
  }
}
</style>
