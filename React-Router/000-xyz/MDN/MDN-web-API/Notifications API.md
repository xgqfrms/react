# Notifications API



https://developer.mozilla.org/zh-CN/docs/Web/API/Notifications_API


Notifications API 允许网页控制向最终用户显示系统通知 —这些都在顶级浏览上下文视口之外，因此即使用户已经切换标签页或移动到不同的应用程序，也可以显示。该API被设计成与不同平台上的现有通知系统兼容。



概念和用法

在支持该接口的平台上，显示一个系统通知通常涉及两件事。
首先，用户需要授予当前源的权限以显示系统通知，这通常在应用或站点初始化时, 使用Notification.requestPermission() 方法来完成。
这将产生一个请求对话框，沿着以下几行：

https://mdn.mozillademos.org/files/10819/notification-bubble.png

从这里，用户可以选择允许来自此来源的通知，阻止来自此来源的通知，或不选择此点。一旦做出选择，该设置通常将持续用于当前会话。


注：从Firefox 44开始， 通知（Notifications） 和推送（Push）的权限已合并。如果为通知授予权限，推送也将启用。


接下来，使用 Notification() 构造函数创建一个新通知。这个方法可以传入两个参数。这必须传递一个标题参数，并可以选择性地传递一个选项对象来指定选项，如文本方向，正文，显示图标，通知声音播放, 等等。



此外， Notifications API 规范对  ServiceWorker API指定了多个添加，以允许 service workers发送通知。




https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web




https://developer.mozilla.org/zh-CN/docs/Web/API/notification/Using_Web_Notifications


https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API


https://developer.mozilla.org/zh-CN/docs/Web/API/Notification/Notification




https://notifications.spec.whatwg.org/#dom-notification-notificationtitle-options





https://w3c-html-ig-zh.github.io/notifications/whatwg/














