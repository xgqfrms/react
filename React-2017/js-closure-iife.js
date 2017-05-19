/*

闭包

https://gist.github.com/xgqfrms-GitHub/cd117d20b7c087c0de820f6c3b542148



*/


// shorthand/ 替代, 自我调用匿名函数：IIFE


!function(){
  // code
}();

//===

(function(){
  // code
})();

(function(){
  // code
}());



let x_style = `
    color: #0f0;
    background: rgba(0,0,0,0.5);
    font-size: 2rem;
    border: 1px solid red;
    border-radius: 7px;
`;

let message = `IIFE`;

(function(){
    console.log(`%c message \n`, `${x_style}`, `${message} outer`);
})();

(function(){
    console.log(`%c message \n`, `${x_style}`, `${message} inner`);
}());



!function(){
    console.log(`%c message \n`, `${x_style}`, `${message} !`);
}();


You can also use + instead of !.

+function(){
    console.log(`%c message \n`, `${x_style}`, `${message} +`);
}();


-function(){
    console.log(`%c message \n`, `${x_style}`, `${message} -`);
}();






