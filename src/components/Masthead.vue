<script setup lang="ts">
import WorkWriter from "./WorkWriter.vue"
import ChevronDown from "./icons/ChevronDown.vue"
</script>

<template>
  <section class="masthead" id="home">
    <div class="container">
      <div class="greetings">
        <h1>
          HI, I'M A FREELANCER
          <b />
        </h1>
        <WorkWriter />
        <div class="links">
          <a class="portfolio" href="https://github.com/0x0n0m4d/" target="_blank">
            View My Works
          </a>
          <a class="contact" href="#contact">
            Hire Me
            <ChevronDown />
          </a>
        </div>
      </div>
      <div class="profile">
        <img width="540px" height="540px" src="@/assets/profile.jpg" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.masthead {
  background-color: var(--vt-primary-soft);
  color: var(--vt-black);
  min-height: 100vh;
  width: 100%;
  padding: 10rem 3.125rem;
  display: flex;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1320px;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  color: var(--vt-black-mute);
  font-weight: 300;
  font-size: 2.5rem;
  width: max-content;
}

.links {
  display: flex;
  gap: 0px 1.5rem;
  margin-top: 2rem;
}

.links a {
  width: max-content;
  text-decoration: none;
  padding: 0.8rem 2rem;
  font-size: 13px;
  font-weight: 500;
}

.links .portfolio {
  color: var(--vt-white-soft);
  background-color: var(--vt-black-soft);
}

.links .portfolio:hover {
  color: var(--vt-white);
  background-color: var(--vt-black);
  transition: 0.5s;
}

.links .contact {
  text-decoration: underline;
  color: var(--vt-black-soft);
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 0px 0.7rem;
}

.links .contact:hover {
  color: var(--vt-white);
  transition: 0.5s;
}

.profile img {
  border: solid 10px;
  border-color: var(--vt-white);
  border-radius: calc(infinity * 1px);
  box-shadow: 0px 5px 20px var(--vt-black);
}

@media only screen and (max-width: 1400px) {
  .masthead {
    padding: 10rem 8.5rem;
    justify-content: center;
  }

  .profile img {
    max-width: 420px;
    max-height: 420px;
  }
}

@media only screen and (max-width: 1198px) {
  .masthead {
    display: flex;
    justify-content: center;
  }

  h1 {
    text-align: start;
    font-size: calc(1rem + 2.1vw);
  }

  h2 {
    text-align: start;
    font-size: calc(1.775rem + 6.3vw);
  }

  .profile {
    display: none;
  }
}

@media only screen and (max-width: 993px) {
  .masthead {
    padding: 10rem 3.125rem;
    margin-bottom: 3rem;
  }

  .container {
    justify-content: center;
  }

  .greetings {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    text-align: center;
    font-size: calc(1.5rem + 1vw);
  }

  h2 {
    text-align: center;
    font-size: calc(3.150rem + 6.3vw);
  }

  .links {
    justify-content: center;
  }
}

@media only screen and (max-width: 577px) {
  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 3rem;
  }
}

@media only screen and (max-width: 435px) {
  .links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
