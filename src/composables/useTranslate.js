// libs
import _get from 'lodash/get'
import _isNil from 'lodash/isNil'
import _isEmpty from 'lodash/isEmpty'

// utils
import {
  template
} from '@/utils/string'

const locales = (() => {
  const files = import.meta.globEager('../locales/*.json')
  const localesMap = {}
  for (const filename in files) {
    const translations = files[filename].default
    const language = filename.match(/(\w+)\.json$/)[1]
    localesMap[language] = translations
  }
  return localesMap
})()

const cache = new Map()

const language = useLocalStorage('language')

export default _options => {
  const options = Object.assign({
    default_locale: 'en',
    debug: false,
    show_warning: true
  }, _options)

  function t (key, dictionary) {
    const path = `${language.value}.${key}`

    if (options.debug) {
      console.log('path', path)
    }

    if (cache.has(path)) {
      return cache.get(path)
    }

    const word = _get(
      locales,
      path,
      _get(locales, `${options.default_locale}.${key}`, key) // fallback
    )

    /**
     * Only cache if dictionary is empty
     * because locales with dictionary is
     * dynamic
     */
    const isWordNil = _isNil(word)
    if (!isWordNil && _isEmpty(dictionary)) {
      cache.set(path, word)
    }

    if (isWordNil && options.show_warning) {
      console.warn(`Translation for "${key}" is not found.`)
    }

    return _isEmpty(dictionary)
      ? word
      : template(word, dictionary)
  }

  return {
    t,
    language
  }
}