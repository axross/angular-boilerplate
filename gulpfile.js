var path        = require('path');
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var modRewrite  = require('connect-modrewrite');

var bundleTask;
var libTask  = require('./tasks/lib');
var testTask = require('./tasks/test');

if (process.env.NODE_ENV) {
  bundleTask = require('./tasks/bundle-' + process.env.NODE_ENV);
} else {
  bundleTask = require('./tasks/bundle');
}

// Discrete tasks
gulp.task('bundle-js',  bundleTask.js);
gulp.task('bundle-css', bundleTask.css);
gulp.task('bundle',     ['bundle-js', 'bundle-css']);
gulp.task('lib',        libTask.lib);
gulp.task('test',       testTask.test);
gulp.task('tdd',        testTask.tdd);

// Development build, also prodction build if use NODE_ENV=production.
gulp.task('build',   ['bundle', 'lib']);
gulp.task('default', ['build']);

// Run server and watch file changes
gulp.task('browser-sync', ['build'], function() {
  gulp.watch(bundleTask.config.js.watch, ['bundle-js', browserSync.reload]);
  gulp.watch(bundleTask.config.css.watch, ['bundle-css', browserSync.reload]);

  browserSync({
    // proxy: 'localhost',
    server: {
      baseDir: './public',
      logLevel: 'debug',
      open: true,
      middleware: [
        modRewrite(['^[^\\.]*$ /index.html [L]'])
      ],
    },
    open: false
  });
});
gulp.task('watch',  ['browser-sync']);  // alias
