import { Mail, Code, BriefcaseBusiness } from 'lucide-react'
import { person } from '../../data/portfolio'
import { Skyline } from '../scene/Skyline'

export function Footer() {
  return (
    <footer>
      <Skyline />
      <div className="bg-ink text-cream">
        <div className="container-pad flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-display text-xl font-semibold">{person.name}</div>
            <div className="mt-1 text-sm text-cream/70">
              Open to AI/ML and data roles. Say hi!
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a className="btn" href={`mailto:${person.email}`}>
              <Mail className="size-4" /> Email
            </a>
            <a className="btn" href={person.links.github} target="_blank" rel="noreferrer">
              <Code className="size-4" /> GitHub
            </a>
            <a className="btn" href={person.links.linkedin} target="_blank" rel="noreferrer">
              <BriefcaseBusiness className="size-4" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="container-pad pb-8 text-xs text-cream/50">
          © {new Date().getFullYear()} {person.name}
        </div>
      </div>
    </footer>
  )
}
