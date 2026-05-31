# Verve & Vertex — v2.0 Premium Upgrade

A luxury digital agency website. Rich charcoal + warm ivory + deep forest palette.
Built with React 18, Tailwind CSS 3, Framer Motion 11.

## Typography
- **Cormorant Garamond** — elegant serif for all headings and display text
- **Jost** — refined geometric sans for body text and UI elements

## Color System
| Token | Value | Use |
|-------|-------|-----|
| Charcoal | `#121417` | Primary background |
| Ivory | `#F8F6F2` | Primary text, highlights |
| Taupe | `#B8ADA4` | Body text, secondary labels |
| Sage | `#8E9B8A` | Accents, italic emphasis |
| Forest | `#2F4F46` | CTAs, indicators, borders |

## Features
- Custom luxury cursor with lag-follow ring
- Animated statistics counter on scroll into view
- Marquee client logo strip
- Expandable case study accordion with mockup previews
- Interactive testimonial selector with animated transitions
- Liquid FAQ accordion
- Calendly booking integration link
- Social media links (Instagram, LinkedIn, TikTok)
- SVG logo + favicon
- Active section nav indicator
- Global scroll-reveal animations
- Noise texture overlays
- Glassmorphism panels
- Custom scrollbar

## Setup

```bash
npm install
npm run dev          # localhost:5173
npm run build        # production build → dist/
```

## Deploy to Vercel
```bash
npx vercel --prod
```

## Deploy to Netlify
Set build command: `npm run build` | Output: `dist`

## Customization

### Replace placeholder content
- **Email:** Search `hello@vervevertex.com` → replace everywhere
- **Phone:** Search `+961 X XXX XXX` → replace
- **Calendly:** `src/components/Contact.jsx` → update the Calendly URL
- **Social links:** `src/components/Contact.jsx` and `src/components/Footer.jsx`

### Add real case studies
Edit `src/components/Work.jsx` — the `cases` array. Add real project photos by replacing the `MockupPreview` component with `<img>` tags.

### Add real client photos
In `src/components/Testimonials.jsx`, replace the initials avatar divs with `<img>` tags using real headshots.
