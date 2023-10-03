/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customBlue: "#AEE2FF",
        btnOrange: "#f0ad4e",
        customGreen: "rgba(62, 151, 108, 0.25)",
        customGray: "#FAFAFB",
        successGreen: "#4BB543",
      },
      screens: {
        sm: { max: "639px" },
        md: { min: "640px", max: "767px" },
        lg: { min: "768px", max: "1023px" },
        xl: { min: "1024px", max: "1279px" },
        "2xl": { min: "1280px" },
      },

      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundColor: {
        "main-bg": "rgba(250, 251, 251, 1)",
        "main-dark-bg": "rgba(32, 35, 42, 1)",
        "secondary-dark-bg": "rgba(51, 55, 62, 1)",
        "light-gray": "rgba(247, 247, 247, 1)",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "hero-pattern": "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
    },
  },
  plugins: [],
};
