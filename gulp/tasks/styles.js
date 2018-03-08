var gulp = require('gulp')
var less = require('gulp-less')
var gutil = require('gulp-util');
var config = require('../config');

gulp.task('styles', function () {

    //
    var src = process.cwd() + config.less.src;
    var dst = process.cwd() + config.less.dest;

    gutil.log('less src: ' + src + ' dst: ' + dst);

    gulp.src(src)
        .pipe(less())
        .pipe(gulp.dest(dst))
})
