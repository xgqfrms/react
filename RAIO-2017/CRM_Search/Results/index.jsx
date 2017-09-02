import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class ResultTables
 * @extends {Component}
 */

import {color}from '../../../../app/color';
import {debug} from '../../../../app/debug';


import {RT}from './RT';

import {Icon, Tabs} from 'antd';
const TabPane = Tabs.TabPane;
/* 
const tables = [
    {
        title: "",
        datas:[],
        cols:[]
    },
    {
        title: "",
        datas:[],
        cols:[]
    },
    {
        title: "",
        datas:[],
        cols:[]
    },
    {
        title: "",
        datas:[],
        cols:[]
    }
]; */

class ResultTables extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            results: "" 
        };
    }
    //
    render() {
        const tables = this.props.tabs;
        const results = this.props.results;
        if (debug) {
            console.log(`%c tabs === test tables = \n`, color.color_css1, JSON.stringify(tables, null, 4));
        }
        /* 
            {
                "type": "string",
                "name": "A0",
                "new_type": "STRING",
                "desc": "交易日期",
                "test_name": "A0",
                "key": "k0000"
            },
        */
        return (
            <div 
                style={{
                    // width: "calc(100% - 300px)",
                    // width: "100%",
                    maxWidth: 850,
                    // width: 800,
                    // 暂时防止 multi tables overflow ??? 
                    margin: 10,
                    padding: 10,
                    boxSizing: "border-box",
                    overflowX: "hidden",
                    // overflowX: "scroll",
                }}>
                {/* map */}
                {/* 
                    tables === {title: "基金经理详细信息", datas: Array(4)} 
                */}
                <Tabs
                    defaultActiveKey="1"
                    style={{
                        width: "calc(100%)",
                        // maxWidth: 850,
                        boxSizing: "border-box",
                        // overflowX: "scroll"
                    }}>
                    {
                        tables.map(
                            (table, index) => {
                                {/* console.log(`tab key index ${index}`); */}
                                if (debug) {
                                     console.log(`%c table[${index}] = \n`, color.css2, table);
                                     console.log(`%c JSON.stringify(table, null, 4) = \n`, color.css2, JSON.stringify(table, null, 4));
                                     console.log(`%c RT JSON.stringify(table.datas) = \n`, color.css2, JSON.stringify(table.datas, null, 4));
                                    /*
                                        [
                                            {
                                                "type": "string",
                                                "Description": "交易日期",
                                                "Format": "date-time",
                                                "name": "A0",
                                                "new_type": "STRING",
                                                "desc": "交易日期",
                                                "test_name": "A0",
                                                "key": "k0000"
                                            },
                                        ]
                                    */
                                }
                                // tab.name === "AnyManagedFundsRow":[] 
                                let cols_arr = [];
                                table.datas.map(
                                    (obj, index) => {
                                        let temp_obj = {};
                                        if (debug) {
                                            console.log(`#@$ obj = \n`, JSON.stringify(obj, null, 4));
                                            /*
                                                {
                                                    "type": "integer",
                                                    "name": "ByteV",
                                                    "new_type": "INTEGER",
                                                    "desc": "☹️ 暂无注释",
                                                    "test_name": "BYTEV",
                                                    "Description": "☹️ ByteV 暂无注释",
                                                    "key": "k0000"
                                                }
                                            */
                                        }
                                        if(obj.hasOwnProperty("test_name")){
                                            temp_obj.title = obj["desc"];
                                            // temp_obj.title = obj["Description"];
                                            // temp_obj.title = `${obj["name"]}-${obj["desc"]} `;
                                            // name
                                            /* 
                                                // set cell length by Max.value.length ? width: 100,
                                                // set special value Fixed width ? fixed: 'left'
                                                // Results/index.jsx
                                                { title: 'Column 1', dataIndex: 'address', key: '1', width: 150, fixed: 'left', width: 100, },
                                            */
                                            if(obj.name === "TableV"){
                                                // temp_obj.key = "TL;TR";
                                                // temp_obj.dataIndex = "TL;TR";
                                                // Too long; to read // ☹️ ByteV 
                                                temp_obj.key = obj.test_name;
                                                temp_obj.dataIndex = obj["test_name"];
                                                // temp_obj.fixed = "right";
                                                //fixed 列是否固定，可选 true(等效于 left) 'left' 'right', boolean|string, false
                                                temp_obj.width = "500";
                                                // width 列宽度 string|number
                                            }else{
                                                temp_obj.key = obj.test_name;
                                                temp_obj.dataIndex = obj["test_name"];
                                            }
                                            // temp_obj.dataIndex = obj["test_name"];
                                        }
                                        cols_arr.push(temp_obj);
                                        // TableV ???
                                    }
                                );
                                if (debug) {
                                    console.log(`%c new cols = \n`, `color: #f0f, font-size: 23px`, JSON.stringify(cols_arr, null, 4));
                                }
                                return(
                                    <TabPane 
                                        tab={
                                            <span style={{fontSize: 12}}>
                                                <Icon type="apple" />
                                                {`表${++index}:${table.title || ""}`}
                                            </span>
                                        }
                                        key={(++index)}
                                        style={{
                                            boxSizing: "border-box",
                                            // maxWidth: 850,
                                            width: "calc(100%)",
                                        }}>
                                        {/* test data, output data */}
                                        <RT
                                            dataSource={results}
                                            // test results
                                            // columns={table.datas}
                                            columns={cols_arr}
                                            style={{
                                                // maxWidth: 850,
                                                width: "calc(100%)",
                                                // width: 850,
                                                // minWidth: 600
                                                boxSizing: "border-box",
                                            }}
                                        />
                                    </TabPane>
                                )
                            }
                        )
                    }
                    {/* no content === disabled */}
                </Tabs>
            </div>
        );
    }
}

ResultTables.propTypes = {
    tabs: PropTypes.array.isRequired,
    results: PropTypes.array.isRequired,
};

const RTS = ResultTables;
export {RTS};
export default RTS;