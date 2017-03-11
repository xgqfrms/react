# React CSS for job 2017 


https://gist.github.com/xgqfrms-GitHub/bcd7b957a6d581c644abda07fcf79473/ 


## 安装 React CSS Module & React


https://github.com/facebook/react  
https://facebook.github.io/react/docs/installation.html#creating-a-single-page-application  
https://facebook.github.io/react/docs/installation.html#adding-react-to-an-existing-application  



```sh
$ npm i -g create-react-app
> create-react-app xyz-react-app & cd xyz-react-app & npm start

> create-react-app xyz-react-app
> cd xyz-react-app & npm start

$ yarn init
$ yarn add react react-dom

$ npm init
$ npm i -S react react-dom

``` 



https://webpack.js.org/guides/get-started/  
https://webpack.js.org/guides/installation/  
https://www.npmjs.com/package/webpack  
https://github.com/webpack/webpack  



https://lodash.com/  
https://www.npmjs.com/package/lodash  
https://github.com/lodash/lodash  


http://redux.js.org/  
https://www.npmjs.com/package/redux  
https://github.com/reactjs/redux/  


```sh

$ npm i -D style-loader css-loader sass-loader node-sass webpack
$ npm i -S react react-dom redux react-router lodash


$ npm install --save-dev webpack
$ npm install --save lodash
$ npm install --save redux

``` 

## 安装 babel for ES6-to-ES5 

```sh
# babel-preset-es2015

$ yarn init
$ yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev


$ npm init
$ npm i -D babel-loader babel-core babel-preset-es2015 babel-preset-react

``` 


## Web 安装 react-router-dom

https://reacttraining.com/react-router/  
https://www.npmjs.com/package/react-router  
https://www.npmjs.com/package/react-router-dom  


https://github.com/ReactTraining/react-router/tree/master/packages/react-router  
https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom  



```sh

$ npm install --save react-router
$ npm install --save react-router-dom


$ npm i -S react-router-dom@next

# or

$ yarn add react-router-dom@next

``` 







# development & sourceMap

```js

    {
        test: /\.scss$/,
        loaders: [
            'style?sourceMap',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'resolve-url',
            'sass?sourceMap'
        ]
    }

# production

```js

    {
        test: /\.scss$/,
        loaders: [
            'style',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'resolve-url',
            'sass'
        ]
    }

``` 





















## Class Composition


https://github.com/gajus/react-css-modules#class-composition

https://glenmaddern.com/articles/css-modules


```css

    .box {
        width: 100px;
        height: 100px;
    }

    .empty {
        composes: box;
        background: #4CAF50;
    }

    .full {
        composes: box;
        background: #F44336;
    }

``` 

`===`

```css

    .empty {
        width: 100px;
        height: 100px;
        background: #4CAF50;
    }

    .full {
        width: 100px;
        height: 100px;
        background: #F44336;
    }

``` 


# https://github.com/gajus/react-css-modules/issues/218

# https://github.com/css-modules/css-modules/issues/218


https://gist.github.com/xgqfrms-GitHub/fe74994dfa2e8bba14b0a6412217f154







## Class Composition Using CSS Preprocessors

http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend

http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins

http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_

> `@@extend`

```scss
    # % === placeholder

    %box {
        width: 100px;
        height: 100px;
    }

    .box-empty {
        @extend %box;
        background: #4CAF50;
    }

    .box-full {
        @extend %box;
        background: #F44336;
    }

``` 

`===`

```css

    .box-empty,
    .box-full {
        width: 100px;
        height: 100px;
    }

    .box-empty {
        background: #4CAF50;
    }

    .box-full {
        background: #F44336;
    }

``` 



> `@@extend`


```scss

    @mixin box {
        width: 100px;
        height: 100px;
    }

    .box-empty {
        @include box;
        background: #4CAF50;
    }

    .box-full {
        @include box;
        background: #F44336;
    }

``` 

`===`

```css

    .box-empty {
        width: 100px;
        height: 100px;
        background: #4CAF50;
    }

    .box-full {
        width: 100px;
        height: 100px;
        background: #F44336;
    }

``` 








