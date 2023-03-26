<script setup>
  import HomePage from '../components/HomePage.vue';
  import ProjectsSection from '../components/ProjectsSection.vue';
  import ContactSection from '../components/contactSection.vue';
  import FooterSection from '../components/FooterSection.vue';
  import AboutSection from '../components/AboutSection.vue';
</script>

<template>
  <main>
    <HomePage />
    <div class="mobile-view">
      <section id="about-me">
        <AboutSection/>
      </section>
      <section id="projects">
        <ProjectsSection/>
      </section>
      <section id="contact">
        <ContactSection/>
      </section>
      <FooterSection/>
    </div>
  </main>
</template>

<style>
  main {
    height: 100%;
  }
  .mobile-view {
    display: none;
  }
  @media screen and (max-width: 550px){
    .mobile-view {
      display: flex;
      flex-direction: column;
    }
  }
</style>
