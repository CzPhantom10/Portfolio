import { Mail, Phone, Code, BriefcaseBusiness } from 'lucide-react'
import { SectionHeader } from '../components/ui/SectionHeader'
import { person } from '../data/portfolio'

export function ContactPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="/contact"
        title="Contact"
        description="Minimal, clean, and direct."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="panel p-6">
          <div className="text-sm font-semibold tracking-tight">Reach out</div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            If you’re hiring for AI/ML or full-stack roles involving intelligent systems,
            I’d love to connect.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a className="btn justify-start" href={`mailto:${person.email}`}>
              <Mail className="size-4" /> {person.email}
            </a>
            <a
              className="btn justify-start"
              href={`tel:${person.phone.replace(/\s/g, '')}`}
            >
              <Phone className="size-4" /> {person.phone}
            </a>
          </div>
        </div>

        <div className="panel p-6">
          <div className="text-sm font-semibold tracking-tight">Links</div>
          <div className="mt-6 grid gap-3">
            <a className="btn justify-start" href={person.links.github} target="_blank" rel="noreferrer">
              <Code className="size-4" /> GitHub
            </a>
            <a className="btn justify-start" href={person.links.linkedin} target="_blank" rel="noreferrer">
              <BriefcaseBusiness className="size-4" /> LinkedIn
            </a>
            <a className="btn justify-start" href={person.links.leetcode} target="_blank" rel="noreferrer">
              <Code className="size-4" /> LeetCode
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
