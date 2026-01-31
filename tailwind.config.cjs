/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', '"Space Grotesk"', 'sans-serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(94, 234, 212, 0.35)',
      },
    },
  },
  plugins: [],
}
