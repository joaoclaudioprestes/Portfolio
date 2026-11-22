/**
 * Section heading in the design style: diamond marker plus an uppercase mono
 * label. Reused by every section on the home page.
 */
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-muted-foreground flex items-center gap-2.5 font-mono text-[11.5px] font-medium tracking-[0.16em] uppercase">
      <span className="bg-primary size-2 shrink-0 rotate-45 rounded-xs" />
      {children}
    </h2>
  )
}
