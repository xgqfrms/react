import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import {SCT} from './SCT';


const HELP_MSG = 'Select A Node To See Its Data Structure Here...';

class NodeViewer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            url: ""
        };
    }
    // 
    render() {
        const style = styles.viewer;
        let json = JSON.stringify(this.props.node, null, 4);
        // ??? 4 === indent ???
        if (!json) {
            json = HELP_MSG;
        }
        console.log(`this.props.node json = `, json);
        let url = json.apiname;
        console.log(`url = `, url);
        /* 
            return(
                <div style={style.base}>
                    {json}
                </div>
            );
        */
        // only update once ???
        return(
            <div style={style.base}>
                {/* <SCT url={url} /> */}
            </div>
        );
    }
}


NodeViewer.propTypes = {
    node: PropTypes.object
};

export {NodeViewer};
export default NodeViewer;

