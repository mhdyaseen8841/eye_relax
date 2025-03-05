/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        primary: "#432344",
        secondary: "#FF2525",
        lightWhite: "#E7EEFB",
        golden: "FFC03D"
      },
    },
    plugins: [],
  }