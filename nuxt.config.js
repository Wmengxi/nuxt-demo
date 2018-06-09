const myconfig = require('./myconfig')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/googlefont/fonts.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [{
    src: '~plugins/ElementUI',
    ssr: true
  }],
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: myconfig.api,
      changeOrigin: true,
      pathRewrite: { '^/api': '/' }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    // publicPath: config.host + '/web/',
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['element-ui']
  }
}
