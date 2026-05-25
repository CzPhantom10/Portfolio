import { SectionHeader } from '../components/ui/SectionHeader'
import { person, skills } from '../data/portfolio'
import { Tag } from '../components/ui/Tag'

export function AboutPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="/about"
        title="About"
        description="Concise, technical, and focused on what recruiters care about: what you build, how you think, and what you can ship."
      />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="panel p-6">
          <h2 className="text-lg font-semibold tracking-tight">Short bio</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            I’m {person.name}, a CSE student at SRM Institute of Science and Technology.
            I build intelligent systems across AI applications, LLMs, RAG pipelines,
            and reinforcement learning. I care about grounded outputs, clean architecture,
            and shipping usable products.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            My default approach is system-first: define the problem, design the pipeline,
            measure what matters, and keep the UX crisp.
          </p>
        </div>

        <div className="panel p-6">
          <h2 className="text-lg font-semibold tracking-tight">Core focus</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {['LLMs', 'RAG', 'Reinforcement learning', 'AI systems', 'Problem solving'].map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </div>
      </div>

      <div className="panel mt-10 p-6">
        <h2 className="text-lg font-semibold tracking-tight">Skills</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <div className="text-xs font-semibold uppercase tracking-wide text-muted">
                {group}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <Tag key={s} label={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
