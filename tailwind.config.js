/* global module */

module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.html", "./assets/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        "5/7": "5fr 7fr",
        "1/5/1/5": "1fr 5fr 1fr 5fr",
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
