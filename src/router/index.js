import { createRouter, createWebHistory } from 'vue-router'
import nprogress from '@/plugins/nprogress'

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
      component: () => import(`../views/About.vue`)
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.middlewares) {
    const middlewares = to.meta.middlewares || []
    for (let i = 0; i < middlewares.length; i++) {
      const middleware = middlewares[i]
      await middleware(to, from, next)
    }
  } else {
    next()
  }
})

const originalPush = router.push
router.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const plugins = [
  nprogress
]

plugins.forEach(plugin => plugin({ router }))

export default router
