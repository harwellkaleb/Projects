/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,css}"],
  mode: "jit",
  theme: {
    extend: {

      colors: {
        primary: "#0e4200",
        secondary: "#4af604",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(134, 255, 102, 0.1)",
      },
      fontFamily: {
        poppins: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};