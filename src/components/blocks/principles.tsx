import type { Dictionary } from '@/i18n/dictionaries'

import { SectionHeading } from './section-heading'

export function Principles({
  label,
  items,
}: {
  label: string
  items: Dictionary['principles']
}) {
  return (
    <section>
      <SectionHeading>{label}</SectionHeading>

      <div className="mt-5 flex flex-col gap-4">
        {items.map(pr => (
          <div key={pr.n} className="flex items-baseline gap-3">
            <span className="text-primary shrink-0 font-mono text-[11.5px]">
              {pr.n}
            </span>
            <p className="text-muted-foreground text-[15px] text-pretty">
              <strong className="text-foreground font-semibold">
                {pr.title}.
              </strong>{' '}
              {pr.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
