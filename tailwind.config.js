/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonbg: "#6D2C95",
        buttonhover: "#A062C4",
        textcolor: "#666666",
      },
    },
  },
  plugins: [],
};
