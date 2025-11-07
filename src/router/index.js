// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, meta: { title: 'Accueil' } },
    { path: '/projects', component: () => import('../views/Projects.vue'), meta: { title: 'Nos Projets' } },
    { path: '/projects/kribi', component: () => import('../views/ProjectKribi.vue'), meta: { title: 'Port Sec de Kribi' } },
    { path: '/projects/ngaoundere', component: () => import('../views/ProjectNgaoundere.vue'), meta: { title: 'Port Sec de Ngaoundéré' } },
    {
      path: '/invest',
      redirect: (to) => {
        return { path: '/dataroom' }
      }
    },
    { path: '/dataroom', component: () => import('../views/DataRoom.vue'), meta: { title: 'Espace documentaire' } },
    { path: '/contact', component: () => import('../views/Contact.vue'), meta: { title: 'Contact' } },
    { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue'), meta: { title: '404' } }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})
