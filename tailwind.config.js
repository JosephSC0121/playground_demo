/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,md}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#474448',
        secondary: '#E0DDCF',
        tertiary: '#534b52',
        quaternary: '#2d232e',
        quinary: '#f1f0ea'
      },
      textColor: {
        white: '#f1f0ea' // Definir color de texto blanco
      }
    }
  },
  darkMode: "class",
  plugins: [require('@tailwindcss/typography')]
}