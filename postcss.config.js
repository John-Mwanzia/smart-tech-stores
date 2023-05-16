 module.exports = {
   plugins: {
    tailwindcss: {
       content: [
         "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
       ],
        theme: {
          extend: {
            colors: {
              customBlue: '#AEE2FF',
              btnOrange: 'rgb(255, 166, 0)',
              customGreen: 'rgba(62, 151, 108, 0.25)',
              customGray: '#FAFAFB',
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
      },
      autoprefixer: {},
    },
   }