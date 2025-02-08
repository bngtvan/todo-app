/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        purpleButton: '0px 4px 6px rgba(128, 0, 128, 0.5)', 
        'purple-inner-button': 'inset 0px 4px 6px rgba(128, 0, 128, 0.5)',
      },
    },
  },
  plugins: [],
}
