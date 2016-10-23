# React App development steps for totally beginner!

## step 1 (Development)

[Downloads](https://facebook.github.io/react/downloads.html)

[React free Tutorial online](https://egghead.io)

### Individual Downloads 

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


## step 2 (Getting Started)

> [JSFiddle Hello World](https://jsfiddle.net/reactjs/5vjqabv3/)  

> [Create React App](http://github.com/facebookincubator/create-react-app)  

> [Starter Pack](https://facebook.github.io/react/downloads/react-15.3.2.zip)  

```html
<!-- In the root directory of the starter kit, create a helloworld.html with the following contents. -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
    <script src="build/react.js"></script>
    <script src="build/react-dom.js"></script>
    <script src="https://unpkg.com/babel-core@5.8.38/browser.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );
    </script>
    <!-- In order to translate it to vanilla JavaScript we use <script type="text/babel"> and include Babel to actually perform the transformation in the browser.  -->
    <script type="text/babel" src="src/helloworld.js"></script>
  </body>
</html>
``` 
* [JSX syntax](https://facebook.github.io/react/docs/jsx-in-depth.html)  

```jsx
/*React JSX code can live in a separate file. Create the following src/helloworld.js.*/
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
``` 
* 需要注意的是，一些浏览器(例如,Chrome浏览器)将无法加载该文件,除非它通过HTTP服务.

> Using React with npm or Bower 

* 你还可以使用React 与包管理器，如npm 或Bower。你可以了解更多我们的[Package Managers](https://facebook.github.io/react/docs/package-management.html)部分。


## step 3 (Tutorial)

[Tutorial](https://facebook.github.io/react/docs/tutorial.html)

> babel 

[Babel CLI and a preset](http://babeljs.io/)

```sh
>$ npm install -g babel-cli

>$ npm install --save-dev babel-cli babel-preset-latest

>$ npm install --save-dev babel-preset-es2015

# Polyfill  
>$ npm install --save-dev babel-polyfill

# node.js  
> $ npm install --save-dev babel-core

# JSX and Flow
>$ npm install --save-dev babel-preset-react
``` 

* package.json/ .babelrc

[babelrc](http://babeljs.io/docs/usage/babelrc/)  

> .babelrc

```code
{
  "plugins": ["transform-react-jsx"],
  "ignore": [
    "foo.js",
    "bar/**/*.js"
  ],
  "presets": ["es2015"]
}
``` 
> package.json

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    // my babel config here
  }
}
``` 
















