/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        'card-fg': 'rgb(var(--card-fg) / <alpha-value>)',
        'card-muted': 'rgb(var(--card-muted) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        cream: 'rgb(var(--cream) / <alpha-value>)',
        coral: 'rgb(var(--coral) / <alpha-value>)',
        sun: 'rgb(var(--sun) / <alpha-value>)',
        mint: 'rgb(var(--mint) / <alpha-value>)',
        lilac: 'rgb(var(--lilac) / <alpha-value>)',
        sky: 'rgb(var(--sky) / <alpha-value>)',
      },
      boxShadow: {
        pop: '4px 4px 0 0 rgb(var(--ink))',
        'pop-lg': '7px 7px 0 0 rgb(var(--ink))',
        'pop-sm': '2px 2px 0 0 rgb(var(--ink))',
      },
    },
  },
  plugins: [],
}
