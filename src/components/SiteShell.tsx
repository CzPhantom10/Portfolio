import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Footer } from './layout/Footer'
import { Navbar } from './layout/Navbar'
import { applyTheme, getInitialTheme, setStoredTheme, type Theme } from '../lib/theme'

export function SiteShell({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    applyTheme(theme)
    setStoredTheme(theme)
  }, [theme])

  const key = useMemo(() => location.pathname, [location.pathname])

  return (
    <div className="min-h-dvh bg-bg text-fg overflow-x-hidden">
      <Navbar theme={theme} onThemeChange={setTheme} />

      <main className="container-pad pb-24 pt-10 sm:pt-14">
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 6 }}
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
