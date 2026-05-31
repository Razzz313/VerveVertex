const reasons = [
  { num: '01', title: 'Data-Driven Strategies', text: 'Every decision backed by real data — market research, competitor analysis, and performance metrics. No guesswork, no wasted budget.' },
  { num: '02', title: 'Creative Excellence', text: 'We refuse to produce mediocre work. Every asset is designed to stop the scroll, communicate clearly, and represent your brand with distinction.' },
  { num: '03', title: 'Personalized Service', text: "You'll never feel like a ticket number here. Every client gets a dedicated team member and a strategy built specifically for their business." },
  { num: '04', title: 'Results-Focused', text: 'Revenue growth, lead generation, and brand awareness — these are the metrics we optimize for. Not vanity numbers.' },
  { num: '05', title: 'Local Expertise', text: 'We specialize in helping local and regional businesses punch above their weight. We understand your market and competitive landscape.' },
  { num: '06', title: 'Transparent Reporting', text: "Monthly reports, live dashboards, and open communication mean you're never left in the dark about what we're doing and why." },
]

export default function Why() {
  return (
    <section id="why" className="section" style={{ background: '#0f1215' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="eyebrow mb-5">Why Choose Us</div>
          <h2 className="display-lg text-ivory reveal">
            The Verve & Vertex<br />
            <em className="italic text-sage font-light">difference.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px" style={{ background: 'rgba(184,173,164,0.05)' }}>
          {reasons.map((r, i) => (
            <div
              key={r.num}
              className="reveal p-10 transition-colors duration-300 hover:bg-white/[0.02]"
              style={{ background: '#0f1215', transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <div className="font-serif text-sm font-light mb-5" style={{ color: '#2F4F46', letterSpacing: '0.1em' }}>{r.num}</div>
              <h3 className="font-serif text-lg font-light text-ivory mb-3">{r.title}</h3>
              <p className="body-sm">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
