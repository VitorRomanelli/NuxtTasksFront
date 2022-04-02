export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s / Task Experience',
    title: 'Task',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/task.png' }],
  },

  animejs: true,

  layoutTransition: 'my-layouts',

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$anime.set(el, {
        opacity: 0
      })
    },

    enter(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    },

    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    }
  },

  router: {
    middleware: 'auth'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/styles/global.scss'],

  // router: {
  //   home: '/auth'
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-the-mask.js',
    '~/plugins/tilt.js',
    '~/plugins/storage',
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',

    '@nuxtjs/moment',

    'nuxt-animejs',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-toastification/nuxt'
  ],

  toast: {
    transition: "Vue-Toastification__fade",
  },

  env: {
    API_KEY: process.env.API_KEY
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_KEY,
  },

  loading: '~/components/loading.vue',

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          background: '#e5e5e5',
          primary: '#e5e5e5',
          primarycontrast: '#093545',
          primarytext: '#fff',
          labeltext: '#093545',
          accent: '#20df7f',
          secondary: '#224957',
          secondarytext: '#fff',
          card: '#f5f5f5',
          info: '#67C1E8',
          warning: '#FBC370',
          error: '#F56262',
          success: '#A6DC62',
        },
        dark: {
          background: '#093545',
          primary: '#093545',
          primarycontrast: '#e5e5e5',
          primarytext: '#fff',
          labeltext: '#eee',
          accent: '#10df70',
          secondary: '#224957',
          secondarytext: '#224957',
          card: '#264653',
          info: '#67C1E8',
          warning: '#FBC370',
          error: '#F56262',
          success: '#A6DC62',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
