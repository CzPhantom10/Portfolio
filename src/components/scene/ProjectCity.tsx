import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'
import { Building, type Roof } from './Building'

const roofs: Roof[] = ['antenna', 'peak', 'flag', 'step', 'flat']
const tilts = [-2, 1.5, -1, 2, -1.5]

/** Each project is a building. Hover for its pitch, click to visit it on the projects page. */
export function ProjectCity() {
  return (
    <div className="relative">
      <div className="flex items-end justify-center gap-2 sm:gap-3">
        {projects.slice(0, 5).map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 + i * 0.08, type: 'spring', stiffness: 160, damping: 16 }}
            className="group relative min-w-0 flex-1"
          >
            <Link
              to={`/projects#${p.slug}`}
              className="block transition-transform duration-200 group-hover:-translate-y-2 focus-visible:-translate-y-2"
              aria-label={`${p.title}: ${p.tagline}`}
            >
              <Building
                color={p.color}
                height={50 + p.floors * 40}
                roof={roofs[i % roofs.length]}
                tilt={tilts[i % tilts.length]}
                seed={i + 11}
                cols={2}
              />
            </Link>

            {/* Tooltip */}
            <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-12 w-52 -translate-x-1/2 scale-95 opacity-0 transition duration-150 group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100">
              <div className="sticker px-3 py-2 text-center">
                <div className="font-display text-sm font-semibold">{p.title}</div>
                <div className="mt-0.5 text-xs leading-snug text-card-muted">{p.tagline}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Street */}
      <div className="relative h-7 rounded-b-xl border-[2.5px] border-ink bg-ink">
        <div className="absolute inset-x-3 top-1/2 h-[3px] -translate-y-1/2 bg-[repeating-linear-gradient(90deg,rgb(var(--sun))_0_18px,transparent_18px_32px)]" />
      </div>
      <p className="mt-3 text-center font-mono text-xs text-muted">
        ↑ hover a building, each one is a project
      </p>
    </div>
  )
}
