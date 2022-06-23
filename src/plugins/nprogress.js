import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

nprogress.configure({
  showSpinner: false
})

export default ({ router }) => {
  router.beforeEach((to, from) => {
    if (to.path !== from.path) {
      nprogress.start()
    }
  })

  router.afterEach(() => nprogress.done())
}