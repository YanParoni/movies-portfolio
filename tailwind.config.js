module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  darkMode: false, // or 'media' or 'class'
  theme: {
    
    fill: theme => ({

      'red': theme('colors.red.500'),

      'green': theme('colors.green.500'),

      'blue': theme('colors.blue.500'),

    }),
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',

     '3': '3px',
      '4': '4px',

     '5': '5px',

     '8': '8px',
    },
    extend: {
      fontFamily: {
        body: ['Roboto']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
