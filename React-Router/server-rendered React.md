# server-rendered React 







## React Universal with Next.js: Server-side React

https://scotch.io/tutorials/react-universal-with-next-js-server-side-react



https://github.com/zeit/next.js

服务器渲染的React应用程序的框架


## React on the Server for Beginners: Build a Universal React and Node App

https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app

https://github.com/lmammino/judo-heroes




## Build A Media Library with React, Redux, and Redux-saga

https://scotch.io/tutorials/build-a-media-library-with-react-redux-and-redux-saga-part-1

https://scotch.io/tutorials/build-a-media-library-with-react-redux-and-redux-saga-part-2


https://www.flickr.com/services/api/

https://developers.shutterstock.com/api/v2





https://pub.scotch.io/@codebeast

https://github.com/christiannwamba/scotch-player






## Using Git Hooks in Your Development Workflow

https://scotch.io/tutorials/using-git-hooks-in-your-development-workflow






## Learning React.js: Getting Started and Concepts

https://scotch.io/tutorials/learning-react-getting-started-and-concepts



getInitialState - 返回值是状态的初始值。

getDefaultProps - 如果不提​​供props,设置回退props值。

mixins - 一个对象数组，用于扩展当前组件的功能。


## React.Component

https://facebook.github.io/react/docs/react-component.html


constructor(props) {
    super(props);
    this.state = {
        color: props.initialColor
    };
} 



每个组件都有一个state对象和一个props对象。
使用setState方法设置状态。
调用setState触发UI更新，是React的交互性的面包和黄油。
如果我们想在任何交互发生之前设置一个初始状态，我们可以使用getInitialState方法。



var MyComponent = React.createClass({
    getInitialState: function(){
        return {
            count: 5
        }
    },
    render: function(){
        return (
            <h1>{this.state.count}</h1>
        )
    }
});














https://pub.scotch.io/@ryan


https://github.com/chenkie

https://scotch.io/tutorials/build-a-single-page-time-tracking-app-with-vue-js-part-ii

https://scotch.io/tutorials/build-a-single-page-time-tracking-app-with-vue-js-part-ii

https://github.com/chenkie/vue-node-time-tracker



https://scotch.io/tutorials/build-an-app-with-vue-js-a-lightweight-alternative-to-angularjs

https://github.com/chenkie/vue-events-bulletin





https://online.reacttraining.com/courses/50507/lectures/760073

https://online.reacttraining.com/courses/reactjsfundamentals/lectures/760335












