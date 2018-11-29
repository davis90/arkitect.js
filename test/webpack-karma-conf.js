const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@':  path.resolve('src')
    }
  },
  module: {
    rules: [{
      test: /.js$/,
      loader: 'babel-loader'
    }
    ]
  },
  node: {
    fs: 'empty'
  }
};