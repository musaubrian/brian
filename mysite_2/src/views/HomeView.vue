<script setup>
  import HomePage from '../components/HomePage.vue';
  import NavBar from '../components/NavBar.vue';
  import DropDownNav from '../components/DropDownNav.vue';
</script>

<template>
  <main>
    <NavBar />
    <DropDownNav />
    <HomePage />
  </main>
</template>

<style>
  main {
    height: 100%;
  }
</style>
