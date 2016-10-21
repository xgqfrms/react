# Downloads 

[Downloads](https://facebook.github.io/react/downloads.html)

[React free Tutorial online](https://egghead.io)


## step 1 (Development vs. Production Builds )


## Individual Downloads  

开发版包括有关常见的错误额外的警告，而量产版包括额外的性能优化和剥离所有错误消息。  

如果你是刚刚起步，确保使用的开发版本。  

> React 15.3.2 (development) / React with Add-Ons 15.3.2 (development)

```js
//(你需要两个文件: react.js & react-dom.js)  
<script src="https://unpkg.com/react@15.3.2/dist/react.js"></script>  
<script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>  

//(你需要两个文件: react-with-addons.js & react-dom.js)  
<script src="https://unpkg.com/react@15.3.2/dist/react-with-addons.js"></script>  
<script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>  
```

> React 15.3.2 (production) / React with Add-Ons 15.3.2 (production)

```js
<script src="https://unpkg.com/react@15.3.2/dist/react.min.js"></script>  
<script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.min.js"></script>  

<script src="https://unpkg.com/react@15.3.2/dist/react-with-addons.min.js"></script>  
<script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.min.js"></script>  
```

## npm 

我们建议从NPM安装使用React ,连同一个打包器, 如browserify或WebPack。

```sh
>$ npm install --save react react-dom

# [http://browserify.org/](http://browserify.org/)  
>$ npm install -g browserify

# [https://webpack.github.io/docs/tutorials/getting-started/](https://webpack.github.io/docs/tutorials/getting-started/)  
>$ npm install -g webpack
```

> 可以使用：

```code
var React = require('react');  
var ReactDOM = require('react-dom');  
ReactDOM.render(<App />, ...);  
``` 
(每个附加组件(add-ons)生活在自己的程序包中.)  

* 注意：默认情况下，React将在开发模式.  

要在生产模式下React使用，设置环境变量NODE_ENV = production (使用envify或WebPack的DefinePlugin).  

建议使用一个minifier执行死代码(dead-code)消除，如UglifyJS，来彻底清除在开发模式下的多余的代码。  


## Bower 

```sh
>$ bower install --save react

# [https://bower.io/](https://bower.io/)  
```

