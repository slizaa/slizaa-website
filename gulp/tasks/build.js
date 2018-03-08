var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build-with-drafts', function () {
    runSequence('styles', 'hugo:with-drafts');
});

gulp.task('build-without-drafts', function () {
    runSequence('styles', 'hugo:without-drafts');
});