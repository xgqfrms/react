# CSS Module


https://gist.github.com/xgqfrms-GitHub/


https://gist.github.com/xgqfrms-GitHub/fa2202dfffd113c02e89e8dd349a1709



## CSS naming schemes CSS命名方案

https://www.sitepoint.com/front-end-tooling-trends-2017/



http://getbem.com/

https://github.com/css-modules/css-modules








## BEM — Block Element Modifier

http://getbem.com/


BEM - 块元素修改器是一种方法帮助您在前端开发中创建可重用的组件和代码共享

https://gist.github.com/xgqfrms-GitHub/fa2202dfffd113c02e89e8dd349a1709

http://getbem.com/introduction/

https://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/




```



``` 











## CSS Module


https://github.com/css-modules/css-modules


A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.

CSS模块是一个CSS文件，其中所有类名和动画名称在本地默认范围。


All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules).

所有URL（url（...））和@imports都是模块请求格式（./xxx和../xxx表示相对，xxx和xxx / yyy表示在modules文件夹中，即在node_modules中）。



CSS Modules compile to a low-level interchange format called ICSS or Interoperable CSS, but are written like normal CSS files:

CSS模块编译为低级交换格式，称为ICSS或可互操作的CSS，但编写为正常的CSS文件：


```

/* style.css */
.className {
    color: green;
}

``` 



When importing the CSS Module from a JS Module, it exports an object with all mappings from local names to global names.

当从JS模块导入CSS模块时，它导出一个对象，其中包含从本地名称到全局名称的所有映射。


```

import styles from "./style.css";
// import { className } from "./style.css";

element.innerHTML = '<div class="' + styles.className + '">';

``` 

























https://github.com/css-modules/css-modules/tree/master/docs



## CSS Modules & Webpack 


https://github.com/css-modules/webpack-demo


https://css-modules.github.io/webpack-demo/



## CSS Modules with Angular

https://github.com/css-modules/css-modules/blob/master/docs/css-modules-with-angular.md


## CSS Modules with React


https://github.com/css-modules/css-modules/blob/master/docs/css-modules-with-react.md






