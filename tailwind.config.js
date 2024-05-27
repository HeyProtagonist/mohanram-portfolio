/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media',
  theme: {
    extend: {},
    fontFamily: {
      LibreBaskerville: [
        "Libre Baskerville",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      RobotoSlab: `"Roboto Slab", serif`,
      LeagueSpartan: `"League Spartan", serif`,
    },
  },
  plugins: [],
};
