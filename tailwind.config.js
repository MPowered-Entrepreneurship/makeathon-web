module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          101: '#fec60a',
        }
      },
      fontFamily: {
        'sans': ['hero-new'],
       }
    },
    variants: {
      extend: {
          fontWeight: ['hover'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
