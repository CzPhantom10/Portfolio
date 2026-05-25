import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, Moon, Sun, Terminal, X } from 'lucide-react'
import type { Theme } from '../../lib/theme'
import { cn } from '../../lib/cn'
import { useEffect, useState } from 'react'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/achievements', label: 'Hackathons' },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar({
  theme,
  onThemeChange,
}: {
  theme: Theme
  onThemeChange: (t: Theme) => void
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/70 backdrop-blur">
      <div className="container-pad flex h-16 items-center justify-between">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card">
            <Terminal className="size-4 text-muted" />
          </span>
          <span className="text-fg">Prateek Sinha</span>
          <span className="hidden text-muted sm:inline">— Portfolio</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-3 py-2 text-sm transition',
                  isActive ? 'bg-card text-fg' : 'text-muted hover:text-fg',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            whileTap={{ scale: 0.98 }}
            className="btn h-10 w-10 px-0 md:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </motion.button>

          <motion.button
            type="button"
            onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
            whileTap={{ scale: 0.98 }}
            className="btn h-10 w-10 px-0"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </motion.button>
        </div>
      </div>

      <motion.div
        id="mobile-nav"
        initial={false}
        animate={mobileOpen ? 'open' : 'closed'}
        variants={{
          open: { height: 'auto', opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="md:hidden overflow-hidden"
      >
        <div className="container-pad pb-4">
          <nav className="panel p-2">
            <div className="grid gap-1">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'rounded-2xl px-4 py-3 text-sm font-medium transition',
                      isActive
                        ? 'bg-bg/40 text-fg'
                        : 'text-muted hover:bg-bg/30 hover:text-fg',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  )
}
