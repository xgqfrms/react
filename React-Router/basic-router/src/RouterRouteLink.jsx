// import React from 'react';
import React, {Component} from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

/*
// rrc tab es5
// rcc tab es6 
*/

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <Links />
        </div>
    );
}

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <Links />
        </div>
    );
}

const Contact = () => {
    return(
        <div>
            <h1>Contact</h1>
            <Links />
        </div>
    );
}

const Links = () => {
    return(
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/contact" >Contact</Link>
        </nav>
    );
}




class RouterRouteLink extends Component {
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

export {Home, About, Contact };

