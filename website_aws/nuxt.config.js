export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'website_aws',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fontawesome/css/all.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    proxy: true,
    baseURL: 'http://127.0.0.1:8000/api/v1',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
        login: { url: 'http://127.0.0.1:8000/api/v1/auth/token/login/', method: 'post', changeOrigin: true, propertyName: 'auth_token' },
        user: { url: 'http://127.0.0.1:8000/api/v1/users/me/', method: 'get', propertyName: 'auth_token', changeOrigin: true },
        logout: { url: 'http://127.0.0.1:8000/api/v1/auth/token/logout/', method: 'post', propertyName: 'auth_token', changeOrigin: true }
        },
        tokenType: 'Token',
        tokenName: 'Authorization'
      }
      },
      redirect: {
        login: '/auth/signIn',
        home: '/'
    }
  },
}
