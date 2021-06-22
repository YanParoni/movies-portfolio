module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  darkMode: false, // or 'media' or 'class'
  theme: {
    
    fill: theme => ({

      'red': theme('colors.red.500'),

      'green': theme('colors.green.500'),

      'blue': theme('colors.blue.500'),

    }),
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '18px 10px 5px 3px rgba(0,0,0,0.67)',

      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
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
