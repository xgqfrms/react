# SVG

F:\Books\CSS




## SVG

http://mediatemple.net/blog/tips/an-svg-that-isnt-all-svg/

http://codepen.io/chriscoyier/pen/yVJbGR


http://www.alloyteam.com/2017/02/the-beauty-of-the-lines-break-lines-svg-animation/

线条之美，玩转SVG线条动画 









## Media Queries

https://www.w3.org/TR/css3-mediaqueries/

https://www.w3.org/TR/mediaqueries-4/


https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries


## Examples

```css

<style>

@media print {
    body { font-size: 10pt }
}

@media screen {
    body { font-size: 13px }
}

@media screen, print {
    body { line-height: 1.2 }
}

@media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
        body {
            line-height: 1.4
        }
}

</style>

``` 





https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media


@media CSS at-rule 将一组嵌套语句关联在由大括号分隔的CSS块中，使用由media query定义的一个条件。@media 规则不仅可以在一个CSS的顶层使用，也可以在任何CSS conditional-group at-rule中使用。

@media 规则可以通过CSS对象模型接口 CSSMediaRule 访问.



https://developer.mozilla.org/zh-CN/docs/Web/API/CSSMediaRule

https://developer.mozilla.org/zh-CN/docs/Web/CSS/At-rule

https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries





CSSMediaRule 是一个表示单个CSS @media  规则的接口。它实现  CSSConditionRule 接口，因此 CSSGroupingRule  和  CSSRule 接口类型值为 4(CSSRule.MEDIA_RULE).。


一个 at-rule 是一个CSS 语句，以at符号开头, '@' (U+0040 COMMERCIAL AT), 后跟一个标识符，并包括直到下一个分号的所有内容, ';' (U+003B SEMICOLON), 或下一个CSS块，以先到者为准。




https://www.w3.org/TR/css3-conditional/


https://developer.mozilla.org/zh-CN/docs/Web/CSS/@import


```css
<style>

    @import url("fineprint.css") print;
    @import url("bluish.css") projection, tv;
    @import 'custom.css';
    @import url("chrome://communicator/skin/");
    @import "common.css" screen, projection;
    @import url('landscape.css') screen and (orientation:landscape);

</style>

``` 

https://developer.mozilla.org/zh-CN/docs/Web/CSS/@charset



@charset "UTF-8";
@charset "iso-8859-15";


```css
<style>

@charset "UTF-8";       
/* Set the encoding of the style sheet to Unicode UTF-8 */
@charset 'iso-8859-15'; /* Invalid, wrong quoting style used */
@charset 'UTF-8'; /* Invalid, wrong quoting style used */
@charset  "UTF-8";      /* Invalid, more than one space */
 @charset "UTF-8";      /* Invalid, there is a character (a space) before the at-rule */
@charset UTF-8;         /* Invalid, without ' or', the charset is not a CSS &lt; string &gt; */


</style>

``` 















```css

<!-- CSS media query on a link element -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

<!-- CSS media query within a stylesheet -->
<style>
@media all and (max-width: 720px) and (min-width: 320px)  {
    .media_mobile_pc {
        display: flex;
        overflow: hidden;
        box-sizing:border-box;
        background: rgba(0,0,0,0.7);
        color: #0f0;
        border: 1px solid rgba(255,0,255,0.7);
        min-height: 300px;
        max-height: 500px;
        width: auto;
    }
}
.media_pc {
    display: flex;
    overflow: hidden;
    box-sizing:border-box;
    background: rgba(0,0,0,0.7);
    color: #0f0;
    border: 1px solid rgba(255,0,255,0.7);
    max-height: 500px;
    max-width: 720px;
}
</style>
``` 





https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3

https://developer.mozilla.org/en-US/docs/Web/CSS/@media




## box-sizing:border-box;

https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

https://css-tricks.com/box-sizing/

https://css-tricks.com/international-box-sizing-awareness-day/


https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing

box-sizing 属性用于更改用于计算元素宽度和高度的默认的 CSS 盒模型。可以使用此属性来模拟不正确支持CSS框模型规范的浏览器的行为。


```css
<style>

/* 关键字 值 */
box-sizing: content-box;
box-sizing: border-box;

/* 全局 值 */
box-sizing: inherit;
box-sizing: initial;
box-sizing: unset;

</style>
``` 

border-box
    width 和 height 属性包括内容，填充和边框，但不包括边距。
    这是当文档处于 Quirks模式 时Internet Explorer使用的盒模型。
    注意，填充和边框将在盒子内 , 例如, .box {width: 350px; border: 10px solid black;} 导致在浏览器中呈现的宽度为350px的盒子。
    内容框不能为负，并且被分配到0，使得不可能使用border-box使元素消失。

这里的维度计算为：
    width = border + padding + 内容的  width，
    height = border + padding + 内容的 height。




