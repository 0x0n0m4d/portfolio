<script setup lang="ts">
import ServiceCard from "./ServiceCard.vue"

import MrRobot from "./icons/MrRobot.vue"
import Development from "./icons/Development.vue"
import Scrape from "./icons/Scrape.vue"
import Research from "./icons/Research.vue"

const components = [
  {
    "icon": MrRobot,
    "title": "Cybersecurity",
    "content": "I specialize in securing web applications and systems through penetration testing, vulnerability assessments, and robust defense strategies. With hands-on experience on platforms like Hack The Box and TryHackMe, I can provide customized solutions to protect your products from threats.",
  },
  {
    "icon": Development,
    "title": "Web Development",
    "content": "I build dynamic and easy-to-use websites and web applications using modern technologies like Next.js, Vue.js and Docker. With over 5 years of experience building small-scale projects, I can build clean, efficient, and scalable applications tailored to your needs."
  },
  {
    "icon": Scrape,
    "title": "Data Scraping",
    "content": "I specialize in extracting and organizing data from websites and online sources using efficient and ethical scraping techniques like ip rotation and captcha/cloudflare bypassing. With expertise in programming languages, I can deliver clean, structured, and actionable datasets to support your business needs."
  },
  {
    "icon": Research,
    "title": "Code Researching",
    "content": "I specialize in in-depth research, particularly in blockchain technology and smart contracts. With hands-on experience in Solidity and a proven track record in competitive environments like Code4rena, I can deliver actionable insights and innovative solutions to complex problems."
  }
]
</script>

<template>
  <section class="services" id="services">
    <div class="mark">
      Services
    </div>
    <div class="container">
      <h2>
        How I can help your next project
      </h2>
      <div class="box">
        <div>
          <div v-for="component in components">
            <ServiceCard :icon="component.icon" :title="component.title" :content="component.content" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  transition: background-color 0.1s;
  transition: color 0.5s;
}

.services {
  width: 100%;
  background-color: var(--color-background-soft);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 3.125rem;
}

.mark {
  font-size: 13px;
  line-height: 0;
  text-align: center;
  color: var(--vt-black);
  background-color: var(--vt-primary-soft);
  padding: 0.7rem 0.7rem;
}

.container {
  width: 100%;
  max-width: 1320px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  width: max-content;
  font-size: 2.3rem;
  font-weight: 600;
  color: var(--color-text);
}

.box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
}

.box>div {
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  align-items: center;
  grid-gap: 5rem 15rem;
}

@media only screen and (max-width: 1400px) {
  .services {
    padding: 4rem 8.5rem;
  }

  .box>div {
    grid-gap: 3rem 10rem;
  }
}

@media only screen and (max-width: 1198px) {
  .box>div {
    grid-gap: 3rem 5rem;
  }
}

@media only screen and (max-width: 993px) {
  h2 {
    font-size: calc(1.175rem + 1.3vw);
  }
}

@media only screen and (max-width: 815px) {
  .box>div {
    grid-template-columns: max-content;
  }
}
</style>
