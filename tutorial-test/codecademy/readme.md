# codecademy

[Learn ReactJS: Part I](https://www.codecademy.com/courses/react-101/)

JSX元素被视为JavaScript表达式。
他们可以去任何地方的JavaScript表达式可以去。 
这意味着，一个JSX元素可以被保存在一个变量，传递给函数，存储在一个对象或数组......你的名字。

```jsx
//app.js
var navBar = <nav>I am a nav bar</nav>;

var Pistons2004 = {
  center:        <li>Ben Wallace</li>,
  powerForward:  <li>Rasheed Wallace</li>,
  smallForward:  <li>Tayshaun Prince</li>,
  shootingGuard: <li>Richard Hamilton</li>,
  pointGuard:    <li>Chauncey Billups</li>
};
/*

大前锋
小前锋
得分后卫
控球后卫
*/
``` 

# https://facebook.github.io/react/docs/jsx-in-depth-zh-CN.html

## HTML 标签对比 React 组件

> React 可以渲染 HTML 标签 (strings) 或 React 组件 (classes)。

### 要渲染 HTML 标签，只需在 JSX 里使用小写字母的标签名。

```jsx
var myDivElement = <div className="foo" />;
ReactDOM.render(myDivElement, document.getElementById('example'));
``` 

### 要渲染 React 组件，只需创建一个大写字母开头的本地变量。

```jsx
var MyComponent = React.createClass({/*...*/});
var myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));
``` 

### React 的 JSX 使用大、小写的约定来区分本地组件的类和 HTML 标签。

## 注意:
> 由于 JSX 就是 JavaScript，一些标识符像 class 和 for 不建议作为 XML 属性名。  
作为替代，React DOM 使用 className 和 htmlFor 来做对应的属性。