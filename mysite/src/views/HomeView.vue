<script>
  import HomePage from '../components/HomePage.vue';
  import NavBar from '../components/NavBar.vue';
  import DropDownNav from '../components/DropDownNav.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import ContactSection from '../components/contactSection.vue';
import FooterSection from '../components/FooterSection.vue';
  export default {
    components: { HomePage, NavBar, DropDownNav, ProjectsSection, ContactSection, FooterSection }
  }
</script>

<template>
  <main>
    <NavBar />
    <DropDownNav />
    <HomePage />
    <ProjectsSection/>
    <ContactSection/>
    <FooterSection/>
  </main>
</template>

<style>
  main {
    height: 100%;
  }
</style>
