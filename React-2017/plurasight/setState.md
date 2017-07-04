# setState & prevState


> `setState(updater, [callback]);`



https://facebook.github.io/react/docs/react-component.html#setstate



 setState() 并不总是立即更新组件。



使得在调用 setState() 之后立即读取 this.state是一个潜在的陷阱。


而是使用 componentDidUpdate 或 setState 回调 (setState(updater，callback))，其中的任何一个在应用更新后都被保证触发。



如果需要根据先前的状态设置状态，请阅读下面的updater参数。


```jsx

(prevState,  props) => {
    //previous state
}


```

setState() 将永远导致重新渲染，除非 shouldComponentUpdate() 返回false。


如果正在使用可变对象并且无法在 shouldComponentUpdate（）中实现条件呈现逻辑，则仅当新状态与先前状态不同时才调用 setState() 将避免不必要的重新呈现。




```jsx

(prevState, props) => stateChange;

```

prevState是对以前状态的引用。


不应该直接突变。
相反，应该根据 prevState和 props的输入构建一个新对象来表示更改。



```jsx

this.setState((prevState, props) => {
    return {
        counter: prevState.counter + props.step
    };
});

```

updater 函数接收到的 prevState和 props都保证是最新的。


更新器的输出与 prevState进行了浅层合并。


setState() 第二个参数是一个可选的回调函数，它将在setState完成并且重新呈现该组件后执行。


通常我们建议使用 componentDidUpdate() 为这样的逻辑。


您可以选择将一个对象作为第一个参数传递给 setState() 不是一个函数：



```js

setState(stateChange, [callback])

```

这将执行 stateChange的浅合并到新的状态，例如调整购物车商品数量：



```js

this.setState({quantity: 2})

```


这种形式的 setState() 也是异步的，同一周期中的多个调用可以被批处理在一起。


例如，如果您尝试在同一周期内多次增加项目数量，则会导致相当于：

```js

Object.assign(
    previousState,
    {quantity: state.quantity + 1},
    {quantity: state.quantity + 1},
    ...
);


```



后续调用将覆盖同一周期中先前调用的值，因此数量只会增加一次。


如果下一个状态取决于以前的状态，我们建议使用 updater函数形式：


```jsx

this.setState((prevState) => {
    return {
        counter: prevState.quantity + 1
    };
});




```


https://facebook.github.io/react/docs/state-and-lifecycle.html



# forceUpdate(callback)


> component.forceUpdate(callback)


默认情况下，当您的组件的状态或道具更改时，您的组件将重新呈现。


如果您的 render() 方法依赖于某些其他数据，您可以通过调用 forceUpdate() 告诉 React该组件需要重新呈现。


调用 forceUpdate() 将导致在组件上调用 render() ，跳过shouldComponentUpdate() 。

这将触发子组件的正常生命周期方法，包括每个子组件的 shouldComponentUpdate() 方法。如果标记更改，则 React 仍将仅更新 DOM。


通常你应该尽量避免使用 forceUpdate()，
只能从 render.() 中的 this.props和 this.state读取。




https://facebook.github.io/react/docs/state-and-lifecycle.html

