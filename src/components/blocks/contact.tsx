import { ArrowUpRight } from 'lucide-react'

import { profile } from '@/config/portfolio'

export function Contact({ text, cta }: { text: string; cta: string }) {
  return (
    <section className="border-border mt-20 border-t pt-8">
      <p className="text-muted-foreground mb-3.5 text-[15.5px] text-pretty">
        {text}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-3.5">
        <a
          href={`mailto:${profile.links.email}`}
          className="border-primary inline-flex items-center gap-1 border-b pb-0.5 font-mono text-[13.5px] hover:opacity-70"
        >
          {cta} <ArrowUpRight className="size-3.5" />
        </a>
        <span className="text-muted-foreground font-mono text-[11.5px]">
          © {new Date().getFullYear()} {profile.name}
        </span>
      </div>
    </section>
  )
}
