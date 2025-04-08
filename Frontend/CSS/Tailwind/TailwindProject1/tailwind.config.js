/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        chestnut: '#973F29'
      },
    },
  },
  plugins: [],
}

