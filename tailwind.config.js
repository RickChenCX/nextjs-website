const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': {"max": '639px'},
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'primary': '#5528FF',
        "grayLine": "#CCCCCC",
      },
      rotate: {
        '135': '135deg',
      },
      
    },
  },
  plugins: [],
}
