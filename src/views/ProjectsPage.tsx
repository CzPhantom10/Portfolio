import { projects } from '../data/portfolio'
import { ProjectCard } from '../components/projects/ProjectCard'
import { SectionHeader } from '../components/ui/SectionHeader'

export function ProjectsPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Projects"
        title="Things I've built"
        description="Applied AI, retrieval, fine tuning, analytics and reinforcement learning. Each one measured, not just demoed."
      />

      <div className="grid gap-7 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  )
}
