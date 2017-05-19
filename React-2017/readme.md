# React 2017



https://facebook.github.io/react/

> v15.5.4


## A Simple Component


`React.createElement()` & `ReactDOM.render()`

>  `React.createElement()`

https://facebook.github.io/react/docs/react-api.html


> `ReactDOM.render()`

https://facebook.github.io/react/docs/react-dom.html
https://facebook.github.io/react/docs/react-dom-server.html
https://facebook.github.io/react/docs/rendering-elements.html




### JSX

https://facebook.github.io/react/docs/introducing-jsx.html

https://facebook.github.io/react/docs/react-without-jsx.html

https://facebook.github.io/react/docs/jsx-in-depth.html


### State and Lifecycle

https://facebook.github.io/react/docs/state-and-lifecycle.html

### Components and Props

https://facebook.github.io/react/docs/components-and-props.html





```jsx

class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

ReactDOM.render(<HelloMessage name="Jane" />, mountNode);

// let mountNode = document.getElementById('mountNode');

```


```js

class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
        );
    }
}

ReactDOM.render(
    React.createElement(
        HelloMessage, 
        {
            name: "Jane"
        }
    ),
    mountNode
);

// let mountNode = document.getElementById('mountNode');

```


## A Stateful Component


```jsx


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { secondsElapsed: 0 };
    }
    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div> Seconds Elapsed: { this.state.secondsElapsed } </div>
        );
    }
}

ReactDOM.render(<Timer />, mountNode);


```


```js

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { secondsElapsed: 0 };
    }
    tick() {
        this.setState(prevState => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return React.createElement(
            "div",
            null,
            "Seconds Elapsed: ",
            this.state.secondsElapsed
        );
    }
}

ReactDOM.render(React.createElement(Timer, null), mountNode);

```



## An Application


```jsx

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {items: [], text: ''};
    }

    render() {
        return ( 
            <div>
                <h3> TODO </h3>
                <TodoList items = {this.state.items} />
                <form onSubmit = {this.handleSubmit}>
                    <input onChange = {this.handleChange} value = {this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState(
            {
                text: e.target.value
            }
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        var newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(
            (prevState) => ({
                items: prevState.items.concat(newItem),
                text: ''
            })
        );
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
            {
            this.props.items.map(
                item => (<li key={item.id}>{item.text}</li>)
                )
            }
            </ul>
        );
    }
}

ReactDOM.render(
    <TodoApp />,
    mountNode
);

```


```js



```





## A Component Using External Plugins


```jsx



```


```js



```




## 


```jsx



```


```js



```




## 


```jsx



```


```js



```





## 


```jsx



```


```js



```




## 


```jsx



```


```js



```



## 


```jsx



```


```js



```













## 


```jsx



```


```js



```








https://facebook.github.io/react/docs/hello-world.html


https://facebook.github.io/react/tutorial/tutorial.html



## `React.createElement`

https://facebook.github.io/react/docs/react-api.html




















