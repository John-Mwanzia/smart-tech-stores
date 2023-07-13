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
        'sm': {'max': '639px'},
        'md': {'min': '640px', 'max': '767px'},
        'lg': {'min': '768px', 'max': '1023px'},
        'xl': {'min': '1024px', 'max': '1279px'},
        '2xl': {'min': '1280px'},
      },
  
      fontFamily: {
         sans: ['Outfit', 'sans-serif'],
         roboto: ['Roboto', 'sans-serif'],
      },
   },
    
  },
  plugins: [],
}

