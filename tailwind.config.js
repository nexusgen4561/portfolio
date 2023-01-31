/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        brown: "#967259",
        beige: "#ece0d1",
        "dark-brown": "#634832",
        "light-brown": "#dbc1ac",
        "mobile-brown": "#9b6c57",
        "yellow-brown": "#fdbf6e",
        grey: "ededed",
        "opaque-black": "rgba(0,0,0,.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-coffee":
          "linear-gradient(81.66deg, #634832 7.21%, #dbc1ac 45.05%, #ece0d1 78.07%",
        "gradient-beige":
          "linear-gradient(81.66deg, #634832 14.53%, #dbc1ac 69.36%, #ece0d1 107.73%",
      }),
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}
