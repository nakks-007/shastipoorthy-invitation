/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A0E0E",
        gold: "#C8A951",
        cream: "#FFF9F3",
        accent: "#8B5E3C"
      },
      fontFamily: {
        serif: ["Georgia", "serif"]
      }
    },
  },

  // theme: {
  //   extend: {
  //     colors: {
  //       primary: "#1F2937",
  //       gold: "#C9A646",
  //       cream: "#FFFFFF",
  //       accent: "#F3F4F6"
  //     },
  //     fontFamily: {
  //       serif: ["Georgia", "serif"]
  //     }
  //   }
  // },
  plugins: [],
}
