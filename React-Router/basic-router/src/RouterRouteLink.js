import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';



const Home = () => {
    <div>
        <h1>Home</h1>
        <Links />
    </div>
}

const About = () => {
    <div>
        <h1>About</h1>
        <Links />
    </div>
}

const Contact = () => {
    <div>
        <h1>Contact</h1>
        <Links />
    </div>
}

const Links = () => {
    <nav>
        <Link to="/" > Home</Link>
        <Link to="/about" > About</Link>
        <Link to="/contact" > Contact</Link>
    </nav>
}




/*
// rrc tab es5
// rcc tab es6 
*/

class RouterRouteLink extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
            </Router>
        );
    }
}

export default RouterRouteLink;




