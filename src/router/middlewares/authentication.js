import _ from 'lodash'

export default type => {
  return async (to, from, next) => {
    const authStore = useAuthStore()
    const token = localStorage.token

    if (!token || token.value === 'undefined') {
      return next({ name: 'login' })
    }

    if (token && !authStore.auth.id) {
      await authStore.getAuth()
    }

    const types = _.castArray(type)

    const isAuthorized = types.includes(authStore.auth.auth_type)

    if (isAuthorized) {
      return next()
    }

    const fromName = _.get(from, 'name')
    return next({ name: fromName })

  }
}