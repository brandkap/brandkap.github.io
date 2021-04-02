/* global module, require */

var defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.html", "./assets/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#0a0a0b",
      white: "#fafafa",
      gray: "#8a929e",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik"].concat(defaultTheme.fontFamily.sans),
        inter: ["Inter"].concat(defaultTheme.fontFamily.sans),
      },
      gridTemplateColumns: {
        "5/7": "5fr 7fr",
        about: "1fr 5fr 2fr 3fr 1fr",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
