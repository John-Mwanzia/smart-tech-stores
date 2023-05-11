 module.exports = {
   plugins: {
    tailwindcss: {
       content: [
         "./index.html",
          "./src/**/*.{vue,js,ts,jsx,tsx}",
       ],
        theme: {
          extend: {},
        },
        plugins: [],
      },
      autoprefixer: {},
    },
   }