export default {

  ssr: false,
  target: 'server',

  env: {
    // TODO:Изменить при релизе
    BASE_URL: process.env.BASE_URL,
    BASE_URL_APOLLO_CLIENT: process.env.BASE_URL,
    LOGIN_URL: process.env.LOGIN_URL,
    isAuth: false
  },


  head: {
    title: 'Загрузка...',
    titleTemplate: '%s  | Service Looch',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }],
    script: [
      {
        src: '/js/jquery/index.js',
        type: 'text/javascript',
        defer: true
      },
      {
        src: '/js/popper.js/popper.min.js',
        type: 'text/javascript',
        defer: true
      },
      {
        src: '/js/bootstrap.bundle.min.js',
        type: 'text/javascript',
        defer: true
      },
      {
        src: '/js/datatables/index.js',
        type: 'text/javascript',
        defer: true
      },
      {
        src: '/js/datatables.bootstrap5/index.js',
        type: 'text/javascript',
        defer: true
      },
    ]
  },


  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/datatables/rowReorder.css',
    '~/assets/css//datatables/datatables.bootstrap.scss',
    "~/plugins/vue-multiselect/dist-multiselect/vue-multiselect.min.css",
    '~/assets/css/main.css'
  ],


  plugins: [
    { src: "~plugins/apollo-client.js"},
    { src: "~plugins/vuelidate.js", ssr: true },
  ],


  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-client.js'
    }
  },

  styleResources: {
    scss: [
      '~assets/scss/*.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/apollo'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  loading: {
    color: 'white',
    height: '5px'
  }
}
