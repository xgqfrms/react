# redux & react & yarn


```sh
    
$ npm start
$ npm test

$ npm run build
$ npm run eject

``` 


# `prop-types`


```js
import React, { Component } from 'react';


import React from 'react';


import PropTypes from 'prop-types';

```


# static server

```sh

$ yarn run build

$ yarn global add serve

$ serve -s build


```

> browser-sync

https://www.npmjs.com/package/browser-sync

```sh

$

$


```



> express server

https://stackoverflow.com/a/40844201/5934465

https://gist.github.com/xgqfrms-GitHub/7697d5975bdffe8d474ac19ef906e906


```js
    // simple express server for HTML pages!
    // ES6 style

    const express = require('express');
    const fs = require('fs');
    const hostname = '127.0.0.1';
    const port = 3000;
    const app = express();

    let cache = [];// Array is OK!

    cache[0] = fs.readFileSync( __dirname + '/index.html');
    cache[1] = fs.readFileSync( __dirname + '/views/testview.html');

    app.get('/', (req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.send( cache[0] );
    });

    app.get('/test', (req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.send( cache[1] );
    });

    app.listen(port, () => {
        console.log(`
            Server is running at http://${hostname}:${port}/ 
            Server hostname ${hostname} is listening on port ${port}!
        `);
    });

```







# docs & bugs


https://github.com/reactjs/redux/tree/gh-pages/docs

https://github.com/reactjs/redux/tree/gh-pages/docs/basics


https://github.com/reactjs/redux/blob/gh-pages/docs/basics/ExampleTodoList.html


https://github.com/reactjs/redux/tree/gh-pages/examples


https://github.com/reactjs/redux/tree/gh-pages/examples/todomvc



https://github.com/reactjs/redux/tree/gh-pages/examples/todos



> https://github.com/reactjs/redux/blob/gh-pages/docs/basics/ExampleTodoList.md




# bugs

https://github.com/reactjs/redux/issues/2451


















