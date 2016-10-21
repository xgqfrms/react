# https://egghead.io




















> # gulp + react


> ## step0: init package.json

```sh
$ npm init
``` 


> ## step1: install *， 以防忘记某个 package ！

### 安装 react 
```sh
$ npm install --save-dev react react-dom
``` 
### 安装 gulp 
```sh
$ npm install --save-dev gulp gulp-sass gulp-jade gulp-uglify gulp-if gulp-browserify gulp-connect
``` 
### 安装 babel webpack webpack-dev-server
```sh
$ npm install --save-dev babel webpack webpack-dev-server
``` 
### 安装 ???
```sh
$ npm install --save-dev ???
``` 


> ## step2: 配置 gulpfile.js

### require all packages
```js
var gulp = require('gulp'),
	jade = require('gulp-jade'),
	browserify = require('gulp-browserify'),
	uglify= require('gulp-uglify'),
	sass= require('gulp-sass'),
	gulpif= require('gulp-if'),
	connect= require('gulp-connect');
```  
### (使用*通配符)

> 编译所有sass/\*.scss到css/目录
> 编译所有js/ts/isx/\*.js/\*.ts/\*.jsx到js/目录
> 编译所有template/\*.jade到html/目录


> ## step3: 规划react项目 目录结构 ( src/*  => /builds/development/* && /builds/production/*)

### 根目录下, src (创建文件)
```sh
./src/js/main.js (./src/ts/main.ts)  
./src/js/app.jsx (./src/jsx/app.jsx)  
./src/sass/common.scss (./src/sass/no-need/var.scss 不需要编译到css目录，使用*通配符)
./src/template/index.jade  
``` 

### 根目录下, builds
```code
./builds/development/js/main.js  
./builds/development/js/app.js   
./builds/development/css/common.css  
./builds/development/index.html  
``` 
```code
./builds/production/js/main.js  
./builds/production/js/app.js   
./builds/production/css/common.css  
./builds/production/index.html  
``` 


> ## step4: 编辑项目文件

### jade/js/sass ...



> ## step5: CMD 运行 

### set NODE_ENV=development && gulp js 
```sh
$ npm set NODE_ENV=development
$ gulp js 
``` 

### set NODE_ENV=production && gulp js 
```sh
$ npm set NODE_ENV=production
$ gulp js 
``` 

> ## step6: 配置 gulpfile.js (自动化)

### 自动化(gulp.task default)
```js
gulp.task('watch',function(){
	gulp.watch('src/template/*.jade',['jade']);
	gulp.watch('src/js/*.js',['js']);
	gulp.watch('src/sass/*.scss',['sass']);
	//all file(/**/*.?)
});

gulp.task('connect',connect.server({
	root: [outputDir],
	port: 8080,
    livereload: true,
	// open: { browser: 'Google Chrome'}
	//error ?
}));

gulp.task('default',['js','sass','jade','watch','connect']);
``` 

### set NODE_ENV=development && gulp
```sh
$ npm set NODE_ENV=development
$ gulp
``` 

### set NODE_ENV=production && gulp
```sh
$ npm set NODE_ENV=production
$ gulp
``` 