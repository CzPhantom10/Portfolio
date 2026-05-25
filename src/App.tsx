import { Outlet } from 'react-router-dom'
import { SiteShell } from './components/SiteShell'

export default function App() {
  return (
    <SiteShell>
      <Outlet />
    </SiteShell>
  )
}
