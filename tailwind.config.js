/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', //  necesario para soportar dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      scrollBehavior: {
      smooth: 'smooth',
      },
    },
  },
  plugins: [],
}
