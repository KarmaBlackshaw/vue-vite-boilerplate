import { createRouter, createWebHistory } from 'vue-router'
import nprogress from '@/plugins/nprogress'

const lazyLoad = name => () => import(`../views/${name}.vue`)

import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: lazyLoad('About')
    }
  ]
})

const plugins = [
  nprogress
]

plugins.forEach(plugin => plugin({ router }))

export default router
