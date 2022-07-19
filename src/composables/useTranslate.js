import _get from 'lodash/get'
import _isNil from 'lodash/isNil'

export default moduleName => {
  const language = useLocalStorage('language', 'en')

  const modules = import.meta.glob(`@/translations/*/*.js`)

  console.log(modules)

  // function t (key) {
  //   const word = _get(source, [language, key])

  //   if (_isNil(word)) {
  //     console.warn(`Translation for "${key}" is not found.`)
  //   }

  //   return word
  // }

  // return {
  //   t
  // }
  return {}
}