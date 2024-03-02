/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#E1E7F2",
        darkBlue: "#04385B",
        button: "#045286",
        landing: "#EFEFFB",
        lightButton: "#C2DEF1",
      },
      fontFamily: {
        Buhrec: ["Racing Sans One"],
        Montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
