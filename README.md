# React tutorial 

## 通过 npm 使用 React

### step1: 根目录下, npm init 初始化，生成 **package.json** 文件：

```sh
$ npm init
``` 
template-demo
```code
name: (React App) @xgqfrms/react
private: true 
### private  设为true这个包将不会发布到NPM平台下。
version: (1.0.0) 
description: react app test
entry point: (main.js)
homepage: https://xgqfrms.github.io/react
author: {  
  "name": "ijse",
  "email": "xgqfrms@email.xyz",
  "url": "http://www.xgqfrms.xyz"
}
author: "ijse <xgqfrms@email.xyz> (http://www.xgqfrms.xyz)"  
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
  "url": "http://github.com/ijse/project.git"
}
scripts
"name": "foo",
"config": {
  "port": "8080"
}
### 修改设置： npm config set foo:port 8001 

version 严格匹配某个版本
>version 必须大于某个版本
>=version 必须大于等于某个版本
<version 必须小于某个版本
<=version 必须小于等于某个版本
~version 大概匹配某个版本
^version 兼容某个版本
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

### NPM的一些默认值说明 
"scripts": { "start": "node server.js" } 如果在项目根目录下含有server.js文件，则NPM会自动设置此值。
test command: 
git repository: 
keywords: react, xgqfrms, webgeeker
author: xgqfrms
license: (MIT) 
```` 


### step2: 安装 依赖包 react react-dom **--save** 命令用于将包添加至 package.json 文件。

```sh
$ npm install --save react react-dom
``` 
等于同 ===
```sh
$ npm install --save react
$ npm install --save react-dom
``` 


### step3: 安装 插件 **--save** 命令用于将包添加至 package.json 文件。

```sh
$ npm install --save babel-core
$ npm install --save babel-loader
$ npm install --save babel-preset-react
$ npm install --save babel-preset-es2015
``` 



### step4: 创建文件 webpack.config.js

```md
| Left align | Center align | Right align |
|:-----------|:------------:|------------:|
| This       |     This     |         This|
| column     |    column    |       column|
| will       |     will     |         will|
| be         |      be      |           be|
| left       |     center   |        right|
| aligned    |    aligned   |      aligned|
```

> 
| 参数 | 作用解释 |
|:-----------|:------------|
| entry:     | 指定打包的入口文件 main.js。| 
| output：   | 配置打包结果，path定义了输出的文件夹，filename则定义了打包结果文件的名称。| 
| devServer：| 设置服务器端口号为 7777，端口后你可以自己设定 。| 
| module：   | 定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理，这正是webpack强大的原因。| 

```js
var config = {
   entry: './main.js',	
   output: {
      path:'./',
      filename: 'index.js',
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

```sh
$ npm install --save react react-dom
``` 



### step6:

```sh
$ npm install --save react react-dom
``` 



### step7:

```sh
$ npm install --save react react-dom
``` 



### step8:

```sh
$ npm install --save react react-dom
``` 



### step9:

```sh
$ npm install --save react react-dom
``` 



### step10:

```sh
$ npm install --save react react-dom
``` 




