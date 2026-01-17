/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    colors: {
      primary: '#0F172A',
      secondary: '#1E293B',
      accent: '#38BDF8',
      text: '#E5E7EB',
      bg: '#020617',
      // legacy
      darkBg: '#0a0a0a',
      grayText: '#a1a1a1',
    },
  },
},
  plugins: [],
}