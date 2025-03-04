/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            lightHover: '#fcf4ff',
            darkHover:  '#2a004a',
            darkTheme: '#11001F',
          },
          fontFamily: {
            outfit: "var(--font-outfit)", 
            ovo: "var(--font-ovo)",
          },
      },
    },
    plugins: [],
  };
  