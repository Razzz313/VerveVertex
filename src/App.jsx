import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trusted from './components/Trusted'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Why from './components/Why'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Global scroll reveal observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-left').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <div className="min-h-screen" style={{ background: '#121417', color: '#F8F6F2' }}>
        <Navbar />
        <Hero />
        <Trusted />
        {/* Separator */}
        <div className="h-px mx-16" style={{ background: 'linear-gradient(90deg, transparent, rgba(184,173,164,0.1), transparent)' }} />
        <About />
        <div className="h-px mx-16" style={{ background: 'linear-gradient(90deg, transparent, rgba(184,173,164,0.1), transparent)' }} />
        <Services />
        <Work />
        <Why />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
