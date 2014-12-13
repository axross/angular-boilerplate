// Karma configuration
// Generated on Fri Dec 12 2014 01:54:47 GMT+0900 (JST)

module.exports = function(config) {
  config.set({
    autoWatchBatchDelay: 1000,
    basePath: '',
    frameworks: ['browserify', 'mocha'],
    files: [
      './public/tests/global.js',
      './public/dist/lib.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './public/dist/bundle.js',
      './public/tests/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      './public/tests/**/*.spec.js': ['browserify']
    },
    reporters: ['spec', 'osx'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    client: {
      captureConsole: true
    },
    browserify: {
      transform: ['espowerify'],
    }
  });
};
