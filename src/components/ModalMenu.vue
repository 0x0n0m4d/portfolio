<script setup lang='ts'>
import Close from "./icons/Close.vue"
import Github from "./icons/Github.vue"
import Code4 from "./icons/Code4.vue"
import PeoplePerHour from "./icons/PeoplePerHour.vue"
import THM from "./icons/THM.vue"
import HTB from "./icons/HTB.vue"

const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="modal">
    <div v-show="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-body">
          <slot name="body">
            <ul>
              <li>
                <a href="#home" class="home">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services">
                  What I Do
                </a>
              </li>
              <li>
                <a href="#portfolio">
                  Portfolio
                </a>
              </li>
            </ul>
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <a href="#github" class="git">
              <Github />
            </a>
            <a href="#code4rena" class="code4">
              <Code4 />
            </a>
            <a href="#peopleperhour" class="pph">
              <PeoplePerHour />
            </a>
            <a href="#TryHackMe" class="thm">
              <THM />
            </a>
            <a href="#HackTheBox" class="htb">
              <HTB />
            </a>
          </slot>
        </div>
      </div>
      <button class="modal-default-button" @click="$emit('close')">
        <Close />
      </button>
    </div>
  </Transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.4s ease-in-out;
}

.modal-container {
  width: 400px;
  color: var(--vt-white);
}

@keyframes body {
  0% {
    margin-bottom: 0;
    opacity: 0;
  }

  100% {
    margin-bottom: 4rem;
    opacity: 100%;
  }
}

.modal-body ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem 0px;
  margin-bottom: 4rem;
  animation-name: body;
  animation-duration: 0.3s;
}

.modal-body li {
  list-style: none;
}

.modal-body li a {
  color: var(--vt-white-mute);
  cursor: pointer;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
}

.modal-body li a:hover {
  color: var(--vt-white);
  transition: 0.5s;
}

.modal-body li .home {
  color: var(--vt-primary);
}

.modal-body li .home:hover {
  color: var(--vt-primary-soft);
  transition: 0.5s;
}

@keyframes footer {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 100%;
  }
}

.modal-footer {
  width: 100%;
  display: flex;
  gap: 0px 2rem;
  align-items: center;
  justify-content: center;
  animation-name: footer;
  animation-duration: 0.2s;
}

.modal-footer a {
  color: var(--vt-white-mute);
  text-decoration: none;
}

.modal-footer a.git:hover {
  color: #3c3836;
  transition: 0.5s
}

.modal-footer a.pph:hover {
  color: #aa1d18;
  transition: 0.5s
}

.modal-footer a.thm:hover {
  color: var(--vt-white);
  transition: 0.5s
}

.modal-footer a.htb:hover {
  color: #b8bb26;
  transition: 0.5s
}

.modal-default-button {
  display: flex;
  position: absolute;
  background-color: transparent;
  color: var(--vt-white-mute);
  border: none;
  top: 1rem;
  right: 10rem;
  cursor: pointer;
}

.modal-default-button:hover {
  color: var(--vt-white);
  transition: 0.5s;
}
</style>
