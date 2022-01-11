const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: { max: "639px" },
      maxmd: { max: "767px"},
      maxlg: {max: "1023px"},
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        "3xxl": [
          "2rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        "5xxl": [
          "2rem",
          {
            lineHeight: "2.5rem",
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
      },
      rotate: {
        135: "135deg",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      backgroundImage: {
        "home-banner": "url('./src/images/homeBanner.png)",
      },
      width: {
        1376: "calc(100vw - 4rem)",
        5725: "57.25rem"
      },
      maWindth: {
        1440: "90rem",
      },
      height: {
        54: "calc(100vh - 54px)",
      },
    },
  },
  plugins: [],
};
