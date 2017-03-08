# error




## cannot read property 'keys' of undefined react

new version error : babel-core/6.1.19/browser.min.js



old version ok : babel-core@5.8.38/browser.min.js


> need a web server




nothing to show with no error : react/0.13.3/JSXTransformer.js



react/15.4.2/react.min.js

react/15.4.2/react-dom.min.js





> no match the version ???

react/0.13.3/JSXTransformer.js

https://cdnjs.com/libraries/react/0.13.3


<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js" integrity="sha256-MkTacBvNGO5pU06MeUchxYJwIK/4JrIGyEeINOmKLkM=" crossorigin="anonymous"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.min.js" integrity="sha256-qcq80WTo5JXChoVZHH0uTZyrlaja/xxSq/m+Ih//108=" crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react-with-addons.min.js" integrity="sha256-qihJX7SHYrD43RtzvZ3QsyVicFUR9sYLK/VNabsXvzc=" crossorigin="anonymous"></script>



babel-standalone



https://github.com/babel/babel/issues/2836

https://github.com/babel/babel/issues/2987

https://babeljs.io/blog/2016/12/07/the-state-of-babel

https://github.com/babel/babel/issues/4130



https://babeljs.io/docs/setup/

https://babeljs.io/docs/setup/#browser

babel-standalone

<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>


https://github.com/babel/babel-standalone







http://stackoverflow.com/questions/36672007/reactjs-cannot-read-property-keys-of-undefined


Use `React.createClass` not `ReactDOM.createClass` and wrap multiple lines of `html` in parenthesis




http://stackoverflow.com/questions/38194585/reactjs-browser-cannot-read-property-keys-of-undefined


<script src="https://cdn.bootcss.com/babel-core/6.1.19/browser.min.js"></script>

=>

<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>



http://stackoverflow.com/questions/36632149/react-js-cannot-read-property-keys-of-undefined

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.29/browser.js"></script>


ReactDOM.render(<HelloWorld/>, document.body);

to

React.render(<HelloWorld/>, document.body);



## react update ???

react

=>

react-dom & react

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react-dom.min.js" integrity="sha256-WAF2l7XD87YxXKIohq+9ZUbXRjIcAT0aYy5hx/ByOAU=" crossorigin="anonymous"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react.min.js" integrity="sha256-FRx/Usn52Ipt/CO/41IH/Zvb+IDRGGR5sEYDrEGrAhg=" crossorigin="anonymous"></script>





https://gist.github.com/xgqfrms-GitHub/462dbc5b16ed7c7cb90942ba340d3fe0/edit


react ,babel-standalone,error, keys



https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#changelog



Major changes
Two Packages: React and React DOM
As we look at packages like react-native, react-art, react-canvas, and react-three, it has become clear that the beauty and essence of React has nothing to do with browsers or the DOM.

To make this more clear and to make it easier to build more environments that React can render to, we’re splitting the main react package into two: react and react-dom. This paves the way to writing components that can be shared between the web version of React and React Native. We don’t expect all the code in an app to be shared, but we want to be able to share the components that do behave the same across platforms.


The react package contains React.createElement, .createClass, .Component, .PropTypes, .Children, and the other helpers related to elements and component classes. We think of these as the isomorphic or universal helpers that you need to build components.

The react-dom package has ReactDOM.render, .unmountComponentAtNode, and .findDOMNode. In react-dom/server we have server-side rendering support with ReactDOMServer.renderToString and .renderToStaticMarkup.


当我们看看react-native，react-art，react-canvas和react-three这样的软件包时，很明显React的美丽和本质与浏览器或DOM无关。

为了使这个更清晰，为了更容易构建更多的React可以渲染的环境，我们将主反应包分为两个：react和react-dom。

这为编写可以在React和React Native的Web版本之间共享的组件铺平了道路。
我们不希望应用程序中的所有代码都被共享，但我们希望能够共享跨平台行为相同的组件。


react包包含React.createElement，.createClass，.Component，.PropTypes，.Children和与元素和组件类相关的其他帮助器。

我们认为这些是同构的或通用的助手，你需要构建组件。

react-dom包具有ReactDOM.render，.unmountComponentAtNode和.findDOMNode。

在react-dom / server中，我们有ReactDOMServer.renderToString和.renderToStaticMarkup的服务器端渲染支持。


React v0.14 , react, react-dom



https://react2.xgqfrms.xyz/blog/2015/10/07/react-v0.14.html#changelog


https://segmentfault.com/q/1010000005876887














