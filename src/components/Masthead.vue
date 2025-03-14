<script setup lang="ts">
import ChevronDown from "./icons/ChevronDown.vue"
</script>

<template>
  <section class="masthead">
    <div class="container">
      <div class="greetings">
        <h1>
          HI, I'M A FREELANCER
          <b />
        </h1>
        <h2>
          HACKER
        </h2>
        <div class="links">
          <a class="portfolio" href="#portfolio">
            View My Works
          </a>
          <a class="contact" href="#contact">
            Hire Me
            <ChevronDown />
          </a>
        </div>
      </div>
      <div class="profile">
        <img width="540px" height="540px" src="@/assets/profile.png" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.masthead {
  background-color: var(--primary-soft);
  color: var(--vt-black);
  min-height: 100vh;
  width: 100%;
  padding: 0px 3.125rem;
  padding-bottom: 10rem;
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
  font-weight: 100;
  font-size: 2rem;
  width: max-content;
}

h2 {
  color: var(--vt-black-soft);
  font-weight: 600;
  font-size: 5rem;
  line-height: 1.3;
  margin-left: -.25rem !important;
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
  font-weight: bold;
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
    padding: 0px 8.5rem;
    padding-bottom: 10rem;
    justify-content: center;
  }

  .profile img {
    max-width: 420px;
    max-height: 420px;
  }
}

@media only screen and (max-width: 1198px) {
  .masthead {
    padding: 0px 8.5rem;
    padding-bottom: 10rem;
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

  .profile img {
    max-width: calc(18.125rem + 6.3vw);
    max-height: calc(18.125rem + 6.3vw);
  }
}

@media only screen and (max-width: 993px) {
  .masthead {
    margin-bottom: 3rem;
  }

  .container {
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

  .profile {
    display: none;
  }
}

@media only screen and (max-width: 396px) {
  .links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
