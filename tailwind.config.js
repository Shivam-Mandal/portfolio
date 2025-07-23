/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url('/src/assets/bgimg.jpg')",
        'bg-home': "url('/src/assets/bghome.jpg')", 
        'background-size':'cover',
      },
      fontFamily: {
        Outfit: ['"Outfit"', "sans-serif"],
      },
      colors: {
        golden: "#d4af37",
      },
      screens: {
        // '4k': '2560px', // Add this line for 4K screens
        'lg':'1400px'
      },
      
    },
  },
  plugins: [],
}
