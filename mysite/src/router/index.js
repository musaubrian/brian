import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
     path: '/github',
     beforeEnter() {location.href = 'http://github.com/musaubrian'}
    },
    {
      path: '/linkedin',
      beforeEnter() {location.href = 'https://www.linkedin.com/in/ernest-musau/'}
    },
    {
      path: '/twitter',
      beforeEnter() {location.href = 'https://twitter.com/nab__ri'}
    }
  ]
})

export default router
