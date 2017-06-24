// https://stackoverflow.com/a/40930502/5934465


/* ES6 */


// named arrow function
const xyz = () => {
    console.log(`Hello, ES6's Arrow Function!`);
};
xyz();


const xyz = (() => {
    console.log(`Hello, ES6's Arrow Function!`);
})();


// Uncaught SyntaxError: Unexpected token (

/*
const xyz = (() => {
    console.log(`Hello, ES6's Arrow Function!`);
}());
*/


// anonymous arrow function

(() => {
    console.log(`Hello, ES6's Arrow Function!`);
})();





















