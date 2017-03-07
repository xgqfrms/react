# MDN Web API



## Fullscreen API

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





## 在线和离线事件

https://developer.mozilla.org/zh-CN/docs/Online_and_offline_events



## insertAdjacentHTML

https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML


insertAdjacentHTML() 将指定的文本解析为HTML或XML，并将结果节点插入到DOM树中的指定位置。它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，使其比直接innerHTML操作更快。







## IndexedDB API


https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API


IndexedDB 是一种用于客户端存储大量结构化数据（包括文件/ blob）的低级API。此API使用索引来启用此数据的高性能搜索。



## Web Storage API

https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API

Web Storage API 为浏览器提供了一种比cookies更加直观的方式来存储键值对的机制。




## 使用服务器发送事件


https://developer.mozilla.org/zh-CN/docs/Server-sent_events/Using_server-sent_events

开发一个使用服务器发送的事件的Web应用程序是很容易的。你需要在服务器上的一些代码将事件流传输到Web应用程序，但Web应用程序端的事情几乎完全相同，处理任何其他类型的事件。

https://developer.mozilla.org/zh-CN/docs/Server-sent_events/EventSource




https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/postMessage


Worker.postMessage()



Worker 接口的 postMessage()方法向worker的内部作用域发送一个消息。
这接受单个参数，这是要发送给worker的数据。数据可以是由结构化克隆算法处理的任何值或JavaScript对象，其包括循环引用。

工作者可以使用 DedicatedWorkerGlobalScope.postMessage  方法将信息发送回生成它的线程。

句法

myWorker.postMessage(aMessage, transferList);



https://developer.mozilla.org/en-US/docs/Web/API/Client/postMessage


Client 接口的 Client.postMessage() 方法允许一个服务worker客户端向一个  ServiceWorker发送一个消息。


Client.postMessage(message[, transfer]);



https://developer.mozilla.org/zh-CN/docs/Server-sent_events/EventSource


EventSource 接口用于接收服务器发送的事件。它通过HTTP连接到一个服务器，以text/event-stream 格式接收事件, 不关闭连接。




## HTML 焦点管理

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Focus_management_in_HTML


https://developer.mozilla.org/zh-CN/docs/Web/API/Document/hasFocus


https://developer.mozilla.org/zh-CN/docs/Web/API/Document/activeElement


https://developer.mozilla.org/zh-CN/docs/Web/API/MessagePort/onmessage











## Push API


https://developer.mozilla.org/zh-CN/docs/Web/API/Push_API


https://developer.mozilla.org/zh-CN/docs/Web/API/Push_API/Using_the_Push_API






## Notifications API


https://developer.mozilla.org/zh-CN/docs/Web/API/Notifications_API


Notifications API 允许网页控制向最终用户显示系统通知 —这些都在顶级浏览上下文视口之外，因此即使用户已经切换标签页或移动到不同的应用程序，也可以显示。该API被设计成与不同平台上的现有通知系统兼容。




https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web


https://developer.mozilla.org/zh-CN/docs/Web/API/notification/Using_Web_Notifications


https://developer.mozilla.org/zh-CN/docs/Web/API/Notification/Notification

https://notifications.spec.whatwg.org/#dom-notification-notificationtitle-options

https://w3c-html-ig-zh.github.io/notifications/whatwg/




https://github.com/w3c-html-ig-zh


W3C HTML5 中文兴趣组






## Service Worker API



https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API




https://developer.mozilla.org/zh-CN/docs/Web/API/Push_API




##

##


##

##




##

##


##

##


##

##




