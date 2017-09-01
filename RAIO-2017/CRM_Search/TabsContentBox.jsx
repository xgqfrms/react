import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.09
 * 
 * @class TabsContentBox
 * @extends {Component}
 */

// components
import {IT} from './Input/InputTable';
import {OTS} from './Output/OutputTables';
import {TTF} from './Test/TestTableForms';

// css
import  './tabboxs.css';


// utils
import {color} from '../../app/color';
import {debug, xyz_debug} from '../../app/debug';

// libs
import {Tabs, Icon} from 'antd';
const TabPane = Tabs.TabPane;


class TabsContentBox extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            input_datas: this.props.input_datas,
            output_datas: this.props.output_datas,
            in_out_data: this.props.in_out_data,
            example_obj: this.props.example_obj
        };
    }
    // shape datas ???
    render() {
        const {input_datas, output_datas, in_out_data, developer, example_obj} = {...this.props};
        if (!debug) {
            console.log(`%c TCB input_datas = ${input_datas}`, color.color_css3);
            console.log(`%c TCB output_datas = ${output_datas}`, color.color_css2);
            console.log(`%c TCB developer = ${developer}`, color.color_css1);
            console.log(`%c TCB JSON.stringify(example_obj) = ${JSON.stringify(example_obj, null, 4)}`, color.color_css3);
        }
        if (debug) {
            console.log(`%c TCB JSON.stringify(example_obj) = ${JSON.stringify(example_obj, null, 4)}`, color.color_css3);
        }
        // input_datas & output_datas
        if (!debug) {
            console.log(`%c TCB JSON.stringify(input_datas) = \n`, color.color_css3, JSON.stringify(input_datas));
            console.log(`%c TCB JSON.stringify(output_datas) = \n`, color.color_css3, JSON.stringify(output_datas));
        }
        // tablenamle + datas.keys.name
        // selects multi & select single
        /* 
            // output
            [
                {
                    "title":"single table no table name",
                    "datas":[{"type":"string","Description":"基金简称","name":"A0","key":"k0000"}, ...]
                }
            ]
            // selects options A0, ...
            [
                {
                    "tablenamle": "BasicInformationRow",
                    "title":"基金经理详细信息(基本资料)",
                    "datas":[{"type":"string","Description":"基金简称","name":"A0","key":"k0000"}, ...]
                },
                {
                    "tablenamle": "AnyManagedFundsRow",
                    "title":"基金经理详细信息(历任管理基金)",
                    "datas":[{"type":"string","Description":"基金简称","name":"A0","key":"k0000"}, ...]
                }
            ]
            // selects options A0, ...
            // 基金经理详细信息(基本资料) => english table name
            // "tablenamle": "BasicInformationRow",
            // "tablenamle": "AnyManagedFundsRow",
        */ 
        const output_options = output_datas;
        // copy & in case of modify original Array
        let options_obj = {},
            options_sort = {},
            options_fields = {},
            options_datas = [];
        output_options.map(
            (value, index) => {
                if(!debug) {
                    console.log(`index = ${index}`);
                    console.log(`value = \n `, value);
                    console.log(`JSON.stringify(value) = \n`, JSON.stringify(value));
                    console.log(`value tablenamle = `, value.tablenamle);
                    console.log(`value title = `, value.title);
                    console.log(`value datas \n = `, value.datas);
                }
                let key_prefix = value.tablenamle;
                let value_prefix = value.title;
                value.datas.map(
                    (v, i) => {
                        if (!debug) {
                            console.log(`v.name = ${v.name}`);
                            console.log(`v.Description = ${v.Description}`);
                        }
                        if(value_prefix.length > 0){
                            // multi table
                            options_sort[`${key_prefix}.${v.name}`] = `${value_prefix}-${v.Description}`;
                            options_fields[`${key_prefix}.${v.name}`] = `${value_prefix}-${v.Description}`;
                            // ${value_prefix}-
                        }else{
                            // single table
                            options_sort[`${v.name}`] = `${v.Description}`;
                            options_fields[`${v.name}`] = `${v.Description}`;
                        }
                    }
                );
                options_obj["sort"] = options_sort;
                options_obj["fields"] = options_fields;
                // return temp_obj;
            }
        );
        options_obj["datas"] = options_datas;
        // moved to TTF shape op_datas
        // input_datas => options
        /* 
            {
                key: "k1",
                name: "EndDate",
                type: "string",
                value: "2016-09-30",
                description: "报告期"
            }
        */
        // Sorts === tablenamle + datas.keys.name & tabletitle
        // OutField/IgnoreField === tablenamle + datas.keys.name & no tabletitle
        const input_columns = [
            {
                title: "字段名",
                dataIndex: "name",
                key: "name",
                width: '20%'
            },
            {
                title: "类型",
                dataIndex: "type",
                key: "type",
                width: '15%'
            },
            {
                title: "注释",
                dataIndex: "Description",
                key: "Description",
                // width: '40%'
            }
        ];
        const output_columns = [
            {
                title: "编号",
                dataIndex: "name",
                key: "name",
                width: '20%'
            },
            {
                title: "类型",
                dataIndex: "type",
                key: "type",
                width: '15%'
            },
            {
                title: "注释",
                dataIndex: "Description",
                key: "Description",
                // width: '25%'
            }
        ];
        const url_path = window.location.pathname.substr(8);
        if (!debug) {
            console.log(` \n options_obj = \n`, options_obj);
        }
        return (
            /* <div style={{ maxWidth: 900}}> */
            <div className="tbs-width">
                <Tabs defaultActiveKey="1">
                    <TabPane 
                        tab={<span><Icon type="apple" />输入</span>}
                        key="1"
                        style={{
                            // width: "100%",
                            // paddingRight: 20,
                            boxSizing: "border-box"
                        }}>
                        {/* onTabClick={this.testClick} */}
                        <IT
                            data="input datas"
                            dataSource={input_datas}
                            columns={input_columns} 
                        />
                    </TabPane>
                    {/* TabPane onClick={this.inputClick} */}
                    <TabPane 
                        tab={<span><Icon type="android" />输出</span>}
                        key="2"
                        style={{
                            // maxWidth: "100%",
                            boxSizing: "border-box"
                        }}>
                        {/* single table & multi tables */}
                        <OTS
                            data="output datas"
                            dataSources={output_datas}
                            columns={output_columns}
                        />
                    </TabPane>
                    <TabPane 
                        tab={<span><Icon type="phone" />测试</span>}
                        key="3"
                        style={{
                            // maxWidth: "100%",
                            boxSizing: "border-box"
                        }}>
                        <TTF
                            test_datas={in_out_data}
                            outputs={output_datas}
                            // outputs === result tabs
                            inputs={input_datas}
                            options={options_obj}
                            url_path={url_path}
                            example_obj={example_obj || {}}
                        />
                        {/* muilt test components */}
                    </TabPane>
                    <TabPane 
                        tab={
                            <span style={{width: "auto", margin: "auto 5px"}}>
                                此报表开发者:
                                <input
                                    type="text"
                                    style={{
                                        width: 100,
                                        margin: "auto 5px",
                                        textAlign: "center",
                                        color: "#777",
                                        bordeRadius: 5,
                                        border: "1px solid #fff"
                                    }}
                                    value={developer}
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
    output_datas: PropTypes.array.isRequired,
    in_out_data: PropTypes.array.isRequired,
};

const TCB = TabsContentBox;

export {TCB};
export default TCB;


/* 

nmulti table

http://10.6.1.81/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetRowSchema%27,%27WriteType%27:%27json%27,%27ReportName%27:%27BasicInformationDeatil%27}?ran=0.4346308619597914


{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'BasicInformationDeatil'}

BasicInformationRow


// ??? input & output




const test_datas = [
    {
        key: "k1",
        name: "ApiName",
        type: "string",
        value: "fund.f9.fund_profile.FundManager.BasicInformations",
        desc: "报表名称"
    },
    {
        key: "k2",
        name: "SecuCode",
        type: "string",
        value: (value || "000011"),
        desc: "基金编码"
    },
    {
        key: "k3",
        name: "Names",
        type: "string",
        value: "阳琨",
        desc: "姓名"
    },
    {
        key: "k4",
        name: "WriteType",
        type: "string",
        value: "json (json文本格式)",
        desc: "返回的数据协议格式 "
    }
];


*/