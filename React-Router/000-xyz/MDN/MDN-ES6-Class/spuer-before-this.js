class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }
}

class Square extends Polygon {
    constructor(length) {
        this.height;
        // ReferenceError，super 需要先被调用！
        /*
           这里，它调用父类的构造函数的 length,
           作为Polygon 的 width和 height.
        */
        super(length, length);
        /*
            注意: 在派生的类中, 在你可以使用'this'之前, 必须先调用super()。
            忽略这, 这将导致引用错误。
        */
        this.name = 'Square';
    }
    get area() {
        return this.height * this.width;
    }
    set area(value) {
        this.area = value;
    }
}
