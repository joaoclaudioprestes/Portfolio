import 'server-only'

import type { StaticImageData } from 'next/image'
import type { Locale } from '@/i18n/config'
import { env } from '@/lib/env/client'

import { journey as rawJourney } from './journey'
import { projects as rawProjects } from './projects'
import type { I18nString } from './schema'

const pick = <T>(v: { pt: T; en: T }, locale: Locale) => v[locale]
const resolve = (v: I18nString, locale: Locale) => pick(v, locale)

export type ProjectView = {
  slug: string
  name: string
  tags: string[]
  cover: StaticImageData | undefined
  repo: string
  repoUrl: string
  summary: string
  problem: string
  did: string
}

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

const repoUrl = (repo: string) =>
  `https://github.com/${env.NEXT_PUBLIC_GITHUB_USER}/${repo}`

export function getProjects(locale: Locale): ProjectView[] {
  return [...rawProjects]
    .sort((a, b) => a.order - b.order)
    .map(p => ({
      slug: p.slug,
      name: p.name,
      tags: p.tags,
      cover: p.cover,
      repo: p.repo,
      repoUrl: repoUrl(p.repo),
      summary: resolve(p.summary, locale),
      problem: resolve(p.problem, locale),
      did: resolve(p.did, locale),
    }))
}

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
