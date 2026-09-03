import { ArrowUpRight } from 'lucide-react'

import { profile } from '@/config/portfolio'

export function Contact({ text, cta }: { text: string; cta: string }) {
  return (
    <section className="mt-20 border-border border-t pt-8">
      <p className="mb-3.5 text-pretty text-[15.5px] text-muted-foreground">
        {text}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-3.5">
        <a
          href={`mailto:${profile.links.email}`}
          className="inline-flex items-center gap-1 border-primary border-b pb-0.5 font-mono text-[13.5px] hover:opacity-70"
        >
          {cta} <ArrowUpRight className="size-3.5" />
        </a>
        <span className="font-mono text-[11.5px] text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </span>
      </div>
    </section>
  )
}
