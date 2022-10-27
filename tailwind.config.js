/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
 content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
 theme: {
  container: {
   center: true,
  },
  extend: {
   fontFamily: {
    sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    headings: ["Work Sans"],
   },
  },
 },
 plugins: [],
};
