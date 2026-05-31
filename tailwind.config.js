/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#121417',
        ivory: '#F8F6F2',
        taupe: '#B8ADA4',
        sage: '#8E9B8A',
        forest: '#2F4F46',
        'forest-light': '#3d6b60',
        'charcoal-2': '#1a1e22',
        'charcoal-3': '#222830',
        'ivory-dim': '#EAE7E1',
        'ivory-soft': '#F2EFE9',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        luxury: '0.2em',
        wide: '0.08em',
      },
      lineHeight: {
        tight: '1.05',
        snug: '1.2',
      },
    },
  },
  plugins: [],
}
