const { maxWidth } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/*.js", "./components/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        hv: "var(--hv-color)",
        customlight: "var(--customlight)",
        text: "var(--text)",
        darkgray: "var(--darkgray)",
        lightgray: "var(--lightgray)",
        orange: "var(--orange)",
        yellow: "var(--yellow)",
      },
      container2xl: {
        maxWidth: "1280px",
      },

      grayscale: {
        50: "50%",
        100: "100%",
      },
      inset: {
        timelineCircle: "calc(50% - 0.5em)",
      },

      minHeight: {
        "screen-2rem": "calc(100vh - 2rem)",
        "screen-without-nav": "calc(100vh - 4rem)",
        "screen-incl-footer": "calc(100vh - 10rem)",
      },

      rotate: {
        135: "135deg",
        "-135": "-135deg",
      },
    },
  },
};
