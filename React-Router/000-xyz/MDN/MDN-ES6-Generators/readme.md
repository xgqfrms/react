# Generators 





https://davidwalsh.name/es6-generators

https://hacks.mozilla.org/2015/07/es6-in-depth-generators-continued/


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator



生成器对象是由一个 generator function 返回的,并且它符合可迭代协议和迭代器协议。

```js

function* gen() { 
    yield 1;
    yield 2;
    yield 3;
}

let g = gen(); 
// "Generator { }"

``` 


Generator.prototype.next()
    返回一个由 yield表达式生成的值。
Generator.prototype.return()
    返回给定的值并结束生成器。
Generator.prototype.throw()
    向生成器抛出一个错误。


## 一个无限迭代器

```js

function* idMaker(){
    let index = 0;
    while(true)
        yield index++;
}

let gen = idMaker(); // "Generator { }"

console.log(gen.next().value); 
// 0
console.log(gen.next().value); 
// 1
console.log(gen.next().value); 
// 2
// ...

typeof(gen);
// "object"

``` 







https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*


function* 声明 (function关键字后跟一个星号）定义了一个生成器函数 (generator function)，它返回一个  Generator  对象。

你也可以定义 生成器函数 使用构造函数 GeneratorFunction 和一个  function* expression 。


function* name([param[, param[, ... param]]]) { statements }


name
    函数名
param
    要传递给函数的一个参数的名称。一个函数最多可以有255个参数。
statements
    包含函数体的语句。



生成器是一种可以从中退出并在之后重新进入的函数。生成器的环境（绑定的变量）会在每次执行后被保存，下次进入时可继续使用。

调用一个生成器函数并不马上执行它的主体，而是返回一个这个生成器函数的迭代器（iterator）对象。当这个迭代器的next()方法被调用时，生成器函数的主体会被执行直至第一个yield表达式，该表达式定义了迭代器返回的值，或者，被 yield*委派至另一个生成器函数。next()方法返回一个对象，该对象有一个value属性，表示产出的值，和一个done属性，表示生成器是否已经产出了它最后的值。





function* idMaker(){
  var index = 0;
  while(index<3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
// ...





function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20





https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield 

yield 关键字用来暂停和恢复一个生成器函数 ( (function* 或 legacy generator).


[rv] = yield [expression];

yield [[expression]];


expression
    定义通过迭代器协议从生成器函数返回的值。如果省略，则返回undefined。
rv
    返回传递给生成器的 next() 方法的可选值，以恢复其执行。


yield关键字使生成器函数执行暂停，yield关键字后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的return关键字。

ield关键字实际返回一个IteratorResult对象，它有两个属性，value和done。value属性是对yield表达式求值的结果，而done是false，表示生成器函数尚未完全完成。









https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators



Iterators and Generators

迭代器和生成器


处理集合中的每个项是非常常见的操作。JavaScript提供了许多迭代集合的方法，从简单的 for  循环到 map()和filter() 。迭代器和生成器将迭代的概念直接带入核心语言，并提供了一种机制来自定义 for...of 循环的行为 。

























