module.exports = {
  modules: [
    'nuxt-buefy'
  ],
  css: [
    { src: '~assets/main.scss', lang: 'scss' }
  ],
  srcDir: 'nuxt-app',
  buildDir: 'nuxt-dist',
  build: {
    publicPath: '/assets/',
  }
}