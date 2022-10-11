/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      abu: {
        50: "#EBEEF5",
        100: "#C3C8D4",
        200: "#A8AEBF",
        300: "#8E95A9",
        400: "#767E94",
        500: "#61697F",
        600: "#0D1818",
        700: "#323B54",
      },
      secondary: {
        500: "#1EA5FC",
        600: "#121829",
        800: "#161D37",
      },
      tertary: {
        600: "#9257CC",
        500: "767E94",
      },
    },
  },
  plugins: [],
};
