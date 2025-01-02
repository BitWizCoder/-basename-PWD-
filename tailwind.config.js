/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Primary: {
          500: '#259CE2',
        },
        Secondary: {
          500: '#35424A',
        },
      },
      fontFamily: {
        'roboto': ["Roboto", "serif"],
      }
    },
  },
  plugins: [],
}