"use strict";
// [error tutorial](https://babeljs.io/docs/plugins/preset-es2015/)

// [NPM : babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015)
/*
>$ babel index.js --presets es2015 
*/

// input codes

var n = 7;
console.log([1, 2, 3].map(n = +1));

var square = function square(n) {
    return n * n;
};

/*
// output result

var n = 3;
console.log([1, 2, 3].map(n = + 1)); 

var square = function square(n) {
    return n * n;
};
*/
