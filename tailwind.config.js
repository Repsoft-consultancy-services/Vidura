/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#FF9933',
        'custom-secondary': '#0D0D73',
        'custom-accent': '#138808',
      },
    },
  },
  plugins: [],
  prefix: 'tw-',
  blocklist: ['collapse'],
}
