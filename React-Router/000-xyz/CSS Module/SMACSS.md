# SMACSS

https://www.sitepoint.com/front-end-tooling-trends-2017/

http://getbem.com/introduction/


## SMACSS

https://smacss.com/

Scalable and Modular Architecture for CSS

可扩展和模块化 CSS的架构


https://smacss.com/book/  
https://smacss.com/book/resources  
https://smacss.com/book/formatting  



F:\Books\CSS



https://github.com/css-modules/css-modules/issues/218#issuecomment-285901374





用SMACSS规范来编写CSS 2015-07-24 

　　这是一个相对繁杂的CSS理论，分为Base、Layout、Module、Status和Theme共五个部分。不过它的核心思想仍然和OOCSS类似，鼓励使用class。

　　1. Base 基本属性
　　基础属性很容易理解，就是最基本的东西，很多样式简单的网站都采用一个简单的二级CSS文件模式，一个base.css通用于所有页面，而每个页面有一个特定的CSS文件，我想这就是Base的雏形。要说具体是什么，比如reset文件，再比如放置clearfix或BFC的一些类似工具集的文件。
　　其实最终会发现，在Base中的CSS属性将会是几乎全站都要用到的属性，但我不想这么描述Base，因为这会误导人。大多数情况下，在一个网站建立之初也只会有几个简单的页面，于是这几个页面都要用到的属性就变成了通用属性，但并不是这么简单的。随着网站规模的扩大，需求的增加，设计师们灵感的迸发，所谓的通用和统一也在发生着潜移默化。所以在编写Base时，应该遵循的基准是，哪些样式是你做下一个网站时也会想用的，哪些样式即使设计改变了也只需要改变一些数值和颜色，哪些样式是一些基本原则;而不应该将目前大部分页面都在使用的样式放在Base中，还是那个道理，它们也许仅仅是恰好相同，而非逻辑一致。

　　2. Layout 布局
　　布局是一个网站的基本，无论是左右还是居中，甚至其他什么布局，要实现页面的基本浏览功能，布局必不可少。SMACSS将这一功能单独提出也是非常正确的，另外还约定了一个前缀l-/layout-来标识布局的class。举个最普遍的例子。
　　代码如下:
　　.l-header {}
　　.l-brand {}
　　.l-navigator {}
　　.l-container {}
　　.l-sidebar {}
　　.l-content {}
　　.l-footer {}
　　这就是一个简单的左右布局，导航和Logo中规中矩在最顶部。

　　3. Module 模块
　　模块是SMACSS最基本的思想，同时也是大部分CSS理论的基本，将样式模块化就能达到复用和可维护的目的，但是SMACSS提出了更具体的模块化方案。首先表象上来看，SMACSS中的模块应该拥有一个名字，并且为其class名，而模块其他class皆以为前缀。比如：
　　CSS Code复制内容到剪贴板
　　.product {}
　　.product-title {}
　　.product-image {}
　　.product-border {}
　　.product-shadow {}
　　可以看到例子中product是一个模块，title和image是包含在模块内的组件，可用可不用;border和shadow是类似OOCSS的附加class用来改变模块本身。总之，在模块内可以使用其名称做前缀任意组织模块结构，但目前是让其变得更易用，提高可扩展性和灵活度，如果仅仅为了某些功能而特意写一些class就有点有形无实的感觉了。

　　4. State 状态
　　状态经常和JavaScript放在一起使用，它是一种用来标识页面状态的class，无论是为用户标识还是用程序标识。还是一个常见的例子，马上就明白。active经常用来表示当前的tab，或者当前选中的目标，这就是一种状态，无论是样式还是程序都需要知道它。
　　SMACSS仍然有一个对应的前缀用于标示状态class，is-是一个合适的词，指明某一元素是什么状态。

　　5. Theme 主题
　　主题就是皮肤，和OOCSS的分离皮肤与结构不谋而合。更重要的是对于可更换皮肤的站点来说，这样的分离是非常必要的，只需要更换加载的theme文件即可将皮肤更换。
　　总的来说，SMACSS是一个较为注意细节与实现的CSS理论，非常适合初涉CSS的人，它可以让你的CSS跑在轨道上而不至于脱轨。其思想也与OOCSS有很多相通之处，如果没有适合的方案，我建议新手可以适当的融入OOCSS的思想而使用SMACSS的结构，这样写出来的网站样式至少不会马上陷入泥沼。





https://www.w3cplus.com/preprocessor/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss.html








