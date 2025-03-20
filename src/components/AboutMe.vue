<script setup lang="ts">
const footData = {
  "Name": "Lucas Rodrigues",
  "Email": "0x0.n.0.m.4.d@gmail.com",
  "Date of birth": "07 July, 2003",
  "From": "Brazil, SP"
}
</script>

<template>
  <section class="about_me" id="about">
    <div class="mark">
      About Me
    </div>
    <div class="container">
      <h2>
        Know Me More
      </h2>
      <div class="content">
        <div class="presentation">
          <h3>
            Hi, I'm <span class="highlight">Lucas Rodrigues</span>
          </h3>
          <p class="about">
            I’m a cybersecurity enthusiast with a strong focus on web security, starting my journey in 2021. I’ve honed
            my skills through platforms like Hack The Box, where I’ve achieved a high rank, and I’ve also earned
            bounties in competitive environments like Code4rena.
          </p>
          <p class="about">
            Throughout my journey, I've been committed to delivering high-quality code and ensuring security and
            project
            success. I'm excited to continue this journey, eager to embrace new challenges, and always open to new
            opportunities, collaborations, and discussions within the tech and software development community.
            I'm quiet confident, naturally curious and perpetually working on improving my skills.
          </p>
        </div>
        <div class="experience">
          <div class="years">
            <span>
              4
            </span>
          </div>
          <span class="text">Years of <b>Experiance</b></span>
        </div>
      </div>
      <div class="foot">
        <ul>
          <li v-for="(value, key) in footData" :key="key">
            <div class="key">
              {{ key }}:
            </div>
            <div class="value">
              <b>{{ value }}</b>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about_me {
  width: 100%;
  background-color: var(--color-background);
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

.content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
}

.presentation {
  display: flex;
  flex-direction: column;
  max-width: 850px;
}

h2 {
  font-size: 2.3rem;
  font-weight: 600;
  color: var(--color-text);
}

h3 {
  width: max-content;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.highlight {
  border-bottom: solid 1px;
  border-color: var(--primary);
  font-weight: 700;
}

.about {
  font-size: 1.2rem;
  line-height: 1.8;
}

.experience {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.years {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.5rem;
  height: 6.5rem;
  background-color: var(--primary);
  border-radius: calc(infinity * 1px);
}

.years span {
  font-size: 9rem;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 0;
  text-align: center;
  color: var(--color-text-soft);
}

.experience .text {
  margin-top: 2rem;
  font-size: 1.75rem;
}

.text {
  min-width: max-content;
}

b {
  font-weight: bolder;
}

.foot {
  margin-top: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

li {
  list-style: none;
}

.key {
  font-size: 13px;
}

.value {
  font-size: 15px;
}

@media only screen and (max-width: 1400px) {
  .about_me {
    padding: 4rem 8.5rem;
  }

  .presentation {
    max-width: 100px,
  }
}

@media only screen and (max-width: 1198px) {
  .content {
    flex-direction: column-reverse;
    gap: 3rem 0px;
  }
}

@media only screen and (max-width: 993px) {
  .presentation {
    justify-content: center;
    align-items: center;
  }

  .about {
    text-align: center;
  }

  .foot {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  ul {
    width: 100%;
    display: inline-grid;
    grid-template-columns: max-content max-content;
    gap: 1rem 0rem;
    align-items: center;
  }

  .key {
    font-size: 10px;
  }

  .value {
    font-size: 13px;
  }
}
</style>
