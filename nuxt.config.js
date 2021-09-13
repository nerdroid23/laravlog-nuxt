export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'laravlog-nuxt',
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
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/composition-api/module'
  ],

  googleFonts: {
    display: 'swap',
    families: {
      Inter: {
        wght: [300, 400, 500, 600, 700, 800]
      },
      Nunito: {
        wght: [300, 400, 500, 600, 700, 800]
      },
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:8000/api',
    credentials: true,
  },

  auth: {
    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: process.env.API_HOST,
      },
    },
    redirect: {
      login: '/auth/login',
      logout: '/',
      callback: false,
      home: '/cp'
    }
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API_URL
    },
  },

  privateRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API_URL
    },
  },

  router: {
    linkActiveClass: 'underline',
    linkExactActiveClass: 'underline',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  },
}
