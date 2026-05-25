/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // We can pre-define JurisAI colors here to match your design!
        jurisBlue: '#0d233a', 
        jurisTeal: '#00a896',
        jurisOrange: '#e07a5f',
      }
    },
  },
  plugins: [],
}