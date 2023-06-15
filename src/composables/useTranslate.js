import locales from '@/locales'

// libs
import _ from 'lodash'

// utils
import renderTemplate from '@/utils/renderTemplate'

// constants
const SHOW_WARNING = false
const DEFAULT_LOCALE = 'en'
const LANGUAGES = [
  {
    text: 'English',
    value: 'en'
  },
  {
    text: 'Korean',
    value: 'kr'
  }
]

const language = useLocalStorage('language', DEFAULT_LOCALE)

const missingTranslations = ref(new Set())
export default _options => {
  const options = Object.assign({
    debug: false
  }, _options)

  const isValidLanguage = computed(() => {
    return LANGUAGES.some(x => x.value === language.value)
  })

  if (!isValidLanguage.value) {
    language.value = DEFAULT_LOCALE
  }

  function t (key, dictionary) {
    const path = `${language.value}.${key}`

    if (options.debug) {
      console.log('path', path)
    }

    const currentLocaleWord = _.get(locales, path)
    const defaultLocaleWord = _.get(locales, `${options.default_locale}.${key}`)
    const word = currentLocaleWord || defaultLocaleWord || key

    const isWordNil = _.isNil(currentLocaleWord || defaultLocaleWord)

    if (isWordNil && SHOW_WARNING) {
      missingTranslations.value.add(key)
      console.warn(`Missing translations: `, Array.from(missingTranslations.value))
    }

    return _.isEmpty(dictionary)
      ? word
      : renderTemplate(word, dictionary)
  }

  function tProperty (item, obj = {}) {
    const dictionary = {
      en: item[obj.en || 'name'],
      kr: item[obj.kr || 'kor']
    }

    const currentLocaleWord = _.get(dictionary, language.value)
    const defaultLocaleWord = _.get(dictionary, DEFAULT_LOCALE)
    const word = _.isEmpty(currentLocaleWord)
      ? defaultLocaleWord
      : currentLocaleWord

    return word
  }

  function toggle () {
    const currentIndex = LANGUAGES.findIndex(x => x.value === language.value)

    if (currentIndex === -1) {
      language.value = DEFAULT_LOCALE
      return
    }

    const nextLanguage = (currentIndex + 1) % LANGUAGES.length
    language.value = LANGUAGES[nextLanguage].value

    return
  }

  return {
    t,
    language,
    languages: LANGUAGES,
    toggle,
    tProperty
  }
}
