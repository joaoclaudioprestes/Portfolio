/**
 * Section heading in the design style: diamond marker plus an uppercase mono
 * label. Reused by every section on the home page.
 */
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-2.5 font-medium font-mono text-[11.5px] text-muted-foreground uppercase tracking-[0.16em]">
      <span className="size-2 shrink-0 rotate-45 rounded-xs bg-primary" />
      {children}
    </h2>
  )
}
