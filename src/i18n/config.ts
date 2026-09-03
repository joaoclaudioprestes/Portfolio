export const locales = ['pt', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'pt'

/** Cookie that holds the chosen locale. Read on the server, written by the toggle. */
export const COOKIE_NAME = 'jp_lang'

/** `<html lang>` value per locale. */
export const htmlLang: Record<Locale, string> = { pt: 'pt-BR', en: 'en' }

export const isLocale = (v: unknown): v is Locale =>
  locales.includes(v as Locale)
