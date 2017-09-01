import React, { Component } from 'react';
import PropTypes from 'prop-types';


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {Menu, Icon} from 'antd';
import 'antd/dist/antd.css';
const SubMenu = Menu.SubMenu;
const SubItem = Menu.Item;

class DM extends Component {
    constructor(props, context) {
        super(props, context);
/*         this.state = {
            datas: this.props.datas
        }; */
    }
    render() {
        return (
            <SubMenu 
                key="sub0"
                title={
                    <span>
                        <Icon type="area-chart" style={{fontSize: 18, color: '#f0f'}} />
                        <span
                            style={{fontSize: 16, color: 'rgba(255, 255, 255, 0.7)'}}
                            >
                            {/* {data.description.substring(0, 2)} */}
                        </span>
                    </span>
                }>
                {
                    this.props.datas.map((data, index) => (
                        <SubItem key={(index + 1)}>
                            <Link to={`/sc/testx`}>
                                <Icon type="area-chart" style={{fontSize: 12, color: '#fff'}}/>
                                description = {data.description}
                                dependtables = {data.dependtables}
                            </Link>
                        </SubItem>
                    ))
                    
                }
            </SubMenu>
        );
    }
}

DM.propTypes = {
    datas: PropTypes.array.isRequired
};

export {DM};
export default DM;