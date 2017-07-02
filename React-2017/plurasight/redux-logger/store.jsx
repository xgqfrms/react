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















