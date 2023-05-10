/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      background: "#F6F8F9",
      white: "#fff",
      title_h1: "#323338",
      gray_border: "#E8ECEE",
      gray_label: "#848588",
      black: "#000",
      danger_border: "#E44258",
      purple_button: "#5F48EA",
      gray: {
        700: "#5B5C60",
      },
      cyan: "#08C7E0",
    },
  },
  plugins: [],
};
