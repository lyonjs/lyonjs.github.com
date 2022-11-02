/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lyonjs-yellow': {
          DEFAULT: '#efda4e',
          dark: '#B5A53C',
        },
      },
    },
  },
  plugins: [],
};
