import type { Dictionary } from '@/i18n/dictionaries'
import { getContributions } from '@/lib/github'

import { SectionHeading } from './section-heading'

// Contribution level (0-4) mapped to an accent tint. GitHub greys these out;
// here they ride the site's primary colour so the block matches the page.
const LEVEL = [
  'bg-muted',
  'bg-primary/25',
  'bg-primary/45',
  'bg-primary/70',
  'bg-primary',
] as const

const DAY_MS = 86_400_000

type Props = { label: string; ui: Dictionary['ui']; year?: number }

export async function GithubActivity({ label, ui, year }: Props) {
  const y = year ?? new Date().getUTCFullYear()
  const data = await getContributions(y)
  if (!data) return null

  // getContributions never returns an empty day list, so days[0] is safe.
  // GitHub's calendar is a 7-row grid that always starts on a Sunday, so pad
  // the front with blank cells for the weekdays before the first entry.
  const first = new Date(`${data.days[0].date}T00:00:00Z`)
  const offset = first.getUTCDay()
  const pad = Array.from({ length: offset }, (_, i) =>
    new Date(first.getTime() - (offset - i) * DAY_MS).toISOString().slice(0, 10)
  )

  return (
    <section>
      <SectionHeading>
        {label} · {y}
      </SectionHeading>

      <div className="mt-5 overflow-x-auto">
        <div className="grid grid-flow-col grid-rows-7 gap-0.75">
          {pad.map(key => (
            <span key={key} className="size-2" />
          ))}
          {data.days.map(d => (
            <span
              key={d.date}
              title={`${d.date}: ${d.count}`}
              className={`size-2 rounded-full ${LEVEL[d.level] ?? LEVEL[0]}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[11.5px] text-muted-foreground">
        <span>
          {data.total.toLocaleString()} {ui.contributions} {y}
        </span>
        <span className="flex items-center gap-1.5">
          {ui.less}
          {LEVEL.map(c => (
            <span key={c} className={`size-2 rounded-full ${c}`} />
          ))}
          {ui.more}
        </span>
      </div>
    </section>
  )
}
