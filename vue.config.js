module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/myEcom/'
      : '/',

    transpileDependencies: [
      'vuetify'
    ]
}
