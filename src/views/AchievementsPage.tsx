import { achievements } from '../data/portfolio'
import { SectionHeader } from '../components/ui/SectionHeader'

export function AchievementsPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="/achievements"
        title="Hackathons & achievements"
        description="Highlights that reflect execution under constraints, teamwork, and shipping end-to-end systems."
      />

      <div className="grid gap-4">
        {achievements.map((a) => (
          <div
            key={a.title}
            className="panel panel-hover p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-semibold tracking-tight">{a.title}</div>
              <div className="text-sm text-muted">{a.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
