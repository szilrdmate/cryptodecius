/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{jsx,js}", "./src/pages/*.{jsx,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      xs: ['0.75rem', {
        lineHeight: '1.4'
      }],
      sm: ['0.875rem', {
        lineHeight: '1.4'
      }],
      base: ['1rem', {
        lineHeight: '1.7'
      }],
      lg: ['1.125rem', {
        lineHeight: '1.2'
      }],
      xl: ['1.25rem', {
        lineHeight: '1.2'
      }],
      '2xl': ['1.5rem', {
        lineHeight: '1.2'
      }],
      '3xl': ['1.875rem', {
        lineHeight: '1.2'
      }],
      '4xl': ['2.25rem', {
        lineHeight: '1.2'
      }],
      '5xl': ['3rem', {
        lineHeight: '1.2'
      }],
      '6xl': ['3.75rem', {
        lineHeight: '1.2'
      }],
    },
    colors: {
      'dark-blue': '#0c0d14',
      'purple': '#813efb',
      'yellow': '#ffaf1b',
      'black': '#212121',
      'dark-gray': '#17171b',
      'light-gray': '#99a1ba',
      'p-gray': '#000000cc',
      'white': '#f6f6f6',
      'light-blue': '#1fb6ff',
      'green': '#6de593',
      'blue-purple': '#4a3aff'
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'main': "url('src/assets/gradient.webp')",
        'tri': "url('src/assets/white-tri.webp')",
        'l-blur': "url('src/assets/left-blur.webp')",
        'r-blur': "url('src/assets/right-blur.webp')",
        'team': "linear-gradient(to top, rgba(12, 13, 20, 1) 0%, rgba(12, 13, 20, 1) 10%, rgba(12, 13, 20, 0.0) 100%), url('src/assets/team.webp')"
      }
    },
  },
  plugins: [],
}