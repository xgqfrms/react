// Actions

import {ADD_TODO, REMOVE_TODO  from '../actionTypes'



const ADD_TODO = 'ADD_TODO';


{
    type: ADD_TODO,
    text: 'Build my first Redux app'
}


function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}


function addTodoWithDispatch(text) {
    const action = {
        type: ADD_TODO,
        text
    }
    dispatch(action);
}

dispatch(addTodo(text));
dispatch(completeTodo(index));



const boundAddTodo = text => dispatch(addTodo(text));
const boundCompleteTodo = index => dispatch(completeTodo(index));


boundAddTodo(text);
boundCompleteTodo(index);




// 


/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    };
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    };
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    };
}


















