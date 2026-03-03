const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.webc', './src/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['General Sans', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        cream: '#fffaef',
        'cream-dark': '#fff3dc',
        peach: '#f7cb9c',
        'sky-light': '#9cd3f7',
        lime: '#d8ff76',
        sand: '#c0b6a2',
      },
      boxShadow: {
        button: '-6px 6px 0px rgba(0, 0, 0, 0.48)',
        frame: '0px -8px 0px rgba(129, 121, 104, 0.5)',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
