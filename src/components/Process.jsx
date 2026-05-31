const steps = [
  { num: '1', title: 'Discovery', desc: 'We learn your business, goals, customers, and competitive landscape inside out. No assumptions.' },
  { num: '2', title: 'Strategy', desc: 'A custom growth roadmap with clear milestones, KPIs, and a creative direction built for your brand.' },
  { num: '3', title: 'Creation', desc: 'Our team produces every asset — content, visuals, copy, and design — to the highest standard.' },
  { num: '4', title: 'Launch', desc: 'Precise deployment with every variable monitored from day one. Nothing left to chance.' },
  { num: '5', title: 'Growth', desc: 'Continuous analysis, optimization, and scaling. Results compound month over month.' },
]

export default function Process() {
  return (
    <section id="process" className="section" style={{ background: '#0f1215' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center max-w-lg mx-auto mb-20">
          <div className="eyebrow mb-5">How We Work</div>
          <h2 className="display-lg text-ivory reveal">
            A process built for<br />
            <em className="italic text-sage font-light">real results.</em>
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-5 gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-7 left-[10%] right-[10%] h-px" style={{ background: 'linear-gradient(90deg, #2F4F46, rgba(47,79,70,0.1))' }} />
          {steps.map((s, i) => (
            <div key={s.num} className="reveal text-center px-6 relative z-10" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="w-14 h-14 rounded-full mx-auto mb-6 flex items-center justify-center font-serif text-lg font-light relative"
                style={{
                  background: '#0f1215',
                  border: '1px solid rgba(47,79,70,0.6)',
                  color: '#8E9B8A',
                  boxShadow: '0 0 0 6px rgba(47,79,70,0.08)'
                }}>
                {s.num}
              </div>
              <h3 className="font-serif text-base font-light text-ivory mb-2">{s.title}</h3>
              <p className="body-sm text-[12px]">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-3 top-3 bottom-3 w-px" style={{ background: 'linear-gradient(to bottom, #2F4F46, rgba(47,79,70,0.1))' }} />
          {steps.map((s, i) => (
            <div key={s.num} className="flex gap-6 pb-10 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="w-6 h-6 rounded-full border flex items-center justify-center text-[11px] font-light shrink-0 -ml-3 mt-0.5"
                style={{ background: '#0f1215', borderColor: 'rgba(47,79,70,0.6)', color: '#8E9B8A', minWidth: '24px' }}>
                {s.num}
              </div>
              <div>
                <h3 className="font-serif text-base font-light text-ivory mb-1">{s.title}</h3>
                <p className="body-sm text-[13px]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
