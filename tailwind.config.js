const colors = require('./ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./ui/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  // presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors,
      fontFamily: {
        'helvetica-neue-light': ['HelveticaNeueLight'],
        'helvetica-neue-thin': ['HelveticaNeueThin'],
        'helvetica-neue-medium': ['HelveticaNeueMedium'],
        'helvetica-neue-bold': ['HelveticaNeueBold'],
      },
    },
  },
  plugins: [],
}

