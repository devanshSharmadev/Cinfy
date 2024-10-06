/** @type {import('tailwindcss').Config} */
const path = require('path');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode:'class',
  content: ['./src/**/*.{html,scss,ts}'],
  important  : true,
  theme: {
    fontSize:{
        'xs'  : '0.625rem',
        'sm'  : '0.75rem',
        'md'  : '0.8125rem',
        'base': '0.875rem',
        'lg'  : '1rem',
        'xl'  : '1.125rem',
        '2xl' : '1.25rem',
        '3xl' : '1.5rem',
        '4xl' : '2rem',
        '5xl' : '2.25rem',
        '6xl' : '2.5rem',
        '7xl' : '3rem',
        '8xl' : '4rem',
        '9xl' : '6rem',
        '10xl': '8rem'
    },
    screen:{
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}

