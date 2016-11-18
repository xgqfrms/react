/*
Anjana Vakil: Learning Functional Programming with JavaScript - JSUnconf 2016
https://www.youtube.com/watch?v=e-5obm1G_FY
*/
//ES5
var name;
function greet(name){
    return "Hi, I'm " + name + "!";
}

//ES6 
let greet = (name = "xgqfrms") => {
    return `Hi, I'm ${name}!`;
}