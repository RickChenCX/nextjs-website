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
    backgroundColor: (theme) => ({
      ...theme("colors"),
      bgOne: "#F5F5F5",
    }),
    extend: {
      inset: {
        119: "7.4375rem",
        90: "5.625rem",
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
        "4xxl": [
          "2.5rem",
          {
            lineHeight: "2.875rem",
          },
        ],
        "5xxl": [
          "3.5rem",
          {
            lineHeight: "2.875rem",
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
        primary1: "#4C18DB",
        grayLine: "#CCCCCC",
        neutral5: "#D9D9D9",
        neutral8: "#595959",
        neutral12: "#0D0D0D",
        neutral9: "#404040",
        neutral7: "#7F7F7F",
        neutral10: "#2C2C2C",
        borderColor: "#ccc",
        bg1: "#fafafa",
      },
      rotate: {
        135: "135deg",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      backgroundImage: {
        "home-banner": "url(/images/homeBanner.png)",
        "home-banner-mobile": "url(/images/homeBanner-mobile.png)",
        "home-bg": "url(/images/home-bg.png)",
        "home-section4-bg": "url(/images/home-section4-bg.png)",
        "404_title": "url(/images/404_title.png)",
      },
      width: {
        1376: "calc(100vw - 4rem)",
        1122: "70.125rem",
        916: "57.25rem",
        155: "9.6875rem",
        152: "9.5rem",
        300: "18.75rem",
        464: "29rem",
        944: "59rem",
      },
      maxWidth: {
        1440: "90rem",
        882: "55.125rem",
        642: "40.125rem",
        464: "29rem",
        434: "27.125rem",
        343: "21.4375rem",
        270: "16.875rem",
        172: "10.75rem",
      },
      height: {
        54: "calc(100vh - 54px)",
        600: "37.5rem",
        685: "42.8125rem",
        1035: "64.6875rem",
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
    borderColor: (theme) => ({
      ...theme("colors"),
      default: "#D9D9D9",
    }),
  },
  plugins: [],
};
