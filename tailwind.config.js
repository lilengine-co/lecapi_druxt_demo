// tailwind.config.js
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '1rem',
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px"
      }
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'serif': ['"Rozha One"', 'serif'],
    }
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      display: ['group-hover'],
      opacity: ['disabled'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  experimental: {
    applyComplexClasses: true,
  }
}
