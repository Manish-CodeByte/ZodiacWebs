/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          start: "#0A0A0A",
          end: "#050B14",
        },
        neon: {
          orange: "#FF6B00",
          "orange-hover": "#FF8533",
          gold: "#FFD700",
          "gold-hover": "#FFE234",
        },
        silver: {
          DEFAULT: "#A0AAB2",
          light: "#CAD1D7",
          dark: "#68737D",
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 107, 0, 0.45)',
        'glow-orange-lg': '0 0 45px -5px rgba(255, 107, 0, 0.6)',
        'glow-gold': '0 0 25px -5px rgba(255, 215, 0, 0.4)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 20px -2px rgba(255, 107, 0, 0.15)',
        'glow-card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 30px 2px rgba(255, 107, 0, 0.35)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 10s ease-in-out 3s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%': { opacity: '0.7', filter: 'blur(55px)' },
        },
      },
    },
  },
  plugins: [],
};
