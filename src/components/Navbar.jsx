import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = ['about', 'services', 'work', 'process', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-white/[0.06] py-4' : 'py-7'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-8 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="logo-mark group">
            {/* SVG Logo Mark */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
              <rect width="32" height="32" rx="2" fill="#1a1e22" />
              {/* V shape */}
              <path d="M8 9L13 21L16 15.5L19 21L24 9" stroke="#F8F6F2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              {/* Forest underline accent */}
              <line x1="8" y1="26" x2="24" y2="26" stroke="#2F4F46" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div>
              <div className="logo-wordmark">
                Verve<span className="amp"> &amp; </span>Vertex
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10 list-none">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '')
              return (
                <li key={label} className="relative">
                  <a
                    href={href}
                    className={`text-[11px] font-medium tracking-[0.15em] uppercase transition-colors duration-300 no-underline ${
                      active === id ? 'text-ivory' : 'text-taupe hover:text-ivory'
                    }`}
                  >
                    {label}
                  </a>
                  {active === id && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-forest"
                    />
                  )}
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#contact"
              className="btn-forest text-[10px]"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <motion.div animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }} className="w-6 h-px bg-ivory" />
            <motion.div animate={{ opacity: mobileOpen ? 0 : 1 }} className="w-4 h-px bg-ivory" />
            <motion.div animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }} className="w-6 h-px bg-ivory" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="display-md no-underline text-ivory/80 hover:text-ivory transition-colors"
              >
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-forest mt-4">
              Book a Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
