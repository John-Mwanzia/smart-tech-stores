/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: {
      'custom-green': 'rgba(62, 151, 108, 0.25)',
      'btn-orange': 'rgb(255, 166, 0)',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      'sans': ['Outfit', 'sans-serif'],
    },
    
    extend: {},
  },
  plugins: [],
}

