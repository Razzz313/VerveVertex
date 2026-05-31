import { useState } from 'react'
import { motion } from 'framer-motion'

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/vervevertex',
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>)
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/vervevertex',
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>)
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@vervevertex',
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>)
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <section id="contact" className="section noise relative" style={{ background: 'linear-gradient(160deg, #0f1215 0%, #111916 100%)' }}>
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start relative z-10">

        {/* Left */}
        <div className="reveal">
          <div className="eyebrow mb-5">Get in Touch</div>
          <h2 className="display-lg text-ivory mb-6">
            Ready to Take Your<br />
            Business <em className="italic text-sage font-light">Further?</em>
          </h2>
          <p className="body-lg mb-12">
            Your first consultation is completely free. No pressure, no obligation — just an honest conversation about where your brand is today and where you want it to go.
          </p>

          {/* Details */}
          {[
            { label: 'Email', val: 'hello@vervevertex.com' },
            { label: 'Phone', val: '+961 X XXX XXX' },
            { label: 'Location', val: 'Beirut, Lebanon — Serving Globally' },
          ].map(d => (
            <div key={d.label} className="flex gap-6 items-baseline py-4 border-b" style={{ borderColor: 'rgba(184,173,164,0.08)' }}>
              <span className="eyebrow opacity-40 min-w-[72px]">{d.label}</span>
              <span className="text-[15px] font-light text-ivory/70" style={{ fontFamily: "'Jost', sans-serif" }}>{d.val}</span>
            </div>
          ))}

          {/* Social links */}
          <div className="flex items-center gap-6 mt-8">
            <span className="eyebrow opacity-40">Follow</span>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-sm flex items-center justify-center text-taupe/50 hover:text-ivory transition-all duration-300 hover:-translate-y-0.5"
                style={{ border: '1px solid rgba(184,173,164,0.12)' }}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Calendly CTA */}
          <div className="mt-10 p-6 rounded-sm" style={{ background: 'rgba(47,79,70,0.1)', border: '1px solid rgba(47,79,70,0.25)' }}>
            <div className="eyebrow text-sage/60 mb-2">Prefer to book directly?</div>
            <p className="body-sm mb-4">Schedule a 30-minute discovery call at a time that suits you.</p>
            <a
              href="https://calendly.com/vervevertex"
              target="_blank"
              rel="noreferrer"
              className="btn-forest text-[10px] inline-flex"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book on Calendly
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="reveal" style={{ transitionDelay: '0.1s' }}>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 px-8"
            >
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ background: 'rgba(47,79,70,0.2)', border: '1px solid rgba(47,79,70,0.4)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8E9B8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-light text-ivory mb-3">Message Received</h3>
              <p className="body-lg text-base">We'll be in touch within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: 'name', label: 'Your Name', placeholder: 'Ahmad Khalil', type: 'text' },
                  { name: 'business', label: 'Business Name', placeholder: 'Levant Bakery', type: 'text' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="luxury-label">{f.label}</label>
                    <input name={f.name} type={f.type} value={form[f.name]} onChange={onChange} required placeholder={f.placeholder} className="luxury-input" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: 'email', label: 'Email Address', placeholder: 'you@business.com', type: 'email' },
                  { name: 'phone', label: 'Phone Number', placeholder: '+961 X XXX XXX', type: 'tel' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="luxury-label">{f.label}</label>
                    <input name={f.name} type={f.type} value={form[f.name]} onChange={onChange} placeholder={f.placeholder} className="luxury-input" />
                  </div>
                ))}
              </div>
              <div>
                <label className="luxury-label">Tell Us About Your Business</label>
                <textarea name="message" value={form.message} onChange={onChange} required rows={4}
                  placeholder="What does your business do? What are your main goals? What challenges are you facing?"
                  className="luxury-input textarea" />
              </div>
              <button type="submit" className="btn-forest w-full justify-center mt-2">
                Send Message
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
              <p className="eyebrow opacity-25 text-center">We respond within 24 hours · No spam ever</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
