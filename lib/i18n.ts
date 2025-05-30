import de from '@/locales/de.json'
import en from '@/locales/en.json'
import th from '@/locales/th.json'

export type Locale = 'de' | 'en' | 'th'

const translations = {
  de,
  en,
  th,
}

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.de
}

export function t(locale: Locale, key: string): string {
  const keys = key.split('.')
  let value: unknown = getTranslations(locale)
  
  for (const k of keys) {
    if (typeof value === 'object' && value !== null && k in value) {
      value = (value as Record<string, unknown>)[k]
    } else {
      return key
    }
  }
  
  return typeof value === 'string' ? value : key
}