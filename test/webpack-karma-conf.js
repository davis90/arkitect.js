const path = require('path');

module.exports = {
  entry: {
    arkitect: [
      `${__dirname}/specs/abstract/Abstract.spec.js`,
      `${__dirname}/specs/interface/Interface.spec.js`,
      `${__dirname}/specs/singleton/Singleton.spec.js`
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      abstract: path.resolve('src/abstract'),
      interface: path.resolve('src/interface'),
      singleton: path.resolve('src/singleton')
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