const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    accessibility: false,
  },
  theme: {
    screens: {
      xs: { max: "639px" },
      maxmd: { max: "767px" },
      maxlg: { max: "1023px" },
      ...defaultTheme.screens,
    },
    extend: {
      inset: {
        119: "7.4375rem",
        "1/10": "10%",
        "1/6": "15%",
      },
      fontSize: {
        "3xxl": [
          "2rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        "5xxl": [
          "3.5rem",
          {
            lineHeight: "4.5rem",
          },
        ],
        "7xxl": [
          "5.5rem",
          {
            lineHeight: "6.5rem",
          },
        ],
      },
      listStyleType: {
        square: "square",
      },
      colors: {
        primary: "#5528FF",
        grayLine: "#CCCCCC",
        neutral5: "#D9D9D9",
        neutral12: "#0D0D0D",
        neutral9: "#404040",
        neutral7: "#7F7F7F",
        neutral10: "#2C2C2C",
        bg1: "#fafafa",
      },
      rotate: {
        135: "135deg",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      backgroundImage: {
        "home-banner": "url('./src/images/homeBanner.png)",
        "home-bg": "url('/public/home-bg.png')",
        "404_title": "url(/images/404_title.png)",
      },
      width: {
        1376: "calc(100vw - 4rem)",
        916: "57.25rem",
        155: "9.6875rem",
        152: "9.5rem",
        300: "18.75rem",
        944: "59rem",
      },
      maxWidth: {
        1440: "90rem",
      },
      height: {
        54: "calc(100vh - 54px)",
        600: "37.5rem",
        685: "42.8125rem",
      },
      backgroundSize: {
        "100%": "100%",
      },
      animation: {
        rotate180: "arrowSpin1 500ms forwards",
        rotate0: "arrowSpin2 500ms forwards",
      },
      keyframes: {
        arrowSpin1: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        arrowSpin2: {
          "0%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
