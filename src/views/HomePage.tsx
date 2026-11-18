import { ArrowRight, Download, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { achievements, education, featuredProject, person, projects } from '../data/portfolio'
import { ProjectCard } from '../components/projects/ProjectCard'
import { ProjectCity } from '../components/scene/ProjectCity'

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`
const profileSrc = `${import.meta.env.BASE_URL}profile.jpg`

const stats = [
  { value: 'Top 25', label: 'global rank at HackHazard 2025 (Monad Track)', color: 'bg-coral text-cream' },
  { value: `${projects.length}`, label: 'AI, ML and data projects built', color: 'bg-mint text-ink' },
  { value: education.cgpa, label: `CGPA · B.Tech CSE, ${education.endYear}`, color: 'bg-sun text-ink' },
]

export function HomePage() {
  const [profileOk, setProfileOk] = useState(true)

  return (
    <div className="space-y-20 sm:space-y-24">
      {/* Hero */}
      <section className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            {profileOk ? (
              <img
                src={profileSrc}
                alt={person.name}
                onError={() => setProfileOk(false)}
                className="size-14 rounded-full border-[2.5px] border-ink object-cover shadow-pop"
              />
            ) : null}
            <div className="flex flex-col items-start">
              <div className="eyebrow">{person.role}</div>
              <div className="mt-1.5 inline-flex items-center gap-1 text-sm font-semibold text-fg/80">
                <MapPin className="size-3.5" /> {person.location}
              </div>
            </div>
          </div>

          <h1 className="headline mt-6 text-[clamp(2.6rem,8vw,5rem)] leading-[1.02]">
            Hi, I'm {person.firstName}.
            <br />
            I build <span className="squiggle text-sun">AI that ships</span>
            <motion.span
              className="ml-3 inline-block align-middle text-[0.6em] [-webkit-text-stroke:0] [text-shadow:none]"
              animate={{ rotate: [0, 18, -8, 18, 0] }}
              transition={{ duration: 1.6, delay: 0.8 }}
              aria-hidden
            >
              👋
            </motion.span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg font-medium leading-relaxed text-fg/85">
            {person.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="btn btn-primary">
              Explore projects <ArrowRight className="size-4" />
            </Link>
            <a className="btn btn-sun" href={resumeHref} target="_blank" rel="noreferrer">
              Resume <Download className="size-4" />
            </a>
            <Link to="/contact" className="btn">
              Get in touch
            </Link>
          </div>
        </div>

        <div className="pt-16 lg:pt-0">
          <ProjectCity />
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-5 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.08 }}
            className="sticker sticker-hover flex items-center gap-4 p-5"
          >
            <span className={`shrink-0 rounded-2xl border-[2.5px] border-ink px-3 py-2 font-display text-2xl font-bold ${s.color}`}>
              {s.value}
            </span>
            <span className="text-sm font-semibold leading-snug text-card-muted">{s.label}</span>
          </motion.div>
        ))}
      </section>

      {/* Featured */}
      <section>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow">Featured build</div>
            <h2 className="headline mt-2 text-4xl sm:text-5xl">Latest in town</h2>
          </div>
          <Link to="/projects" className="btn">
            All projects <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <ProjectCard project={featuredProject} />
          <div className="sticker flex flex-col gap-4 p-6">
            <div className="eyebrow self-start !bg-coral !text-cream">Hackathon wins</div>
            {achievements.slice(0, 2).map((a) => (
              <div key={a.title} className="rounded-2xl border-[2.5px] border-ink bg-sun/25 p-4">
                <div className="font-display text-2xl font-bold">{a.rank}</div>
                <div className="font-semibold">{a.title}</div>
                <div className="text-sm text-card-muted">{a.detail}</div>
              </div>
            ))}
            <Link to="/achievements" className="btn mt-auto self-start">
              See all <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
