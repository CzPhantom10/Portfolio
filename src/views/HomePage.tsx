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
    <div className="space-y-16 sm:space-y-20">
      <section className="grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="pt-1">
          <div className="terminal-pill">
            <span className="text-accent">$</span>
            <span className="font-mono">{person.terminalIntro}</span>
          </div>

          <h1 className="mt-6 text-[clamp(2.2rem,7vw,3.5rem)] font-extrabold leading-tight tracking-tight sm:text-6xl text-fg">
            <span className="block">{headlineLine1}</span>
            {headlineLine2 ? <span className="block text-accent">{headlineLine2}</span> : null}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
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

          <div className="mt-4 flex flex-wrap items-center gap-3">
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
            <div className="text-xs uppercase tracking-wider text-muted font-semibold">Terminal</div>
            <div className="mt-3 font-mono text-sm text-fg">
              <span className="text-accent">$</span> {person.terminalIntro}
            </div>
            <div className="mt-2 font-mono text-sm text-muted">{person.terminalOutput}</div>
          </div>
        </div>

        <div className="relative lg:pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="panel p-6 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted font-semibold">Profile</div>
                <div className="mt-2 text-sm font-semibold tracking-tight">{person.name}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-muted">Available</span>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              {profileOk ? (
                <img
                  src={profileSrc}
                  alt="Prateek Sinha"
                  className="h-[280px] w-full object-cover sm:h-[320px]"
                  loading="eager"
                  onError={() => setProfileOk(false)}
                />
              ) : (
                <div className="flex h-[280px] w-full items-center justify-center bg-bg/40 sm:h-[320px]">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <ImageOff className="size-4" />
                    <span>Missing profile.jpg</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Focus', value: 'AI systems' },
                { label: 'Strength', value: 'RAG + LLMs' },
                { label: 'Style', value: 'Clean delivery' },
              ].map((i) => (
                <div
                  key={i.label}
                  className="rounded-xl border border-border bg-bg/35 p-3"
                >
                  <div className="text-[11px] font-medium text-muted">{i.label}</div>
                  <div className="mt-1 text-sm font-semibold tracking-tight text-fg">
                    {i.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        {[
          {
            value: 'Top 25',
            label: 'All-India Rank',
            desc: 'HackHazard 2025 (Monad Track) out of hundreds of engineering teams.',
          },
          {
            value: '8+',
            label: 'Open-Source Projects',
            desc: 'Covering custom RAG systems, LLM fine-tuning benchmarks, and RL arenas.',
          },
          {
            value: '100%',
            label: 'Reproducible Code',
            desc: 'All pipelines structured with clear modules, test scripts, and README files.',
          },
        ].map((m) => (
          <div key={m.label} className="panel p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-accent font-mono">{m.value}</span>
              <h3 className="text-sm font-semibold tracking-tight text-fg mt-2">{m.label}</h3>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">{m.desc}</p>
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
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              {featuredProject.title}
            </h2>
            <p className="mt-3 text-base text-muted max-w-2xl">
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

