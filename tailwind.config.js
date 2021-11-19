const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        comfortaa: ["'Comfortaa', cursive"],
      },
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        primary: "#0f1033",
        secondary: "#7d08ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
