const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Playfair+Display'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff', height: '3px'},

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css', '~/assets/css/styles.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~plugins/core-components.js', '~plugins/date-filter.js'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-a71f9.firebaseio.com'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    baseUrl: 'https://nuxt-blog-a71f9.firebaseio.com',
    fbAPIKey: 'AIzaSyB6vGOaLv5RMWoDshfNlOE4qGoYTx_qPzc'
  },
  router: {linkActiveClass: 'active'},
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  manifest: {
    name: 'My blog',
    short_name: 'Mblog',
    lang: 'en',
    display: 'fullscreen',
    orientation: 'portrait',
    background_color: 'black',
    theme_color: '#ccc'
  },
  icon: {
    src: 'icon.png'
  },
  workbox: {
    runtimeCaching: [
      {
        // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
        urlPattern: 'https://fonts.googleapis.com/css?family=Playfair+Display',
        // Defaults to `networkFirst` if omitted
        handler: 'cacheFirst',
        // Defaults to `GET` if omitted
        method: 'GET'
      }
    ]
  }
}
