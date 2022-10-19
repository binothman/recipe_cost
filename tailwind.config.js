module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#4083f8',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-logical'),
    require('flowbite/plugin'),
  ],
}