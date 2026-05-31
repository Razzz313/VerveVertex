const services = [
  {
    num: '01',
    title: 'Social Media Marketing',
    desc: 'We build and manage social presences that convert followers into loyal customers. Every post is designed with intention — to grow your community and your revenue.',
    deliverables: ['Content calendar & strategy', 'Feed design & visual identity', 'Paid social campaigns', 'Community management', 'Monthly analytics reports'],
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>),
  },
  {
    num: '02',
    title: 'Content Creation',
    desc: 'Scroll-stopping visuals, compelling copy, and video content that tells your story and drives action. We produce content that earns attention — not just impressions.',
    deliverables: ['Professional photography & video', 'Copywriting & brand voice', 'Reels & short-form video', 'Blog & SEO content', 'Email marketing campaigns'],
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>),
  },
  {
    num: '03',
    title: 'Branding',
    desc: 'Your brand is more than a logo — it\'s the feeling people get when they encounter your business. We craft complete brand identities that command premium positioning.',
    deliverables: ['Logo design & visual identity', 'Brand guidelines & style guide', 'Color, typography & tone of voice', 'Brand collateral design', 'Packaging & print materials'],
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>),
  },
  {
    num: '04',
    title: 'Website Design',
    desc: 'Websites that look premium, load fast, and convert visitors into customers. We design with both aesthetics and performance in mind — your website should work as hard as you do.',
    deliverables: ['Custom UI/UX design', 'Mobile-first development', 'SEO optimization', 'Speed & performance tuning', 'CMS & e-commerce integration'],
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>),
  },
]

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: '#0f1215' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div className="reveal">
            <div className="eyebrow mb-5">What We Do</div>
            <h2 className="display-lg text-ivory">
              Four disciplines.<br />
              <em className="italic text-sage font-light">One</em> unified vision.
            </h2>
          </div>
          <p className="body-lg max-w-xs reveal">
            Everything your brand needs to grow — under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px" style={{ background: 'rgba(184,173,164,0.06)' }}>
          {services.map((s, i) => (
            <div key={s.num} className={`service-card reveal`} style={{ transitionDelay: `${i * 0.08}s`, background: '#0f1215' }}>
              <div className="font-serif text-[80px] font-light text-ivory/[0.04] absolute top-0 right-6 leading-none select-none pointer-events-none">{s.num}</div>
              <div className="w-10 h-10 rounded-sm flex items-center justify-center mb-6 text-sage"
                style={{ background: 'rgba(47,79,70,0.2)', border: '1px solid rgba(47,79,70,0.3)' }}>
                {s.icon}
              </div>
              <h3 className="font-serif text-2xl font-light text-ivory mb-3">{s.title}</h3>
              <p className="body-sm mb-6">{s.desc}</p>
              <ul className="space-y-0">
                {s.deliverables.map(d => (
                  <li key={d} className="flex items-center gap-3 py-2 border-b text-[13px] font-light" style={{ borderColor: 'rgba(184,173,164,0.07)', color: 'rgba(184,173,164,0.5)' }}>
                    <span className="text-forest text-xs">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
