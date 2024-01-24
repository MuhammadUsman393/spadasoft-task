/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: "500ms",
      },
      screens: {
        sm: "600px",
        md: "800px",
        xs: "400px",
        lg: "1000px",
        xl: "1440px",
      },
      colors: {
        primary: "#343C6A",
        secondary: "#B1B1B1",
        third: "#2D60FF",
        fourth: "#8BA3CB",
        black1: "#232323",
        gray1: "#718EBF",
        gray2: "#DFEAF2",
        gray3: "#9199AF",
        gray4: "#EDF1F7",
        red1: "#FF4B4A",
        green1: "#41D4A8",
        green2: "#DCFAF8",
        yellow1: "#FFF5D9",
        blue1: "#E7EDFF",
        blue2: "#1814F3",
        background: "#F5F7FA",
      },
      fontFamily: {
        mont: ["Mont", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
});
