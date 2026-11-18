import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Footer } from './layout/Footer'
import { Navbar } from './layout/Navbar'
import { Sky } from './scene/Sky'
import { applyTheme, getInitialTheme, setStoredTheme, type Theme } from '../lib/theme'

export function SiteShell({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    applyTheme(theme)
    setStoredTheme(theme)
  }, [theme])

  // We handle scrolling ourselves, so stop the browser restoring old positions on reload
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  }, [])

  // Scroll to #hash targets (e.g. /projects#dies-primus) after route changes
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const id = location.hash.slice(1)
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
    return () => window.clearTimeout(t)
  }, [location.pathname, location.hash])

  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden text-fg">
      <Sky theme={theme} />
      <Navbar theme={theme} onThemeChange={setTheme} />

      <main className="container-pad flex-1 pb-8 pt-8 sm:pt-12">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
