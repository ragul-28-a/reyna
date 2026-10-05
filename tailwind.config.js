/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#090D16',
          800: '#0F172A',
          700: '#1E293B',
        },
        gold: {
          500: '#F59E0B',
          600: '#D97706',
        },
        cyan: {
          500: '#06B6D4',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
