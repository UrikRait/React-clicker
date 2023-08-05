/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  "tailwindCSS.includeLanguages": {
    "plaintext": "html"
  },
  "editor.quickSuggestions": {
    "strings": "on"
  }
}