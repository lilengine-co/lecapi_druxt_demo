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
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px"
      }
    }
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      transform: ['group-hover']
    }
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  }
}
