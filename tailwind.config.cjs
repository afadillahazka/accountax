/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      tosca: "#4cb2a9",
      toscalight: "#7FE5DC",
      toscalight_2: "#54c0a9",
      red: "#FF312E",
      orange: "#fbc70d",
      "orange-2": "#FFDB2C",
      darkblue: "#262161", 
      white: "rgb(255 255 255)",
      black: "rgb(0, 0, 0)",
      gray: "#E1E1E1",
      gradient: "rgb(249,180,24)",
      mint: "#F0F7EE"
    },
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans]

      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
