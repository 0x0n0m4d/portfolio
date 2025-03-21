<script setup lang="ts">
import Github from "./icons/Github.vue"
import Code4 from "./icons/Code4.vue"
import PeoplePerHour from "./icons/PeoplePerHour.vue"
import THM from "./icons/THM.vue"
import HTB from "./icons/HTB.vue"
</script>

<template>
  <footer>
    <div class="copy">
      Copyright &#169; 2025 <a href="#home" class="home">Lucas</a>. All Rights Reserved.
    </div>
    <div class="row_icons">
      <a href="https://github.com/0x0n0m4d/" target="_blank" class="git">
        <Github />
      </a>
      <a href="https://code4rena.com/@th3l1ghtd3m0n" target="_blank" class="code4">
        <Code4 />
      </a>
      <a href="https://www.peopleperhour.com/freelancer/technology-programming/lucas-rodrigues-white-hacker-web-developer-zyzjzmjz"
        target="_blank" class="pph">
        <PeoplePerHour />
      </a>
      <a href="#TryHackMe" class="thm">
        <THM />
      </a>
      <a href="https://app.hackthebox.com/profile/1287442" target="_blank" class="htb">
        <HTB />
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--vt-black);
  color: var(--vt-white);
  width: 100%;
  padding: 2rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.copy {
  font-size: 0.8rem;
}

.home {
  font-weight: bold;
  text-decoration: underline;
  color: var(--vt-primary-soft);
}

.row_icons {
  display: flex;
  align-items: center;
  gap: 0 1rem;
}

a {
  width: 24px;
  height: 24px;
  color: var(--vt-white-mute);
  text-decoration: none;
}

a:hover {
  width: 28px;
  height: 28px;
  transition: 0.5s;
}

a.git:hover {
  color: #3c3836;
}

a.pph:hover {
  color: #aa1d18;
}

a.thm:hover {
  color: var(--vt-white);
}

a.htb:hover {
  color: #b8bb26;
}

@media only screen and (max-width: 815px) {
  footer {
    padding: 2rem 3.125rem;
  }
}

@media only screen and (max-width: 577px) {
  .copy {
    font-size: 0.5rem;
  }

  a {
    width: 20px;
    height: 20px;
  }

  a:hover {
    width: 22px;
    height: 22px;
  }
}
</style>
