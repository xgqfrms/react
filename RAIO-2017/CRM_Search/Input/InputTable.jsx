import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * xgqfrms
 * 2017.08.09
 * 
 * @class InputTable
 * @extends {Component}
 */

import {Table} from 'antd';

class InputTable extends Component {
    render() {
        return (
            <div
                style={{
                    // maxHeight: 1000,
                    boxSizing: "border-box",
                    margin: 10, 
                    padding: 10,
                    // width: "100%",
                    overflowX: "hidden",
                    // height: "100%"
                }}>
                <Table
                    dataSource={this.props.dataSource}
                    columns={this.props.columns}
                    bordered
                    pagination={false}
                />
                {/* this.props.data = {this.props.data} */}
            </div>
        );
    }
}

InputTable.propTypes = {
    data: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    dataSource: PropTypes.array.isRequired
};

const IT = InputTable;
export {IT};
export default IT;



