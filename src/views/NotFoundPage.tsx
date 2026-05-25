import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import { SectionHeader } from '../components/ui/SectionHeader'

export function NotFoundPage() {
  const location = useLocation()

  return (
    <div>
      <SectionHeader
        eyebrow="/404"
        title="Page not found"
        description={`No route matches: ${location.pathname}`}
      />

      <div className="flex flex-wrap items-center gap-3">
        <Link to="/" className="btn btn-primary">
          <Home className="size-4" />
          Home
        </Link>
        <button type="button" className="btn" onClick={() => window.history.back()}>
          <ArrowLeft className="size-4" />
          Go back
        </button>
      </div>

      <p className="mt-8 text-sm text-muted">
        If you were trying to open a file like <span className="font-mono">/resume.pdf</span>,
        make sure it exists in the app’s public folder.
      </p>
    </div>
  )
}
