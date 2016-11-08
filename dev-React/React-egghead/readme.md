# Start Using React to Build Web Applications

https://egghead.io/lessons/course=react-fundamentals

## install

```sh
$ npm i -S react react-dom
$ npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react

``` 


************************************************************************

# https://egghead.io/course=build-your-first-react-js-application


webpack, 
how to take your JSX and transform it into JavaScript. 
how to persist data with Firebase, specifically with ReactFire.
React Router and how to do routing, 
and how to make network requests with Axios.

## install

```sh
$ npm i -S react react-dom
$ npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react
$ npm i -D webpack
``` 

## src/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React Github Notetaker(user info)</title>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" integrity="sha256-mIfhv/h3MLq3WSiSlduuZO3saRNzzuf1LK8w3z3l3JY=" crossorigin="anonymous" /> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha256-916EbMg70RQy9LHiGkXzG8hSg9EdNy97GazNG/aiY1w=" crossorigin="anonymous" />
</head>
<body>
    <div id="app">
        <!-- app -->
    </div>
    <script src="bundle.js"></script>
</body>
</html>
``` 


## run app

```sh
$ webpack -w
``` 
