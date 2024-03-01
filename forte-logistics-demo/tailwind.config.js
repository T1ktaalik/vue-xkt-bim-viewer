/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    addDynamicIconSelectors()
],
  /* prefix: 'tw-' */
}
