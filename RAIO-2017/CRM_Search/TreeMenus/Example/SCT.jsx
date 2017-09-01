import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SCT extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            url: this.props.url,
            data: {}
        };
    }
    // only once ??? no update ???
    // hash change ??? update
    componentDidMount() {
        // fetch data
        const that = this;
        // const {url} = {...this.state};
        let u1= `https://cdn.xgqfrms.xyz/json/input.json`,
            u2= `https://cdn.xgqfrms.xyz/json/output.json`;
        let bool = (Math.random()*10 > 5);
        let url = ( bool ? u1 : u2);
        console.log(`bool= \n`, bool);
        fetch(url)
        .then(
            (res) => res.json() 
        )
        .then(
            (json) => {
                console.log(`fetched json = \n`, json);
                that.setState({
                    data: Object.assign({}, json)
                });
                // return 
            }
        )
    }
    render() {
        return (
            <div>
                <h3>
                    this.props.url = {this.state.url}
                </h3>
                {
                    JSON.stringify(this.state.data, null, 4)
                }
            </div>
        );
    }
}

SCT.propTypes = {
    url: PropTypes.string.isRequired,
};

export {SCT};
export default SCT;