# MDN Web API



## full-screen API

https://developer.mozilla.org/zh-CN/docs/DOM/Using_fullscreen_mode


view-source:https://developer.mozilla.org/samples/domref/fullscreen.html


https://videos-real-origin.cdn.mozilla.net/uploads/webmademovies/Moz_Doc_0329_GetInvolved_ST.webm




## Web Workers API



https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers


Web Worker为Web内容在后台线程中运行脚本提供了一种简单的方法。
线程可以执行任务而不干扰用户界面。
此外，他们可以使用XMLHttpRequest执行 I/O  (尽管responseXML和通道属性总是为空)。
一旦创建， 一个worker 可以将消息发送到创建它的JavaScript代码, 通过将消息发布到该代码指定的事件处理程序 (反之亦然)。
本文提供了有关使用Web Worker的详细介绍。

Web Workers API

一个worker是使用一个构造函数创建的一个对象(e.g. Worker()) 运行一个命名的JavaScript文件 - 这个文件包含将在工作线程中运行的代码;
workers 运行在另一个全局上下文中,不同于当前的window.
因此，使用 window快捷方式获取当前全局的范围 (而不是self) 在一个 Worker 内将返回错误。


































