/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#0A0A0A',
        'event-horizon': '#D97706',
        'chalk-white': '#F3F4F6',
        'nebula-gray': '#4B5563',
      },
    },
  },
  plugins: [],
}
