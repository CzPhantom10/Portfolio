import { ArrowUpRight, Code } from 'lucide-react'
import type { Project } from '../../data/portfolio'
import { Tag } from '../ui/Tag'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel rounded-[24px] group p-8 sm:p-10 transition-all duration-300 hover:border-accent hover:bg-[#17151c] flex flex-col justify-between h-full">
      <div className="flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-fg group-hover:text-accent transition-colors font-mono">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{project.tagline}</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              className="btn h-9 w-9 px-0 rounded-xl border-border/80 hover:border-accent/80 hover:text-accent bg-bg/40"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              title="Repository"
            >
              <Code className="size-4" />
            </a>
            {project.demoUrl ? (
              <a
                className="btn h-9 w-9 px-0 rounded-xl border-border/80 hover:border-accent/80 hover:text-accent bg-bg/40"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                title="Live / Demo"
              >
                <ArrowUpRight className="size-4" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s} label={s} />
          ))}
        </div>

        <p className="text-sm sm:text-[15px] leading-relaxed text-muted/95 mt-1">
          {project.description}
        </p>

        <ul className="flex flex-col gap-2.5 text-sm text-muted/90 sm:text-[14px] font-mono mt-1">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 items-start">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#a78bfa]" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between border-t border-border/50 pt-5 mt-6">
        <span className="text-xs font-mono text-muted/80 flex items-center gap-1.5 uppercase">
          <span className="size-1.5 rounded-full bg-[#a78bfa] animate-pulse" /> PRODUCTION_READY
        </span>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-gradient hover:opacity-80 transition-opacity"
        >
          EXPLORE CODE <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </article>
  )
}
