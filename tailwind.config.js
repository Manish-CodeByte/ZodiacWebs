/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: {
          DEFAULT: '#111111',
          subtle: '#181818',
          card: '#1A1A1A',
          border: '#242424',
          hover: '#1c1c1c'
        },
        primary: {
          DEFAULT: '#FF7518',
          hover: '#e6650f',
          light: '#ff8a38',
          glow: 'rgba(255, 117, 24, 0.25)'
        },
        secondary: {
          DEFAULT: '#FFAD33',
          light: '#ffbf5c',
          dark: '#e0941f'
        },
        muted: '#B0B0B0',
        subtext: '#8E8E8E',
        darkline: 'rgba(255, 255, 255, 0.08)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-0.02em'
      },
      boxShadow: {
        'glow-primary': '0 0 25px rgba(255, 117, 24, 0.35)',
        'glow-secondary': '0 0 30px rgba(255, 173, 51, 0.25)',
        'glow-subtle': '0 0 15px rgba(255, 117, 24, 0.15)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'card-hover': '0 12px 35px -10px rgba(255, 117, 24, 0.25)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'orange-gradient': 'linear-gradient(135deg, #FF7518 0%, #FFAD33 100%)',
        'orange-gradient-hover': 'linear-gradient(135deg, #FF8A38 0%, #FFBD52 100%)',
        'dark-gradient': 'linear-gradient(180deg, #111111 0%, #050505 100%)',
      }
    },
  },
  plugins: [],
}
