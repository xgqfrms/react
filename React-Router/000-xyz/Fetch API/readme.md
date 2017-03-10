# Fetch API



https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API



Fetch API提供了一个获取资源的接口(包括跨网络)。任何使用过 XMLHttpRequest 的人都会熟悉它，但是新的API提供了更强大和更灵活的功能集。












https://developer.mozilla.org/zh-CN/users/signin?next=/zh-CN/docs/Web/API/Fetch_API/Using_Fetch 









Fetch API  提供了一个 JavaScript接口，用于访问和操纵HTTP管道的部分，例如请求和响应。
它还提供了一个全局的 fetch()方法，该方法提供了一种简单，合乎逻辑的方式来跨网络异步获取资源。



这种功能以前是使用 XMLHttpRequest实现的。
Fetch提供了一个更好的替代方法，可以很容易地被其他技术使用，例如 Service Workers。
Fetch还提供了单个逻辑位置来定义其他HTTP相关概念，例如 CORS和HTTP的扩展。




请注意，fetch 规范与 jQuery.ajax() 主要有两种方式的不同，牢记：

    从 fetch() 返回的 Promise 将不会拒绝HTTP错误状态, 即使响应是一个 HTTP 404 或 500。相反，它会正常解决 (其中ok状态设置为false), 并且仅在网络故障时或任何阻止请求完成时，它才会拒绝。

    默认, fetch 将不会从服务器 发送或接收任何 cookies , 如果站点依赖于维护一个用户会话，则会导致未经认证的请求(要发送 cookies，必须发送凭据头).



进行 fetch 请求 
一个基本的 fetch 请求设置真的非常简单。看看下面的代码：

```

let myImage = document.querySelector('img');

fetch('https://cdn.xgqfrms.xyz/logo/icon.png')
.then(function(response) {
    return response.blob();
})
.then(function(myBlob) {
    let objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
    // src="blob:null/98bb1e66-e1ad-450c-8877-799ad318a617"
});

``` 



这里我们通过网络获取一个图像(blob ???)并将其插入到一个 <img> 元素中。








https://github.com/github/fetch


https://github.github.io/fetch/












https://hacks.mozilla.org/2015/03/this-api-is-so-fetching/














