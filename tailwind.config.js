/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/*.{html,js}",
  ],
  theme: {
    extend: {
      height: {
        '128': '36rem',
      }
    },
    fontFamily: {
      'dmsans': ["DmSans-Bold", "sans-serif"],
      'custom': ['CustomFont', 'sans-serif'],
      'CustomFonDMSansmedium': ['CustomFontDMSans-medium', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'purple-light': "#516CF7",
      'purple-light-lighter': "#E1E7FE",
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'gray': '#F7F9FC',
      'gray-light': "#79819A",
      'gray-lght-test': "#E2E6EE",
      'gray-dark': "#2E2E48",
      'dark': "#47516B"
    },
    animation: {
      'fadeinright': 'fade-in-right 1s ease-in-out 0.25s 1',
    },
  },
  plugins: [],

}

