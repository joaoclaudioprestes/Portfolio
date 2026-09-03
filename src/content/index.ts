import 'server-only'

import type { Locale } from '@/i18n/config'

import { journey as rawJourney } from './journey'
import type { I18nString } from './schema'

const pick = <T>(v: { pt: T; en: T }, locale: Locale) => v[locale]
const resolve = (v: I18nString, locale: Locale) => pick(v, locale)

export type JourneyView = {
  ongoing: boolean
  company: string
  location: string
  range: string
  role: string
  mode: string
  description: string[] | undefined
}

const MODE_LABEL = {
  onsite: { pt: 'Presencial', en: 'On-site' },
  remote: { pt: 'Remoto', en: 'Remote' },
  hybrid: { pt: 'Híbrido', en: 'Hybrid' },
} as const

export function getJourney(locale: Locale): JourneyView[] {
  return [...rawJourney]
    .sort((a, b) => a.order - b.order)
    .map(j => ({
      ongoing: j.ongoing,
      company: resolve(j.company, locale),
      location: j.location,
      range: resolve(j.range, locale),
      role: resolve(j.role, locale),
      mode: pick(MODE_LABEL[j.mode], locale),
      description: j.description?.map(d => resolve(d, locale)),
    }))
}
