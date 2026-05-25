import { Mail, Phone, Code, BriefcaseBusiness } from 'lucide-react'
import { person } from '../../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-pad py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-fg">{person.name}</div>
            <div className="mt-1 text-sm text-muted">Reach out — I’m open to roles and collaborations.</div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a className="btn" href={`mailto:${person.email}`}>
              <Mail className="size-4" />
              Email
            </a>
            <a className="btn" href={person.links.github} target="_blank" rel="noreferrer">
              <Code className="size-4" />
              GitHub
            </a>
            <a className="btn" href={person.links.linkedin} target="_blank" rel="noreferrer">
              <BriefcaseBusiness className="size-4" />
              LinkedIn
            </a>
            <a className="btn" href={person.links.leetcode} target="_blank" rel="noreferrer">
              <Code className="size-4" />
              LeetCode
            </a>
            <a className="btn" href={`tel:${person.phone.replace(/\s/g, '')}`}>
              <Phone className="size-4" />
              Call
            </a>
          </div>
        </div>

        <div className="mt-8 h-px w-full hairline" />

        <div className="mt-6 text-xs text-muted">
          © {new Date().getFullYear()} {person.name}. Built with React.
        </div>
      </div>
    </footer>
  )
}
