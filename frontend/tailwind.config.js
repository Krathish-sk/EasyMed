/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        buttonBgColor: "#0067FF",
        yellowColor: "#FEF60D",
        purpleColor: "#9771FF",
        irisBleColor: "#01B5C5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
      },
      boxShadow: {
        panelShadow: "rgba(17,12,46,0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
};
