/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: 'var(--font-roboto)',
        body: 'var(--font-rubik)',
      },
      aspectRatio: {
        '16/10': '16 / 10',
      },
    },
  },
  plugins: [],
};
