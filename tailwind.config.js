/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jop-green': '#00464e',
        'jop-gray': '#7d7d7d',
      }
    },
    
  },
  plugins: [],
}

