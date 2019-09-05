const path = require('path');
const node_dir = path.resolve(__dirname, './node_modules');

module.exports = {
  entry: {
    main: './src/assets/js/main.js',
    vendor: './src/assets/js/vendor.js'
  },
  resolve: {
    alias: {
      'jquery': node_dir + '/jquery/dist/jquery.min.js',
      'popper': node_dir + '/popper.js/dist/umd/popper.min.js',
      'webfont': node_dir + '/webfontloader/webfontloader.js',
      'stickybits': node_dir + '/stickybits/dist/jquery.stickybits.min.js',
      'bootstrap': node_dir + '/bootstrap/dist/js/bootstrap.min.js',
  }},
  output: {
    path: path.resolve(__dirname, './dist/assets/js/'),
    filename: '[name].js'
  }
};
