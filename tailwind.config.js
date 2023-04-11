/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "0px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1770px",
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      red: "#EF5555",
      darkred: "#501e1ea2",
      grey: "#EAECF0",
      news: "#F8F8FA",
      darkgrey: "#F0F1F1",
      black: "#000000",
      darkblue: "#2B3252",
      lightred: "#ff7d7df9",
    },
    extend: {},
  },
  plugins: [],
};
