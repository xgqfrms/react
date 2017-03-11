# CSS Modules & Webpack 


https://gist.github.com/xgqfrms-GitHub/fe74994dfa2e8bba14b0a6412217f154


## CSS Modules

CSS模块加载器将在加载CSS文档时为每个CSS类生成一个唯一的名称 (可互操作的 CSS, 准确一点).

https://github.com/gajus/react-css-modules#css-modules

https://github.com/css-modules/css-modules  
https://github.com/css-modules/icss  

https://css-modules.github.io/webpack-demo/


```jsx

import React from 'react';
import styles from './table.css';

export default class Table extends React.Component {
    render () {
        return <div className={styles.table}>
            <div className={styles.row}>
                <div className={styles.cell}>A0</div>
                <div className={styles.cell}>B0</div>
            </div>
        </div>;
    }
}

``` 



```html

<div class="table__table___32osj">
    <div class="table__row___2w27N">
        <div class="table__cell___1oVw5">A0</div>
        <div class="table__cell___1oVw5">B0</div>
    </div>
</div>

``` 

## react-css-modules 

https://github.com/gajus/react-css-modules#webpack-css-loader

CSS模块是一个规范, 可以以多种方式实现。
react-css-modules 利用现有的CSS模块实现 webpack css-loader。




## webpack css-loader本身有几个缺点：


https://github.com/gajus/react-css-modules#webpack-css-loader

https://github.com/gajus/react-css-modules#whats-the-problem



    * You have to use camelCase CSS class names.
    * You have to use styles object whenever constructing a className.
    * Mixing CSS Modules and global CSS classes is cumbersome.
    * Reference to an undefined CSS Module resolves to undefined without a warning.

你必须使用camelCase CSS类名。
你必须在构造一个className时使用styles对象。
混合CSS模块和全局CSS类是很麻烦的。
对未定义的CSS模块的引用解析为undefined而不发出警告。





https://github.com/gajus/babel-plugin-react-css-modules



React CSS Modules组件使用styleName属性自动加载CSS模块，例如。

```jsx

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './table.css';

class Table extends React.Component {
    render () {
        return <div styleName='table'>
            <div styleName='row'>
                <div styleName='cell'>A0</div>
                <div styleName='cell'>B0</div>
            </div>
        </div>;
    }
}

export default CSSModules(Table, styles);

``` 


Using react-css-modules:

    * You are not forced to use the camelCase naming convention.
    * You do not need to refer to the styles object every time you use a CSS Module.
    * There is clear distinction between global CSS and CSS Modules, e.g.

使用react-css模块： 你不是被迫使用camelCase命名约定。
每次使用CSS模块时，不需要引用styles对象。
全局CSS和CSS模块之间有明显区别，例如


```css
    <div className='global-css' styleName='local-module'></div>
``` 

    * You are warned when styleName refers to an undefined CSS Module (errorWhenNotFound option).
    * You can enforce use of a single CSS module per ReactElement (allowMultiple option).


当styleName引用未定义的CSS模块（errorWhenNotFound选项）时，会出现警告。 
您可以根据 每个 ReactElement（）强制使用单个CSS模块。

您可以强制每个ReactElement 使用单个CSS模块(allowMultiple选项)


https://github.com/gajus/react-css-modules#errorwhennotfound

https://github.com/gajus/react-css-modules#allowmultiple


https://github.com/gajus/react-css-modules#module-bundler

https://github.com/css-modules/icss

https://github.com/gajus/react-css-modules#decorator


https://github.com/gajus/react-css-modules#enable-sourcemaps

https://webpack.github.io/docs/hot-module-replacement.html

https://github.com/webpack/style-loader

https://www.npmjs.com/package/css-loader



https://www.npmjs.com/package/extract-text-webpack-plugin




## 在开发环境中，您需要启用Sourcemaps和webpack热模块更换（HMR）。

```js

{
    test: /\.css$/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
    ]
}

``` 

## 在生产环境中，您想要将CSS的大块提取到单个样式表文件中。


## ExtractTextPlugin v1x:

```js

{
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
}


new ExtractTextPlugin('app.css', {
    allChunks: true
})

``` 


## ExtractTextPlugin v2x:

```js

{
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
        notExtractLoader: 'style-loader',
        loader: 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!resolve-url!postcss',
    }),
}


new ExtractTextPlugin({
    filename: 'app.css',
    allChunks: true
})


``` 


```js

``` 









$ npm i style-loader -S

$ npm i css-loader -S

$ npm i node-sass -S

$ npm i sass-loader -S

$ npm i style-loader css-loader sass-loader node-sass webpack -S





https://www.npmjs.com/package/style-loader

https://www.npmjs.com/package/css-loader

https://www.npmjs.com/package/sass-loader

https://www.npmjs.com/package/node-sass


https://github.com/webpack-contrib/sass-loader

https://github.com/sass/node-sass





https://github.com/gajus/react-css-modules#css-modules

https://github.com/gajus/react-css-modules-examples/blob/master/webpack.config.js

https://gist.github.com/xgqfrms-GitHub/16967b1b62afc156bae5162ca459be7e
















## Webpack Loaders

https://webpack.js.org/loaders/




https://github.com/webpack-contrib/css-loader

webpack的 css加载器模块

https://github.com/webpack-contrib/style-loader

https://github.com/webpack-contrib/sass-loader






```sh

$ npm install sass-loader node-sass webpack --save-dev


``` 




```js

// webpack.config.js
module.exports = {
    // ...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};



// webpack.config.js
module.exports = {
    // ...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: ["absolute/path/a", "absolute/path/b"]
                }
            }]
        }]
    }
};


``` 

## in production

```js

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    // ...
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass
    ]
};


``` 

## Source maps

```js

module.exports = {
    // ...
    devtool: "source-map", // any "source-map"-like devtool is possible
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", 
                options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", 
                options: {
                    sourceMap: true
                }
            }]
        }]
    }
};


``` 

## Environment variables


```js

{
    loader: "sass-loader",
    options: {
        data: "$env: " + process.env.NODE_ENV + ";"
    }
}

``` 



https://github.com/sass/node-sass

https://github.com/webpack-contrib/extract-text-webpack-plugin


https://medium.com/@toolmantim/getting-started-with-css-sourcemaps-and-in-browser-sass-editing-b4daab987fb0




















https://github.com/css-modules/webpack-demo

https://css-modules.github.io/webpack-demo/




## Scoped Selectors

在CSS模块中，选择器在默认情况下是本地作用域。

以下组件使用两个类：.root和.text，这两个类在较大的项目中通常太模糊。

CSS模块语义确保这些类在本地作用于组件，并且不会与全局范围中的其他类冲突。

```js
import styles from './ScopedSelectors.css';
import React, { Component } from 'react';

export default class ScopedSelectors extends Component {
    render() {
        return (
            <div className={styles.root}>
                <p className={styles.text}>Scoped Selectors</p>
            </div>
        );
    }
};

``` 


```css
.root {
    border-width: 2px;
    border-style: solid;
    border-color: #777;
    padding: 0 20px;
    margin: 0 6px;
    max-width: 400px;
}

.text {
    color: #777;
    font-size: 24px;
    font-family: helvetica, arial, sans-serif;
    font-weight: 600;
}
``` 





## Global Selectors

尽管它们应尽可能谨慎使用，但在需要时仍可使用全局选择器。

以下组件样式化包含嵌套在其中的所有<p>标记。 


```js
import styles from './GlobalSelectors.css';
import React, { Component } from 'react';

export default class GlobalSelectors extends Component {
    render() {
        return (
            <div className={styles.root}>
                <p className="text">Global Selectors</p>
            </div>
        );
    }
};

``` 


```css

.root {
    border-width: 2px;
    border-style: solid;
    border-color: brown;
    padding: 0 20px;
    margin: 0 6px;
    max-width: 400px;
}

/* :global .text ??? */
/* .root :global .text ??? */


.root :global .text {
    color: brown;
    font-size: 24px;
    font-family: helvetica, arial, sans-serif;
    font-weight: 600;
}

``` 



## Class Composition

下面的两个组件都有本地范围的CSS，它由一组公共的CSS模块组成。

由于可以组合CSS模块，所以通过在组件之间重用类来优化所得到的标记。


```js
import styles from './StyleVariantA.css';
import React, { Component } from 'react';

export default class StyleVariantA extends Component {
    render() {
        return (
            <div className={styles.root}>
                <p className={styles.text}>Style Variant A</p>
            </div>
        );
    }
};

``` 


```css
.root {
    composes: box from "shared/styles/layout.css";
    border-color: red;
}

.text {
    composes: heading from "shared/styles/typography.css";
    color: red;
}

``` 


```css
.box {
    border-width: 2px;
    border-style: solid;
    padding: 0 20px;
    margin: 0 6px;
    max-width: 400px;
}
``` 

```css
.heading {
    font-size: 24px;
    font-family: helvetica, arial, sans-serif;
    font-weight: 600;
}
``` 






## Composition Overrides

在构建类时，继承的样式属性可以根据您的预期重写。

以下组件组成两个不同的类，但提供优先级


```js
import styles from './CompositionOverrides.css';
import React, { Component } from 'react';

export default class CompositionOverrides extends Component {
    render() {
        return (
            <div className={styles.root}>
                <p className={styles.text}>Class Composition with Overrides</p>
            </div>
        );
    }
};

``` 


```css
.root {
    composes: box from "shared/styles/layout.css";
    border-style: dotted;
    border-color: green;
}

.text {
    composes: heading from "shared/styles/typography.css";
    font-weight: 200;
    color: green;
}

``` 


```css
.box {
    border-width: 2px;
    border-style: solid;
    padding: 0 20px;
    margin: 0 6px;
    max-width: 400px;
}
``` 

```css
.heading {
    font-size: 24px;
    font-family: helvetica, arial, sans-serif;
    font-weight: 600;
}
``` 

## Scoped Animations

CSS模块甚至提供局部范围的动画，这些动画通常在全局范围内定义。

动画的关键帧对animations模块是私有的，只通过该组件继承的类公开地暴露。



```js
import styles from './ScopedAnimations.css';
import React, { Component } from 'react';

export default class ScopedAnimations extends Component {
    render() {
        return (
            <div className={styles.root}>
                 <div className={styles.ball} />
            </div>
        );
    }
};

``` 


```css
.root {
    padding: 20px 10px;
}

.ball {
    composes: bounce from "shared/styles/animations.css";
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: rebeccapurple;
}
``` 


```css
@keyframes bounce {
    33% { transform: translateY(-20px); }
    66% { transform: translateY(0px); }
}

.bounce {
    animation: bounce 1s infinite ease-in-out;
}
``` 



















