/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPiele: 'rgb(233, 221, 204)', // Definești culoarea ta personalizată
        customPeach: 'rgb(247,195,164,255)',
        customGray: 'rgb(219, 219, 219)',
        customOrange: 'rgb(211, 92, 19)',
      },
    },
  },
  plugins: [],
}