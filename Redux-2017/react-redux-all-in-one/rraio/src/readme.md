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

{
    courses: propTypes.array.isRequired,
    actions: propTypes.object.isRequired
}

{
    actions: bindActionCreators(courseAction, dispatch)
}

// OR

{
    createCourse: bindActionCreators(courseActions.createCourse dispatch)
}


import * as types from './actionTypes';
import * as types from './actionTypes.js';
import * as types from './actionTypes.jsx';


export const CREATE_COURSE = 'CREATE_COURSE';

const CREATE_COURSE = 'CREATE_COURSE';

export CREATE_COURSE;

```


# asynchronous flow

> redux-thunk


# Mock APi

fake.js

json server




# redux-thunk

> Thunk middleware for Redux

咚

> Star `5,855` & Fork `250`

https://github.com/gaearon/redux-thunk

https://www.npmjs.com/package/redux-thunk

81,565 downloads in the last day
404,671 downloads in the last week
1,656,027 downloads in the last month


# CS术语 

> thunk 

一个函数，包裹一个表达式 以延缓其评估！


# CS term

> thunk

a function , wraps an expression

in order to delay its evaluation!



