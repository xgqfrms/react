# Web Storage API


https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API



Web Storage API 为浏览器提供了一种比cookies更加直观的方式来存储键值对的机制。




Web Storage 概念和用法

Web Storage 包含如下两种机制：

sessionStorage 为每一个给定的源（given origin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）。


localStorage 同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在。


这两种机制是通过 Window.sessionStorage 和 Window.localStorage 属性使用（更确切的说，在支持的浏览器中 Window 对象实现了 WindowLocalStorage 和 WindowSessionStorage 对象并挂在其 localStorage 和 sessionStorage 属性下）—— 调用其中任一对象会创建 Storage 对象，通过 Storage 对象，可以设置、获取和移除数据项。

对于每个源（origin）sessionStorage 和 localStorage 使用不同的 Storage 对象——独立运行和控制。





























