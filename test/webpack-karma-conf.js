const path = require('path');
const merge = require('webpack-merge');
const webpackBase = require('../webpack.config.js');

module.exports = merge.smart(webpackBase, {
  target: "web",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  node: {
    fs: 'empty'
  }
});