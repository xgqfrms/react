function logger(){
    console.log(`start!`);
    console.log(`end!`);
}


function* logger(){
    console.log(`start!`);
    console.log(`end!`);
}

logger();
// nothing console.log()

/*
when we call generator, it return the instance of itself!

*/

function* genLogger(){
    console.log(`start!`);
    console.log(`end!`);
}

const logger = genLogger();

logger.next();

// call generator



function* genLogger(){
    console.log(`start!`);
    yeild();
    console.log(`end!`);
}

const logger = genLogger();

logger.next();

// pause generator once


function* genLogger(){
    console.log(`start!`);
    yeild;
    console.log(`stop 01!`);
    yeild;
    console.log(`stop 02!`);
    console.log(`end!`);
}

const logger = genLogger();

logger.next();
// stop 01!
logger.next();
// stop 02!
logger.next();
logger.next();



https://egghead.io/lessons/javascript-use-javascript-es6-generators-to-pause-function-execution


https://egghead.io/courses/develop-web-apps-with-vue-js


https://egghead.io/courses/getting-started-with-redux












