/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'jockey': ['Jockey One'],
      'poppins':['Poppins'],
      'rubik':['Rubik 80s Fade'],
      'roboto':['Roboto'],
    }
  },
  plugins: [],
}