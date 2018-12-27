const webpackConfig = require('./webpack-karma-conf');

module.exports = function (config) {

  const options = {
    browsers: ['Chrome'],
    singleRun: true, //just run once by default
    basePath: __dirname,
    files: [
      `${__dirname}/specs/**/*.spec.js`
    ],
    preprocessors: {},
    webpack: webpackConfig,
    frameworks: ['mocha', 'chai'],
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        {
          type: 'lcov',
          dir: '../coverage',
          subdir: '.'
        },
        {
          type: 'lcovonly',
          dir: '../coverage',
          subdir: '.'
        }
      ],
      fixWebpackSourcePaths: true
    }
  };

  options.preprocessors[`${__dirname}/specs/**/*.spec.js`] = ['webpack'];


  config.set(options);
};