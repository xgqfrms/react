# Window API






## Window.confirm()


https://developer.mozilla.org/zh-CN/docs/Web/API/Window/confirm



Window.confirm() 方法显示一个具有一个可选消息和两个按钮(确定和取消)的模态对话框 。

语法
    result = window.confirm(message);

message 是要在对话框中显示的可选字符串。
result 是一个布尔值，表示是选择确定还是取消 (true表示OK)。

示例

```js

if (window.confirm("Do you really want to leave?")) {
    window.open("https://cdn.xgqfrms.xyz/exit.html", "Thanks for Visiting!");
}


if (window.confirm("Do you really want to leave?")) {
    window.open("https://cdn.xgqfrms.xyz/confirm.html", "Thanks for Visiting!");
}


```



https://developer.mozilla.org/zh-CN/docs/Web/API/Window/confirm

https://w3c.github.io/html/webappapis.html#dom-confirm
















