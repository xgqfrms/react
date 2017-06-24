// https://stackoverflow.com/a/40930502/5934465



// ??? prototype 

Calculator.prototype = () => {
    // private members
    var add = function(x, y){
        var val = x + y;
        this.selector.innerHTML = val;
        // maybe this caller bugs!
    };
    return {
        // public members
        // Revealing Prototype Pattern
        add: add
    };
}();






var abc = function(){
    console.log(`Hello, ES5's function!`);
}();






(function(){
    console.log(`Hello, ES5's IIFE!`);
}());

(function(){
    console.log(`Hello, ES5's IIFE!`);
})();




function abc(){
    console.log(`Hello, ES5's function!`);
}
abc();


var abc = function(){
    console.log(`Hello, ES5's function!`);
};
abc();


var abc = function xyz(){
    console.log(`Hello, ES5's function!`);
};
abc();


var abc = function xyz(){
    console.log(`Hello, ES5's function!`);
}();




var abc = function(){
    console.log(`Hello, ES5's function!`);
}();







