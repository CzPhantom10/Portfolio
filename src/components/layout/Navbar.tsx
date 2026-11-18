import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import type { Theme } from '../../lib/theme'
import { cn } from '../../lib/cn'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/achievements', label: 'Wins' },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

function ThemeSwitch({ theme, onChange }: { theme: Theme; onChange: (t: Theme) => void }) {
  const night = theme === 'dark'
  return (
    <button
      type="button"
      role="switch"
      aria-checked={night}
      aria-label={night ? 'Switch to day' : 'Switch to night'}
      onClick={() => onChange(night ? 'light' : 'dark')}
      className="relative h-10 w-[74px] shrink-0 rounded-full border-[2.5px] border-ink bg-cream shadow-pop transition-colors dark:bg-[#2e1856]"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={cn(
          'absolute top-[3px] flex size-[28px] items-center justify-center rounded-full border-2 border-ink',
          night ? 'right-[4px] bg-cream' : 'left-[4px] bg-sun',
        )}
      >
        {night ? <Moon className="size-3.5 text-ink" /> : <Sun className="size-3.5 text-ink" />}
      </motion.span>
    </button>
  )
}

export function Navbar({
  theme,
  onThemeChange,
}: {
  theme: Theme
  onThemeChange: (t: Theme) => void
}) {
  const location = useLocation()
  // The menu stays open only on the page it was opened from, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null)
  const open = openOn === location.pathname
  const setOpen = (fn: (v: boolean) => boolean) =>
    setOpenOn(fn(open) ? location.pathname : null)

  return (
    <header className="sticky top-0 z-40 pt-3 sm:pt-4">
      <div className="container-pad">
        <div className="sticker flex h-16 items-center justify-between gap-3 !rounded-full px-3 sm:px-4">
          <Link to="/" className="group inline-flex min-w-0 items-center gap-2.5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-[2.5px] border-ink bg-coral font-display text-base font-bold text-cream transition-transform group-hover:-rotate-12">
              PS
            </span>
            <span className="truncate font-display text-lg font-semibold">Prateek Sinha</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-full border-2 px-3.5 py-1.5 font-display text-sm font-semibold transition',
                    isActive
                      ? 'border-ink bg-sun text-ink shadow-pop-sm'
                      : 'border-transparent text-card-muted hover:text-card-fg',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeSwitch theme={theme} onChange={onThemeChange} />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="btn size-10 !p-0 lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="sticker mt-3 grid gap-1 p-2 lg:hidden"
            >
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'rounded-2xl px-4 py-3 font-display font-semibold',
                      isActive ? 'bg-sun text-ink' : 'text-card-fg hover:bg-ink/5',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
