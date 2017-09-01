import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.13
 * 
 * @class TableMash
 * @extends {Component}
 */

import {Table} from 'antd';


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action'
    }
];

const datas = [
    {
        key: '1',
        age: 32,
        address: 'New York No. 1 Lake Park'
    },
    {
        key: '2',
        name: 'Jim Green',
        address: 'London No. 1 Lake Park',
        action: 'action can be empty!'
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32
    },
    {
        key: '4',
        name: 'xgqfrms',
        age: 23,
        address: 'SH No. 1 LJZ',
        action: 'action can be empty!'
    }
];


class TableMash extends Component {
    render() {
        return (
            <div>
                <Table dataSource={datas} columns={columns} bordered pagination={false}/>
            </div>
        );
    }
}

TableMash.propTypes = {
    // datas: PropTypes.array.isRequired,
};

const TM = TableMash;

export {TM};
export default TM;