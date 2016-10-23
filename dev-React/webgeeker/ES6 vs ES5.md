# ES6 vs ES5

[es6-in-depth](http://kamranahmed.info/blog/2016/04/04/es6-in-depth/)  

## Strict mode by default

```js
// ES5 – Manually enable it using 
"use strict";

// ES6 – Enabled in modules by default

``` 

## Block Scope

```js
// ES5 – Variables declared using var and having function scope


// ES6 – Declare block scoped variables using let/const

[immediately-invoked function expression (IIFE)](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)  

``` 

## Template Literals 

```js
// In ES5

var name = 'John';  
console.log('Hello ' + name);  

// In ES6

var name = 'John';  
console.log(`Hello ${name}`);  

/*
注意:  
模板文字，您必须使用**反引号**，  
并且在模板字面中使用的变量必须，在使用模板文字之前声明。  
*/

``` 

## Arrow functions

```js
// ES5 example 

var sayHello = function(name) {  
    return 'Hello ' + name + '!';  
};

// Using ES6: Arrow function (The one liner)

var sayHello = name => `Hello ${name}!`;  

sayHello('World'); // Hello World

// With block in case multiple statements are involved

var sayHello = name => {  
    // Say hello to world in case no name provided(提供 default 值)  
    name = name || 'World';  
    return `Hello ${name}!`;  
};
sayHello(); // Hello World!

sayHello('Jim'); // Hello Jim!

// Without parameters  

var sayHello = () => {  
    return 'Hello World!';
};

sayHello(); // Hello World!  

// With multiple parameters  

var greet = (greeting, name) => `${greeting} ${name}!`;  

// or with block

var greet = (greeting, name) => {  
    return `${greeting} ${name}!`;
};

greet('Hello', 'World');  // Hello World  

``` 

## Destructuring

```js
// You can apply it on arrays
var parts = '2010-11-11'.split('-'),
    year = parts[0],
    month = parts[1],
    day = parts[2];

console.log(year);  // 2010
console.log(month); // 10
console.log(day);   // 11

// Here is a one liner in ES6
var [year, month, day] = '2010-10-11'.split('-');

console.log(year);  // 2010
console.log(month); // 10
console.log(day);   // 11

``` 

```js
/* You can leave some values as well if you want */

// Only take the month and day
var [, month, day] = '2010-10-11'.split('-');
console.log(month); // 10
console.log(day);   // 11

// Only take the year and day
var [year, , day] = '2010-10-11'.split('-');
console.log(year);  // 2010
console.log(day);   // 11
``` 

```js
/* you can set default values, if some variable wasn’t able to get filled the default value will be used*/

// 2010-10
var [year, month, date=1] = '2010-10'.split('-');
console.log(year);  // 2010
console.log(month); // 10
console.log(date);  // 1

// 2010-10-11
var [year, month, date=1] = '2010-10-11'.split('-');
console.log(year);  // 2010
console.log(month); // 10
console.log(date);  // 11

``` 

```js
// It works for the objectcs as well
var person = { name: 'John Doe', age: 23, gender: 'male' };
var {name, age, gender} = person;

console.log(name); // John Doe
console.log(age);   // 23
console.log(gender); // male

// Well in that case you can easily use the aliases:
var person = { name: 'John Doe', age: 23, gender: 'male' };
var {name:tag, age, gender:sex} = person;

console.log(tag); // John Doe
console.log(age); // 23
console.log(sex); // male

// Also, you can have default values as well
var person = { name: 'John Doe', age: 23};
var {name, age, gender = 'male'} = person;
console.log(name); // John Doe
console.log(age); // 23
console.log(gender); // male

// Alias and default value at the same time
var person = { name: 'John Doe', age: 23};
var {name, age, gender:sex = 'male'} = person;
console.log(name); // John Doe
console.log(age); // 23
console.log(sex); // male

// Returning object/multiple values from a function call
function getLocation() {
    return {
        latitude: 23.4125,
    longitude: 45.128
    };
}

var {latitude:lat, longitude:long} = getLocation();
console.log(lat);  //23.4125
console.log(long); //45.128

``` 


## The mighty for...of 

```js

``` 

## Default Parameter Values 

```js

``` 

## Spread operator ... 

```js

``` 

## Classes 

```js

``` 

## Maps 

```js

``` 

## WeakMaps 

```js

``` 

## Sets 

```js

``` 

## Weaksets 

```js

``` 

## New String Functions 

```js

``` 

## New Array Functions 

```js

``` 

## Modules 

```js

``` 

## ? promise ?

```js

``` 


## 

```js

``` 

## 

```js

``` 

## 

```js

``` 

## 

```js

``` 

## 

```js

``` 

## 

```js

``` 















