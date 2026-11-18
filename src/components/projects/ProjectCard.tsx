import { ArrowUpRight, Code } from 'lucide-react'
import type { Project } from '../../data/portfolio'
import { Tag } from '../ui/Tag'
import { cn } from '../../lib/cn'

const roofColor: Record<Project['color'], string> = {
  coral: 'bg-coral',
  sun: 'bg-sun',
  mint: 'bg-mint',
  lilac: 'bg-lilac',
  sky: 'bg-sky',
}

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <article id={project.slug} className="sticker sticker-hover flex h-full scroll-mt-28 flex-col overflow-hidden">
      {/* Coloured "roof" with windows */}
      <div className={cn('flex items-center justify-between border-b-[2.5px] border-ink px-5 py-3', roofColor[project.color])}>
        <div className="flex gap-1.5" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-3 rounded-[3px] border-2 border-ink bg-cream" />
          ))}
        </div>
        <span className="font-mono text-xs font-bold text-ink">
          {index !== undefined ? `#${String(index + 1).padStart(2, '0')} · ` : ''}
          {project.date}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div>
          <h3 className="font-display text-2xl font-semibold leading-tight">{project.title}</h3>
          <p className="mt-1 font-semibold text-card-muted">{project.tagline}</p>
        </div>

        <p className="text-[15px] leading-relaxed text-card-fg/90">{project.description}</p>

        <ul className="flex flex-col gap-2 text-sm leading-relaxed text-card-fg/85">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5">
              <span className={cn('mt-[7px] size-2 shrink-0 rotate-45 border-[1.5px] border-ink', roofColor[project.color])} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s} label={s} />
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2.5 pt-2">
          <a className="btn" href={project.repoUrl} target="_blank" rel="noreferrer">
            <Code className="size-4" /> Code
          </a>
          {project.demoUrl ? (
            <a className="btn btn-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
              Live demo <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
