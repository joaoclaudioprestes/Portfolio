import { ArrowUpRight } from 'lucide-react'

import { profile } from '@/config/portfolio'
import { htmlLang, type Locale } from '@/i18n/config'
import type { Repo } from '@/lib/github'

import { SectionHeading } from './section-heading'

type Props = {
  label: string
  allRepos: string
  updated: string
  locale: Locale
  items: Repo[]
}

// The most recently pushed repos, straight from the GitHub API (see
// getRecentRepos). The whole row is one link. The description is GitHub's own,
// so it is single-language — unlike the curated bilingual content in
// src/content — which is the trade-off for a list that keeps itself current.
export function Repos({ label, allRepos, updated, locale, items }: Props) {
  if (items.length === 0) return null
  const fmt = new Intl.DateTimeFormat(htmlLang[locale], {
    month: 'short',
    year: 'numeric',
  })

  return (
    <section>
      <SectionHeading>{label}</SectionHeading>

      <ul className="mt-2 flex flex-col">
        {items.map(r => (
          <li key={r.name} className="border-border border-b py-4">
            <a
              href={r.url}
              target="_blank"
              rel="noopener"
              className="group flex flex-col gap-1"
            >
              <span className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <span className="font-semibold text-[15.5px] tracking-tight group-hover:opacity-70">
                  {r.name}
                </span>
                {r.language && (
                  <span className="font-mono text-[11.5px] text-muted-foreground">
                    {r.language}
                  </span>
                )}
                <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
              {r.description && (
                <span className="text-pretty text-muted-foreground text-sm">
                  {r.description}
                </span>
              )}
              <span className="font-mono text-[11px] text-muted-foreground/70">
                {updated} {fmt.format(new Date(r.pushedAt))}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href={profile.links.allRepos}
        target="_blank"
        rel="noopener"
        className="mt-4 inline-block font-mono text-[12.5px] text-muted-foreground hover:opacity-70"
      >
        {allRepos} →
      </a>
    </section>
  )
}
