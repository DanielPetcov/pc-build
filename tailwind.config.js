/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A5BFCC",
        secondary: "#7E99A3",
        tertiary: "#4C585B",
        quaternary: "#F4EDD3",
      },
    },
  },
  plugins: [],
}