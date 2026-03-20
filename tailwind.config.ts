import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        gold: '#C9A84C',
        'gold-light': '#E8D5A3',
        'site-black': '#0A0A0A',
        'dark-brown': '#1A1208',
        'mid-brown': '#3D2B1A',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        jost: ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
