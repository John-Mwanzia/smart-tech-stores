/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
      colors: {
        customBlue: '#AEE2FF',
        btnOrange: '#f0ad4e',
        customGreen: 'rgba(62, 151, 108, 0.25)',
        customGray: '#FAFAFB',
        successGreen: '#4BB543',
       
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

