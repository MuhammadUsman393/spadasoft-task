/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "900px",
        xs: "400px",
        lg: "1150px",
        xl: "1440px",
      },
      colors: {
        primary: "#D9D9D9",
        secondary: "#37C6F3",
        third: "#6D6D6D",
        background: "#EBEAEA",
        gray1: "#7D7D7D",
      },
      fontFamily: {
        caros: ["Caros", "sans-serif"],
      },
    },
  },
  plugins: [],
});
