const colors = require('tailwindcss/colors');
module.exports = {
    mode:'jit',
     purge: {
    enabled: true,
        content: [
            './**/*.html',
            './**/*.razor',
            './CodesDatabase.cs'
        ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          colors: {
              sky: colors.sky,
              emerald: colors.emerald,
          },
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
