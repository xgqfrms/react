
// 要渲染 HTML 标签，只需在 JSX 里使用小写字母的标签名。

var myDivElement = <div className="foo" />;
ReactDOM.render(myDivElement, document.getElementById('example'));

// 要渲染 React 组件，只需创建一个大写字母开头的本地变量。

var MyComponent = React.createClass({/*...*/});
var myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));


var panda = <img src=".\/images\/panda.jpg" alt="panda" width="500px" height="500px" />;

// var panda = <img src="./images/panda.jpg" alt="panda" width="500px" height="500px" />;
// ???

var html = <a href="http://www.yahoo.com">Welcome to the Yahoo</a>;

var title = <h1 id="title">Introduction to React.js: Part I</h1>;


(
  <a href="https://www.google.net">
    <h1>
      Click me I am Goooooogle
    </h1>
  </a>
)

