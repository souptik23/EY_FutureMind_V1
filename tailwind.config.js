/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-motion')],
  plugins: [
    require('tailwindcss-animated')
  ],
}

