# React-Router-API




## Web 安装

```sh

$ npm install react-router-dom@next
# or
$ yarn add react-router-dom@next

```


## 导入模块

```jsx
import {
    BrowserRouter as Router,
    StaticRouter, // for server rendering
    Route,
    Link
    // etc.
} from 'react-router-dom'



import Router from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'
// etc.

```



## BrowserRouter


```jsx

import { BrowserRouter } from 'react-router-dom'

<BrowserRouter
    basename={optionalString}
    forceRefresh={optionalBool}
    getUserConfirmation={optionalFunc}
    keyLength={optionalNumber}
>
    <App/>
</BrowserRouter>


```

https://reacttraining.com/react-router/docs/Router.md

A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.

使用HTML5历史API（pushState，replaceState和popstate事件）的<Router>，以使您的UI与URL保持同步。








## 1.0.4 => 1.2.1






https://github.com/facebookincubator/create-react-app


$ npm install -g create-react-app

$ create-react-app my-app

> cd my-app/

$ npm start


Then open http://localhost:3000/ to see your app.


-o

--open



$ npm start
$ yarn start

$ npm test
$ yarn test

$ npm run build
$ yarn build









