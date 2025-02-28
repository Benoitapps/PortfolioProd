/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
    flowbite.content(),

  ],
  theme: {
    extend: {
      height: {
        "96": "24rem",
      },
      width: {
        '215': '53.75rem',
      },
      colors: {
        blue: {
          'barre' : '#001B4E',
        },
        grey:{
          'barre' : '3b4252',
        },
        barre : '#3b4252',
        cube : '#4c566a',
        bluecyan : "#4ebabf"
      },
    },
  },
  plugins: [flowbite.plugin()],
}