<script setup lang="ts">
import PeoplePerHour from "./icons/PeoplePerHour.vue"
</script>
<template>
  <section class="contact" id="contact">
    <div class="container">
      <h2>
        Let's get in touch
      </h2>
      <p>
        I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the
        most out of our first catch-up.
      </p>
      <p>
        You can contact me through the freelance platforms I am registered on.
      </p>
      <div class="icons">
        <a href="https://www.peopleperhour.com/freelancer/technology-programming/lucas-rodrigues-white-hacker-web-developer-zyzjzmjz"
          target="_blank">
          <PeoplePerHour />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  width: 100%;
  background-color: var(--vt-primary-soft);
  color: var(--vt-black);
  padding: 4rem 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 2.3rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
}

p {
  font-size: 1.3125rem;
  line-height: 1.8;
  text-align: center;
  max-width: 500px;
}

.icons {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}

a {
  width: 48px;
  height: 48px;
  color: var(--vt-black);
}

a:hover {
  width: 52px;
  height: 52px;
  color: #aa1d18;
  transition: 0.5s
}

@media only screen and (max-width: 577px) {
  h2 {
    font-size: 1.3rem;
  }

  p {
    font-size: 1rem;
  }

  a {
    width: 42px;
    height: 42px;
  }

  a:hover {
    width: 48px;
    height: 48px;
  }
}
</style>
