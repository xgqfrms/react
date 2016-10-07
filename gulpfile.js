var gulp = require('gulp'),
	jade = require('gulp-jade'),
	browserify = require('gulp-browserify'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	gulpif = require('gulp-if'),
	connect = require('gulp-connect');
	// requirejs= require('requirejs');

var outputDir = 'builds/development';
	//path 变量
// var env = process.env.NODE_ENV;
var env = process.env.NODE_ENV || 'production';
var env = process.env.NODE_ENV || 'development';

	gulp.task('jade',function(){
		return gulp.src('src/template/*.jade')
			.pipe(jade())
			.pipe(gulp.dest(outputDir))
			.pipe(connect.reload());
	});
//.pipe(gulp.dest('outputDir')) 
//error: (值)'outputDir' !== outputDir (变量)
	gulp.task('js',function(){
		return gulp.src('src/js/*.js')
			.pipe(browserify({ debug: env === 'development'}))
			.pipe(gulpif(env === 'production', uglify()))
			// .pipe(requirejs())
			.pipe(gulp.dest(outputDir + '/js'))
			.pipe(connect.reload());
	});

	gulp.task('sass',function(){
		var config = {};
		if (env === 'development') {
			config.sourceComments = 'map';
		} 
		if(env === 'production'){
			config.outputStyle = 'compressed';
		}
		return gulp.src('src/sass/*.scss')
			// .pipe(sass({ sourceComments: 'map'}))
			.pipe(sass(config))
			.pipe(gulp.dest(outputDir + '/css'))
			.pipe(connect.reload());
	});

	gulp.task('watch',function(){
		gulp.watch('src/template/*.jade',['jade']);
		gulp.watch('src/js/*.js',['js']);
		gulp.watch('src/sass/*.scss',['sass']);
	});

	// error ? function ?
	gulp.task('connect',function(){
		connect.server({
		root: [outputDir],
		port: 8080,
	    livereload: true
		//open: { browser: 'Google Chrome'}
		//error ?
		});
	});

	gulp.task('default',['js','sass','jade','watch','connect']);