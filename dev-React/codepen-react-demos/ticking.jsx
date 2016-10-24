import React from 'react';
import ReactDOM from 'react-dom';

// --save-dev or --save 
// require 相对路径，
// -g 绝对路径， 只对 ???-cli 好使，不适合local test


//npm install --save-dev gulp
//npm install --save-dev gulp-react

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);