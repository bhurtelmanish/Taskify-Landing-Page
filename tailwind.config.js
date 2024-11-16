/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins' : ["Poppins" , "sans-serif"],
      'roboto' : ["Roboto" , "sans-serif"],
      'openSans' : ["Open Sans", "sans-serif"]
    },
    screens: {
      'tablet': '580px',
      'ipad' : '768px',
      'laptop': '900px',
    },
  },
  plugins: [],
  darkMode: "class"
}