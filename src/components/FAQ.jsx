import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'How long before I see results?', a: 'Most clients begin seeing measurable improvements within 30–60 days. Significant growth typically compounds over 3–6 months as campaigns mature and brand recognition builds.' },
  { q: "What's the minimum commitment?", a: 'We offer both project-based and monthly retainer arrangements. For ongoing services, we recommend a 3-month initial commitment. One-off projects like branding or web design have their own timelines.' },
  { q: 'Do you work with businesses outside Lebanon?', a: 'Absolutely. While we have deep expertise in the Lebanese and Levant markets, we serve clients across the MENA region and internationally. Our processes are fully remote-friendly.' },
  { q: 'How much does it cost?', a: 'Every engagement is scoped individually based on your goals and the services involved. We offer packages for growing businesses up to comprehensive retainers for established brands. Book a free consultation for a custom quote.' },
  { q: 'Will I have a dedicated point of contact?', a: "Yes. Every client is assigned a dedicated account manager who is your primary point of contact. You'll never have to re-explain your brand to a different person every call." },
  { q: 'Can you handle just one service?', a: "Absolutely. While our results are strongest when we manage multiple channels together, we're happy to work on a single service. Many clients start with one and expand as they see results." },
]

function Item({ q, a, isOpen, onClick }) {
  return (
    <div className="border-b cursor-pointer" style={{ borderColor: 'rgba(184,173,164,0.08)' }} onClick={onClick}>
      <div className="flex justify-between items-center py-5 gap-6">
        <span className="font-serif text-base font-light text-ivory/80">{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-xl font-light shrink-0"
          style={{ color: isOpen ? '#2F4F46' : 'rgba(184,173,164,0.35)' }}
        >+</motion.span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22,1,0.36,1] }}
            className="overflow-hidden"
          >
            <p className="body-sm pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section max-w-screen-xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-16 md:gap-24 items-start">
      <div className="reveal">
        <div className="eyebrow mb-5">FAQ</div>
        <h2 className="display-lg text-ivory mb-5">Common<br /><em className="italic text-sage font-light">Questions</em></h2>
        <p className="body-lg mb-10">Everything you need to know before working with us.</p>
        <a href="#contact" className="btn-forest group">
          Still have questions?
          <svg className="transition-transform duration-300 group-hover:translate-x-1" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
      <div className="reveal" style={{ transitionDelay: '0.1s' }}>
        {faqs.map((f, i) => (
          <Item key={f.q} q={f.q} a={f.a} isOpen={open === i} onClick={() => setOpen(open === i ? null : i)} />
        ))}
      </div>
    </section>
  )
}
