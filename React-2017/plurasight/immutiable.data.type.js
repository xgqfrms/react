// immutiable.data.type.js


// https://app.pluralsight.com/player?course=react-redux-react-router-es6&author=cory-house&name=react-redux-react-router-es6-m6&clip=3&mode=live


let state = {
    name: 'xgqfrms',
    age: 23,
    role: 'admin'
};


// old way to change state

state.role = 'root';

return state;

// new way to change state

return state = {
    name: 'xgqfrms',
    age: 23,
    role: 'root'
};



// no need full hand copy, ES6 Object.assign()



Object.assign(target, ...sources);


// Good: new copy
Object.assign({}, state, {role: 'root'});

// Bad: mutating
Object.assign({state, {role: 'root'});




/*


redux-immutable-state-invariant



https://github.com/leoasis/redux-immutable-state-invariant

https://www.npmjs.com/package/@types/redux-immutable-state-invariant


开发模式

*/




// https://github.com/gildata/RRV/blob/master/src/reducers/index.js







