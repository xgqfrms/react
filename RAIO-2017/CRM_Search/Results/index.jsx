import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class ResultTables
 * @extends {Component}
 */

import {color}from '../../../app/color';
import {debug} from '../../../app/debug';


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
        if (!debug) {
            console.log(`%c tables = \n`, color.color_css1, tables);
        }
        return (
            <div style={{maxWidth: 850, margin: 10, padding: 10, boxSizing: "borderBox"}}>
                {/* map */}
                {/* 
                tables === {title: "基金经理详细信息", datas: Array(4)} 
                */}
                <Tabs defaultActiveKey="1">
                    {
                        tables.map(
                            (table, index) => {
                                {/* console.log(`tab key index ${index}`); */}
                                if (!debug) {
                                     console.log(`%c table[${index}]= \n`, color.css2, table);
                                }
                                // tab.name === "AnyManagedFundsRow":[] 
                                return(
                                    <TabPane 
                                        tab={
                                            <span style={{fontSize: 12}}>
                                                <Icon type="apple" />
                                                {`表${++index}:${table.title || ""}`}
                                            </span>
                                        }
                                        key={(++index)}
                                        style={{}}>
                                        {/* test data, output data */}
                                        <RT
                                            dataSource={[]}
                                            columns={table.datas}
                                            style={{
                                                maxWidth: 850,
                                                minWidth: 600
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