// immutiable.data.type.js


// https://app.pluralsight.com/player?course=react-redux-react-router-es6&author=cory-house&name=react-redux-react-router-es6-m6&clip=3&mode=live


state = {
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


Object.assign({}, state, {role: 'root'});




















