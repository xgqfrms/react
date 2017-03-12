import React, {Component} from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';



const Home = () => <div><h1>Home</h1></div>;
const About = () => <div><h1>About</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;


class RouterRoute extends Component {
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

export default RouterRoute;


