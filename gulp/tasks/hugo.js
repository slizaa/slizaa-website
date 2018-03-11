var gulp = require('gulp');
var exec = require('child_process').execSync;
var gutil = require('gulp-util');
var path = require('path');
var del = require('del');
var config = require('../config');

/**
 *
 */
function hugo(drafts) {

    //
    var src = process.cwd() + config.hugo.src;
    var dst = process.cwd() + config.hugo.dest;

    //
    gutil.log('src: ' + src + ' dst: ' + dst);

    //
    var cmd = 'hugo -s ' + src + ' -d ' + dst;
    if (config.hugo.verbose) {
        cmd += ' --verbose=true';
    }
    if (drafts) {
        cmd += ' --buildDrafts=true';
    }

    //
    var result = exec(cmd, {encoding: 'utf-8'});

    //
    gutil.log('hugo: \n' + result);
}

/**
 *
 */
gulp.task('hugo:with-drafts', ['hugo:delete'], function () {
    hugo(true);
});

/**
 *
 */
gulp.task('hugo:without-drafts', ['hugo:delete'], function () {
    hugo(false);
});

/**
 *
 */
gulp.task('hugo:delete', function () {
    var dst1 =  path.join(process.cwd(), 'site/public/**') ;
    gutil.log('hugo delete: \n' + dst1);
    del.sync(dst1);
});
