import { createRouter, createWebHistory } from 'vue-router'
import ContactViewVue from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactViewVue
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
