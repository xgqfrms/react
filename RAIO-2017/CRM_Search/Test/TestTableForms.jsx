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
import {color} from '../../../app/color';
import {debug} from '../../../app/debug';
import {urls} from '../../../app/urls.js';

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
            isCollapsed: true,
            loading: false,
            required_obj: {},
            options_obj: {},
            test_results: {},
            results: []
        }
    }
    disableBTN = (value=false) =>{
        this.setState(
            {
                disable_btn: value
            }
        );
    };
    TestClick = (url_objs) => {
        const {required_obj={}, options_obj={}} = url_objs;
        this.setState({
            required_obj: (required_obj !== undefined ? required_obj : {}),
            options_obj: (options_obj !== undefined ? options_obj : {})
        });
        // default value
        /*  
            // alert("testing...");
            // handle undefined ???
            o = {a: 1};
            a = {};
            x = Object.assign({}, o, a);
            // {a: 1}
            x = Object.assign({}, o, undefined);
            // {a: 1}
        */
        /* 
            // mock data
            let {required_obj={}, options_obj={}} = url_objs;
            options_obj = {
                "Sorts": [
                    {"Field": "AnyManagedFundsRow.A0", "Sort": "desc"}
                ]
            };
        */
        if (debug) {
            console.log(`%c urls.test = ${urls.test} \n`, color.color_css3);
            // console.log(`%c new url obj = `,color.color_css1, url);
            console.log(`%c url_objs = \n`,color.color_css1, url_objs);
            console.log(`%c required_obj = \n`,color.color_css1, required_obj);
            console.log(`%c options_obj = \n`,color.color_css1, options_obj);
        }
        // fetch_url = url;
        // required obj + options obj = url: `${urls.test}?${url_objs}`
        // shape url_objs
        let new_url_objs = {};
        new_url_objs = Object.assign({}, required_obj, options_obj);
        /*
            // empty value
            // move to options
            if(value !== ""){
                obj[key] = value;
            }
        */
        let str_objs = JSON.stringify(new_url_objs);
        let s =  `"`;
        let new_str_objs = str_objs.replace(/[\s]*\"/ig, s);
        // "{"ApiName":"TestProtocol","WriteType":"json"}"
        const test_url = `${urls.test}?${new_str_objs}`;
        this.setState({
            fetch_url: test_url
        });
        // fetch url
        if (debug) {
            console.log(`%c final test fetch url = \n`, color.color_css3, this.state.fetch_url);
        }
    };
    startTest = () => {
        const that = this;
        this.setState({
            loading: true
        });
        // fetch test data
        let url = this.state.fetch_url;
        if (debug) {
            console.log(`%c fetch test data`, css2, url);
        }
        /* 
            {
                "info" : "Lose Param fund.f9.fund_profile.FundManager.BasicInformations Report",
                "trace" : ""
            }
            // have ApiName & Lose Param
            {
                "info" : "Dosn't Contain The  Report",
                "trace" : ""
            }
            // no ApiName
            []
            // No data
            [{}, {}, ...]
            // OK
        */
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
                    // shape data & pass it to result!
                    fecth_data.map(
                        // name.AnyManagedFundsRow
                        (data, index) => {
                            //do something 
                            // need shape
                            if (debug) {
                                console.log(`%c fecthing index = ${index} \n`, color.color_css2);
                                console.log(`%c fecthing data = \n ${data}`, color.color_css2);
                            }
                        }
                    );
                    // result table A0 = key
                    if (debug) {
                        console.log(`%c fecthed data = \n`, color.color_css3, JSON.stringify(fecth_data, null, 4));
                    }
                    let r = fecth_data;
                    let result = [];
                    const test_result = r.map(
                        // tab
                        (tab) => {
                            let keys = Object.keys(tab.columnMeta);
                            let arrs = tab.rows;
                            for(let i = 0; i < arrs.length; i++){
                                let arr = arrs[i];
                                let temp_obj = {};
                                keys.map(
                                    (key, index) => {
                                        temp_obj.key = `key_000${i+1}`;
                                        /* 
                                            if(value instanceof Object){
                                                console.log(`true`);
                                            }
                                            // true
                                        */
                                        // if (arr[index] instanceof Object || arr[index] instanceof Array)
                                        // Array instanceof Object
                                        // true
                                        if (arr[index] instanceof Object) {
                                            temp_obj[key.toUpperCase()] = JSON.stringify(arr[index], null, 4);
                                        }
                                        else{
                                            temp_obj[key.toUpperCase()] = arr[index].toString();
                                            /* if(arr[index]=== null || isNaN(arr[index]) || !isFinite(arr[index])){
                                                temp_obj[key.toUpperCase()] = "";
                                            }else{
                                                temp_obj[key.toUpperCase()] = arr[index].toString();
                                            } */
                                        }
                                        // temp_obj[key.toUpperCase()] = arr[index];
                                        // .toString();
                                        return temp_obj;
                                    }
                                );
                                result.push(temp_obj);
                            }
                            if (debug) {
                                console.log(`$$$$$$$ test results = $$$$$$$ \n`, JSON.stringify(result, null, 4));
                            }
                            // return c_obj;
                            return result;
                        }
                    );
                    // result[i].attributes.columns = RT cols
                    /* 
                        {
                            cols: [
                                {name: "交易日期", value: "a0"},
                                {name: "证券代码", value: "a1"}
                            ]
                        }
                        // convert to
                        // {name: "交易日期", value: "a0"},
                        // obj.title = cols[i].name
                        // obj.title = cols[i].value.toUpperCase(),
                        cols: [
                            {
                                "title": "交易日期 || ☹️ 暂无注释",
                                "key": "BYTEV",
                                "dataIndex": "BYTEV"
                            },
                        ]
                    */
                    that.setState({
                        // test_datas: {fecth_data}
                        // test_results: Object.assign({}, fecth_data)
                        // results: Object.assign({}, result)
                        results: result
                    });
                    /*
                        setTimeout(() => {
                            that.setState({
                                loading: false
                            });
                        }, 1000);
                        // promise reject ???
                    */
                }
            }
        );
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 1000);
    };
    checkTestCommands = () => {
        // fetch test data
        if (debug) {
            console.log(`%c ready fetching commands url  = \n`, css1);
        }
        this.startTest();
        if (debug) {
            console.log(`%c fetching fetch_url = \n`, css1, this.state.fetch_url);
        }
    };
    // Modal
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
    // Modal
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
    // Panel
    cilicPanel = () => {
        if (debug) {
            console.log(`%c this.state.isCollapsed= `, color.css1, this.state.isCollapsed);
        }
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
        if (debug) {
            console.log(`%c new this.state.isCollapsed = `, color.css1, this.state.isCollapsed);
        }
    };
    componentDidMount() {
        this.setState({
            disable_btn: false
        });
    }
    /* eslint-disable no-console */
    render() {
        const {show, test_datas} = {...this.state};
        const {inputs, outputs, options, url_path, example_obj} = {...this.props};
        // options
        const {sort, fields, datas} = options;
        if (!debug) {
            console.log(`%c ri inputs`, color.color_css3, inputs);
            console.log(`%c ri outputs`, color.css2, outputs);
            // options
            console.log(`%c test options`, color.green_23, options);
            console.log(`%c sort = \n`, color.green_23, sort);
            console.log(`%c fields = \n`, color.green_23, fields);
            // datas
            console.log(`%c datas = \n`, color.green_23, datas);
        }
        if (!debug) {
            // command example
            console.log(`%c ri commandexample example_obj = `, color.color_css2, example_obj);
            // {SecuCode: "000011", ApiName: "fund.f9.fund_profile.FundManager"}
            /* 
                for (var key in object) {
                    if (object.hasOwnProperty(key)) {
                        var element = object[key];
                    }
                }
            */
        }
        // shape input data & example
        let ri_datas = [];
        let op_datas = [];
        // commandexample
        // example_obj ??? multi example
        if(Array.isArray(inputs)){
            inputs.map(
                (value, index) => {
                    if (!debug) {
                        console.log(`%c ri inputs index = `, color.css1, index);
                        console.log(`%c ri inputs value = `, color.css2, value);
                    }
                    // Required: true
                    if(value.Required){
                        // only required will be pushed to ri_datas!
                        let obj = {};
                        obj.key = index;
                        obj.name = value.name;
                        obj.desc = value.Description;
                        obj.type = value.type;
                        if (value.name === "ApiName") {
                            let path = window.location.pathname.substr(8);
                            obj.value = path;
                            // obj.value = url_path;
                        }else{
                            if (value.name === "BeginDate" || value.name === "EndDate") {
                                const date = new Date().toLocaleDateString().replace(/\//ig, `-`);
                                // obj.value = (value ? value : date); 
                                obj.value = `${date}`;
                            }else{
                                obj.value = "";
                            }
                        }                        
                        ri_datas.push(obj);
                        if (!debug) {
                            console.log(`%c ri_datas obj = `, color.css1, obj);
                            console.log(`%c ri_datas[${index}] = `, color.css1, ri_datas);
                        }
                    }
                    // Options True
                    if (!value.Required && value.name !== "WriteType") {
                        // all options will be pushed to op_datas!
                        let obj = {};
                        obj.key = index;
                        obj.value = "";
                        obj.name = value.name;
                        obj.desc = value.Description;
                        obj.type = value.type;
                        op_datas.push(obj);
                        if (!debug) {
                            console.log(`%c op_datas obj = `, color.css2, obj);
                            console.log(`%c op_datas[${index}] = `, color.css2,  op_datas);
                        }
                    }
                    // return obj_temp[index];
                }
            );
            if (!debug) {
                console.log(`%c ri_datas = `, color.css1, ri_datas);
            }
            const fixed_obj = {
                "key": 11111111,
                "name": "WriteType",
                "type": "string",
                "value": "json",
                "desc": "返回的数据协议格式"
            };
            ri_datas.push(fixed_obj);
        }
        if (!debug) {
            console.log(`%c finished ri_datas = `, color.css2, ri_datas);
            // format json
            console.log(`%c finished ri_datas = `, color.css2, JSON.stringify(ri_datas, null, 4));
            console.log(`%c finished op_datas = `, color.css2,  op_datas);
        }
        // example overwrite empty values
        if (Object.keys(example_obj).length > 0) {
            // not empty
            let keys = Object.keys(example_obj);
            // let value = [keys[i]];
            ri_datas.map(
                (obj, index) => {
                    if (debug) {
                        // console.log(`%c ri commandexample example_obj = `, color.color_css3, example_obj);
                        console.log(`obj = `, JSON.stringify(obj, null, 4));
                        console.log(`index = `, index);
                    }
                    for(let k of keys){
                        if (debug) {
                            console.log(`k = `, k);
                        }
                        if(obj.name === k){
                            obj.value = example_obj[k];
                        }
                    }
                }
            );
        }
        // mock data
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
            <div className="api-test">
                <div>
                    <p className="title-color">必填项</p>
                    <RI 
                        init_datas={(ri_datas.length > 0) ? ri_datas : testdatas}
                        TestClick={this.TestClick}
                        disableBTN={this.disableBTN}
                        options_datas={this.state.options_obj || {}}
                    />
                </div>
                <div style={{textAlign: "center"}}>
                    <Button
                        type="primary"
                        style={{
                            margin: "auto 10px",
                            marginLeft: "-100px"
                        }}
                        onClick={this.startTest}
                        disabled={this.state.disable_btn}
                        loading={this.state.loading}
                        icon="hourglass"
                        >
                        开始测试
                    </Button>
                    <Button
                        type="primary"
                        style={{margin: "auto 10px"}}
                        onClick={this.showModal}
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
                            startTest={this.startTest}
                            disabled_btn={this.state.disable_btn}
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
                                style={{
                                    // paddingRight: 20,
                                    // maxWidth: "calc(100% - 20px)"
                                }}
                                >
                                {/* <Table dataSource={this.props.dataSource} columns={this.props.columns} bordered pagination={false}/> */}
                                <OI
                                    dataSource={this.props.dataSource}
                                    columns={this.props.columns}
                                    sort_items={sort}
                                    fields_items={fields}
                                    option_datas={op_datas}
                                    TestClick={this.TestClick}
                                    required_datas={this.state.required_obj || {}}
                                />
                            </Panel>
                        </Collapse>
                    }
                </div>
                <div 
                    style={{
                        // visibility: "hidden",
                        marginTop: 30,
                        // maxWidth: "calc(100%-300px)",
                        boxSizing: "border-box",
                    }}
                    >
                    <h2 className="title-color">测试结果</h2>
                    {/* Tabs & Tables */}
                    {/* // tab.name === "AnyManagedFundsRow":[]  */}
                    <RTS
                        tabs={this.props.outputs}
                        // ??? type ???
                        results={this.state.results || []}
                        style={{
                            // maxWidth: 850,
                            // maxWidth: "calc(100%-300px)",
                            boxSizing: "border-box",
                            // overflowX: "hidden"
                        }}
                    />
                </div>
            </div>
        );
    }
    /* eslint-enable no-console */
}

TestTableForms.propTypes = {
    inputs:PropTypes.array.isRequired,
    outputs: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired,
    url_path: PropTypes.string.isRequired,
    test_datas: PropTypes.array.isRequired,
    example_obj: PropTypes.object.isRequired,
};

const TTF = TestTableForms;
export {TTF};
export default TTF;



/* 


let result = [];
const test_result = r.map(
    // tab
    (tab) => {
        let keys = Object.keys(tab.columnMeta);
        let arrs = tab.rows;
        for(let i = 0; i < arrs.length; i++){
            let arr = arrs[i];
            let temp_obj = {};
            keys.map(
                (key, index) => {
                    temp_obj.key = `key_000${i+1}`;
                    temp_obj[key] = arr[index];
                    return temp_obj;
                }
            );
            result.push(temp_obj);
        }
        console.log(`result = \n`, JSON.stringify(result, null, 4));
        // return c_obj;
        return result;
    }
);


*/