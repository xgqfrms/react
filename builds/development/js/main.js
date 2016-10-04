(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var x = "xgqfrms";
var subjs =require('./no-need/subjs');
var x = "xgqfrms";
/*
let **???????? error?????**
ES-6 uglify-error
*/

subjs.log('Hurray, it works! :)');
subjs.log('\n');
// subjs.mylog();

console.log("\nx =" + x);
},{"./no-need/subjs":2}],2:[function(require,module,exports){
//this is a js file that no need to be compiled to builds!
module.exports = {
	mylog: function(){
		console.log("hello, this is a subjs!");
	}
}

},{}]},{},[1])