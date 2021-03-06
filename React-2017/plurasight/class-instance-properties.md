# class-properties & instance-properties



## class-properties


> prop-type & defaultProps & init state


https://facebook.github.io/react/docs/lifting-state-up.html


```jsx

constructor(props) {
    super(props);
    this.state = {
        color: props.initialColor
    };
}

```

## 起吊状态 

> 通常，几个组件需要反映相同的变化的数据。
我们建议将共享状态提升到最近的共同祖先。


# props-are-read-only

> 道具是只读的

https://facebook.github.io/react/docs/components-and-props.html#props-are-read-only


# The Data Flows Down


https://facebook.github.io/react/docs/state-and-lifecycle.html#the-data-flows-down


https://facebook.github.io/react/docs/state-and-lifecycle.html#using-state-correctly


https://facebook.github.io/react/docs/state-and-lifecycle.html#converting-a-function-to-a-class



https://facebook.github.io/react/docs/react-component.html#class-properties



https://facebook.github.io/react/docs/react-component.html#defaultprops



```jsx

// prop-type

class CustomButton extends React.Component {
    // ...
}


CustomButton.defaultProps = {
    color: 'blue'
};


```


https://facebook.github.io/react/docs/react-component.html#displayname


https://facebook.github.io/react/docs/jsx-in-depth.html




## instance-properties



https://facebook.github.io/react/docs/react-component.html#instance-properties


https://facebook.github.io/react/docs/react-component.html#props



https://facebook.github.io/react/docs/react-component.html#state



# this.props

this.props包含由该组件的调用者定义的道具。


https://facebook.github.io/react/docs/components-and-props.html


特别地，this.props.children 是一个特殊的支持，通常由JSX表达式中的子标签定义，而不是标记本身。


This is used for undefined props, but not for null props



# this.state

https://facebook.github.io/react/docs/react-component.html#state


该状态包含特定于该组件的数据，该数据可能随时间而改变。

状态是用户定义的，它应该是一个纯粹的JavaScript对象。

如果你不在 render() 中使用它，它不应该处于状态。例如，您可以直接在实例上放置定时器ID。




https://facebook.github.io/react/docs/state-and-lifecycle.html


不要直接变异 this.state，因为调用setState() 之后可能会取代你所做的突变。
对待这个状态，好像它是不可变的。




# 单一责任原则


https://en.wikipedia.org/wiki/Single_responsibility_principle

https://zh.wikipedia.org/wiki/单一功能原则


> The single responsibility principle is a computer programming principle that states that every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class. 



https://facebook.github.io/react/docs/thinking-in-react.html



# ant design


https://ant.design/components/modal-cn/

https://ant.design/components/message-cn/


https://ant.design/components/tree-cn/

https://ant.design/components/menu-cn/














