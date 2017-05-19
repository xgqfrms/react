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




















