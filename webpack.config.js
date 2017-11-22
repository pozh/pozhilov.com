var path = require('path');
var webpack = require('webpack')

var node_dir = path.resolve(__dirname, './node_modules');

module.exports = {
  context: path.resolve(__dirname, './src/assets/js'),
  entry: {
    main: './main.js',
    vendor: './vendor.js'
  },
  resolve: {
    alias: {
      'jquery': node_dir + '/jquery/dist/jquery.min.js',
      'popper': node_dir + '/popper.js/dist/umd/popper.min.js',
      'webfont': node_dir + '/webfontloader/webfontloader.js',
      'bootstrap': node_dir + '/bootstrap/dist/js/bootstrap.min.js',
  }},
  output: {
    path: path.resolve(__dirname, './dist/assets/js/'),
    filename: '[name].js',
  },
  // devtool: '#source-ma p',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015-ie', 'babili']
      }
    }]
  }
}
