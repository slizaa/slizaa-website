var gulp = require('gulp')
var runSequence = require('run-sequence');
var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', ['build-with-drafts']);
