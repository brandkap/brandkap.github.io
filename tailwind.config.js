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
      gray: "#8a929e",
      white: "#fafafa",
      orange: "#f1801c",
      blue: "#0484cc",
    },
    extend: {
      fontSize: {
        "5.5xl": ["3.5rem"],
      },
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
        30: "7.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
