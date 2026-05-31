const clients = [
  'Maison Belle', 'Levant Co.', 'Verde Kitchen', 'Archway Clinic',
  'Nomad Stays', 'Saffron & Co.', 'Atelier Nord', 'Beirut & Co.',
]

export default function Trusted() {
  const doubled = [...clients, ...clients]
  return (
    <div className="border-t border-b border-white/[0.06] py-5 overflow-hidden">
      <div className="flex items-center gap-8 px-8 md:px-16 mb-5">
        <span className="eyebrow opacity-40 whitespace-nowrap">Trusted By</span>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
      </div>
      <div className="relative">
        <div className="flex gap-16 items-center marquee-track whitespace-nowrap select-none">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="font-serif text-[22px] font-light text-ivory/18 hover:text-ivory/50 transition-colors duration-400 cursor-default"
              style={{ letterSpacing: '0.03em' }}
            >
              {name}
              <span className="inline-block mx-8 w-1 h-1 rounded-full bg-forest/60 align-middle" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
