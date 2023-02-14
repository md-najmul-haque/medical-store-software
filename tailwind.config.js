/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  daisyui: {
    themes: [
      {
        theme: {
          primary: "#02094c",
          secondary: "#ff6400",
          accent: "#f8f9fd",
          neutral: "#002B5B",
          "base-100": "#f2f2f2",
        },
      },
      // "dark",
      // "",
    ],
  },
  plugins: [require('tw-elements/dist/plugin'), require("daisyui")],
}
