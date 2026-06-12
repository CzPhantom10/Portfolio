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

      <div className="panel overflow-hidden">
        <div className="divide-y divide-border/60">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-card/40 transition-colors duration-150"
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <div className="text-base font-semibold tracking-tight text-fg font-mono">{a.title}</div>
              </div>
              <div className="text-sm text-muted font-mono">{a.year}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
