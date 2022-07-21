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

export default _options => {
  const options = Object.assign({
    default_locale: 'en',
    debug: false
  }, _options)

  const language = useLocalStorage('language')

  function t (key, dictionary) {
    const keySplit = key.split('.')

    const path = [language.value, ...keySplit]
    const pathCacheKey = path.join('.')

    if (options.debug) {
      console.log('path', path)
      console.log('pathCacheKey', pathCacheKey)
    }

    if (cache.has(pathCacheKey)) {
      return cache.get(pathCacheKey)
    }

    const word = _get(
      locales,
      pathCacheKey,
      _get(locales, [options.default_locale, ...keySplit], key) // fallback
    )

    /**
     * Only cache if dictionary is empty
     * because locales with dictionary is
     * dynamic
     */
    const isWordNil = _isNil(word)
    if (!isWordNil && _isEmpty(dictionary)) {
      cache.set(pathCacheKey, word)
    }

    if (isWordNil) {
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