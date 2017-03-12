import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

// import RouterRouteLink from './RouterRouteLink';
// import RouterRoute from './RouterRoute';



/*const Home = () => <div><h1>Home</h1></div>;
const About = () => <div><h1>About</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;*/

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            {/*<Links />*/}
        </div>
    );
}

const About = () => {
    return(
        <div>
            <h1>About</h1>
            {/*<Links />*/}
        </div>
    );
}

const Contact = () => {
    return(
        <div>
            <h1>Contact</h1>
            {/*<Links />*/}
        </div>
    );
}


const Links = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}


class App extends Component{
    render() {
        return (
            <div>
                <div>
                   <ul>
                       <li> <Home /></li>
                       <li> <About /></li>
                       <li> <Contact /></li>
                   </ul>
                </div>
                <div>
                    {/*<Links />*/}
                </div>
                {/*
                    <Router history={hashHistory}>
                        <Route path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/contact" component={Contact}></Route>
                    </Router>
                */}
            </div>
        );
    }
}

export default App;

