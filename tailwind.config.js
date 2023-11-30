/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        yellow: "#FFC700",
        darkyellow: "#FFB800",
        black: "#2C2A2A",
        white: "#FFFFFF",
        blue: "#021C5F",
        grey: "#545454",
        lightgrey: "#f5f5f1",
      },
    },
  },
  plugins: [],
};
