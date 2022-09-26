import { createRouter, createWebHistory } from 'vue-router'
import nprogress from '@/plugins/nprogress'

const lazyLoad = name => () => import(`../views/${name}.vue`)

import HomeView from '../views/home/HomeView.vue'

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
      component: lazyLoad('AboutView')
    }
  ]
})

const plugins = [
  nprogress
]

plugins.forEach(plugin => plugin({ router }))

export default router
