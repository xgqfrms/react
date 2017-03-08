# outerHTML







https://github.com/oneuijs/You-Dont-Need-jQuery

https://github.com/oneuijs/You-Dont-Need-jQuery/blob/master/README.zh-CN.md



You Don't Need jQuery

http://youmightnotneedjquery.com/



https://developer.mozilla.org/zh-CN/docs/Web/API/Element/outerHTML


element DOM接口的 outerHTML属性, 获取描述包括其后代的元素的序列化HTML片段。它可以用从给定字符串解析的节点设置为替换元素。

语法EDIT
let content = element.outerHTML;
返回时，内容包含描述元素及其后代的序列化HTML片段。

element.outerHTML = content;
将元素替换为通过使用元素的父作为片段解析算法的上下文节点解析字符串内容生成的节点。






获取一个元素的outerHTML属性的值：

// HTML:
/*
<div id="d">
    <p>Content</p>
    <p>Further Elaborated</p>
</div>
*/

const d = document.getElementById("d");
console.log(d.outerHTML);

/*
    字符串 '<div id="d"><p>Content</p><p>Further Elaborated</p></div>'
    被显示到控制台窗口
*/
通过设置outerHTML属性来替换节点：

// HTML:
/*
<div id="container">
    <div id="d">This is a div.</div>
</div>
*/

let container = document.getElementById("container");
let d = document.getElementById("d");

console.log(container.firstChild.nodeName);
// logs "div"

d.outerHTML = "<p>This paragraph replaced the original div.</p>";

console.log(container.firstChild.nodeName);
// logs "P"

/*
    #d div不再是文档树的一部分，新段替换了它。
    (不在页面中显示,但仍然在内存中)
*/



注意事项EDIT
如果元素没有父元素，即如果它是文档的根元素，则设置其outerHTML属性将抛出一个带有错误代码 NO_MODIFICATION_ALLOWED_ERR 的 DOMException 。例如：

document.documentElement.outerHTML = "test";
// 抛出一个 DOMException
此外，虽然元素将在文档中被替换，设置了outerHTML属性的变量仍将保持对原始元素的引用：

let p = document.getElementsByTagName("p")[0];
console.log(p.nodeName);
// 显示: "P"
p.outerHTML = "<div>This div replaced a paragraph.</div>";

console.log(p.nodeName);
// 仍然为: "P";








