# Web Workers API


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



https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API


Web Workers是一种机制，通过它可以使一个脚本操作在与Web应用程序的主执行线程分离的后台线程中运行。这样做的优点是可以在单独的线程中执行繁琐的处理，让主（通常是UI）线程运行而不被阻塞/减慢。



Web Workers 概念与用法

一个 worker 是使用构造函数创建的一个对象（例如,Worker()）, 运行一个命名的 JavaScript文件 — 这个文件包含了将在 worker 线程中运行的代码，并且 worker 在与当前 window不同的另一个全局上下文中运行。
这个上下文由专用worker的情况下的一个 DedicatedWorkerGlobalScope 对象表示（标准 workers 由单个脚本使用; 共享workers使用 SharedWorkerGlobalScope）。



专用 Dedicated


https://html.spec.whatwg.org/multipage/workers.html#infrastructure-2


There are two kinds of workers; dedicated workers, and shared workers.

Dedicated workers, once created, are linked to their creator;
but message ports can be used to communicate from a dedicated worker to multiple other browsing contexts or workers.

Shared workers, on the other hand, are named, and once created any script running in the same origin can obtain a reference to that worker and communicate with it.



有两种工人;专业工人和共享工人。

专业工人一旦创造，就与他们的创造者相联系;但是消息端口可以用于从专用工作者到多个其他浏览上下文或工作者的通信。

另一方面，共享工作者被命名，并且一旦被创建，在同一源中运行的任何脚本可以获得对该工作者的引用并与其通信。





https://w3c.github.io/workers/


Web Workers
Editor’s Draft, 27 September 2016









