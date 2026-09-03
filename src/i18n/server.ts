import 'server-only'

import { cookies } from 'next/headers'

import { COOKIE_NAME, defaultLocale, isLocale, type Locale } from './config'
import { dictionaries } from './dictionaries'

/** Current locale from the cookie, falling back to the default. */
export async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get(COOKIE_NAME)?.value
  return isLocale(value) ? value : defaultLocale
}

/** UI dictionary for the current locale. */
export async function getDict() {
  return dictionaries[await getLocale()]
}
