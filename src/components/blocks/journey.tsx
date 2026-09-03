import { Badge } from '@/components/ui/badge'
import type { JourneyView } from '@/content'

import { SectionHeading } from './section-heading'

// ponytail: group consecutive entries at the same company so they share one
// bordered block (no divider between them). Each role still carries its own
// company · city · mode line under the title.
function groupByCompany(items: JourneyView[]): JourneyView[][] {
  const groups: JourneyView[][] = []
  for (const item of items) {
    const last = groups[groups.length - 1]
    if (last && last[0].company === item.company) last.push(item)
    else groups.push([item])
  }
  return groups
}

export function Journey({
  label,
  nowLabel,
  items,
}: {
  label: string
  nowLabel: string
  items: JourneyView[]
}) {
  return (
    <section>
      <SectionHeading>{label}</SectionHeading>

      <div className="mt-2 flex flex-col">
        {groupByCompany(items).map(group => (
          <div
            key={`${group[0].company}-${group[0].range}`}
            className="flex flex-col gap-3.5 border-border border-b py-3.5"
          >
            {group.map(j => (
              <div
                key={`${j.range}-${j.role}`}
                className="flex flex-col gap-1.5"
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="w-28 shrink-0 font-mono text-muted-foreground text-xs">
                    {j.range}
                  </span>
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                      <span className="font-semibold text-[15.5px] tracking-tight">
                        {j.role}
                      </span>
                      {j.ongoing && (
                        <Badge
                          variant="outline"
                          className="border-primary/30 font-mono text-[10px] text-primary uppercase tracking-widest"
                        >
                          {nowLabel}
                        </Badge>
                      )}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {j.company}
                      <span className="text-muted-foreground/70">
                        {` · ${j.location} · ${j.mode}`}
                      </span>
                    </div>
                  </div>
                </div>
                {j.description && (
                  <ul className="ml-32 list-disc space-y-1 pl-4 text-muted-foreground text-sm marker:text-muted-foreground/40">
                    {j.description.map(d => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
