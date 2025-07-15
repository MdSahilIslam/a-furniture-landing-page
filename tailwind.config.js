/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary" : "#E58411",
        "secondary" : "#1E1E1E",
        "primary-bg" : "#F7F7F7"
      },
      dark : "class",
      fontFamily : {
        "primary" : "gilroy-regular",
        "secondary" : "gilroy-bold"
      }
    },
  },
  plugins: [],
}

