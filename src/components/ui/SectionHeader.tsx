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
    <header className="mb-10">
      <div className="eyebrow">{eyebrow}</div>
      <h1 className="headline mt-3 text-balance text-[clamp(2.4rem,7vw,4rem)] leading-[1.05]">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-pretty text-base font-medium leading-relaxed text-fg/85 sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  )
}
