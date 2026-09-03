'use client'

import { useRouter } from 'next/navigation'
import { createContext, useCallback, useContext, useMemo } from 'react'

import { COOKIE_NAME, type Locale } from './config'
import { type Dictionary, dictionaries } from './dictionaries'

type I18nValue = {
  locale: Locale
  t: Dictionary
  setLocale: (l: Locale) => void
  toggleLocale: () => void
}

const I18nContext = createContext<I18nValue | null>(null)

/**
 * Seeds client components with the server-resolved locale. The locale itself
 * lives in a cookie; switching it writes the cookie and calls `router.refresh()`
 * so the server re-renders with the new language (no flash, correct SSR).
 */
export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  const router = useRouter()

  const setLocale = useCallback(
    async (l: Locale) => {
      await window.cookieStore.set({
        name: COOKIE_NAME,
        value: l,
        path: '/',
        expires: Date.now() + 31536000000,
        sameSite: 'lax',
      })
      router.refresh()
    },
    [router]
  )

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      t: dictionaries[locale],
      setLocale,
      toggleLocale: () => setLocale(locale === 'pt' ? 'en' : 'pt'),
    }),
    [locale, setLocale]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n precisa estar dentro de <I18nProvider>')
  return ctx
}
