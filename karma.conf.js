/* 
* Require webpack config */
var webpackConfig = require('./webpack.config.js');

// Karma configuration
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    /* 
    * The base path from which all files for testing and the tests themselves need to be
    * loaded. This is set relative to the location of the Karma config file. */
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    /* 
    * Which frameworks to load, as an array. In our example, we loaded Jasmine (which
    * requires that the karma-jasmine plugin be installed). You can select mocha, qunit,
    * or something else as well here. */
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    /* 
    * The list of files (or file paths) to load, listed as an array. In the case of AngularJS, we
    * first load the AngularJS library, and then the angular-mocks.js file, which AngularJS
    * provides as a helper for testing. Finally, we load the application source code followed
    * by the actual unit tests. */
    files: [
      // jquery file
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/foundation.min.js',
      // test files
      './app/tests/**/*.test.jsx'
    ],


    // list of files / patterns to exclude
    /* 
    * A list of files (or file paths) to exclude. Useful if you are using a lot of glob rules
    * (wildcard statements to include a set of files, like **.js ) for the files, and want to
    * exclude certain files (like the karma.conf.js). */
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
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
    /* 
    * Which levels of log ( console.log , console.info ) Karma needs to capture from
    * the browser. */
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    /* 
    * This is by far the coolest and most useful feature of Karma. This tells Karma to keep
    * a watch on all the files included by the files config, and if any of them change, to
    * run the affected unit tests. If this is set to true , you don’t need to ever manually
    * trigger a run of your unit tests; Karma will take care of that for you. */
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    /* 
    * The browsers Karma should open when it is initially started. Most of these require
    * a karma-launcher plugin (we installed the chrome-launcher , so we specify Chrome
    * in this). */
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    /* 
    * This is a Boolean value, and tells Karma to shut down the server after one single
    * run of the unit tests. This should be set to true for continuous integration envi‐
    * ronments, and can be ignored otherwise. */
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    /* 
    * Client */
    client: {
      mocha: {
        // Test timeout after 5 seconds
        timeout: '5000'
      }
    },

    /* 
    * Webpack */
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    webpackMiddleware: {
      noInfo: true
    },
  });
};
