export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <header className="mb-8">
      <div className="terminal-pill">
        <span className="text-accent">●</span>
        <span>{eyebrow}</span>
      </div>
      <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </header>
  )
}
