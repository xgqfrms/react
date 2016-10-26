'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --save-dev or --save 
// require 相对路径，
// -g 绝对路径， 只对 ???-cli 好使，不适合local test


//npm install --save-dev gulp
//npm install --save-dev gulp-react

function tick() {
  var element = React.createElement("div", null, 
      React.createElement("h1", null, "Hello, world!"), 
      React.createElement("h2", null, "It is ", new Date().toLocaleTimeString(), ".")
    );
  _reactDom2.default.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
//# sourceMappingURL=ticking.js.map
