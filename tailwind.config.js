/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Primary: {
          500: '#E8491D',
        },
        Secondary: {
          500: '#35424A',
        },
      },
      fontFamily: {
        'roboto': ["Roboto", "serif"],
      },
    },
  },
  plugins: [],
}