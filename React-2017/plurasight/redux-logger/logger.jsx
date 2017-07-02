import LogRocket from 'logrocket';
// Initialize LogRocket with your app ID
LogRocket.init(<your_application_id>);



import {applyMiddleware, createStore} from 'redux';

const store = createStore(
    reducer, // your app reducer
    applyMiddleware(middlewares, LogRocket.reduxMiddleware()),
);








