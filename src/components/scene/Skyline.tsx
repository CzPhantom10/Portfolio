import { Building, type BuildingColor, type Roof } from './Building'

const row: { color: BuildingColor; h: number; w: number; roof: Roof; tilt: number }[] = [
  { color: 'lilac', h: 120, w: 70, roof: 'antenna', tilt: -2 },
  { color: 'coral', h: 80, w: 90, roof: 'flat', tilt: 1 },
  { color: 'sky', h: 150, w: 64, roof: 'peak', tilt: 0 },
  { color: 'sun', h: 100, w: 80, roof: 'step', tilt: -1.5 },
  { color: 'mint', h: 170, w: 72, roof: 'flag', tilt: 2 },
  { color: 'cream', h: 70, w: 96, roof: 'flat', tilt: 0 },
  { color: 'coral', h: 130, w: 66, roof: 'antenna', tilt: -1 },
  { color: 'lilac', h: 95, w: 84, roof: 'peak', tilt: 1.5 },
  { color: 'sun', h: 145, w: 70, roof: 'flat', tilt: -2 },
  { color: 'sky', h: 85, w: 90, roof: 'step', tilt: 0 },
  { color: 'mint', h: 125, w: 64, roof: 'antenna', tilt: 2 },
  { color: 'coral', h: 160, w: 76, roof: 'peak', tilt: -1 },
  { color: 'cream', h: 90, w: 80, roof: 'flag', tilt: 1 },
  { color: 'lilac', h: 140, w: 70, roof: 'flat', tilt: -1.5 },
]

/** Decorative city skyline that sits on top of the footer. */
export function Skyline() {
  return (
    <div className="relative mt-16 overflow-hidden" aria-hidden>
      <div className="flex items-end justify-center gap-3 px-2 sm:gap-4">
        {row.map((b, i) => (
          <Building
            key={i}
            color={b.color}
            height={b.h}
            width={b.w}
            roof={b.roof}
            tilt={b.tilt}
            seed={i + 3}
            cols={b.w > 80 ? 3 : 2}
            className="shrink-0"
          />
        ))}
      </div>
      <div className="h-3 border-y-[2.5px] border-ink bg-ink/80" />
    </div>
  )
}
