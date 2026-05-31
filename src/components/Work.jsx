import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const cases = [
  {
    id: 'verde',
    client: 'Verde Kitchen',
    category: 'Branding · Social Media',
    year: '2024',
    headline: 'From invisible to iconic — a farm-to-table brand reborn.',
    challenge: 'A beloved local restaurant with exceptional food but zero digital presence. No brand identity, no social media, no website. Completely invisible online.',
    solution: 'We built a complete brand identity from scratch — wordmark, color system, photography style, and tone of voice. Launched an Instagram strategy focused on food storytelling and community.',
    metrics: [
      { num: '250%', label: 'Engagement Growth' },
      { num: '3×', label: 'Website Traffic' },
      { num: '40%', label: 'Revenue Increase' },
      { num: '12K', label: 'Followers Gained' },
    ],
    // Visual mockup: a restaurant brand on ivory bg
    previewBg: 'linear-gradient(135deg, #1e2a1e 0%, #0f1a10 100%)',
    accentColor: '#8E9B8A',
    mockup: 'restaurant',
  },
  {
    id: 'archway',
    client: 'Archway Clinic',
    category: 'Web Design · Content',
    year: '2024',
    headline: 'A modern clinic that finally looks as good as it practices.',
    challenge: 'A respected private clinic with an outdated website and no digital patient acquisition strategy. New patients found them difficult to discover or trust online.',
    solution: 'Complete website redesign with trust-building UX, patient testimonial strategy, Google Ads funnel, and an educational content series positioning them as the authority in their field.',
    metrics: [
      { num: '180%', label: 'Lead Increase' },
      { num: '62%', label: 'Lower Cost/Lead' },
      { num: '4.9★', label: 'Google Rating' },
      { num: '3mo', label: 'Payback Period' },
    ],
    previewBg: 'linear-gradient(135deg, #181624 0%, #0f0e1a 100%)',
    accentColor: '#B8ADA4',
    mockup: 'clinic',
  },
  {
    id: 'nomad',
    client: 'Nomad Stays',
    category: 'Full Package',
    year: '2023',
    headline: 'A boutique guesthouse that became a destination brand.',
    challenge: 'A stunning boutique guesthouse with no digital footprint, no brand, and struggling occupancy. The property had all the ingredients — just no one knew about it.',
    solution: 'We created a full brand identity with a wanderer aesthetic, built a direct booking website, and launched a content strategy across Instagram and TikTok focusing on experience storytelling.',
    metrics: [
      { num: '320%', label: 'Booking Growth' },
      { num: '95%', label: 'Occupancy Rate' },
      { num: '18K', label: 'IG Followers' },
      { num: '2.1M', label: 'Video Views' },
    ],
    previewBg: 'linear-gradient(135deg, #221a0f 0%, #1a1408 100%)',
    accentColor: '#B8ADA4',
    mockup: 'hotel',
  },
]

function MockupPreview({ type, accent }) {
  if (type === 'restaurant') return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="text-center">
        <div className="font-serif text-6xl font-light mb-2" style={{ color: accent, opacity: 0.9 }}>Verde</div>
        <div className="font-sans text-[9px] tracking-[0.4em] uppercase opacity-40 text-ivory mb-6">Kitchen & Table</div>
        <div className="flex gap-2 justify-center">
          {['#1a2a1a', '#2a3a2a', '#1e2e1e'].map((c, i) => (
            <div key={i} className="w-12 h-16 rounded-sm" style={{ background: c, border: '1px solid rgba(142,155,138,0.2)' }} />
          ))}
        </div>
      </div>
    </div>
  )
  if (type === 'clinic') return (
    <div className="absolute inset-0 flex items-end p-6">
      <div className="glass rounded-sm p-4 w-full">
        <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-taupe/50 mb-1">Archway Clinic</div>
        <div className="font-serif text-xl text-ivory/80 mb-2">Expert Care,<br/>Trusted Results.</div>
        <div className="flex gap-2 mt-3">
          <div className="h-6 rounded-sm flex-1" style={{ background: 'rgba(47,79,70,0.4)' }} />
          <div className="h-6 rounded-sm w-16" style={{ background: 'rgba(184,173,164,0.12)' }} />
        </div>
      </div>
    </div>
  )
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="text-center">
        <div className="font-serif text-5xl font-light italic mb-2" style={{ color: '#B8ADA4', opacity: 0.8 }}>Nomad</div>
        <div className="font-sans text-[8px] tracking-[0.5em] uppercase opacity-30 text-ivory mb-8">Stays & Stories</div>
        <div className="w-16 h-px mx-auto" style={{ background: 'rgba(184,173,164,0.3)' }} />
        <div className="font-sans text-[9px] tracking-[0.2em] uppercase opacity-25 text-ivory mt-3">Beirut · Lebanon</div>
      </div>
    </div>
  )
}

export default function Work() {
  const [active, setActive] = useState(null)

  return (
    <section id="work" className="section max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-4">
        <div className="reveal">
          <div className="eyebrow mb-5">Featured Work</div>
          <h2 className="display-lg text-ivory">
            Results that speak<br />
            <em className="italic text-sage font-light">for themselves.</em>
          </h2>
        </div>
        <p className="body-sm max-w-xs reveal">Three of our most transformative engagements.</p>
      </div>

      {/* Main Case Studies */}
      <div className="space-y-2">
        {cases.map((c, i) => (
          <motion.div
            key={c.id}
            className="reveal border cursor-pointer overflow-hidden"
            style={{
              borderColor: active === c.id ? 'rgba(47,79,70,0.5)' : 'rgba(184,173,164,0.08)',
              background: active === c.id ? 'rgba(47,79,70,0.05)' : 'rgba(18,20,23,0.6)',
              transitionDelay: `${i * 0.1}s`
            }}
            onClick={() => setActive(active === c.id ? null : c.id)}
          >
            {/* Row header */}
            <div className="flex items-center justify-between px-8 py-6 gap-8">
              <div className="flex items-center gap-8 flex-1 min-w-0">
                <span className="eyebrow text-taupe/40 shrink-0">{String(i+1).padStart(2,'0')}</span>
                <div className="min-w-0">
                  <div className="font-serif text-xl md:text-2xl font-light text-ivory">{c.client}</div>
                  <div className="eyebrow text-taupe/50 mt-0.5">{c.category}</div>
                </div>
              </div>

              {/* Metrics preview */}
              <div className="hidden md:flex gap-8 items-center">
                {c.metrics.slice(0,2).map(m => (
                  <div key={m.label} className="text-right">
                    <div className="font-serif text-2xl font-light text-ivory">{m.num}</div>
                    <div className="eyebrow text-taupe/40">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Toggle */}
              <motion.div
                animate={{ rotate: active === c.id ? 45 : 0 }}
                className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 text-lg font-light text-taupe/50"
                style={{ borderColor: 'rgba(184,173,164,0.2)' }}
              >
                +
              </motion.div>
            </div>

            {/* Expanded */}
            <AnimatePresence initial={false}>
              {active === c.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-10 grid md:grid-cols-2 gap-10 border-t" style={{ borderColor: 'rgba(184,173,164,0.07)' }}>
                    {/* Visual mockup */}
                    <div className="relative rounded-sm overflow-hidden" style={{ background: c.previewBg, minHeight: '280px' }}>
                      <MockupPreview type={c.mockup} accent={c.accentColor} />
                      <div className="absolute top-4 right-4">
                        <span className="eyebrow text-[9px]" style={{ color: c.accentColor, opacity: 0.6 }}>{c.year}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="pt-6">
                      <div className="font-serif text-xl font-light text-ivory mb-6 italic">"{c.headline}"</div>

                      <div className="mb-5">
                        <div className="eyebrow text-taupe/40 mb-2">The Challenge</div>
                        <p className="body-sm">{c.challenge}</p>
                      </div>
                      <div className="mb-8">
                        <div className="eyebrow text-taupe/40 mb-2">Our Solution</div>
                        <p className="body-sm">{c.solution}</p>
                      </div>

                      {/* All metrics */}
                      <div className="grid grid-cols-4 gap-4 pt-6 border-t" style={{ borderColor: 'rgba(184,173,164,0.08)' }}>
                        {c.metrics.map(m => (
                          <div key={m.label}>
                            <div className="font-serif text-2xl font-light text-ivory">{m.num}</div>
                            <div className="eyebrow text-[9px] text-taupe/40 mt-1">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-14">
        <a href="#contact" className="btn-outline">Start Your Project</a>
      </div>
    </section>
  )
}
