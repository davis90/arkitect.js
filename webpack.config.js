const path = require('path');

const libraryName = 'arkitect';
const outputFile = `${libraryName}.js`;

module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve('src')
    }
  },
  module: {
    rules: [{
      test: /.js$/,
      loader: 'babel-loader'
    }
    ]
  }
};