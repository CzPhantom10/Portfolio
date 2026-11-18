import {
  isRouteErrorResponse,
  Link,
  useRouteError,
} from 'react-router-dom'
import { AlertTriangle, Home } from 'lucide-react'
import { SectionHeader } from '../components/ui/SectionHeader'

export function RouteErrorPage() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <SectionHeader
          eyebrow="/error"
          title={`${error.status} ${error.statusText}`}
          description={
            typeof error.data === 'string'
              ? error.data
              : 'Something went wrong while rendering this route.'
          }
        />
        <Link to="/" className="btn btn-primary">
          <Home className="size-4" /> Home
        </Link>
      </div>
    )
  }

  const message =
    error instanceof Error
      ? error.message
      : 'Unexpected error while rendering this route.'

  return (
    <div>
      <SectionHeader
        eyebrow="/error"
        title="Unexpected error"
        description={message}
      />

      <div className="sticker p-6">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <AlertTriangle className="size-4 text-coral" />
          Details
        </div>
        <pre className="mt-3 overflow-auto rounded-2xl border-2 border-ink p-4 text-xs text-card-muted">
{String(error)}
        </pre>
      </div>

      <div className="mt-6">
        <Link to="/" className="btn btn-primary">
          <Home className="size-4" /> Home
        </Link>
      </div>
    </div>
  )
}
