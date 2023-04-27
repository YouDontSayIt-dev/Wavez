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
        "265.65px": "265.65px",
      },
      width: {
        "container-width": "800px",
        "image-width": "55%",
        "login-width": "45%",
      },
      height: {
        "login-height": "500px",
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
