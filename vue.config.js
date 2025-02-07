module.exports = {
  lintOnSave: false,
  publicPath: process.env.BABEL_ENV === 'production'
    ? './'
    : '/'
}