<template>
  <div class="font-sans">
    <druxt-block-region name="header"  :theme="theme" class="relative z-20 bg-white"/>
    <main class="pt-14 lg:pt-28">
      <DruxtBreadcrumb />
      <Nuxt />
    </main>
    <druxt-block-region name="footer" :theme="theme"  class="pt-14 lg:pt-28 clear-both"/>
  </div>
</template>

<script>
export default {
  data: () => ({
    theme: 'legin',
  }),

  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
  },

  computed: {
    isHomePath() {
      return !!this.$store.state.druxtRouter.route.isHomePath
    },
  },
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
