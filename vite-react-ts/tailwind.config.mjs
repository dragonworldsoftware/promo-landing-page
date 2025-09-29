/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        content: '1024px'
      },
      colors: {
        // Override defaults
        black: '#121212',
        white: '#FFFFFF',

        // Custom grays
        'gray-dark': '#8B8C8E',
        'gray-light': '#F5F5F5',

        // Greens (updated)
        'green-primary': '#129486',
        'green-secondary': '#1CF673',
        'green-light': '#EDFFF9',
        'green-dark': '#031F1C',
        'green-header': '#20514C', // Added for header background

        // Accent colors
        'pink-bright': '#F61CB1',
        'yellow-primary': '#FFDB49',
        'yellow-secondary': '#FAECC0',
        'red-secondary': '#FFD2C5',
        'red-primary': '#FF5439',
        'blue-primary': '#1C98F6'
      }
    }
  },
  plugins: []
}
