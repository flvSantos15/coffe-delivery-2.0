import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'yellow-dark': '#c47f17',
        yellow: '#dbac2c',
        'yellow-light': '#f1e9c9',
        'purple-dark': '#4b2995',
        purple: '#8047f8',
        'purple-light': '#ebe5f9',
        'base-title': '#272221',
        'base-subtitle': '#403937',
        'base-text': '#574f4d',
        'base-label': '#8d8686',
        'base-hover': '#d7d5d5',
        'base-button': '#e6e5e5',
        'base-input': '#ededed',
        'base-card': '#f3f2f2',
        background: '#fafafa',
        white: '#ffffff'
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
        serif: ['var(--font-baloo)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
