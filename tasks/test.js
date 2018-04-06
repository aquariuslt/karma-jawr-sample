var fs = require('vinyl-fs');
var gulp = require('gulp');
var karma = require('karma');
var sequence = require('gulp-sequence');
var lcovResultMerger = require('lcov-result-merger');

var pathUtil = require('./utils/path.util');

var Server = karma.Server;

gulp.task('profile-foo:unittest', function(done) {
  new Server({
    configFile: pathUtil.resolve('tasks/config') + '/karma.conf.foo.js',
    singleRun: true
  }, done).start();
});

gulp.task('profile-bar:unittest', function(done) {
  new Server({
    configFile: pathUtil.resolve('tasks/config') + '/karma.conf.bar.js',
    singleRun: true
  }, done).start();
});

gulp.task('lcov-merge', function(done) {
  fs.src(pathUtil.resolve('src/test/js/unit/coverage/*/lcov.info')).pipe(lcovResultMerger()).pipe(fs.dest(pathUtil.resolve('src/test/js/unit/coverage')));
  done();
});

gulp.task('test', sequence(
  ['template'],
  ['profile-foo:unittest'],
  ['profile-bar:unittest'],
  ['lcov-merge']
));
