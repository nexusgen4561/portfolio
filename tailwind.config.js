/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        brown: "#967259",
        beige: "#F1F1F1",
        bgcolor: "#fffdef",
        grey: "ededed",
        html: "#d84a24",
        css: "#136bad",
        container: "#625d9d",
        javascript: "#e3d04c",
        database: "#a91c22",
        analytics: "#f39812",
        "dark-olive-green": "#556B2F",
        "light-red": "#FA5B61",
        "dark-red": "#C50000",
        "red": "#E70000",
        "dirty-white": "#F1F1F1",
        "opaque-black": "rgba(0,0,0,.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(90deg, rgba(36,0,9,1) 0%, rgba(121,9,44,1) 35%, rgba(255,0,41,0.6069021358543417) 100%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        aleo: ["Aleo", "serif"]
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
