# CSS Modules with React



https://github.com/css-modules/css-modules/blob/master/docs/css-modules-with-react.md


https://github.com/gajus/react-css-modules

https://github.com/gajus/babel-plugin-react-css-modules#performance











```Demo.js

import React from 'react'
import CSSModules from 'react-css-modules'
/* import your css modules styles for the component */
import styles from './Demo.css' 

function Demo( props) {

    const { route } = props

    return (
        <div styleName='demo'>
            <button styleName='button blue'>press me</button>
        </div>
    )
}

export default CSSModules(Demo, styles, {allowMultiple: true} )

// 避免使用多个CSS模块来描述单个元素。阅读关于 Class Composition。

// 也就是说，如果您需要使用多个CSS模块来描述元素，请启用 allowMultiple选项。


``` 



```index.js

import React from 'react'
import ReactDOM from 'react-dom'
import Demo from './components/Demo'

function App(props) {
    return (
        <main>
            <Demo />
        </main>
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))


``` 




## CSS Modules with React

https://gist.github.com/xgqfrms-GitHub/16967b1b62afc156bae5162ca459be7e




> import CSSModules & import styles & export default CSSModules(components)

```jsx

import CSSModules from 'react-css-modules'
/* import your css modules styles for the component */
import styles from './Demo.css' 

{/*...*/}

``` 


> export default CSSModules(Demo, styles, {allowMultiple: true} )



```jsx

import components

import Demo from './components/Demo'

``` 










# react-css-modules

Seamless mapping of class names to CSS modules inside of React components.

无缝映射类名称到React组件内的CSS模块。



https://github.com/gajus/react-css-modules

https://github.com/gajus/react-css-modules#sass-scss-less-and-other-css-preprocessors





https://github.com/webpack/css-loader#css-modules


https://github.com/gajus/react-css-modules#webpack-css-loader

CSS模块是一个规范,可以以多种方式实现。
react-css-modules利用现有的CSS模块实现webpack css-loader。


https://github.com/gajus/react-css-modules#whats-the-problem







## 在React的上下文中，CSS模块看起来像这样：

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

## 渲染组件将产生类似于以下内容的标记, 以及与这些CSS类匹配的对应CSS文件。

```js



<div class="table__table___32osj">
    <div class="table__row___2w27N">
        <div class="table__cell___1oVw5">A0</div>
        <div class="table__cell___1oVw5">B0</div>
    </div>
</div>




``` 












## Sass (.scss)
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend

http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins

http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_





## SASS, SCSS, LESS and other CSS Preprocessors

https://github.com/css-modules/icss

互操作CSS与CSS预处理器兼容。
要使用预处理器，您只需要将预处理器添加到装载器链，例如在webpack的情况下，它是简单的安装sass-loader和添加！sass到style-loader加载器查询的结束
(loaders 从右到左进行处理)：





```scss
# Enable Sourcemaps

{
    test: /\.scss$/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        'resolve-url',
        'sass?sourceMap'
    ]
}

# No Enable Sourcemaps

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




## Multiple CSS Modules

避免使用多个CSS模块来描述单个元素。阅读关于Class Composition。

也就是说，如果您需要使用多个CSS模块来描述元素，请启用 allowMultiple选项。


https://github.com/gajus/react-css-modules#class-composition

https://github.com/css-modules/css-modules#composition



当使用多个CSS模块描述一个元素时，react-css-modules将为每个在stylesName声明中匹配的CSS模块附加一个唯一的类名，例如。


```css
.button {

}

.active {

}

``` 

```html
<div styleName='button active'></div>

``` 

这将映射两个互操作的CSS CSS类到目标元素。


Interoperable CSS

https://github.com/css-modules/icss





https://github.com/necolas/normalize.css/

但是，请谨慎使用全局CSS。使用CSS模块，全局CSS只有一些有效的用例(e.g. normalization).

https://gist.github.com/xgqfrms-GitHub/fe74994dfa2e8bba14b0a6412217f154



## Why SRI disappeared? 

https://github.com/cdnjs/cdnjs/issues/10833


https://gist.github.com/xgqfrms-GitHub/462dbc5b16ed7c7cb90942ba340d3fe0




















