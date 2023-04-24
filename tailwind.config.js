/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-color': '#04151D',
        // custom-color for the whole website body

        // custom-color for the sidebar buttons
        'custom-color-sidebar-brown': '#9A7F69',

        // custom-color for when hovering the sidebar buttons
        'custom-color-sidebar-brown-hover': '#9A7F69',
        
        // custom-color for the footer texts
        'custom-color-footer-text': '#747474',
        
      },
      fontFamily: {
        'alata': ['Alata', 'sans-serif'],
      },
      spacing: {
        '237': '237px',
        '324': '324px',
        '102': '102px',
        '648': '649px',
        '79': '318px',
      },
    },
  },
  plugins: [
  ],
}