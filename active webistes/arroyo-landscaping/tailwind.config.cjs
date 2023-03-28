/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '100%',
        '16': '4rem',
        'w' : 'h-full'
      },
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 1rem',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
        'top-4': 'center top 3rem',
      },
      backgroundImage: {
        roof: "url('../src/assets/bgroof.png')",
      },
      colors: {
        primary: "#0e4200",
        overlay: "#00000080",
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
      xs: "240px",
      ss: "390px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
