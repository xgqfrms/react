# setState(updater, [callback])



https://facebook.github.io/react/docs/react-component.html#setstate



setState（）并不总是立即更新组件。



使得在调用setState（）之后立即读取this.state是一个潜在的陷阱。


而是使用componentDidUpdate或setState回调（setState（updater，callback）），其中的任何一个在应用更新后都被保证触发。



如果需要根据先前的状态设置状态，请阅读下面的updater参数。



(prevState,  props) => {
    //previous state
}

setState（）将永远导致重新渲染，除非shouldComponentUpdate（）返回false。


















