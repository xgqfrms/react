import React from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const Main = React.createClass({
    render(){
        return(
            <div>
                <h1>
                    <Link to="/">Redux instagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        ); 
    }
});

export default Main;

//imr
//imrd
//imrr
//rcl
//rdr
