import { projects } from '../data/portfolio'
import { ProjectCard } from '../components/projects/ProjectCard'
import { SectionHeader } from '../components/ui/SectionHeader'

export function ProjectsPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="/projects"
        title="Selected work"
        description="Recruiter-friendly summaries of projects focused on intelligent systems, retrieval, and practical engineering."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}
