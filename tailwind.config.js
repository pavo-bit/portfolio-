/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDFB', // Primary background
          100: '#FAF5EF', // Secondary cream
          200: '#F5EBE1',
          300: '#E8DC CE',
        },
        brand: {
          pink: '#F27D9B', // Primary pink
          blush: '#FCE7ED', // Soft blush
          blue: '#DCEEFF', // Light blue accent
          charcoal: '#171717', // Primary text
          muted: '#66616A', // Secondary text
          dark: '#111111', // Dark section background
          border: '#E9E3E2', // Border
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        handwriting: ['"Caveat"', '"Reenie Beanie"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'card': '0 12px 36px rgba(242, 125, 155, 0.08)',
        'elevated': '0 20px 48px rgba(0, 0, 0, 0.08)',
        'polaroid': '0 14px 38px rgba(23, 23, 23, 0.12)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
