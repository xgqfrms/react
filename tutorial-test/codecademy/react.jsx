
var theGoogle = (
    <a href="https://www.google.net">
        <h1>
            Click me I am Goooooogle
        </h1>
    </a>
);

// 还有，我们还没有提到一个规律：一个JSX表达式必须有一个确切的最外层元素。

// In other words, this code will work:
var paragraphs = (
    <div id="i-am-the-outermost-element">
        <p>I am a paragraph.</p>
        <p>I, too, am a paragraph.</p>
    </div>
);

// But this code will not work:

var paragraphs = (
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
);
