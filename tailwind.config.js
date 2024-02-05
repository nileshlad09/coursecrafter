/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            color1: '#2C3E50',
            color2:"#209AF6"
        },
    },
},
  plugins: [],
}

