import { Award, Trophy } from 'lucide-react'
import { achievements, certifications } from '../data/portfolio'
import { SectionHeader } from '../components/ui/SectionHeader'

const badge = ['bg-sun', 'bg-coral text-cream', 'bg-mint']

export function AchievementsPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Wins"
        title="Hackathons & certs"
        description="Building under time pressure, with a team, end to end."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map((a, i) => (
          <div key={a.title} className="sticker sticker-hover flex flex-col gap-3 p-6">
            <span className={`inline-flex size-12 items-center justify-center rounded-2xl border-[2.5px] border-ink ${badge[i % badge.length]}`}>
              <Trophy className="size-5" />
            </span>
            <div className="font-display text-4xl font-bold">{a.rank}</div>
            <div className="font-semibold">{a.title}</div>
            <div className="text-sm text-card-muted">{a.detail}</div>
            <div className="mt-auto font-mono text-xs text-card-muted">{a.year}</div>
          </div>
        ))}
      </div>

      <h2 className="headline mt-20 text-3xl sm:text-4xl">Certifications</h2>
      <div className="sticker mt-6 divide-y-2 divide-dashed divide-ink/25 overflow-hidden">
        {certifications.map((c) => (
          <div key={c.title} className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Award className="size-5 shrink-0 text-coral" />
              <div>
                <div className="font-semibold">{c.title}</div>
                <div className="text-sm text-card-muted">{c.issuer}</div>
              </div>
            </div>
            <span className="chip self-start sm:self-auto">{c.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
