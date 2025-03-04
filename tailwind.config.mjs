/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", 
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
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
