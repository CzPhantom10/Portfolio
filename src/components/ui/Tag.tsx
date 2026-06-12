export function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border/80 bg-card/60 px-2.5 py-1 text-[11px] font-mono tracking-wide text-muted">
      {label}
    </span>
  )
}
