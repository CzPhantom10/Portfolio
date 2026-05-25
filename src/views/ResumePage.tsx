import { Download, ExternalLink } from 'lucide-react'
import { SectionHeader } from '../components/ui/SectionHeader'
import { useEffect, useMemo, useState } from 'react'

export function ResumePage() {
  const resumeHref = useMemo(() => `${import.meta.env.BASE_URL}resume.pdf`, [])
  const [available, setAvailable] = useState(true)

  useEffect(() => {
    let alive = true
    fetch(resumeHref, { method: 'HEAD' })
      .then((r) => {
        if (!alive) return
        setAvailable(r.ok)
      })
      .catch(() => {
        if (!alive) return
        setAvailable(false)
      })
    return () => {
      alive = false
    }
  }, [resumeHref])

  return (
    <div>
      <SectionHeader
        eyebrow="/resume"
        title="Resume"
        description="Preview inline or download the PDF."
      />

      <div className="flex flex-wrap items-center gap-3">
        <a className="btn btn-primary" href={resumeHref} download>
          Download <Download className="size-4" />
        </a>
        <a className="btn" href={resumeHref} target="_blank" rel="noreferrer">
          Open in new tab <ExternalLink className="size-4" />
        </a>
      </div>

      {!available ? (
        <div className="panel mt-6 p-6 text-sm text-muted">
          Couldn’t find <span className="font-mono">resume.pdf</span>. Put it in
          <span className="font-mono"> web/public/resume.pdf</span>.
        </div>
      ) : null}

      <div className="panel mt-8 overflow-hidden">
        <iframe
          title="Resume"
          src={resumeHref}
          className="h-[70vh] w-full sm:h-[78vh]"
        />
      </div>
    </div>
  )
}
