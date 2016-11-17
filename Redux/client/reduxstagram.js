// let's go!
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

/*
    var React = require('react');
    var ReactDOM = require('react-dom');

    ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
    );
*/

// css
import css from './styles/style.styl';
// components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';


const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
)



render(
    <Main>
        <p>this is paragraph!</p>
    </Main>,
    document.getElementById('root')
);



/*
Learn Redux #4 — Setting up React Router
https://www.youtube.com/watch?v=iNzMIoBNnNU

*/