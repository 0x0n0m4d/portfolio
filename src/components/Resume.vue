<script setup lang="ts">
import KnowledgeSummary from "./KnowledgeSummary.vue"
import Skills from "./Skills.vue"

const education = [
  {
    "title": "Self-Educated",
    "company": "",
    "years": "2020 - Present",
    "description": "A significant portion of my development knowledge has been acquired through hands-on experience, primarily by building small-scale projects. I’ve supplemented this practical learning by thoroughly studying language documentation, following structured tutorials, and seeking guidance from experienced professionals in the field. This combination of self-directed learning and real-world application has not only deepened my understanding but also continuously improved the quality and efficiency of my code."
  },
  {
    "title": "Smart Contract Security",
    "company": "Cyfrin",
    "years": "2024",
    "description": "The skills learned include Smart contract invariants testing, Smart contract fuzz testing, Stateless and stateful fuzzing tools, Upgradeable smart contracts, Smart contracts auditing, Cyfrin Aderyn, Manual review, Smart contracts testing"
  },
  {
    "title": "API Tester",
    "company": "APIsec University",
    "years": "2023",
    "description": "The skills learned include API reconnaissance, scanning, auditing JSON Web Tokens, performing authentication and authorization attacks, and exploiting other common API weaknesses like injection, mass assignment, and server-side request forgery."
  }
]
const experience = [
  {
    "title": "Security Researcher",
    "company": "CodeHawks",
    "years": "2023 - Present",
    "description": "I have helped protocols like Tadle become more secure by finding severe and moderate vulnerabilities."
  },
  {
    "title": "Security Researcher",
    "company": "Code4rena",
    "years": "2022 - Present",
    "description": "I have helped protocols like Revert Lend and Phi become more secure by finding severe and moderate vulnerabilities."
  },
  {
    "title": "Web Scraping",
    "company": "Freelancing",
    "years": "2024",
    "description": "I was responsible for creating a messaging bot in python for a real estate salesperson, gathering customer data such as name, email, phone number from a website, and only those who had not been contacted by other salespeople. With this data, the bot connected to WhatsApp and sent a message."
  },
  {
    "title": "Web Developer",
    "company": "Cosmópolis Imobiliária",
    "years": "2021",
    "description": "I developed a website using NextJS and TailwindCSS for this real estate company that should have features such as login and sign up, new sales postings and a purchase system.\nUnfortunately, the company no longer exists."
  },
]
</script>

<template>
  <section class="resume" id="resume">
    <div class="mark">
      Resume
    </div>
    <div class="container">
      <h2>
        A Summary of My Resume
      </h2>
      <div class="summary">
        <KnowledgeSummary title="My Education" :knowledge="education" />
        <KnowledgeSummary title="My Experience" :knowledge="experience" />
      </div>
      <div class="skills">
        <Skills />
      </div>
    </div>
  </section>
</template>

<style scoped>
.resume {
  width: 100%;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em 3.125rem;
}

.mark {
  font-size: 13px;
  line-height: 0;
  text-align: center;
  color: var(--vt-black);
  background-color: var(--vt-primary);
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

.summary {
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0 2rem;
  margin-top: 2rem;
}

.skills {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 1400px) {
  .resume {
    padding: 4rem 8.5rem;
  }
}

@media only screen and (max-width: 993px) {
  .resume {
    padding: 4rem 4.5rem;
  }

  .summary {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (max-width: 577px) {
  h2 {
    width: max-content;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--color-text);
  }
}
</style>
