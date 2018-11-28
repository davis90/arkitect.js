const path = require('path');

module.exports = {
  entry: {
    arkitect: [
      `${__dirname}/src/abstract/Abstract.js`,
      `${__dirname}/src/interface/Interface.js`,
      `${__dirname}/src/singleton/Singleton.js`
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
};