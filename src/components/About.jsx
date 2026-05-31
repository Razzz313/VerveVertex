export default function About() {
  return (
    <section id="about" className="section max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
      {/* Left: visual diptych */}
      <div className="reveal-left">
        <div className="grid grid-cols-2 gap-3">
          <div className="glass rounded-sm p-8 col-span-2 relative overflow-hidden">
            <div className="eyebrow mb-4 text-sage/60">Verve</div>
            <div className="font-serif text-3xl font-light text-ivory mb-3 italic">The Spark of Creativity</div>
            <p className="body-sm">
              Verve is the energy, passion, and artistic boldness we bring to every campaign.
              It's what makes a brand feel alive — the kind of creative force that captures attention and stirs emotion.
            </p>
            {/* decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #8E9B8A 0%, transparent 70%)' }} />
          </div>
          <div className="glass-light rounded-sm p-8 relative overflow-hidden">
            <div className="eyebrow mb-4 text-forest/80">Vertex</div>
            <div className="font-serif text-2xl font-light text-ivory mb-2">The Peak of Strategy</div>
            <p className="body-sm text-sm">Precision, excellence, and the apex of strategic thinking. We engineer growth systems that deliver measurable results.</p>
          </div>
          <div className="rounded-sm overflow-hidden relative flex items-end p-6"
            style={{ background: 'linear-gradient(135deg, #1a1e22, #1e2820)', minHeight: '200px' }}>
            <div>
              <div className="font-serif text-4xl font-light text-ivory/90 leading-none">5 <span className="text-sage">yrs</span></div>
              <div className="eyebrow mt-1 opacity-50">In Business</div>
            </div>
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-forest" />
          </div>
        </div>
      </div>

      {/* Right: text */}
      <div className="reveal">
        <div className="eyebrow mb-6">Our Story</div>
        <h2 className="display-lg text-ivory mb-6">
          Creativity<br />
          <em className="italic text-sage font-light">Meets</em> Strategy.
        </h2>
        <div className="w-10 h-px bg-forest mb-8" />
        <p className="body-lg mb-5">
          Most agencies choose one or the other — creative shops that produce beautiful work with no results, or growth hackers who optimize numbers but strip away the soul of your brand.
        </p>
        <p className="body-lg mb-5">
          Verve & Vertex was built on the belief that these two forces are not in conflict. The most powerful brands in the world are both visually stunning and ruthlessly effective.
        </p>
        <p className="body-lg mb-10">
          We exist to bring that same level of sophistication to local businesses — giving you the tools, strategy, and creative edge to compete at any level.
        </p>
        <a href="#services" className="btn-forest group">
          Explore Our Services
          <svg className="transition-transform duration-300 group-hover:translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
