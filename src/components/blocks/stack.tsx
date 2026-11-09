import type { Dictionary } from '@/i18n/dictionaries'

import { SectionHeading } from './section-heading'
import { TechIcon } from './tech-icon'

export function Stack({
  label,
  groups,
}: {
  label: string
  groups: Dictionary['stack']
}) {
  return (
    <section>
      <SectionHeading>{label}</SectionHeading>

      <dl className="mt-5 flex flex-col gap-4">
        {groups.map(g => (
          <div
            key={g.name}
            className="flex flex-col gap-2 sm:flex-row sm:gap-3.5"
          >
            <dt className="w-26 shrink-0 pt-0.5 font-mono text-muted-foreground text-xs">
              {g.name}
            </dt>
            <dd className="flex min-w-0 flex-1 flex-wrap gap-x-3.5 gap-y-2">
              {g.items.map(t => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 font-mono text-[12.5px] text-foreground/80"
                >
                  <TechIcon name={t} />
                  {t}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
