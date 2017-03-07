# insertAdjacentHTML


https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML


insertAdjacentHTML() 将指定的文本解析为HTML或XML，并将结果节点插入到DOM树中的指定位置。它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，使其比直接innerHTML操作更快。




adjacent 邻, 邻近的, 旁边,毗邻的,




element.insertAdjacentHTML(position, text);


position 是相对于元素的位置，并且必须是以下字符串之一：

'beforebegin'    元素自身的前面。
'afterbegin'    插入元素内部的第一个子节点之前。
'beforeend'    插入元素内部的最后一个子节点之后。
'afterend'    元素自身的后面。


text 是要被解析为HTML或XML, 并插入到DOM树中的字符串。





位置名称的可视化：

<!-- beforebegin -->
<p>
<!-- afterbegin -->
    foo
<!-- beforeend -->
</p>
<!-- afterend -->









DOM Parsing and Serialization
DOMParser, XMLSerializer, innerHTML, and similar APIs

W3C Working Draft 17 May 2016


https://www.w3.org/TR/DOM-Parsing/

https://www.w3.org/TR/DOM-Parsing/#widl-Element-insertAdjacentHTML-void-DOMString-position-DOMString-text


https://w3c.github.io/DOM-Parsing/#insertadjacenthtml()

https://w3c.github.io/DOM-Parsing/#the-domparser-interface

https://w3c.github.io/DOM-Parsing/#the-xmlserializer-interface


https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/

insertAdjacentHTML() Enables Faster HTML Snippet Injection

insertAdjacentHTML（）启用更快的HTML代码段注入












http://caniuse.com/#search=insertAdjacentHTML

Global 97.53%  +   0.67%   =   98.19%

















