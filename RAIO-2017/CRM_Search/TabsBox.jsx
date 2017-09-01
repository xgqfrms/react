import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.09
 * 
 * @class TabsContentBox
 * @extends {Component}
 */
import {IT} from './InputTable';
import {OTS} from './OutputTables';
import {TTF} from './TestTableForms';
import  './tabboxs.css';

import {Tabs, Icon, Button} from 'antd';
const TabPane = Tabs.TabPane;

let arr = [],
    arrout = [];

const input_columns = [
    {
        title: "字段名",
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

class TabsContentBox extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            input_datas: this.props.input_datas,
            output_datas: this.props.output_datas
        };
    }
    // fetch data by `ReportName` & `GetSchema`
    inputClick = () => {
        fetch(`http://localhost:7777/input`)
        .then((response) => response.json())
        .then((json)=> {
            console.log(`json = ${json}`);
            console.log(`json.length = ${json.length}`);
            console.log(`json.Info`, json.Info.schema.Properties);
            // Properties
            let datas = json.Info.schema.Properties;
            let {ApiName, SecuCode} = datas;
            console.log(`ApiName = ${ApiName}`, ApiName);
            console.log(`ApiName = ${ApiName.Description}`);
            console.log(`SecuCode = ${SecuCode.Description}`);
            // Objects to Array
            // let arr = [];
            let i = 0;
            // reset arr
            arr.length = 0;
            // arr = [];
            for (let key in datas) {
                if(!datas.hasOwnProperty(key)) continue;
                if(datas.hasOwnProperty(key)) {
                    // datas[key].key = key;
                    // key: "ApiName"
                    // datas[key].key = i++;
                    datas[key].name = key;
                    datas[key].key = ("1000" + i++);
                    if(datas[key].Required !== undefined){
                        datas[key].Description += `(${datas[key].Required})`;
                    }else{
                        datas[key].Description += `(可选参数)`;
                    }
                    // key === index
                    arr.push(datas[key]);
                }
            }
            console.log(`arr result = `, arr);
            this.setState(
                {
                    input_datas: arr
                }
            );
            return arr;
        });
        console.log(`new arr = `, arr);
    };
    // fetch data by `ReportName` & `GetRowSchema`
    outputClick = () => {
        fetch(`https://cdn.xgqfrms.xyz/json/tables.json`)
        .then((response) => response.json())
        .then((json)=> {
            console.log(`json = ${json}`);
            console.log(`json.length = ${json.length}`);
            console.log(`json.Info`, json.Info.schema.Properties);
            // Properties
            let datas = [];
            if(json.Info.schema.Properties !== undefined){
                // datas.BasicInformationRow.Properties
                datas = json.Info.schema.Properties;
                // need shape ???
            }else{
                let tables = json.Info.schema;
                // name: Info.schema.BasicInformationRow

                // let i = 0;
                for (let key in tables) {
                    let arr = [];
                    let new_obj = {};
                    let i = 0;
                    if(!tables.hasOwnProperty(key)) continue;
                    if (tables.hasOwnProperty(key)) {
                        let title = tables[key].desc,
                            objs = tables[key].Properties;
                        for (let key in objs) {
                            if (objs.hasOwnProperty(key)) {
                                // A0
                                objs[key].name =  key;
                                objs[key].key = ("k000" + i++);
                            }
                            arr.push(objs[key]);
                            console.log(`arr ${key}`, arr);
                        }
                        console.log(`title ${key}`, title);
                        new_obj.title = tables[key].desc;
                        new_obj.datas = arr;
                        console.log(`new obj = `, new_obj);
                    }
                    datas.push(new_obj);
                    const css = `
                        color: #0f0;
                        font-size: 23px;
                    `;
                    const css2 = `
                        color: #f00;
                        font-size: 16px;
                    `;
                    console.log(`%c datas key = ${key} \n datas = `, css, datas);
                    console.log(`%c datas i = ${i} \n datas = `, css2, datas[i]);
                    // i++;
                }
            }
            console.log(`datas[0] = `, datas[0]);
            console.log(`datas[0].length = `, datas[0].length);
            // Array.isArrray(datas[0]);
            console.log(`Array.isArray(datas[0]) = `, Array.isArray(datas[0]));
            console.log(`typeof datas[0] = `, typeof(datas[0]));
            this.setState(
                {
                    output_datas: datas
                }
            );
            return datas;
        });
    };
    testClick = () => {
        // 
    };
    render() {
        return (
            
            /* <div style={{ maxWidth: 900}}> */
            <div className="tbs-width">
                <Tabs defaultActiveKey="1">
                    <TabPane 
                        tab={<span><Icon type="apple" />输入</span>}
                        key="1"
                        style={{
                            maxWidth: "100%",
                        }}>
                        {/* onTabClick={this.testClick} */}
                        <IT data="input datas" dataSource={this.props.input_datas} columns={input_columns}/>
                    </TabPane>
                    {/* TabPane onClick={this.inputClick} */}
                    <TabPane 
                        tab={<span><Icon type="android" />输出</span>}
                        key="2"
                        style={{
                            maxWidth: "100%",
                        }}>
                        {/* single table & multi tables */}
                        <OTS
                            data="output datas"
                            dataSources={this.props.output_datas}
                            columns={output_columns}
                        />
                    </TabPane>
                    <TabPane 
                        tab={<span><Icon type="phone" />测试</span>}
                        key="3"
                        style={{maxWidth: 850}}>
                        <TTF
                            data="test datas"
                            outputs={this.props.output_datas}
                        />
                        {/* muilt test components */}
                    </TabPane>
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

TabsContentBox.propTypes = {
    developer: PropTypes.string.isRequired,
    input_datas: PropTypes.array.isRequired,
    output_datas: PropTypes.array.isRequired
};

const TCB = TabsContentBox;
export {TCB};
export default TCB;


/* 

nmulti table

http://10.6.1.81/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetRowSchema%27,%27WriteType%27:%27json%27,%27ReportName%27:%27BasicInformationDeatil%27}?ran=0.4346308619597914


{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'BasicInformationDeatil'}

BasicInformationRow




*/