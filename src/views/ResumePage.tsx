import { Download, ExternalLink } from 'lucide-react'
import { SectionHeader } from '../components/ui/SectionHeader'

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`

export function ResumePage() {
  return (
    <div>
      <SectionHeader eyebrow="Resume" title="The one-pager" description="Preview it here or grab the PDF." />

      <div className="flex flex-wrap items-center gap-3">
        <a className="btn btn-primary" href={resumeHref} download="Prateek_Sinha_Resume.pdf">
          Download <Download className="size-4" />
        </a>
        <a className="btn" href={resumeHref} target="_blank" rel="noreferrer">
          Open in new tab <ExternalLink className="size-4" />
        </a>
      </div>

      <div className="sticker mt-8 overflow-hidden !shadow-pop-lg">
        <div className="flex items-center gap-2 border-b-[2.5px] border-ink bg-sun px-4 py-2.5">
          <span className="size-3 rounded-full border-2 border-ink bg-coral" />
          <span className="size-3 rounded-full border-2 border-ink bg-cream" />
          <span className="size-3 rounded-full border-2 border-ink bg-mint" />
          <span className="ml-2 font-mono text-xs font-bold text-ink">resume.pdf</span>
        </div>
        <iframe title="Resume" src={resumeHref} className="h-[75vh] w-full bg-cream sm:h-[82vh]" />
      </div>
    </div>
  )
}
