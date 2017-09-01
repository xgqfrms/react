import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.09
 * 
 * @class TestTableForms
 * @extends {Component}
 */

//utils
import {color} from '../../app/color';
import {debug} from '../../app/debug';


// css
import './testtableforms.css';

// components
import {TM}from './TestModal';
import {RI} from './Required';
import {RTS}from './Results';

// uri bug ???
import {OI} from './Options/index';

// libs
import {Collapse, Form, Button} from 'antd';
const Panel = Collapse.Panel;

/* 

    import {OI} from './Options/';
    import {OI} from './Options/index';

    // bug ???

    import {OI} from './Options';


    // ./src/components/CRM_Search/TestTableForms.jsx
    // Module not found: `E:\xgqfrms\src-2017-6-22\src\components\CRM_Search\Options.json` 
    // does not match the corresponding path on disk - File does not exist.

*/

// debug color
const css1 = `
    color: red;
`;
const css2 = `
    color: #f0f;
`;

// let fetch_url = "";

class TestTableForms extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            visible: false,
            test_datas: this.props.test_datas, // init_datas url
            fetch_url: "",
            disable_btn: false,
            isCollapsed: true
        }
    }
    disableBTN = (value=false) =>{
        this.setState(
            {
                disable_btn: value
            }
        );
    };
    TestClick = (url) => {
        if (debug) {
            console.log(`%c new url obj = `,color.color_css1, url);
        }
        // fetch_url = url;
        this.setState({
            fetch_url: url
        });
        // fetch url
        if (debug) {
            console.log(`new this.state.fetch_url = `, this.state.fetch_url);
        }
    };
    startTest = () => {
        const that = this;
        // fetch test data
        let url = this.state.fetch_url;
        if (debug) {
            console.log(`%c fetch test data`, css2, url);
        }
        // new test_datas url
        fetch(url)
        .then((response) => response.json())
        .then(
            (json) => {
                this.setState({loading: true}); 
                return json;
            }
        )
        .then(
            (fecth_data) => {
                // fecth_data === [{}, {}];
                let objs = {};
                if(Array.isArray(fecth_data)){
                    fecth_data.map(
                        // name.AnyManagedFundsRow
                        (data) => {
                            //do something 
                            // need shape
                        }
                    );
                    // result table A0 = key
                    if (debug) {
                        console.log(`%c fecth data = \n`, css2, fecth_data);
                    }
                    that.setState({
                        test_datas: {fecth_data}
                    });
                }
/*
    {
        "AnyManagedFundsRow":
        [
            {
                A0: "华夏基金管理有限公司",
                A1: "华夏大中华企业精选灵活配置混合(QDII)",
                A2: "其他型基金",
                A3: "2016-01-20",
                A4: "其他型基金",
                A5: "21.877086009428236",
                A5: "65135"
            },
                                {
                A0: "华夏基金管理有限公司",
                A1: "华夏大中华企业精选灵活配置混合(QDII)",
                A2: "其他型基金",
                A3: "2016-01-20",
                A4: "其他型基金",
                A5: "21.877086009428236",
                A5: "65135"
            }
        ]
    }
*/
            }
        );
    };
    showModal = () => {
        if (!debug) {
            console.log(`clicked showModal!`);
            console.log(`%c showModal = `, css1, this.state.show);
        }
        // e.preventDefault();
        this.setState(
            (prevState, props) => {
                return{
                    // Object.assign()
                    // showModal: !prevState.showModal
                    show: true
                }
            }
        );
        if (!debug) {
            console.log(`clicked showModal, agian!`);
            console.log(`%c showModal agian = `, css2, this.state.show);
        }
    };
    hideModal = () => {
        if (!debug) {
            console.log(`clicked hideModal!`);
            console.log(`%c hideModal = `, css1, this.state.show);
        }
        this.setState(
            (prevState, props) => {
                return{
                    show: false
                }
            }
        );
        if (!debug) {
            console.log(`clicked hideModal, agian!`);
            console.log(`%c hideModal agian = `, css2, this.state.show);
        }
    };
    checkTestCommands = () => {
        // fetch test data
        if (debug) {
            console.log(`%c ready fetching commands url  = \n`, css1);
        }
        this.startTest();
        // console.log(`%c fetching url = \n`, css1, url);
    };
    testOK = (e) => {
        // e.preventDefault();
        if (debug) {
            console.log(`testOK e`, e);
        }
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                loading: false,
                visible: true
            });
            // this.props.hideModal();
        }, 1000);
    };
    testCancel = () => {
        this.setState({
            visible: false
        });
    };
    cilicPanel = () => {
        if (debug) {
            console.log(`%C this.state.isCollapsed= `, color.css1, this.state.isCollapsed);
        }
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
        if (debug) {
            console.log(`%C new this.state.isCollapsed = `, color.css1, this.state.isCollapsed);
        }
    }
    render() {
        const {show, test_datas} = {...this.state};
        const {inputs, outputs} = {...this.props};
        if (!debug) {
            console.log(`%c ri inputs`, color.color_css3, inputs);
            console.log(`%c ri outputs`, color.css2, outputs);
        }
        // shape input data & example
        let ri_datas = [];
        if(inputs.commandexample){
            if (debug) {
                console.log(`%c ri inputs.commandexample = `, color.color_css2, inputs.commandexample);
            }
            // ri_datas = inputs.commandexample
        }else{
            /*
                {
                    key: "k1",
                    name: "ApiName",
                    type: "string",
                    value: "fund.f9.fund_profile.FundManager.BasicInformations",
                    desc: "报表名称"
                } 
            */
            inputs.map(
                (value, index) => {
                    if (debug) {
                        console.log(`%c ri inputs index = `, color.css1, index);
                        console.log(`%c ri inputs value = `, color.css2, value);
                    }
                    // Required: true
                    if(value.Required){
                        let obj = {};
                        obj.value = "";
                        obj.name = value.name;
                        obj.desc = value.Description;
                        obj.type = value.type;
                        obj.key = index;
                        ri_datas.push(obj);
                    }
                    // return obj_temp[index];
                }
            );
            const fixed_obj = {
                "key": "1111111",
                "name": "WriteType",
                "type": "string",
                "value": "json",
                "desc": "返回的数据协议格式"
            };
            ri_datas.push(fixed_obj);
            if (debug) {
                console.log(`%c ri ri_datas = `, color.css2, ri_datas);
            }
        }
        // ApiName = url
        /* 
            1. pass props
            2. get window.location path
        */
        /* 
            dead code: "ApiName" & "WriteType":"json"
            window.location.pathname === "/api/sc/TestProtocol"
            slice / indexof / substr
            "/api/sc/TestProtocol".slice(8); === "TestProtocol"
            "/api/sc/TestProtocol".substr(8); === "TestProtocol"
        */
        /* 
            // "commandexample": "{\"StatPeriod\":\"6\",\"ApiName\":\"MarketMakerPracticeEndDateList\"}",
            // example : MarketMakerPracticeEndDateList
            // http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22MarketMakerPracticeEndDateList%22}
            // WriteType === enum: ["json(json文本格式)", "binary(二维表二进制格式)"]
            // http://10.1.5.203/http-report/query?{"key":"json"}
            // TestProtocol
            // http://10.1.5.203/http-report/query?{"ApiName": "TestProtocol", "WriteType":"json"}
            // http://10.1.5.203/http-report/query?{"ApiName": "MarketMakerPracticeEndDateList", "StatPeriod": "6", "WriteType":"json"}
        */
        const testdatas = [
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
                value: "000011",
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
        return (
            <div >
                <div >
                    <p className="title-color">必填项</p>
                    <RI 
                        init_datas={(ri_datas.length > 0 ) ? ri_datas : testdatas}
                        test_datas={test_datas}
                        TestClick={this.TestClick}
                        disableBTN={this.disableBTN}
                    />
                    {/* 
                        coloums = 字段 类型 值 描述
                        input + output => new table data
                        // required 
                        // new objects
                    */}
                </div>
                <div style={{textAlign: "center"}}>
                    <Button
                        type="primary"
                        style={{margin: "auto 10px"}}
                        onClick={this.startTest}
                        disabled={this.state.disable_btn}
                        >
                        开始测试
                    </Button>
                    <Button
                        type="primary"
                        style={{margin: "auto 10px"}}
                        onClick={this.showModal}
                        disabled={this.state.disable_btn}
                        >
                        查看命令
                    </Button>
                    {
                        show 
                        ?
                        <TM 
                            hideModal={this.hideModal}
                            visible={this.state.visible}
                            checkTestCommands={this.checkTestCommands}
                            fetch_url={this.state.fetch_url}
                            TestClick={this.TestClick}
                        />
                        :
                        ""
                    }
                </div>
                <div style={{visibility: "visible"}}>
                    <h2 className="title-color options-space">可选项</h2>
                    {
                       <Collapse
                            defaultActiveKey={['2']}
                            onChange={this.cilicPanel}
                            className="options-panal">
                            <Panel
                                header={ (this.state.isCollapsed === true) ? "展开-可选项" : "收起-可选项"}
                                key="1"
                                >
                                {/* <Table dataSource={this.props.dataSource} columns={this.props.columns} bordered pagination={false}/> */}
                                <OI dataSource={this.props.dataSource} columns={this.props.columns}/>
                                <Form />
                            </Panel>
                        </Collapse>
                        /* 
                            <div style={{visibility: "hidden"}}>
                                {
                                    (Math.random()*10 > 5) ? <button>展开-可选项</button> : <button>收起-可选项</button>
                                }
                            </div> 
                        */
                    }
                </div>
                <div style={{visibility: "hidden"}}>
                    <h2 className="title-color">测试结果</h2>
                    {/* Tabs & Tables */}
                    {/* // tab.name === "AnyManagedFundsRow":[]  */}
                    {
                        <RTS
                            tabs={this.props.outputs}
                            style={{maxWidth: 850}}
                            results={[]}
                        />
                    }
                    {/* results={[test_datas]}  */}
                </div>
            </div>
        );
    }
}

TestTableForms.propTypes = {
    inputs:PropTypes.array.isRequired,
    outputs: PropTypes.array.isRequired,
    test_datas: PropTypes.array.isRequired,
};

const TTF = TestTableForms;
export {TTF};
export default TTF;