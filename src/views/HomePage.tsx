import { ArrowRight, Download, Code, BriefcaseBusiness, ImageOff } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { featuredProject, person } from '../data/portfolio'
import { ProjectCard } from '../components/projects/ProjectCard'

export function HomePage() {
  const [profileOk, setProfileOk] = useState(true)
  const profileSrc = useMemo(
    () => `${import.meta.env.BASE_URL}profile.jpg`,
    [],
  )
  const resumeHref = useMemo(
    () => `${import.meta.env.BASE_URL}resume.pdf`,
    [],
  )

  const [headlineLine1, headlineLine2] = useMemo(() => {
    const raw = person.headline.trim()
    const commaIndex = raw.indexOf(',')
    if (commaIndex === -1) return [raw, '']
    const line1 = `${raw.slice(0, commaIndex + 1)}`
    const line2 = raw.slice(commaIndex + 1).trim()
    return [line1, line2]
  }, [])

  return (
    <div className="space-y-20 sm:space-y-24">
      <section className="grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="pt-1">
          <div className="terminal-pill">
            <span className="text-accent">$</span>
            <span className="font-mono">{person.terminalIntro}</span>
          </div>

          <h1 className="display mt-6 text-[clamp(2.4rem,8vw,3.75rem)] font-semibold leading-[1.05] sm:text-7xl">
            <span className="block">{headlineLine1}</span>
            {headlineLine2 ? <span className="block">{headlineLine2}</span> : null}
          </h1>
          <p className="mt-6 measure text-pretty text-[15px] leading-relaxed text-muted sm:text-lg">
            {person.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="btn btn-primary">
              View projects <ArrowRight className="size-4" />
            </Link>
            <Link to="/contact" className="btn">
              Contact
            </Link>
            <a className="btn" href={resumeHref} target="_blank" rel="noreferrer">
              Resume <Download className="size-4" />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a className="btn" href={person.links.github} target="_blank" rel="noreferrer">
              <Code className="size-4" /> GitHub
            </a>
            <a
              className="btn"
              href={person.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <BriefcaseBusiness className="size-4" /> LinkedIn
            </a>
          </div>

          <div className="panel mt-12 p-6">
            <div className="eyebrow">Terminal</div>
            <div className="mt-3 font-mono text-sm text-fg">
              <span className="text-accent">$</span> {person.terminalIntro}
            </div>
            <div className="mt-2 font-mono text-sm text-muted">{person.terminalOutput}</div>
          </div>
        </div>

        <div className="relative lg:pt-8">
          <div
            className="pointer-events-none absolute -inset-6 -z-10 opacity-70"
            style={{
              background:
                'radial-gradient(700px circle at 40% 10%, hsl(var(--accent) / 0.22), transparent 60%), radial-gradient(520px circle at 70% 70%, hsl(var(--fg) / 0.06), transparent 62%)',
              filter: 'blur(18px)',
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="panel rounded-[2rem] p-7"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="eyebrow">Profile</div>
                <div className="mt-2 text-sm font-semibold tracking-tight">{person.name}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-accent/80" />
                <span className="text-xs text-muted">Available</span>
              </div>
            </div>

            <div className="mt-7 overflow-hidden rounded-2xl border border-border/75">
              {profileOk ? (
                <img
                  src={profileSrc}
                  alt="Prateek Sinha"
                  className="h-[280px] w-full object-cover sm:h-[360px]"
                  loading="eager"
                  onError={() => setProfileOk(false)}
                />
              ) : (
                <div className="flex h-[280px] w-full items-center justify-center bg-bg/40 sm:h-[360px]">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <ImageOff className="size-4" />
                    <span>Missing profile.jpg</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Focus', value: 'AI systems' },
                { label: 'Strength', value: 'RAG + LLMs' },
                { label: 'Style', value: 'Clean delivery' },
              ].map((i) => (
                <div
                  key={i.label}
                  className="rounded-2xl border border-border/70 bg-bg/35 p-3"
                >
                  <div className="text-[11px] font-medium text-muted">{i.label}</div>
                  <div className="mt-1 text-sm font-semibold tracking-tight">
                    {i.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-px w-full hairline" />

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Recruiter-first clarity',
            desc: 'Tight summaries, readable stacks, and quick access to repos.',
          },
          {
            title: 'Systems mindset',
            desc: 'I build end-to-end pipelines: ingestion → retrieval → reasoning → UX.',
          },
          {
            title: 'Premium execution',
            desc: 'Typography, spacing, and motion tuned for a polished presentation.',
          },
        ].map((c) => (
          <div key={c.title} className="panel panel-hover p-7">
            <div className="text-sm font-semibold tracking-tight">{c.title}</div>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{c.desc}</p>
          </div>
        ))}
      </section>

      <section>
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="terminal-pill">
              <span className="text-accent">●</span>
              <span>Featured project</span>
            </div>
            <h2 className="display mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl">
              {featuredProject.title}
            </h2>
            <p className="mt-4 measure text-[15px] leading-relaxed text-muted">
              {featuredProject.tagline}
            </p>
          </div>
          <Link to="/projects" className="btn hidden sm:inline-flex">
            See all <ArrowRight className="size-4" />
          </Link>
        </div>

        <ProjectCard project={featuredProject} />
      </section>
    </div>
  )
}
