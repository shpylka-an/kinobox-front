import polyglotI18nProvider from 'ra-i18n-polyglot'
import defaultMessages from 'ra-language-english'

export default polyglotI18nProvider((locale) => {
  return defaultMessages
})