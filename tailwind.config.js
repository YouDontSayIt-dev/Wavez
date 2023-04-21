/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-color': '#04151D',
        // custom-color for the whole website body
      },
    },
  },
  plugins: [],
}