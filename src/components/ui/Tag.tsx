export function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/70 bg-bg/35 px-3 py-1 text-[11px] font-medium tracking-wide text-muted">
      {label}
    </span>
  )
}
