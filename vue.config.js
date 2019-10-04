// @type

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-burger/' : '',
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}