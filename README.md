# React tutorial 

## 通过 npm 使用 React

>CommonJS 模块系统: 
建议在 React 中使用 CommonJS 模块系统，比如 browserify 或 webpack
### 安装全局包
```js
$ npm install babel -g
$ npm install webpack -g
$ npm install webpack-dev-server -g
``` 

### step0: 根目录下, **创建文件** src/*  => /builds/development/* && /builds/production/*

#### 使用*通配符
> 编译所有sass/\*.scss到css/目录
> 编译所有js/ts/isx/\*.js/\*.ts/\*.jsx到js/目录
> 编译所有template/\*.jade到html/目录

```sh
./src/js/main.js (./src/ts/main.ts)  
./src/js/app.jsx (./src/jsx/app.jsx)  
./src/sass/common.scss (./src/sass/no-need/var.scss 不需要编译到css目录，使用*通配符)
./src/template/index.jade  
``` 

### output
```code
./builds/development/js/main.js  
./builds/development/js/app.js   
./builds/development/css/common.css  
./builds/development/index.html  
``` 
### step1: 根目录下, npm init 初始化，生成 **package.json** 文件：

```sh
$ npm init
``` 
template-demo
```code
name: (React App) @xgqfrms/react
private: true 
### private  设为true这个包将不会发布到NPM平台下。
{
	version: (1.0.0) 
	description: react app test
	entry point: (main.js)
	homepage: https://xgqfrms.github.io/react
	author: {  
	  "name": "xgqfrms",
	  "email": "xgqfrms@email.xyz",
	  "url": "http://www.xgqfrms.xyz"
	}
	author: "<xgqfrms@email.xyz> (http://www.xgqfrms.xyz)"  
	bugs: {  
	  "url": "https://github.com/xgqfrms/react/issues",
	  "email": "xgqfrms@email.xyz"
	}
	contributors, maintainers
	files
	"engines": {
	  "node": ">=0.10.3 < 0.12",
	  "npm": "~1.0.20"
	}
	"os": [ "darwin", "linux", "!win32" ]
	"cpu": [ "x64", "!arm" ]
	main : main.js
	directories
	"repository": {
	  "type": "git",
	  "url": "http://github.com/xgqfrms/react.git"
	}
	scripts
	"name": "foo",
	"config": {
	  "port": "8080"
	}
}
### 修改设置： npm config set foo:port 8001 

{
	version 严格匹配某个版本
	>version 必须大于某个版本
	>=version 必须大于等于某个版本
	<version 必须小于某个版本
	<=version 必须小于等于某个版本
	~version 大概匹配某个版本
	^version 兼容某个版本(**默认值**)
	1.2.x 可以是1.2.0, 1.2.1等等
	http://... 指定tarball的url地址
	* 任何版本都可以
	"" 任何版本都可以
	version1 - version2  大于等于version1 &&小于等于version2
	range1 || range2 满足range1 或range2
	git://... git地址
	user/repo git地址
	tag 指定某个tag的版本
	path/path 本地包所有文件夹
	{ "dependencies" :
	  { "foo" : "1.0.0 - 2.9999.9999"
	  , "bar" : ">=1.0.2 <2.1.2"
	  , "baz" : ">1.0.2 <=2.3.4"
	  , "boo" : "2.0.1"
	  , "qux" : "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0"
	  , "asd" : "http://asdf.com/asdf.tar.gz"
	  , "til" : "~1.2"
	  , "elf" : "~1.2.3"
	  , "two" : "2.x"
	  , "thr" : "3.3.x"
	  , "lat" : "latest"
	  , "dyl" : "file:../dyl"
	  }
	}  

	git://github.com/user/project.git#commit-ish  
	git+ssh://user@hostname:project.git#commit-ish  
	git+ssh://user@hostname/project.git#commit-ish  
	git+http://user@hostname/project/blah.git#commit-ish  
	git+https://user@hostname/project/blah.git#commit-ish  
}

### NPM的一些**默认值**说明 
"scripts": { "start": "node server.js" } 如果在项目根目录下含有server.js文件，则NPM会自动设置此值。
keywords: react, xgqfrms, webgeeker
author: xgqfrms
license: (MIT) 
```` 


### step2: 安装 依赖包 react react-dom 

**--save** 命令用于将依赖包添加到package.json的**“dependencies”**中.
**--save-dev** 命令用于将依赖包添加到package.json的**“devDependencies”**中.

```sh
$ npm install --save react react-dom
``` 
等于同 ===
```sh
$ npm install --save react
$ npm install --save react-dom
``` 
>react.min.js - React 的核心库
react-dom.min.js - 提供与 DOM 相关的功能
browser.min.js - 用于将 JSX 语法转为 JavaScript 语法


### step3: 安装 插件 
**--save** 命令用于将依赖包添加到package.json的**“dependencies”**中.
**--save-dev** 命令用于将依赖包添加到package.json的**“devDependencies”**中.

```sh
$ npm install --save babel-core babel-loader babel-preset-react babel-preset-es2015
``` 
```sh
$ npm install --save babel-core
$ npm install --save babel-loader
$ npm install --save babel-preset-react
$ npm install --save babel-preset-es2015
``` 



### step4: 创建文件 webpack.config.js || gulpfile.js 

> 
| 参数 | 作用解释 |
|:-----------|:------------|
| entry:     | 指定打包的入口文件 main.js。| 
| output：   | 配置打包结果，path定义了输出的文件夹，filename则定义了打包结果文件的名称。| 
| devServer：| 设置服务器端口号为 7777，端口后你可以自己设定 。| 
| module：   | 定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理，这正是webpack强大的原因。| 

### path ??? ./src/js/\*.js, ./src/jsx/\*.jsx, ./src/ts/*.ts
```js
var config = {
   entry: './src/js/main.js',	
   output: {
      path:'./builds/development/js/',
      filename: 'main.js',
   },
   devServer: {
      inline: true,
      port: 7777
   },	
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',	
         query: {
            presets: ['es2015', 'react']
         }
      }]
   }	
}
module.exports = config;

``` 



### step5: 编辑 package.json 文件

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
``` 

```js
"scripts": {
	"start": "webpack-dev-server --hot"
  },
``` 

**--hot**命令会在文件变化后重新载入，就不需要在代码修改后重新刷新浏览器就能看到变化

### step6: npm start 命令来启动服务。


```sh
$ npm start
``` 


### step7: 编辑 index.jade

```jade
doctype html
html(lang="en")
	head
		meta(charset="UTF-8")
		meta(http-equiv="X-UA-Compatible" content="IE=edge,chrome=1")
		meta(name="viewport" content="width=device-width, initial-scale=1,user-scalable=no")
		link(rel="" href="")
		title React Project
	body
		header
			h1 React && React native 
			nav
				ul
					li
					//emmet li*3 ??? for/each
		main
			section
				div.app
				// .app
				//- react enter port
		aside
			ul
				li
		footer
			div
				span(copyright @ xgqfrms 2016)
		script(src="./js/main.js")
		//- /builds/development/index.html
		//- /builds/production/js/main.js
		//- /builds/production/js/app.js

``` 


### step8: 编辑 main.js

```js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';

/*
	./src/js/main.js 
	./src/js/app.jsx

	import App from '../jsx/app.jsx';
	(./src/jsx/app.jsx)  
*/

ReactDOM.render(<App />, document.getElementById('app'))
``` 
### 注意：
>如果想要组件可以在任何的应用中使用，需要在创建组件后,
使用 **export** 将其导出，
在使用组件的文件使用 **import**将其导入。


### step9: 编辑 app.jsx

```jsx
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            Hello World!<br />
            欢迎来到<mark>React</mark>教程学习!
         </div>
         // jade ???
      );
   }
}

export default App;
// 我们需要引入组件并将其渲染到根元素 App 上，这样我们才可以在浏览器上看到它。
``` 
### 注意：
>如果想要组件可以在任何的应用中使用，需要在创建组件后,
使用 **export** 将其导出，
在使用组件的文件使用 **import**将其导入。


### step10: 安装 gulp gulp-jade
**--save** 命令用于将依赖包添加到package.json的**“dependencies”**中.
**--save-dev** 命令用于将依赖包添加到package.json的**“devDependencies”**中.

```sh
$ npm install --save-dev gulp gulp-jade 
``` 
### 编辑 gulpfile.js (使用*通配符)

```js
var	gulp = require('gulp'),
	jade = require('gulp-jade');
		
	gulp.task('jade',function(){
		return gulp.src('src/template/**/*.jade')
			.pipe(jade())
			.pipe(gulp.dest('builds/development'));
	});
``` 
### CMD 运行 gulp jade
```sh
$ gulp jade
``` 

```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no">
	<link rel="" href="">
	<title>React Project</title>
	</head>
	<body>
	<header>
	<h1>React && React native </h1>
	<nav>
	<ul>
	<li></li>
	<!--emmet li*3 ??? for/each-->
	</ul>
	</nav>
	</header>
	<main>
	<section>
	<div class="app"></div>
	<!-- .app-->
	</section>
	</main>
	<aside><ul><li></li></ul></aside>
	<footer>
	<div>
	<span copyright @ xgqfrms 2016></span>
	</div>
	</footer>
	<script src="./js/main.js"></script>
	</body>
	</html>
``` 

### step11: 安装 npm install --save-dev gulp-browserify
**--save** 命令用于将依赖包添加到package.json的**“dependencies”**中.
**--save-dev** 命令用于将依赖包添加到package.json的**“devDependencies”**中.

```sh
npm install --save-dev gulp-browserify
```  
### 编辑 gulpfile.js (使用*通配符)
```js
browserify = require('gulp-browserify');

gulp.task('js',function(){
		return gulp.src('src/js/*.js')
			.pipe(browserify({ debug: true}))
			.pipe(gulp.dest('builds/development/js'));
	});
``` 

### CMD 运行 gulp js
```sh
$ gulp js
``` 

## new: CMD 安装 npm install --save-dev requirejs  **???????? error?????**
```sh
	$ npm install --save-dev gulp-uglify
	$ npm install --save-dev requirejs
``` 
### [how-to-include-a-javascript-file-in-another-javascript-file](http://stackoverflow.com/questions/950087/how-to-include-a-javascript-file-in-another-javascript-file/39854041#39854041)

### [REQUIREJS IN NODE](http://requirejs.org/docs/node.html#3)  
sub.js (module.exports)
```js
module.exports = {
  log: function(string) {
    if(console) console.log(string);
  }
  mylog: function(){
    console.log('just for log test!');
  }
}
``` 
main.js (Usage)
```sh
var mylog =require('./sub');

mylog.log('Hurray, it works! :)');
mylog.mylog();
``` 


### step12: 安装 gulp-uglify
```sh
$ npm install --save-dev gulp-uglify
``` 

### 编辑 gulpfile.js (使用*通配符)
```sh
uglify= require('gulp-uglify');

gulp.task('js',function(){
		return gulp.src('src/js/*.js')
			.pipe(browserify({ debug: true}))
			.pipe(uglify())
			.pipe(gulp.dest('builds/development/js'));
	});
``` 

### CMD 运行 gulp js
```sh
$ gulp js
``` 

### step13: 安装 gulp-if  (使用*通配符)

```sh
$ npm install --save-dev gulp-if 
``` 
### 编辑 gulpfile.js
```sh
gulpif= require('gulp-if');

var env = process.env.NODE_ENV;

gulp.task('js',function(){
		return gulp.src('src/js/*.js')
			.pipe(browserify({ debug: env === 'development'}))
			.pipe(gulpif(env === 'production', uglify()))
			.pipe(gulp.dest('builds/development/js'));
	});
``` 

### CMD 运行 set NODE_ENV=development && gulp js 
PS:(使用开发调试模式)
```sh
$ set NODE_ENV=development 
$ gulp js
``` 

### CMD 运行 set NODE_ENV=production && gulp js 
PS:(使用产品发布模式)
```sh
$ set NODE_ENV=production 
$ gulp js
``` 

### 14. 手动编辑 gulpfile.js PS:(手动：开启默认的模式)
```js
	// var env = process.env.NODE_ENV || 'production';
	var env = process.env.NODE_ENV || 'development';
``` 

## 15. 安装  gulp-sass (使用*通配符)
```sh
$ npm install --save-dev gulp-sass  
``` 

### 编辑 gulpfile.js
```sh
sass= require('gulp-sass');

gulp.task('sass',function(){
	return gulp.src('src/sass/*.scss')
		.pipe(sass({ sourceComments: 'map'}))
		.pipe(gulp.dest('builds/development/css'));
});
``` 

### CMD 运行 gulp sass
```sh
$ gulp sass
``` 

**path 变量**  +  **if (env === 'development')**
## 16. 编辑 gulpfile.js 
```javascript
	var outputDir = 'builds/development';
	//使用 path 变量，代替 path names
	.pipe(gulp.dest(outputDir));
	// .pipe(gulp.dest('builds/development'));
	.pipe(gulp.dest(outputDir + '/js'));
	// .pipe(gulp.dest('builds/development/js'));
	.pipe(gulp.dest(outputDir + '/css'));
    // .pipe(gulp.dest('builds/development/css'));
``` 
```javascript
	gulp.task('sass',function(){
		var config = {};
		if (env === 'development') {
			config.sourceComments = 'map';
		} 
		if(env === 'production'){
			config.outputStyle = 'compressed';
		}
		return gulp.src('src/sass/main.scss')
			// .pipe(sass({ sourceComments: 'map'}))
			.pipe(sass(config))
			.pipe(gulp.dest(outputDir + '/css'));
			// .pipe(gulp.dest('builds/development/css'));
	});
``` 
## CMD 运行 set NODE_ENV=development && gulp sass PS:(使用开发调试模式)
```sh
	$ set NODE_ENV=development 
	$ gulp sass
``` 

## CMD 运行 set NODE_ENV=production && gulp sass PS:(使用产品发布模式)
```sh
	$ set NODE_ENV=production 
	$ gulp sass
``` 


## 17. 编辑 gulpfile.js  使用 gulp watch (使用*通配符)
PS:(使用 watch 自动监测变化)
```javascript
	gulp.task('watch',function(){
		gulp.watch('src/template/**/*.jade',['jade']);
		gulp.watch('src/js/**/*.js',['js']);
		gulp.watch('src/sass/**/*.scss',['sass']);
	});
``` 

## CMD 运行 gulp watch 
PS:(使用 watch 自动监测变化)
```sh
	$ gulp watch
``` 

## 编辑 gulpfile.js  使用 gulp.task default模式
PS:(使用default模式,指定 tasks)
```javascript
	gulp.task('default',['js','sass','jade','watch']);
	/*
		function(){
			gulp.watch('src/template/**/*.jade',['jade']);
		}
		=== ???
		['jade']
	*/
``` 

## CMD 运行 gulp 
PS:(使用default模式,指定 tasks)
```sh
	$ gulp
``` 
## Ctrl + C (退出 watch / default 模式)


## 18. 安装  gulp-connect 
PS:(自动启动Web Server,打开browser,可以配置端口)???
```sh
$ npm install --save-dev gulp-connect 
``` 

### 编辑 gulpfile.js

```js
connect= require('gulp-connect');

gulp.task('connect',connect.server({
	root: [outputDir],
	open: { browser: 'Google Chrome'}
}));

gulp.task('default',['js','sass','jade','watch','connect']);
``` 

### CMD 运行 gulp (使用default模式,指定 all-tasks)
```sh
$ gulp
``` 


## 编辑 gulpfile.js  
PS:(自动刷新 .pipe(connect.reload());)

```js
//每个task后，都后面追加上
.pipe(connect.reload());

.pipe(connect.reload());

.pipe(connect.reload());
``` 

##  CMD 运行 gulp 
```sh
	$ gulp
``` 

## ???. some errors
[here some errors, what's wrong with this? #202](https://github.com/AveVlad/gulp-connect/issues/202)  

[Get started with gulp Part 6: LiveReload and web server](https://www.youtube.com/watch?v=KURMrW-HsY4&index=7&list=PLRk95HPmOM6PN-G1xyKj9q6ap_dc9Yckm)  

[/images/errors/](https://github.com/xgqfrms/AngularJS/tree/gh-pages/images/errors)
[gulp-test](https://github.com/xgqfrms/AngularJS/tree/gh-pages/gulp-test)  

```javascript
	/*
	gulp.task('connect',connect.server({
		root: [outputDir],
		open: { browser: 'Google Chrome'}
	}));
	*/
	//https://github.com/AveVlad/gulp-connect

	gulp.task('connect',function(){
		connect.server({
			root: [outputDir],
			port: 8080,
		    livereload: true,
			// open: { browser: 'Google Chrome'}
		});
	});
``` 





## bugs fixed ?

### 编辑 gulpfile.js 

'''javascript
	var env = process.env.NODE_ENV;
'''

> ## CMD: 手动 传入参数 
set NODE_ENV=development
set NODE_ENV=production

'''bash
	$ set NODE_ENV=development
	$ gulp
'''
'''bash
	$ set NODE_ENV=production
	$ gulp
'''

???
### why it doesn't work by using 
// var env = process.env.NODE_ENV || 'production';
// var env = process.env.NODE_ENV || 'development';








