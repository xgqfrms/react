var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');

// --save-dev or --save 
// require 相对路径，
// -g 绝对路径， 只对 ???-cli 好使，不适合local test


//npm install --save-dev gulp
//npm install --save-dev gulp-react
//npm install --save-dev gulp-sourcemaps
 
gulp.task('default', function () {
    return gulp.src('ticking.jsx')
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dest/'));
});