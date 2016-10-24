var gulp = require('gulp');
var react = require('gulp-react');

// --save-dev or --save 
// require 相对路径，
// -g 绝对路径， 只对 ???-cli 好使，不适合local test


//npm install --save-dev gulp
//npm install --save-dev gulp-react
 
gulp.task('default', function () {
    return gulp.src('*.jsx')
        .pipe(react())
        .pipe(gulp.dest('./'));
});