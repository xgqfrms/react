var gulp = require('gulp'),
	jade = require('gulp-jade'),
	browserify = require('gulp-browserify'),
	uglify= require('gulp-uglify'),
	sass= require('gulp-sass');
	sass= require('require');

	gulp.task('jade',function(){
		return gulp.src('src/template/**/*.jade')
			.pipe(jade())
			.pipe(gulp.dest('builds/development'));
	});

	gulp.task('js',function(){
		return gulp.src('src/js/main.js')
			.pipe(browserify({ debug: true}))
			.pipe(uglify())
			.pipe(gulp.dest('builds/development/js'));
	});
	gulp.task('sass',function(){
		return gulp.src('src/sass/*.scss')
			.pipe(sass({ sourceComments: 'map'}))
			.pipe(gulp.dest('builds/development/css'));
	});