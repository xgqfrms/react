import {createStore} from 'redux';

import todoApp from './reducers';
// many reducers



let store = createStore(todoApp);




/*
It's easy to create a store if you have a reducer. 
In the previous section, we used combineReducers() to combine several reducers into one. 
We will now import it, and pass it to createStore().


如果你有一个减速器，那么很容易创建一个商店。
在上一节中，我们使用combineReducers（）将几个reducer组合成一个。
我们现在将导入它，并将其传递给createStore（）。
*/

let store = createStore(todoApp, window.STATE_FROM_SERVER);


/*

You may optionally specify the initial state as the second argument to createStore(). 
This is useful for hydrating the state of the client to match the state of a Redux application running on the server.


您可以选择将初始状态指定为createStore（）的第二个参数。
这对于保持客户端的状态以匹配在服务器上运行的Redux应用程序的状态非常有用。

*/


import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions';

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
    console.log(store.getState());
);

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// Stop listening to state updates
unsubscribe();






/*

In the previous sections, we defined the actions that represent the facts about “what happened” and the reducers that update the state according to those actions.

The Store is the object that brings them together. 
The store has the following responsibilities:

Holds application state;
Allows access to state via getState();
Allows state to be updated via dispatch(action);
Registers listeners via subscribe(listener);
Handles unregistering of listeners via the function returned by subscribe(listener).

*/

