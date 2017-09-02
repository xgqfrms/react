import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class ResultTables
 * @extends {Component}
 */


/* 

import * as name from "module-name";
import {member} from "module-name";
import {member as alias} from "module-name";

*/

import {color} from '../../../../app/color';
import {debug}  from '../../../../app/debug';
// import { debug as xyz_debug}  from '../../../app/debug';
// import * as xyz_debug  from '../../../app/debug';

// debug = false;
// const "debug" is read-only

import {Table} from 'antd';
import './RT.css';

/* 

const output_columns = [
    {
        title: "编号",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "类型",
        dataIndex: "type",
        key: "type"
    },
    {
        title: "注释",
        dataIndex: "Description",
        key: "Description"
    }
];

 */
class ResultTables extends Component {
    render() {
        /* datas: Array(4) */
        // {type: "string", Description: "性别", name: "A0", key: "k0000"}
        // 0: {title: "基金经理详细信息(基本资料)", datas: Array(9)}
        // BasicInformationRow: {title: "基金经理详细信息(基本资料)", datas: Array(9)}
        // datas[k].name = test[i].name ???
        /* 
        if(test.name === output.key ){
            datas ? datas : [];
        }
        */
        // bug
        let show = false;
        /* 
        if(test.name === output.key){
            show = true
        }
        */
        // test datas
        let test_datas = [{},{}];
        // tab.name === "AnyManagedFundsRow":[] 
        // A0 = key
        const results = this.props.dataSource;
        const columns = this.props.columns;
        // const {columns, results} = {...this.props};
        if (debug) {
            console.log(`%c RT: JSON.stringify(results) === ${JSON.stringify(results, null, 4)} \n`, color.css1);
            console.log(`%c RT: JSON.stringify(columns) === ${JSON.stringify(columns, null, 4)} \n`, color.css1);
            console.log(`%c RT: columns.length === ${columns.length} \n`, color.css1);
        }
        // const x_length = 1500;
        const x_length = columns.length*150;
        /* 
            // set cell length by Max.value.length ? width: 100,
            // set special value Fixed width ? fixed: 'left'
            // Results/index.jsx
            {
                title: 'Column 1',
                dataIndex: 'address',
                key: '1',
                width: 150,
                fixed: 'left',
                width: 100
            },
        */
        return (
            <div>
                <Table
                    style={{
                        width: "calc(100%)",
                        // minWidth: 800,
                        boxSizing: "border-box",
                        // overflowX: "scroll"
                    }}
                    // className="rt-table"
                    scroll={{
                        // x: 4300, TestProtocol ???
                        // cols.length * 50
                        // x: 2300,
                        x: x_length,
                        // x: 1500,
                        // y: 500
                    }}
                    dataSource={results}
                    // columns={cols}
                    columns={columns}
                    bordered
                    pagination={false}
                />
                {
                    // test.name === output.key
                    // show
                    // ?
                    // <Table dataSource={test_datas} columns={cols} bordered pagination={false}/>
                    // :
                    // <Table dataSource={results} columns={cols} bordered pagination={false}/>
                }
            </div>
        );
    }
}

ResultTables.propTypes = {
    dataSource: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
};

const RT = ResultTables;

export {RT};
export default RT;