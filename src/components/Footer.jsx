const links = {
  'Agency': ['About', 'Services', 'Work', 'Process'],
  'Connect': ['Contact', 'FAQ', 'Testimonials'],
}

const socials = [
  { label: 'IG', href: 'https://instagram.com/vervevertex' },
  { label: 'LI', href: 'https://linkedin.com/company/vervevertex' },
  { label: 'TT', href: 'https://tiktok.com/@vervevertex' },
]

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'rgba(184,173,164,0.08)', background: '#0e1013' }}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-16">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="2" fill="#1a1e22"/>
                <path d="M8 9L13 21L16 15.5L19 21L24 9" stroke="#F8F6F2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <line x1="8" y1="26" x2="24" y2="26" stroke="#2F4F46" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="font-serif text-lg font-light text-ivory">
                Verve<span className="text-sage italic"> & </span>Vertex
              </div>
            </div>
            <p className="body-sm text-[13px] max-w-xs mb-6">
              Premium digital marketing, branding, and web design for ambitious local businesses.
            </p>
            <a href="mailto:hello@vervevertex.com" className="text-[13px] font-light transition-colors duration-300 hover:text-ivory"
              style={{ color: 'rgba(184,173,164,0.5)', fontFamily: "'Jost', sans-serif" }}>
              hello@vervevertex.com
            </a>
          </div>

          {/* Nav cols */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <div className="eyebrow mb-5 opacity-40">{title}</div>
              <ul className="space-y-3 list-none">
                {items.map(item => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-[13px] font-light transition-colors duration-200 no-underline hover:text-ivory"
                      style={{ color: 'rgba(184,173,164,0.45)', fontFamily: "'Jost', sans-serif" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <div className="eyebrow mb-5 opacity-40">Follow</div>
            <div className="flex flex-col gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] font-light transition-colors duration-200 no-underline hover:text-ivory"
                  style={{ color: 'rgba(184,173,164,0.45)', fontFamily: "'Jost', sans-serif" }}
                >
                  {s.label === 'IG' ? 'Instagram' : s.label === 'LI' ? 'LinkedIn' : 'TikTok'}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-h mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="eyebrow opacity-20">© {new Date().getFullYear()} Verve & Vertex. All rights reserved.</p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service'].map(t => (
              <a key={t} href="#" className="eyebrow opacity-20 hover:opacity-50 transition-opacity no-underline">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
