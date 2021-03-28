module.exports = {
  purge: {
    enabled: true,
    content: [
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './404.html',
      './index.md',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
