import components from './components'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'lecapi_druxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/ledruxt'
    },
    {
      src: '~/plugins/vue-easy-lightbox.js',
      mode: 'client'
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/netlify-files'
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'druxt-site',
    '@nuxtjs/style-resources',
    '@nuxtjs/proxy',
    'nuxt-shopify'
  ],

  druxt: {
    baseUrl: process.env.BASE_URL
  },

  styleResources: {
    scss: [
      './assets/scss/styles.scss',
    ]
  },

  proxy: {
    '/sites/default/files': process.env.BASE_URL
  },

  shopify: {
    domain: 'lil-engine-cafe.myshopify.com/',
    storefrontAccessToken: 'c0a14ed032b2abae3e7b979bc404ad44',
  },

  // buildDir: 'dist',
  // target: 'static',
  
  // generate: {
  //   fallback: true
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
