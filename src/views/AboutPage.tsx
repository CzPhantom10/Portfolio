import { GraduationCap } from 'lucide-react'
import { SectionHeader } from '../components/ui/SectionHeader'
import { education, person, skills } from '../data/portfolio'
import { Tag } from '../components/ui/Tag'

const groupColor = ['bg-coral text-cream', 'bg-mint', 'bg-sun', 'bg-lilac']

export function AboutPage() {
  return (
    <div>
      <SectionHeader eyebrow="About" title="A bit about me" />

      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="sticker space-y-4 p-6 sm:p-8">
          {person.bio.map((p) => (
            <p key={p} className="text-[17px] leading-relaxed text-card-fg/90">
              {p}
            </p>
          ))}
        </div>

        <div className="sticker flex flex-col gap-3 p-6 sm:p-8">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl border-[2.5px] border-ink bg-sky">
            <GraduationCap className="size-5 text-ink" />
          </span>
          <div className="font-display text-xl font-semibold">{education.school}</div>
          <div className="text-card-muted">{education.degree}</div>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="chip">CGPA {education.cgpa}</span>
            <span className="chip">{education.startYear} to {education.endYear}</span>
            <span className="chip">{education.place}</span>
          </div>
        </div>
      </div>

      <h2 className="headline mt-20 text-3xl sm:text-4xl">Toolbox</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([group, items], i) => (
          <div key={group} className="sticker p-6">
            <span className={`inline-block rounded-full border-[2.5px] border-ink px-3 py-1 font-display text-sm font-semibold ${groupColor[i % groupColor.length]}`}>
              {group}
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((s) => (
                <Tag key={s} label={s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
