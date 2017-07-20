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


const mapStateToProps = (state, ownProps) => {
    //
}

const mapDispatchToProps = (dispatch) => {
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


// connect() return a function, with params = containerComponentName


```




# bindActionCreators

```jsx

import {bindActionCreators} from 'redux';


// actions: propTypes.array.isRequired,

actions: propTypes.object.isRequired,

{
    actions: bindActionCreators(courseAction, dispatch)
}

// OR

{
    createCourse: bindActionCreators(courseActions.createCourse dispatch)
}


```












