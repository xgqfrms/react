# Download the React DevTools and use an HTTP server(instead of a file: URL) 


## error: (local file)
Uncaught TypeError: ReactDOM.rander is not a function


## HTTP server

download the React DevTools for a better development experience:

[New React Developer Tools](https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html)

## old-version error

[After 0.14 React moved to ReactDOM.render()](http://stackoverflow.com/questions/26627665/error-with-basic-react-example-uncaught-typeerror-undefined-is-not-a-function)


### npm
We recommend using React from npm with a bundler like **browserify** or **webpack**.
You can use the **react** and **react-dom** packages. 
After installing it using 
```sh
$ npm install --save react react-dom
``` 
, you can use:
```js
var React = require('react');
var ReactDOM = require('react-dom');
ReactDOM.render(<App />, ...);
``` 

### Each of the **add-ons** lives in its own package.
**Note**: 
by default, React will be in development mode. 
To use React in production mode, set the environment variable **NODE_ENV** to production (using envify or webpack's DefinePlugin). 
A minifier that performs dead-code elimination such as **UglifyJS** is recommended to completely remove the extra code present in development mode.