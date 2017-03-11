import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';


const Test = () => <div><h1>Test</h1></div>;
    

const Home = () => {
    <div>
        <h1>Home</h1><links />
    </div>
};

const About = () => {
    <div>
        <h1>About</h1><links />
    </div>
}

const Contact = () => {
    <div>
        <h1>Contact</h1><links />
    </div>
}



export default class router-route-link extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={ hashHistory } >
                <Router path="/" component={}></Router>
                <Router path="/home" component={Home}></Router>
                <Router path="/about" component={About}></Router>
                <Router path="/contact" component={Contact}></Router>
            </Router>
        );
    }
}




// rrc tab es5
// rcc tab es6 


