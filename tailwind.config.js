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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
