// NOTE First off: https://reacttraining.com/react-router/
// NOTE Let's Quick Start: https://reacttraining.com/react-router/web/guides/quick-start

import React from 'react';
// NOTE no more browserHistory https://reacttraining.com/react-router/web/api/BrowserRouter
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
 // NOTE Hello react-router-dom!

/* NOTE welcome exact paths! https://reacttraining.com/react-router/web/api/Route/exact-bool */
/* NOTE No IndexRoute needed! */
const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);
const About = () => (
    <div>
        <h2>About</h2>
    </div>
);
const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

// NOTE Introducting the match prop!
const Topics = ({ match }) => (
    <div>
    <h2>Topics</h2>
    <ul>
        <li>
            <Link to={`${match.url}/rendering`}>
                Rendering with React
            </Link>
        </li>
        <li>
            <Link to={`${match.url}/components`}>
                Components
            </Link>
        </li>
        <li>
            <Link to={`${match.url}/props-v-state`}>
                Props v. State
            </Link>
        </li>
    </ul>
    {/* NOTE Routes can be rendered now! */}
    <Route path={`${match.url}/:topicId`} component={Topic}/>
    {/* NOTE No IndexRoute needed! */}
    <Route
        exact
        path={match.url}
        render={
            () => (<h3>Please select a topic.</h3>)
        }
    />
    </div>
);

export default BasicExample;
