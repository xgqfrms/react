function xxx(m,n){
    let arr = [];
    let x = 0;
    while(x < m){
        arr.push(n);
        m -= 1;
    }
    return arr;
}

xxx(3,3);


function xxx(m,n){
    let obj = {};
    Object.defineProperty(obj, "length", {
        enumerable: false,
        configurable: false,
        writable: false,
        value: m
    });
    let abc = Object.keys(obj);
}



function sortAsc(num){
    if(num === undefined){
        num = 3;
        return num;
    }
}

x.sort(sortAsc);

function sortNumber(num){
    if(num == undefined){
        num = 3;
    }
    return num;
}


x.sort(sortNumber);



let x = [];
x.length = 3;






let y = [7];


Object.assign(x, ...y);



Object.defineProperty(x, length, );


Object.assign([], ...7);










let obj = {};

Object.defineProperty(obj, "key", {
    enumerable: false,
    configurable: false,
    writable: false,
    value: "static"
});

Object {
    key: "static"
}
    key: "static"
    __proto__: Object









values = [void 0, null, false, '']
values[7] = void 0
result = values.map(function(value, index, array){
    console.log(value)
    return value
})



let x = [];
x.length = 3;


function xxx(m,n){
    let arr = [];
    arr.length = m;
    result = arr.map(function(value, index, array){
        if(value === undefined){
            value = n;
        }
        console.log(value);
        return value;
    });
    return result;
}

xxx(3,3);













function createMatrix (m, n){
    var matrix = Array.prototype.slice.call(m);
    return matrix.length > n ? matrix : [0] ;
}




function createNoLoopArray(m, n){
    let arr = new Array(m+1).join(n).split('').join(',');
    return arr;
}


Object.assign([], x);






























function createNoLoopArray(m, n){
    let arr = new Array(m+1).join(n).split('');
    arr = arr.map(function(value){
        console.log(`value 1`, value);
        let x = parseInt(value, 10);
        console.log(`value 2`, x);
        return x;
    });
    return arr;
}

createNoLoopArray(7, 3);
// (6) [3, 3, 3, 3, 3, 3]


function createNoLoopArray(m, n){
    // new Array(m+1);
    let arr = new Array(m+1).join(n).split('');
    arr = arr.map(function(value){
        console.log(`value 1`, value);
        let x = parseInt(value, 10);
        console.log(`value 2`, x);
        return x;
    });
    return arr;
}

createNoLoopArray(7, 3);
// (7) [3, 3, 3, 3, 3, 3, 3]


const createNoLoopArray = (m, n) => {
    // let arr = new Array(m+1);
    let arr = [];
    arr.length = m;
    arr = arr.join(n).split('').map(
        (value) => {
            return parseInt(value, 10)
        }
    );
    return arr;
}

createNoLoopArray(7, 3);


const createNoLoopArray = (m, n) => {
    let arr = new Array(m+1);
    // let arr = [];
    // arr.length = m;
    arr = arr.join(n).split('').map(
        (value) => parseInt(value, 10)
    );
    return arr;
}

createNoLoopArray(7, 3);

// (7) [3, 3, 3, 3, 3, 3, 3]



const createNoLoopArray = (m, n) => {
    let arr = new Array(m+1);
    console.log(arr);
    return arr.join(n).split('').map((value) => parseInt(value, 10));
}

createNoLoopArray(7, 3);

// (7) [3, 3, 3, 3, 3, 3, 3]





[3, 3, 3, 3, 3, 3, 3].join('x');

// "3x3x3x3x3x3x3"

// join bettween the value!




let i = "l,",
    l = new Object(),
    length = 20000;
// l.id = 1;

// 2^? = 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, ...
while(i.length < length){
    i+=i;
    console.log(i);
}

i = i.substring(0, length-1);
i = "[" + i + "]";

var array = eval(i);

console.log(array);


// Yes but I don't loop 10000 times, for 10000 elements I loop only 14 times which is much more efficient.

// 是的，但我不循环10000次，对于10000个元素，我循环只有14次，这是更有效率。
// 2^? = 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, ...





const createNoLoopArray = (m, n) => {
    let arr = new Array(m+1);
    console.log(arr);
    return arr.join(n).split('').map((value) => value.replace(/n/,{}));
}

createNoLoopArray(7, 3);

// (7) [3, 3, 3, 3, 3, 3, 3]


var newstr = str.replace(/xmas/i, 'Christmas');


`["3", "3", "3", "3", "3", "3", "3"]`.replace(/"3"/g,{key: 3});


["3", "3", "3", "3", "3", "3", "3"].toString();





new Array(m+1).join(n).split('').map((value) => parseInt(value, 10));


const createNoLoopArray = (m, n) => new Array(m+1).join(n).split('').map((value) => parseInt(value, 10));

console.log(`%c createNoLoopArray(7, 3) = ${createNoLoopArray(7, 3)}`, `color: #f0f`);

// (7) [3, 3, 3, 3, 3, 3, 3]

