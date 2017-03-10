# css-modules




https://gist.github.com/xgqfrms-GitHub/

https://gist.github.com/xgqfrms-GitHub/fa2202dfffd113c02e89e8dd349a1709



## CSS naming schemes CSS命名方案

https://www.sitepoint.com/front-end-tooling-trends-2017/







## CSS Modules


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


Naming  
    For local class names camelCase naming is recommended, but not enforced.

命名  
    对于本地类名，建议使用camelCase命名，但不强制。



Exceptions  
    :global switches to global scope for the current selector resp. identifier. :global(.xxx) resp. @keyframes :global(xxx) declares the stuff in parenthesis in the global scope.

例外 ：  
    全局切换到当前选择器的全局范围。标识符。 ：global（.xxx） @keyframes：global（xxx）在全局范围中声明圆括号中的内容。

Similar :local and :local(...) for local scope.

类似：local和：local（...）用于本地作用域。


If the selector is switched into global mode, global mode is also activated for the rules. (this allows to make animation: abc; local)

如果选择器切换到全局模式，则也为规则激活全局模式。 （这允许使动画：abc; local）



Example: .localA :global .global-b .global-c :local(.localD.localE) .global-d

例如：.localA :global .global-b .global-c :local(.localD.localE) .global-d


组成 
    可以组成选择器。

```

.className {
    color: green;
    background: red;
}

.otherClassName {
    composes: className;
    color: yellow;
}

``` 

There can be multiple composes rules, but composes rules must be before other rules.

可以有多个组合规则，但组合规则必须在其他规则之前。

Extending works only for local-scoped selectors and only if the selector is a single class name.

扩展仅适用于局部范围的选择器，并且仅当选择器是单个类名时。


When a class name composes another class name, the CSS Module exports both class names for the local class. This can add up to multiple class names.

当类名组成另一个类名时，CSS模块将导出本地类的两个类名。这可以添加多个类名。

It's possible to compose multiple classes with composes: classNameA classNameB;.

可以用composes组合多个类：classNameA classNameB ;.


Dependencies 
    It's possible to compose class names from other CSS Modules.

依赖 
    它可以从其他CSS模块组成类名。


```

.otherClassName {
    composes: className from "./style.css";
}

``` 

Note that when composing multiple classes from different files the order of appliance is undefined. Make sure to not define different values for the same property in multiple class names from different files when they are composed in a single class.

请注意，从不同文件组成多个类时，设备的顺序未定义。确保不要在单个类中组合不同文件的多个类名中的同一属性定义不同的值。


Note that composing should not form a circular dependency. Elsewise it's undefined whether properties of a rule override properties of a composed rule. The module system may emit an error.

注意，组合不应该形成循环依赖。同样，它未定义规则的属性是否覆盖已组合规则的属性。模块系统可能会发出错误。


Best if classes do a single thing and dependencies are hierarchic.

最好如果类做一个单一的事情，依赖是分层的。



Usage with preprocessors

Preprocessors can make it easy to define a block global or local.

i. e. with less.js

:global {
    .global-class-name {
        color: green;
    }
}



预处理器的用法 

预处理器可以使定义块全局或局部变得容易。







Why?

modular and reusable CSS!
    No more conflicts.
    Explicit dependencies.
    No global scope.

为什么？ 
模块化和可重用的CSS！ 
    没有更多的冲突。 
    显式依赖。 
    没有全局范围。



Implementations webpack 
    Webpack's css-loader in module mode replaces every local-scoped identifier with a global unique name (hashed from module name and local identifier by default) and exports the used identifier.

实现 webpack 
    Webpack的css-loader在模块模式下用全局唯一名称（默认从模块名称和本地标识符哈希）替换每个本地范围的标识符，并导出使用的标识符。


https://github.com/webpack/css-loader





## CSS Modules & Webpack 


https://github.com/css-modules/webpack-demo


https://css-modules.github.io/webpack-demo/







## css-modules docs

https://github.com/css-modules/css-modules/tree/master/docs


https://github.com/css-modules/css-modules/blob/master/docs/local-scope.md

https://github.com/css-modules/css-modules/blob/master/docs/pseudo-class-selectors.md

https://github.com/css-modules/css-modules/blob/master/docs/values-variables.md


https://github.com/css-modules/css-modules/blob/master/docs/composition.md






















## CSS Modules with Angular

https://github.com/css-modules/css-modules/blob/master/docs/css-modules-with-angular.md


## CSS Modules with React


https://github.com/css-modules/css-modules/blob/master/docs/css-modules-with-react.md






