var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var rename       = require('gulp-rename');
var webpack      = require('gulp-webpack');
var less         = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

var config = {
  js: {
    watch:               './public/javascripts/**/*.js',
    src:                 './public/javascripts/app.js',
    dest:                './public/dist',
    bundleFilename:      'bundle.js'
  },
  css: {
    watch:               './public/stylesheets/**/*.less',
    src:                 './public/stylesheets/app.less',
    dest:                './public/dist',
    bundleFilename:      'bundle.css',
    requirementBrowsers: ['Explorer >= 10', 'Chrome >= 27', 'Firefox >= 21', 'Android >= 2.3', 'iOS >= 5.1'],
  }
};

var task = { config: config };

task.js = function() {
  gulp.src(config.js.src)
  .pipe(plumber())
  .pipe(webpack())
  .pipe(rename(config.js.bundleFilename))
  .pipe(gulp.dest(config.js.dest));
};

task.css = function() {
  gulp.src(config.css.src)
  .pipe(plumber())
  .pipe(less())
  .pipe(autoprefixer({ browsers: config.css.requirementBrowsers }))
  .pipe(rename(config.css.bundleFilename))
  .pipe(gulp.dest(config.css.dest));
};

module.exports = task;
