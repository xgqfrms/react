# react-redux & redux


```sh

$ npm i -S react-redux redux


```



```js
const mapStateToProps = () => {
    //
};

const mapDispatchToProps = () => {
    //
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentName);

===

const returnedFunction = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default returnedFunction(ComponentName);


// connect() return a function, with params = componentName
```


