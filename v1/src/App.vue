<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import DropDownNav from './components/DropDownNav.vue';
</script>

<template>
  <div>
    <NavBar/>
    <DropDownNav/>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
@import '@/assets/base.css';

#app {
  font-weight: normal;
  height: 100%;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
</style>
