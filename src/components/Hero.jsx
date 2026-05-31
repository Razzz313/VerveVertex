import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime
    const animate = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [start, target, duration])
  return count
}

function StatCard({ num, suffix, label, delay, started }) {
  const count = useCounter(num, 1600, started)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-center md:text-left"
    >
      <div className="font-serif text-5xl md:text-6xl font-light text-ivory leading-none tracking-tight">
        {count}{suffix}
      </div>
      <div className="eyebrow mt-2 text-taupe/70">{label}</div>
    </motion.div>
  )
}

const stats = [
  { num: 50, suffix: '+', label: 'Brands Elevated' },
  { num: 5, suffix: 'M+', label: 'Impressions Generated' },
  { num: 300, suffix: '%', label: 'Average Growth' },
  { num: 98, suffix: '%', label: 'Client Retention' },
]

export default function Hero() {
  const ref = useRef(null)
  const statsRef = useRef(null)
  const [statsStarted, setStatsStarted] = useState(false)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStatsStarted(true); obs.disconnect() }
    }, { threshold: 0.3 })
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  // Reveal on scroll
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'))
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal, .reveal-left').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise"
      style={{ background: 'linear-gradient(160deg, #121417 0%, #161b1f 60%, #131918 100%)' }}
    >
      {/* Subtle ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[700px] h-[700px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #2F4F46 0%, transparent 70%)', top: '-15%', right: '-10%' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #8E9B8A 0%, transparent 70%)', bottom: '-10%', left: '5%' }} />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(184,173,164,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(184,173,164,0.03) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}
      />

      <motion.div style={{ y: y1, opacity }} className="relative z-10 max-w-screen-xl mx-auto px-8 md:px-16 pt-28 pb-20 w-full">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="eyebrow">Premium Digital Agency</div>
          <div className="flex-1 max-w-[60px] h-px bg-gradient-to-r from-taupe/30 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-forest" />
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="display-xl text-ivory max-w-4xl"
          >
            Where Local Brands<br />
            Become{' '}
            <em className="italic text-sage font-light">Unforgettable.</em>
          </motion.h1>
        </div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="body-lg max-w-lg mb-12"
        >
          We help ambitious businesses grow through strategic marketing, powerful branding,
          compelling content, and high-converting websites.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-wrap gap-4 mb-24"
        >
          <a href="#contact" className="btn-forest group">
            Book a Free Consultation
            <svg className="transition-transform duration-300 group-hover:translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#work" className="btn-outline">
            View Our Work
          </a>
        </motion.div>

        {/* Stats */}
        <div ref={statsRef} className="divider-h mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0 md:divide-x md:divide-white/[0.06]">
          {stats.map((s, i) => (
            <div key={s.label} className="md:px-10 first:pl-0 last:pr-0">
              <StatCard {...s} delay={0.9 + i * 0.1} started={statsStarted} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="eyebrow opacity-30">Scroll</div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-taupe/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
