import { ArrowUpRight, Code } from 'lucide-react'
import type { Project } from '../../data/portfolio'
import { Tag } from '../ui/Tag'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel panel-hover group p-5 sm:p-6">
      <div className="flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-1 text-sm text-muted">{project.tagline}</p>
          </div>

          <div className="flex items-center gap-2">
          <a
            className="btn h-10 w-10 px-0"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} repository`}
            title="Repository"
          >
            <Code className="size-4" />
          </a>
          {project.demoUrl ? (
            <a
              className="btn h-10 w-10 px-0"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} demo`}
              title="Live / Demo"
            >
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Tag key={s} label={s} />
          ))}
        </div>

        <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
          {project.description}
        </p>

        <div className="h-px w-full hairline opacity-70" />

        <ul className="grid gap-2 text-sm text-muted sm:grid-cols-2 sm:text-[15px]">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent/60" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition group-hover:text-fg"
          >
            View code <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </article>
  )
}
