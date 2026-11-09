import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import type { JourneyView } from '@/content'
import { cn } from '@/lib/utils'

import { SectionHeading } from './section-heading'

// Company logo. White tile + object-contain so transparent or non-square marks
// (e.g. a coat of arms) stay legible in dark mode.
function Logo({ src, className }: { src: string; className?: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={40}
      height={40}
      className={cn('shrink-0 rounded-sm bg-white object-contain', className)}
    />
  )
}

// Résumé rows: date column | role · company (with logo), then all bullets.
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

      <ol className="mt-5 flex flex-col gap-6">
        {items.map(j => (
          <li
            key={`${j.company}-${j.range}`}
            className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:gap-4"
          >
            <span className="pt-0.5 font-mono text-[11.5px] text-muted-foreground">
              {j.range}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-semibold text-[15px] tracking-tight">
                  {j.role}
                </span>
                <span className="text-muted-foreground/60">·</span>
                <span className="inline-flex items-center gap-1.5 self-center text-[15px] text-muted-foreground">
                  {j.logo && <Logo src={j.logo} className="size-4.5" />}
                  {j.company}
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
              <span className="font-mono text-[11px] text-muted-foreground/70">
                {j.location} · {j.mode}
              </span>
              {j.description && (
                <ul className="mt-2 list-disc space-y-1 pl-4 text-muted-foreground text-sm marker:text-muted-foreground/40">
                  {j.description.map(d => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
