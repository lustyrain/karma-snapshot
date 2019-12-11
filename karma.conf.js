// Karma configuration
// Generated on Wed Dec 11 2019 11:49:48 GMT+0900 (Japan Standard Time)
const webpack = require('webpack');
// const snapshot = require('./lib/index');
const fs = require('fs');
const allBrowser = [
  'Chrome',
  'Firefox',
  'MSEdge - Win10',
  'IE11 - Win7'
];
process.on('uncaughtException', (err) => {
  console.log(err);
});
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'snapshot', 'mocha-snapshot'],


    // list of files / patterns to load in the browser
    files: [
      '__snapshots__/**/*.md',
      'test/*.js',
      'test/html/*.html'
    ],


    // list of files / patterns to exclude
    exclude: [],


    proxessKillTimeout: 6000,
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '__snapshots__/**/*.md': ['snapshot'],
      'test/*.js': ['webpack'],
      'test/html/*.html': ['html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // logLevel: config.LOG_INFO,
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    // autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: allBrowser,

    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    '@babel/preset-env'
                  ]
                }
              }
            ]
          }
        ]
      },
      devtool: "inline-source-map",
      performance: {
        hints: false
      }
    },
    webpackMiddleware: {
      stats: "errors-only",
      noInfo: true
    },

    snapshot: {
      update: !!process.env.UPDATE,
      prune: !!process.env.PRUNE
    },

    mochaReporter:{
      showDiff:true
    },

    client: {
      mocha: {
        reporter: "html",
        ui: "bdd"
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
