import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import { SectionHeader } from '../components/ui/SectionHeader'

export function NotFoundPage() {
  const location = useLocation()

  return (
    <div>
      <SectionHeader
        eyebrow="404"
        title="No building at this address"
        description={`Nothing lives at ${location.pathname}.`}
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
    </div>
  )
}
