/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Playwrite NO", "cursive"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
