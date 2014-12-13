var path    = require('path');
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var karma   = require('karma').server;

var config = {
  configFile: path.resolve(__dirname, '../karma.conf.js')
};

var task = { config: config };

task.test = function(done) {
  karma.start({
    configFile: config.configFile,
    singleRun: true
  }, done);
};

task.tdd = function(done) {
  karma.start({
    configFile: config.configFile
  }, done);
};

module.exports = task;
