/** @type {import('tailwindcss').Config} */

//const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")
const { addDynamicIconSelectors } = require('@iconify/tailwind');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    addDynamicIconSelectors()
   /*  iconsPlugin({
      collection: getIconCollections("all")
    }) */
],
  prefix: 'tw-'
}

