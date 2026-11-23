import { ArrowUpRight, Star } from 'lucide-react'

import { profile } from '@/config/portfolio'
import { htmlLang, type Locale } from '@/i18n/config'
import type { Repo } from '@/lib/github'
import { cn } from '@/lib/utils'

import { SectionHeading } from './section-heading'

type Props = {
  label: string
  allRepos: string
  updated: string
  latest: string
  locale: Locale
  items: Repo[]
}

// GitHub's own language colours, for the dot on each card.
const LANG_COLOR: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  Kotlin: '#A97BFF',
  PHP: '#4F5D95',
  Go: '#00ADD8',
  'Jupyter Notebook': '#DA5B0B',
}

// Bento layout: the most recently pushed repo gets a full-width featured card
// (full description + GitHub topics), the rest sit in a 2-column grid. Data is
// live from the GitHub API (see getRecentRepos), so it stays current by itself.
export function Repos({
  label,
  allRepos,
  updated,
  latest,
  locale,
  items,
}: Props) {
  if (items.length === 0) return null
  const fmt = new Intl.DateTimeFormat(htmlLang[locale], {
    month: 'short',
    year: 'numeric',
  })

  return (
    <section>
      <div className="flex items-baseline justify-between gap-3">
        <SectionHeading>{label}</SectionHeading>
        <a
          href={profile.links.allRepos}
          target="_blank"
          rel="noopener"
          className="text-muted-foreground hover:text-foreground shrink-0 font-mono text-[11.5px] whitespace-nowrap"
        >
          {allRepos} →
        </a>
      </div>

      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((r, i) => {
          const featured = i === 0
          return (
            <li key={r.name} className={cn(featured && 'sm:col-span-2')}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener"
                className={cn(
                  'group border-border bg-card hover:border-primary/40 hover:shadow-primary/5 relative flex h-full flex-col gap-2 overflow-hidden rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg',
                  featured &&
                    'from-primary/10 via-card to-card gap-3 bg-linear-to-br p-5 sm:p-6'
                )}
              >
                {featured && (
                  <span className="border-primary/30 text-primary w-fit rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                    {latest}
                  </span>
                )}

                <span className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      'truncate font-semibold tracking-tight',
                      featured ? 'text-xl' : 'text-[15px]'
                    )}
                  >
                    {r.name}
                  </span>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>

                {r.description && (
                  <span
                    className={cn(
                      'text-muted-foreground text-pretty',
                      featured ? 'text-[15px]' : 'line-clamp-3 text-sm'
                    )}
                  >
                    {r.description}
                  </span>
                )}

                {featured && r.topics.length > 0 && (
                  <span className="flex flex-wrap gap-1.5">
                    {r.topics.slice(0, 8).map(t => (
                      <span
                        key={t}
                        className="bg-muted text-muted-foreground rounded-md px-2 py-0.5 font-mono text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                )}

                <span className="text-muted-foreground/80 mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 font-mono text-[11px]">
                  {r.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="bg-muted-foreground size-2 rounded-full"
                        style={
                          LANG_COLOR[r.language]
                            ? { background: LANG_COLOR[r.language] }
                            : undefined
                        }
                      />
                      {r.language}
                    </span>
                  )}
                  {r.stars > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <Star className="size-3" aria-hidden />
                      {r.stars}
                    </span>
                  )}
                  <span>
                    {updated} {fmt.format(new Date(r.pushedAt))}
                  </span>
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
