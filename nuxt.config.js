export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CRAIN',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],

    script:
    [
      {src:'/bootstrap.js'},
      {src:'https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js'},
      {src:'https://kit.fontawesome.com/d89c2ca226.js', crossorigin:'anonymous'}
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },



  { rel: 'stylesheet', href: '/bootsrap.css' },
  { rel: 'stylesheet', href: '/bootstrap-grid.min.css' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap' },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&family=Mukta:wght@200&display=swap' },
],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    target
  },
}
