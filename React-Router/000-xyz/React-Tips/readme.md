# React-Tips







## Why and how to bind methods in your React component classes?

React Kung Fu


http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/



绑定你的事件处理程序的最好的地方是你的构造函数：

## ES 2015 - constructor & bind(this)

class InputExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
    this.change = this.change.bind(this);
  }

  change(ev) {
    this.setState({ text: ev.target.value });
  }

  render() {
    let { text } = this.state;
    return (<input type="text" value={text} onChange={this.change} />);
  }
}


## (类属性+ arrow函数语法) - no bind this

// class properties 

但还有另一个非常有用的副作用 - 箭头函数总是从它们被定义的地方获取上下文。


class InputExample extends React.Component {
  state = { text: '' };
  change = ev => this.setState({text: ev.target.value});

  render() {
    let {text} = this.state;
    return (<input type="text" value={text} onChange={this.change} />);
  }
}

你的组件以更简洁的方式编写，你摆脱了构造函数，你的事件处理程序正确绑定，而不进行显式绑定。



这个解决方案的缺点是类属性仍处于实验阶段。


这意味着此功能可以在ECMAScript 2016（a.k.a ECMAScript 7或ES7）的后续迭代中删除，没有警告。

它也可以由您的EcmaScript转换器的维护者删除。
在React社区中广泛使用的一个转换器，允许您启用此功能是Babel.js。



了解JavaScript函数调用上下文的行为是一个非常有价值的知识 - 它允许您跟踪在使用JavaScript开发您的UI时可能出现的微妙错误。由于React是JavaScript，组件类遵循与上下文相同的调用上下文原则。

除了可以从其他语言获得的惊喜效果，使用纯ES2015类定义的React组件类使您的React代码库行为与其余代码库更一致。祝你好运！










