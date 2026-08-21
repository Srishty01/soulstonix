/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F6F1',
        white: '#FFFFFF',
        gold: '#D4AF37',
        purple: '#5B3A82',
        charcoal: '#2C2C2C',
        sage: '#B8E0D2',
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        display: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 20px 60px rgba(91, 58, 130, 0.15)',
      },
    },
  },
  plugins: [],
};
