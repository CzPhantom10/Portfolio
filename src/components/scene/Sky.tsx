import type { Theme } from '../../lib/theme'

const clouds = [
  { top: '12%', scale: 1, duration: 90, delay: -20 },
  { top: '26%', scale: 0.7, duration: 120, delay: -75 },
  { top: '6%', scale: 0.55, duration: 150, delay: -110 },
]

const stars = Array.from({ length: 40 }, (_, i) => {
  const r = (n: number) => {
    const x = Math.sin(i * 31.7 + n * 7.1) * 10000
    return x - Math.floor(x)
  }
  return { left: `${r(1) * 100}%`, top: `${r(2) * 60}%`, size: 2 + r(3) * 3, delay: `${r(4) * 3}s` }
})

function Cloud({ scale }: { scale: number }) {
  return (
    <svg width={160 * scale} height={70 * scale} viewBox="0 0 160 70" aria-hidden>
      <path
        d="M30 60 Q8 60 10 44 Q12 30 30 32 Q32 12 56 14 Q70 0 92 12 Q112 6 120 26 Q148 24 150 44 Q152 60 130 60 Z"
        fill="rgb(var(--cream))"
        stroke="rgb(var(--ink))"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Fixed sky: gradient, sun or moon, drifting clouds by day and stars by night. */
export function Sky({ theme }: { theme: Theme }) {
  const night = theme === 'dark'

  return (
    <div className="sky pointer-events-none overflow-hidden" aria-hidden>
      {night ? (
        <>
          {stars.map((s, i) => (
            <span
              key={i}
              className="animate-twinkle absolute rounded-full bg-cream"
              style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay }}
            />
          ))}
          <div className="absolute right-[8%] top-[14%] size-20 rounded-full border-[3px] border-ink bg-cream shadow-[0_0_60px_rgb(255_249_240/0.35)] sm:size-24">
            <span className="absolute left-4 top-5 size-4 rounded-full bg-lilac/50" />
            <span className="absolute bottom-5 right-5 size-6 rounded-full bg-lilac/40" />
          </div>
        </>
      ) : (
        <>
          <div className="absolute right-[8%] top-[12%] size-20 rounded-full border-[3px] border-ink bg-sun shadow-[0_0_80px_rgb(255_200_70/0.55)] sm:size-24" />
          {clouds.map((c, i) => (
            <div
              key={i}
              className="animate-drift absolute left-0 opacity-70"
              style={{ top: c.top, animationDuration: `${c.duration}s`, animationDelay: `${c.delay}s` }}
            >
              <Cloud scale={c.scale} />
            </div>
          ))}
        </>
      )}
    </div>
  )
}
