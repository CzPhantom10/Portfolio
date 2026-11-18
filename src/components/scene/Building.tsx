import { cn } from '../../lib/cn'

export type BuildingColor = 'coral' | 'sun' | 'mint' | 'lilac' | 'sky' | 'cream'
export type Roof = 'flat' | 'antenna' | 'peak' | 'step' | 'flag'

const fill: Record<BuildingColor, string> = {
  coral: 'bg-coral',
  sun: 'bg-sun',
  mint: 'bg-mint',
  lilac: 'bg-lilac',
  sky: 'bg-sky',
  cream: 'bg-cream',
}

/** Small deterministic hash so lit windows stay stable between renders. */
function lit(seed: number, i: number) {
  const x = Math.sin(seed * 97.13 + i * 13.37) * 10000
  return x - Math.floor(x) > 0.45
}

export function Building({
  color,
  height,
  width,
  roof = 'flat',
  seed = 1,
  tilt = 0,
  cols = 3,
  className,
}: {
  color: BuildingColor
  height: number
  /** Fixed pixel width; omit to fill the parent */
  width?: number
  roof?: Roof
  seed?: number
  tilt?: number
  cols?: number
  className?: string
}) {
  const rows = Math.max(1, Math.floor((height - 24) / 26))
  const windows = Array.from({ length: rows * cols }, (_, i) => i)

  return (
    <div
      className={cn('relative flex flex-col items-center', className)}
      style={{ width: width ?? '100%', transform: `rotate(${tilt}deg)`, transformOrigin: 'bottom center' }}
    >
      {roof === 'antenna' && (
        <div className="relative h-7 w-[3px] bg-ink">
          <span className="absolute -left-[5px] -top-2 size-3 rounded-full border-2 border-ink bg-coral" />
        </div>
      )}
      {roof === 'flag' && (
        <div className="relative h-8 w-[3px] self-start ml-4 bg-ink">
          <span className="absolute left-[3px] top-0 h-3.5 w-5 border-2 border-ink bg-sun" />
        </div>
      )}
      {roof === 'peak' && (
        <div
          className="h-7 w-full bg-ink"
          style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)', marginBottom: -2 }}
        />
      )}
      {roof === 'step' && (
        <div className={cn('h-4 w-[55%] rounded-t-md border-[2.5px] border-b-0 border-ink', fill[color])} style={{ filter: 'brightness(var(--building-shade))' }} />
      )}

      <div
        className={cn('relative w-full rounded-t-[6px] border-[2.5px] border-b-0 border-ink', fill[color])}
        style={{ height, filter: 'brightness(var(--building-shade))' }}
      >
        <div
          className="grid gap-x-2 gap-y-[10px] px-2.5 pt-3"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {windows.map((i) => (
            <span
              key={i}
              className="h-4 rounded-[3px] border-2 border-ink/80"
              style={{
                background: lit(seed, i) ? 'rgb(var(--window-on))' : 'rgb(var(--window-off))',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
