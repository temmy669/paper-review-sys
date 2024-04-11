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
        link: "#39A3EB",
        welcome: "#0B49C2",
        upload: "#DEE7F5",
        ash: "#7D76768C",
      },
      fontFamily: {
        Buhrec: ["Racing Sans One"],
        Montserrat: ["Montserrat"],
        Raleway: ["Raleway"],
      },
    },
  },
  plugins: [],
};
