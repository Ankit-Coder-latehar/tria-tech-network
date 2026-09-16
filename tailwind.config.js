/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#011910',
          900: '#032619',
          800: '#063b28',
          700: '#09533a',
          600: '#0d7351'
        },
        mint: {
          50: '#f0fdf7',
          100: '#dbfcee',
          200: '#baf6dc',
          300: '#75ecc0',
          400: '#25d99b',
          500: '#00f5a0',
          600: '#00c780'
        },
        surface: {
          light: '#ffffff',
          soft: '#f8fafc',
          mint: '#f0fdf4',
          card: 'rgba(255, 255, 255, 0.88)'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'green-glow': '0 0 35px -5px rgba(16, 185, 129, 0.25)',
        'green-glow-lg': '0 0 50px -10px rgba(16, 185, 129, 0.35)',
        'green-subtle': '0 4px 20px -2px rgba(16, 185, 129, 0.12)',
        'card-elevated': '0 10px 30px -5px rgba(0, 0, 0, 0.04), 0 4px 12px -2px rgba(16, 185, 129, 0.08)'
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    },
  },
  plugins: [],
}
