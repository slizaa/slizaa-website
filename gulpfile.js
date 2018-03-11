var gulp = require('gulp')
var runSequence = require('run-sequence');
var requireDir = require('require-dir');
var htmlmin = require('gulp-htmlmin');
let cleanCSS = require('gulp-clean-css');



// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', ['build-with-drafts', 'minify-html']);

gulp.task('minify-html', function() {
    return gulp.src('site/public/**/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('site/public'));
  });

  gulp.task('minify-css', () => {
    return gulp.src('site/public/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('site/public/css'));
  });
    