import { Mail, Phone, Code, BriefcaseBusiness, Trophy, MapPin, Terminal } from 'lucide-react'
import { SectionHeader } from '../components/ui/SectionHeader'
import { person } from '../data/portfolio'

const links = [
  { label: 'GitHub', sub: 'CzPhantom10', href: person.links.github, icon: Code, color: 'bg-lilac' },
  { label: 'LinkedIn', sub: 'prateeksinha10', href: person.links.linkedin, icon: BriefcaseBusiness, color: 'bg-sky' },
  { label: 'LeetCode', sub: '____prateek_', href: person.links.leetcode, icon: Trophy, color: 'bg-sun' },
  { label: 'HackerRank', sub: 'CzPhantom', href: person.links.hackerrank, icon: Terminal, color: 'bg-mint' },
]

export function ContactPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Contact"
        title="Let's talk"
        description="Hiring for AI/ML or data roles? I'd love to hear from you."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="sticker flex flex-col gap-4 p-6 sm:p-8">
          <a href={`mailto:${person.email}`} className="btn btn-primary !justify-start !py-3 text-base">
            <Mail className="size-5" /> {person.email}
          </a>
          <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="btn !justify-start !py-3 text-base">
            <Phone className="size-5" /> {person.phone}
          </a>
          <div className="inline-flex items-center gap-2 pt-2 font-semibold text-card-muted">
            <MapPin className="size-4" /> {person.location}
          </div>
        </div>

        <div className="grid gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="sticker sticker-hover flex items-center gap-4 p-4"
            >
              <span className={`inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border-[2.5px] border-ink ${l.color}`}>
                <l.icon className="size-5 text-ink" />
              </span>
              <div>
                <div className="font-display text-lg font-semibold">{l.label}</div>
                <div className="font-mono text-xs text-card-muted">{l.sub}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
