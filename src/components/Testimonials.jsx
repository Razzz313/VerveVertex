import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    text: "Before Verve & Vertex, our Instagram had 300 followers and zero engagement. Six months later we have over 8,000 followers and our tables are booked out every weekend. The transformation has been extraordinary.",
    name: 'Lara Haddad',
    role: 'Owner',
    company: 'Verde Kitchen',
    initials: 'LH',
    stars: 5,
    project: 'Branding + Social Media',
  },
  {
    text: "They redesigned our clinic's website and within 3 months our phone was ringing off the hook with new patient inquiries. The quality of their work matched or exceeded agencies charging three times more.",
    name: 'Dr. Karim Nassar',
    role: 'Director',
    company: 'Archway Clinic',
    initials: 'KN',
    stars: 5,
    project: 'Web Design + Content',
  },
  {
    text: "I was skeptical about social media for a guesthouse. Six months later we have a 95% occupancy rate and a waitlist for weekends. I wish I'd hired them two years earlier. Worth every penny.",
    name: 'Rima Zahrawi',
    role: 'Owner',
    company: 'Nomad Stays',
    initials: 'RZ',
    stars: 5,
    project: 'Full Package',
  },
  {
    text: "Working with Verve & Vertex felt like partnering with people who genuinely cared about our growth. They didn't just execute — they thought strategically with us every step of the way.",
    name: 'Marc Khoury',
    role: 'Founder',
    company: 'Maison Belle',
    initials: 'MK',
    stars: 5,
    project: 'Branding + Web',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < count ? '#8E9B8A' : 'none'} stroke="#8E9B8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="testimonials" className="section max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-[1fr_1.8fr] gap-16 items-start">
        {/* Left */}
        <div className="reveal">
          <div className="eyebrow mb-5">Client Stories</div>
          <h2 className="display-lg text-ivory mb-8">
            What our<br />
            <em className="italic text-sage font-light">clients say.</em>
          </h2>
          {/* Selector */}
          <div className="space-y-3 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setCurrent(i)}
                className={`w-full text-left p-4 rounded-sm border transition-all duration-300 ${
                  current === i
                    ? 'border-forest/50 bg-forest/10'
                    : 'border-white/[0.06] bg-transparent hover:border-white/[0.12]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-medium shrink-0"
                    style={{
                      background: current === i ? 'rgba(47,79,70,0.3)' : 'rgba(184,173,164,0.08)',
                      border: `1px solid ${current === i ? 'rgba(47,79,70,0.5)' : 'rgba(184,173,164,0.12)'}`,
                      color: current === i ? '#8E9B8A' : '#B8ADA4',
                      fontFamily: "'Jost', sans-serif"
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-ivory/80" style={{ fontFamily: "'Jost', sans-serif" }}>{t.name}</div>
                    <div className="text-[11px] text-taupe/50" style={{ fontFamily: "'Jost', sans-serif" }}>{t.company}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: active testimonial */}
        <div className="reveal" style={{ transitionDelay: '0.1s' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
              className="glass rounded-sm p-10 relative"
            >
              {/* Large quote */}
              <div className="font-serif text-[120px] leading-none absolute -top-4 -left-2 pointer-events-none select-none"
                style={{ color: 'rgba(47,79,70,0.15)' }}>
                "
              </div>
              <Stars count={testimonials[current].stars} />
              <blockquote className="font-serif text-2xl font-light text-ivory/85 leading-snug italic mb-10">
                "{testimonials[current].text}"
              </blockquote>
              <div className="divider-h mb-6" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-serif text-sm"
                    style={{ background: 'rgba(47,79,70,0.25)', border: '1px solid rgba(47,79,70,0.4)', color: '#8E9B8A' }}
                  >
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ivory" style={{ fontFamily: "'Jost', sans-serif" }}>
                      {testimonials[current].name}
                    </div>
                    <div className="text-[12px]" style={{ fontFamily: "'Jost', sans-serif", color: '#8E9B8A' }}>
                      {testimonials[current].role}, {testimonials[current].company}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="eyebrow opacity-40">Project</div>
                  <div className="text-[12px] font-medium text-taupe/60" style={{ fontFamily: "'Jost', sans-serif" }}>
                    {testimonials[current].project}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav dots */}
          <div className="flex gap-2 justify-end mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-6 h-px transition-all duration-300"
                style={{ background: current === i ? '#2F4F46' : 'rgba(184,173,164,0.2)' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
