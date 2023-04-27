/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-color": "#04151D",
        "input-color": "rgb(33, 49, 60)",
        "input-bg-color": "rgb(255, 255, 255)",
        "border-color": "rgb(124, 138, 255)",
        "button-color": "rgba(154, 127, 105, 0.9)",

        "custom-color": "#04151D",
        // custom-color for the whole website body

        // custom-color for the sidebar buttons
        "custom-color-sidebar-brown": "#9A7F69",

        // custom-color for when hovering the sidebar buttons
        "custom-color-sidebar-brown-hover": "#9A7F69",

        // custom-color for the footer texts
        "custom-color-footer-text": "#747474",

        // custom-color for the footer social icons
        "custom-color-footer-social-icons": "rgba(154, 127, 105, 0.4)",

        // custom-color for when hovering the navbar icons
        "custom-color-navbar-icons-hover": "#53A8AA",

        // custom-color for playlist cards
        "custom-color-playlist-card": "#9A8483",

        // custom-color for the playlist cards non-pinned
        "custom-color-playlist-card-non-pinned": "#000B11",

        // custom-color for the playlist cards non-pinned text
        "custom-color-playlist-card-non-pinned-text": "#797979",
      },
      fontFamily: {
        alata: ["Alata", "sans-serif"],
      },
      spacing: {
        "237px": "237px",
        "34px": "34px",
        "324px": "324px",
        "102px": "102px",
        "64px": "649px",
        15: "59.89px",
        "43px": "43px",
        "45px": "45.51px",
        "145px": "145px",
        "248px": "248px",
        "345px": "345.79px",
        "578px": "578px",
        "1619px": "1619px",
        79: "318px",
        "265px": "265.65px",
        "240px": "240.4px",
        "253px": "253.97px",
        "72px": "72.67px",
        "890px": "890px",
        "119px": "-119px",
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
