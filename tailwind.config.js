const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    letterSpacing: {
      wider: '0.2em',
      widest: '0.3em',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      discordGray: colors.blueGray,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      gray: colors.trueGray
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}
