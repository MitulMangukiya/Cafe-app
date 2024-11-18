/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['CustomFont1', 'CustomFont2']
      }
    },
  },
  plugins: [],
}

