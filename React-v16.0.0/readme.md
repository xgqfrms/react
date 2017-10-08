# React 
> v16.0.0

```jsx
render() {
    // No need to wrap list items in an extra element!
    return [
        // Don't forget the keys :)
        <li key="A">First item</li>,
        <li key="B">Second item</li>,
        <li key="C">Third item</li>,
    ];
    // arrary , & unique key
}
```

## JavaScript Environment Requirements

> https://reactjs.org/blog/2017/09/26/react-v16.0.html#javascript-environment-requirements

```jsx

import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);

```

## requestAnimationFrame

```jsx

global.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
};

```


# Angular CLI 
> v1.4.5

https://github.com/angular/angular-cli

https://github.com/angular/angular-cli/releases

```sh
$ npm i -g @angular/cli

$ ng new ng4-app

$ cd ng4-app
$ ng serve --open

$ cd ng4-app && ng serve --open
$ cd ng4-app & ng serve -o
# http://localhost:4200/
# You can `ng set --global packageManager=yarn`.
# My First Angular 4.4.4 App

```
