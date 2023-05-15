/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
      colors: {
        customblue: '#AEE2FF',
        btnOrange: 'rgb(255, 166, 0)',
        customgreen: 'rgba(62, 151, 108, 0.25)',
        customgray: 'rgba(0, 0, 0, 0.25)',
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
   },
    
  },
  plugins: [],
}

