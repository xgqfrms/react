var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');
var babel = require('gulp-babel');
const concat = require('gulp-concat');

// --save-dev or --save 
// require 相对路径，
// -g 绝对路径， 只对 ???-cli 好使，不适合local test


//npm install --save-dev gulp
//npm install --save-dev gulp-react
//npm install --save-dev gulp-sourcemaps

//$ npm install --save-dev babel-plugin-transform-runtime
//$ npm install --save-dev gulp-concat

// https://egghead.io/lessons/react-react-fundamentals-development-environment-setup?course=react-fundamentals#/tab-transcript

// npm install --save babel-loader babel-core babel-preset-es2015 babel-preset-react
// npm install babel webpack webpack-dev-server -g

// webpack.config.js main.js app.js index.html


/*
// .jsx
gulp.task('default', function () {
    return gulp.src('ticking.jsx')
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dest/'));
});
*/

gulp.task('default', function () {
    return gulp.src('ticking.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel({
             presets: ['es2015']
         }))
        .pipe(react())
        // .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'));
});







