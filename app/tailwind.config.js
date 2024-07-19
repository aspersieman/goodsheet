const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          light: "#f2f2e6",
          dark: "#07020a"
        },
        primary: {
          50: "#d6e7d0",
          100: "#c0dbbc",
          200: "#96c596",
          300: "#74ae7a",
          400: "#58975e",
          500: "#408040",
          600: "#39682c",
          700: "#38511c",
          800: "#363910",
          900: "#221807",
        },
        alexisBlue: {
          50: "#e7d0e2",
          100: "#dabcdb",
          200: "#ab96c5",
          300: "#7774ae",
          400: "#586a97",
          500: "#40607f",
          600: "#2c5068",
          700: "#1c3b51",
          800: "#102439",
          900: "#070f22",
        },
        violetWebcap: {
          50: "#e7d2d0",
          100: "#dcbbbe",
          200: "#c695a7",
          300: "#b07498",
          400: "#99578d",
          500: "#823f82",
          600: "#622c6b",
          700: "#461c53",
          800: "#2e103b",
          900: "#1a0723",
        },
        berkeleyHills: {
          50: "#e7e5d0",
          100: "#dbd8bc",
          200: "#c5bc96",
          300: "#ae9f74",
          400: "#978058",
          500: "#7f6040",
          600: "#68402c",
          700: "#51231c",
          800: "#391014",
          900: "#220711",
        },
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/forms')]
}
