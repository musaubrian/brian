<script>
  import HomePage from '../components/HomePage.vue';
  import ProjectsSection from '../components/ProjectsSection.vue';
import ContactSection from '../components/contactSection.vue';
import FooterSection from '../components/FooterSection.vue';
  export default {
    components: { HomePage, ProjectsSection, ContactSection, FooterSection }
  }
</script>

<template>
  <main>
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
