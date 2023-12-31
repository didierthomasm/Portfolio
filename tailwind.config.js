/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        Cardinal: '#B42741',
        'Bright-pink-crayola': '#F14D6E',
        'Robin-egg-blue': '#1FD5D5',
        'Orange-crayola': '#E17A40',
        Licorice: '#0F0108'
      },
      cursor: {},
      flexGrow: {
        '3': '3', // This adds a utility for 'flex-grow: 3;'
      },
      scale: {
        '110': '1.50', // 10% larger
      }
    },
  },
  plugins: [],
}

