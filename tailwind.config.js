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
      xls: { min: "1360px" },
      xxl: { min: "1440px" },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      bgOne: "#F5F5F5",
    }),
    extend: {
      margin: {
        120: "7.5rem",
      },
      letterSpacing: {
        "tracking-small": "-.01em",
        "tracking-smaller": "-.02em",
      },
      inset: {
        119: "7.4375rem",
        90: "5.625rem",
        "1/10": "10%",
        "1/6": "15%",
        13: "57px",
      },
      fontSize: {
        "text-sml": [
          "0.875rem",
          {
            lineHeight: "1.375rem",
          },
        ],
        xxs: [
          "0.625rem",
          {
            lineHeight: "1.125rem",
            letterSpacing: "-0.02rem",
          },
        ],
        xlx: [
          "1.25rem",
          {
            lineHeight: "1.5rem",
          },
        ],
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
        primary1: "#4C18DB",
        primary2: "#aa94ff",
        primary3: "#2A1480",
        grayLine: "#CCCCCC",
        neutral5: "#D9D9D9",
        neutral8: "#595959",
        neutral12: "#0D0D0D",
        neutral9: "#404040",
        neutral7: "#7F7F7F",
        neutral10: "#2C2C2C",
        borderColor: "#ccc",
        borderColor0: "#000",
        bg1: "#fafafa",
        bg2: "#FAFAFA",
      },
      borderColor: {
        neutral5: "#D9D9D9",
        neutral11: "#1F1F1F",
      },
      rotate: {
        135: "135deg",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      backgroundImage: {
        "home-banner": "url(/images/home-banner.jpeg)",
        "home-banner-mobile": "url(/images/home-banner-mobile.jpeg)",
        "home-bg": "url(/images/home-bg.png)",
        "home-section4-bg": "url(/images/home-section4-bg.png)",
        "home-footer": "url(/images/home-footer.png)",
        "home-footer-mobile": "url(/images/home-footer-mobile.png)",
        "about-footer": "url(/images/about-footer.png)",
        "about-footer-mobile": "url(/images/about-footer-mobile.png)",
        "404_title": "url(/images/404_title.svg)",
        "flex-pc": "url('/images/flexBannerPc.png')",
        "flex-mobile": "url('/images/flexBannerMobile.png')",
        "tea-pc": "url('/images/teaBannerPc.jpg')",
        "tea-mobile": "url('/images/teaBannerMobile.jpg')",
        "employee-engage-pc": "url('/images/employeeEngageBannerPc.svg')",
        "employee-engage-mobile":
          "url('/images/employeeEngageBannerMobile.svg')",
        "login-bg-mobile": "url(/images/login-bg-mobile.png)",
        "about-banner-pc": "url('/images/aboutBannerPc.png')",
        "about-banner-mobile": "url('/images/aboutBannerMobile.png')",
        "about-article-pc": "url('/images/aboutArticlePc.png')",
        "about-article-mobile": "url('/images/aboutArticleMobile.png')",
        "arrow-white": "url(/images/ArrowDown_white.svg)",
        arrow: "url(/images/ArrowDown.svg)",
        "home-breakimage-bg": "url(/images/BreakImage.png)",
        "home-breakimage-mobile-bg": "url(/images/BreakImage-mobile.png)",
      },
      width: {
        1376: "calc(100vw - 4rem)",
        1122: "70.125rem",
        916: "57.25rem",
        800: "50rem",
        155: "9.6875rem",
        152: "9.5rem",
        300: "18.75rem",
        420: "26.25rem",
        464: "29rem",
        488: "30.5rem",
        560: "35rem",
        944: "59rem",
        447: "27.93rem",
        455: "28.44rem",
        263: "16.44rem",
        118: "7.375rem",
        568: "35.5rem",
        1440: "90rem",
      },
      minWidth: {
        320: "20rem",
      },
      maxWidth: {
        1440: "90rem",
        1095: "calc(100vw - 21.56rem)",
        1094: "68.44rem",
        1056: "66rem",
        882: "55.125rem",
        642: "40.125rem",
        500: "31.25rem",
        464: "29rem",
        434: "27.125rem",
        343: "21.4375rem",
        290: "18.125rem",
        270: "16.875rem",
        212: "13.25rem",
        168: "10.5rem",
      },
      height: {
        54: "calc(100vh - 54px)",
        300: "18.75rem",
        336: "21rem",
        600: "37.5rem",
        620: "38.75rem",
        685: "42.8125rem",
        1024: "64rem",
        1324: "82.75rem",
        1152: "72rem",
        306: "19.125rem",
        50: "3.125rem",
        480: "30rem",
        125: "7.8rem",
        83: "5.2rem",
      },
      minHeight: {
        102: "6.375rem",
        72: "4.5rem",
      },
      padding: {
        18: "4.5rem",
        23: "5.75rem",
        25: "6.25rem",
        26: "6.5rem",
        39: "9.75rem",
        89: "21.56rem",
        151: "9.44rem",
        215: "13.44rem",
        300: "18.75rem",
      },
      animation: {
        rotate180: "arrowSpin1 500ms forwards",
        rotate0: "arrowSpin2 500ms forwards",
        modalShow: "show 500ms forwards",
        fullHeight: "fullHeightUl 500ms forwards",
      },
      keyframes: {
        fullHeightUl: {
          "0%": { display: "none" },
          "100%": { display: "block" },
        },
        arrowSpin1: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        arrowSpin2: {
          "0%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        show: {
          "0%": { display: "none", opacity: 0 },
          "100%": { display: "block", opacity: 1 },
        },
      },
      backgroundSize: {
        "100%": "100%",
      },
    },
  },
  plugins: [],
};
