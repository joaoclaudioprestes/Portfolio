import type { Dictionary } from '@/i18n/dictionaries'

import { SectionHeading } from './section-heading'

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

      <dl className="mt-5 flex flex-col gap-3">
        {groups.map(g => (
          <div
            key={g.name}
            className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1"
          >
            <dt className="w-26 shrink-0 font-mono text-muted-foreground text-xs">
              {g.name}
            </dt>
            <dd className="min-w-0 flex-1 font-mono text-[13.5px]">{g.line}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
