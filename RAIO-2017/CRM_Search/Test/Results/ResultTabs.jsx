import React, { Component } from 'react';
import PropTypes from 'prop-types';


/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class ResultTabs
 * @extends {Component}
 */
import {RTS} from './Results/';


import {Tabs, Icon, Button} from 'antd';
const TabPane = Tabs.TabPane;

class ResultTabs extends Component {
    render() {
        return (
            <div>
                {/* map Tabs */}
                <Tabs defaultActiveKey="1">
                    <TabPane 
                        tab={<span><Icon type="apple" />输入</span>}
                        key="1"
                        style={{}}
                        onTabClick={this.inputClick}>
                        <button onClick={this.inputClick}>
                            inputClick
                        </button>
                        <RTS data="input datas" dataSource={this.state.input_datas} columns={this.state.input_columns}/>
                    </TabPane>
                    {/* TabPane onClick={this.inputClick} */}
                    {/* if key: {} diabled*/}
                    <TabPane 
                        tab={
                            <span style={{width: "auto", margin: "auto 5px"}}>
                                此报表开发者:
                                <input
                                    type="text"
                                    style={{width: 100, margin: "auto 5px", textAlign: "center", color: "red"}}
                                    value={this.props.developer}
                                    disabled
                                    contentEditable="false"
                                    readOnly
                                />
                            </span>
                        } 
                        style={{}}
                        key="4"
                        disabled>
                        {/* no content */}
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

ResultTabs.propTypes = {

};


const RT = ResultTabs;
export {RT};
export default RT;