# React + Gulp + Babel CLI + webpack (MODULE BUNDLER)

*******************************************************************************************
*******************************************************************************************

## gulp

[Babel for Gulp](http://babeljs.io/docs/setup/#installation)

[GitHub: gulp-babel](https://github.com/babel/gulp-babel) 


```sh
$ npm install --save-dev gulp-babel

$ npm install babel-preset-es2015 --save-dev

$ npm install --save-dev babel-plugin-transform-runtime

``` 

### Usage
```js
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});
``` 

### Use **gulp-sourcemaps** like this:
```js
var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("default", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});
``` 
### Create .babelrc configuration file

```
{
  "presets": ["es2015"]
}
``` 
> Note: Running a Babel 6.x project using npm 3.x .  
  To check what version of npm you have run.

```sh
$ npm --version
``` 


## Babel CLI

[CLI : How to use the CLI tools.](https://babeljs.io/docs/usage/cli/)

> Babel comes with a built-in CLI which can be used to compile files from the command line.

### Installation
```js
$ npm install --save-dev babel-cli
``` 

> Note: Since it's generally a bad idea to run Babel globally you may want to uninstall the global copy by running  
```sh
$ npm uninstall --global babel-cli
``` 

*******************************************************************************************

## babel

### Compile Files

```sh
# Compile the file script.js and output to stdout.

$ babel script.js
# output...

# If you would like to output to a file you may use --out-file or -o.

$ babel script.js --out-file script-compiled.js
$ babel script.js -o script-compiled.js

#To compile a file every time that you change it, use the --watch or -w option:

$ babel script.js --watch --out-file script-compiled.js
$ babel script.js -w -o script-compiled.js


``` 
***************************************************************************************  

# babel index.js -w -o index-compiled.js
## --out-file or -o  
## --watch or -w  

```sh
# ? local path 不好使
$ ./node_modules/.bin/babel src -d lib

# cd 进入babel.exe 所在的 ./node_modules/.bin/ 目录
$ cd ./node_modules/.bin/

# 先copy 文件到该目录，再执行 (OK：传递path)
$ babel index.js -w -o index-compiled.js

# (OK：传递 相对路径 path)

$ babel ../../index.js -w -o ../../index-compiled.js
``` 


# 推荐用法：(package.json)

```json
{
    "name": "React-App",
    "version": "1.0.1",
    "scripts": {
        "build": "babel src -d lib"
    },
    "devDependencies": {
        "babel-cli": "^6.0.0"
    }
}

``` 

***************************************************************************************  


### Compile with Source Maps

```sh
# If you would then like to add a source map file you can use --source-maps or -s. Learn more about source maps.

$ babel script.js --out-file script-compiled.js --source-maps
$ babel script.js -o script-compiled.js -s

# If you would rather have inline source maps, you may use --source-maps inline.

$ babel script.js --out-file script-compiled.js --source-maps inline
$ babel script.js -o script-compiled.js -s inline

``` 

### Compile Directories

```sh
# Compile the entire src directory and output it to the lib directory. You may use --out-dir or -d.

$ babel src --out-dir lib
$ babel src -d lib

# Compile the entire src directory and output it to the one concatenated file.

$ babel src --out-file script-compiled.js
$ babel src -o script-compiled.js

``` 

### Ignore files

```sh
# Ignore spec and test files (? -i)

$ babel src --out-dir lib --ignore spec.js,test.js
$ babel src -d lib --ignore spec.js,test.js

(? -i === --ignore)

``` 

### Piping Files

```sh
# Pipe a file in via stdin and output it to script-compiled.js

$ babel -o script-compiled.js < script.js

# PS: A < B (B => A)  && A > B (A => B)

``` 

### Advanced Usage

```sh
# There are many more options available in the babel CLI, see [options](https://babeljs.io/docs/usage/options/),  
$ babel --help  
# and other sections for more information.

``` 

## babel-node

> Not meant for production use:

> You should not be using **babel-node** in production.  
It is unnecessarily heavy, with high memory usage due to the cache being stored in memory.  
You will also always experience a startup performance penalty as the entire app needs to be compiled on the fly.  

#### ES6-style module-loading may not function as expected  

> Due to technical limitations ES6-style module-loading is not fully supported in a babel-node REPL.  

```sh
# babel comes with a second CLI which works exactly the same as Node.js’s CLI, only it will compile ES6 code before running it.  
# Launch a REPL (Read-Eval-Print-Loop).

$ babel-node

# Evaluate code.

$ babel-node -e "class Test { }"

# Compile and run test.js.

$ babel-node test
``` 

### Usage

```sh
$ babel-node [options] [ -e script | script.js ] [arguments]

# When arguments for user script have names conflicting with node options,  
# double dash placed before script name can be used to resolve ambiguities

$ babel-node --debug --presets es2015 -- script.js --debug

``` 

### Options
|Option | Default | Description|
|:-----------|:------------:|:------------|
|-e,  --eval [script]  | |  Evaluate script
|-p,  --print  | |  Evaluate script and print result
|-i,  --ignore [regex]  |  node_modules  |  Ignore all files that match this regex when using the require hook
|-x, --extensions  |  ".js",".jsx",".es6",".es"  |  List of extensions to hook into
|--presets  |  [ ]  |  Comma-separated list of presets (a set of plugins) to load and use.
|--plugins  |  [ ]  |  Comma-separated list of plugins to load and use.


*******************************************************************************************

## webpack (MODULE BUNDLER)

[Installation](https://webpack.github.io/docs/installation.html)  

[Usage](https://webpack.github.io/docs/usage.html)  

[Usage with Gulp](https://webpack.github.io/docs/usage-with-gulp.html)  


### Installation

#### webpack

```sh
# webpack can be installed through npm:

$ npm install webpack -g

# webpack is now installed globally and the webpack command is available.

``` 

#### Use webpack in a project

> It’s the best to have webpack also as dependency in your project. Through this you can choose a local webpack version and will not be forced to use the single global one.


```sh
# Add a package.json configuration file for npm with:

$ npm init 

# The answers to the questions are not so important if you don’t want to publish your project to npm. 

# Install and add webpack to the package.json with:

$ npm install webpack --save-dev
``` 

#### Versions

> There are two versions of webpack available. The stable one and a beta version. The beta version is marked with a -beta in the version string. The beta version may contain fragile changes or experimental features and is less tested. See changelog for differences. For serious stuff you should use the stable version:  

```sh
$ npm install webpack@1.2.x --save-dev

``` 

#### Dev Tools

```sh
# If you want to use dev tools you should install it:

$ npm install webpack-dev-server --save-dev

``` 

*******************************************************************************************



