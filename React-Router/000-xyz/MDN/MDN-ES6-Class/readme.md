# ES6-Classe



G:\wwwRoot\javascript\ES6-Tutorials









## es6 spuer


http://www.2ality.com/2015/02/es6-classes-final.html



class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

let cp = new ColorPoint(25, 8, 'green');
cp.toString(); // '(25, 8) in green'

console.log(cp instanceof ColorPoint); // true
console.log(cp instanceof Point); // true



http://exploringjs.com/es6/ch_classes.html




http://stackoverflow.com/questions/42582147/es6-what-does-super-actually-do-in-constructor-function




https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes



构造器

构造器方法是一个特殊的类方法，其用于创建和初始化对象（用该类生成的）。一个类只能拥有一个名为 constructor 的方法，否则会抛出 SyntaxError 异常。

在子类的构造器中可以使用 super 关键字调用父类的构造器。


super 关键字用于调用一个对象的父对象上的函数。

super.prop 和 super[expr] 表达式在类 和 对象字面量 任何 方法定义 中都是有效的。

语法EDIT
super([arguments]);
// 调用 父对象/父类 的构造函数

super.functionOnParent([arguments]);
// 调用 父对象/父类 上的方法




在构造函数中使用时，super关键字单独出现，必须在可以使用this关键字之前使用。此关键字也可用于调用父对象上的函数。




注意:
在派生的类中, 在你可以使用'this'之前, 必须先调用super()。
忽略这, 这将导致引用错误。
// ReferenceError，super 需要先被调用！




你也可以用 super 调用父类的 静态方法。


删除 super 上的属性将抛出异常


Super.prop 不能覆写不可写属性


在对象字面量中使用 super.prop

Super 也可以在object initializer / literal 符号中使用。






https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/static

static 关键字为一个类定义了一个静态方法。

语法
static methodName() { ... }

描述

静态方法调用直接在类上类进行，而在类的实例上不可调用。

静态方法通常用于创建 实用/工具 函数。


为了在同一个类的另一个静态方法中调用一个静态方法，你可以使用  this 关键字。




class StaticMethodCall {
    static staticMethod() {
        return 'Static method has been called';
    }
    static anotherStaticMethod() {
        return this.staticMethod() + ' from another static method';
    }
}
StaticMethodCall.staticMethod();
// ' 静态方法已被调用'

StaticMethodCall.anotherStaticMethod();
// ' 静态方法从另一个静态方法中已被调用'



class StaticMethodCall {
    constructor() {
        console.log(StaticMethodCall.staticMethod());
        // '静态方法已被调用'
        console.log(this.constructor.staticMethod());
        // ' 静态方法已被调用'
    }
    static staticMethod() {
        return 'static method has been called.';
    }
}















http://www.ecma-international.org/ecma-262/6.0/#sec-super-keyword




https://hacks.mozilla.org/2015/07/es6-in-depth-classes/


https://hacks.mozilla.org/category/es6-in-depth/
















