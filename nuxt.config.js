export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front-end',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/lodash',
    '~/plugins/gsap',
    '~/plugins/vuetify'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyA62w7gt4FQtJBrtNS2MQaQaFPsObICuXA",
          authDomain: "nuxtjs-app-db.firebaseapp.com",
          projectId: "nuxtjs-app-db",
          storageBucket: "nuxtjs-app-db.appspot.com",
          messagingSenderId: "1089800328618",
          appId: "1:1089800328618:web:f692ea4eaf14e2adf947d3",
          measurementId: "G-M7V9J7SSNJ"
        },
        services: {
          auth: true,
          firestore:true,
          database:true,// Just as example. Can be any other service.
        }
      }
    ],
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    ['@nuxtjs/axios'],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-clamp', 'resize-detector']
  },
  ssr:true,
  loading: { color: '#43A047', throttle: 0,height:'3px' },
  router: {
    //mode: 'abstract',
    middleware:['mid-test'],
  },

}
