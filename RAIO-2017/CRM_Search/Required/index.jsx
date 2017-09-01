import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class RequiredItems
 * @extends {Component}
 */

import {urls}from '../../../app/urls.js';
import {color}from '../../../app/color';
import {debug} from '../../../app/debug';


import {Table, Icon, Input, Button, Form} from 'antd';
const FormItem = Form.Item;

let url_obj = {};
let url = "";
// initial url


const value = "";
// undefined

// input datas
/* 
    const demo_datas = [
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
// example



/* 
array.push(
    {
        key: "last-index",
        name: "WriteType",
        type: "string",
        value: "json",
        desc: "返回的数据协议格式 (json文本格式)"
    }
);

 */

// options value

class RequiredItems extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            datas: [],
            testurl: "",
            initialurl: ""
            // this.props.data
            // input + output
            // table keys , input values
        }
    }
    clickTestButton = () => {
        // url = data & modify input value
        // create a new url
        /* 
            fetch test result
            // show result
        */
        // input onchange bind to start_test()
    };
    onSaveInput = () => {
        // input onchange
        // let str_obj = JSON.stringify(url_obj);
        // url = `http://10.1.5.31:8080/http/report/query?${str_obj}`;
        if (debug) {
            console.log(`input url = `, color.css3, url);
        }
        // global url
        this.setState({
            testurl: url
        });
        if (debug) {
            console.log(`new testurl = `, this.state.testurl);
        }
        // url
        this.props.TestClick(this.state.testurl);
    };
    autoSave = () => {
        // global url
        setTimeout(() => {
            this.onSaveInput();
        }, 0);
    }
/*     shouldComponentUpdate(nextProps, nextState) {
        return true;
    } */
    componentWillUpdate(){
        // this.onSaveInput();
    }
    componentDidUpdate() {
        // this.onSaveInput();
        // this.props.TestClick(url)
    }
    // initialize & before onChange
    componentDidMount() {
        const initial_datas = this.props.init_datas;
        // input value === init datas
        initial_datas.map(
            (data, index) => {
                let key = data.name,
                    value = data.value;
                // "key":"json (json文本格式)"
                if (debug) {
                     console.log(`%c index = ${index} \n`, color.css1);
                     console.log(`%c key = ${key} \n`, color.css2);
                     console.log(`%c value = ${value} \n`, color.css2);
                }
                if(key === "WriteType"){
                    url_obj[key] = "json";
                    if (!debug) {
                        console.log(`%c url_obj.key = ${url_obj.key} \n`, color.css3);
                    }
                }else{
                    url_obj[key] = value;
                    if (debug) {
                        console.log(`%c value = ${url_obj.key} \n`, color.css3);
                    }
                }
                if (debug) {
                    console.log(`%c url_obj = \n`, color.color_css2, url_obj);
                }
            }
        );
        let str_obj = JSON.stringify(url_obj);
        // get changed table values ?
        // global url
        url = `${urls.test}?${str_obj}`;
        let init = 0;
        if (debug && (init === 0)) {
            console.log(`%c initial url = \n`, color.color_css3, url);
            init += 1;
        }else{
            console.log(`%c new url, index = ${init}  = \n`, color.color_css3, url);
        }
        // initial url
        this.autoSave();
    }
    // get methods from props
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(
            (err, values) => {
                if (!err) {
                    if (debug) {
                        console.log('Received values of form: ', values);
                    }
                    this.autoSave();
                }
                else{
                    // when required is empty
                    this.props.disableBTN(true);
                }
            }
        );
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        // form input
        /* 
            console.log(`new url_obj = `, url_obj);
            let str_obj = JSON.stringify(url_obj);
            let url = `http://10.1.5.31:8080/http/report/query?${str_obj}`;
        */
        const initial_datas = this.props.init_datas;
        // input value === init datas
        const datas_length = initial_datas.length;
        if (debug) {
            console.log(`initial_datas.length = `, initial_datas.length);
        }
        // const datas_length = 4;
        let i_length = 0;
        // input in table
        const Requiredcolumns = [
            {
                title: "字段",
                dataIndex: "name",
                key: "name",
                width: "15%"
            },
            {
                title: "类型",
                dataIndex: "type",
                key: "type",
                width: "10%"
            },
            {
                title: "值",
                dataIndex: "value",
                key: "value",
                render: (text, index) => {
                    if (debug) {
                    // disabled
                        console.log(`url_obj = `, url_obj);
                        console.log(`%c text = ${text} \n`, color.css1);
                        console.log(`%c index = ${index} \n`, color.css2);
                    }
                    // get initial obj_url
                    if(index.name === "WriteType"){
                        url_obj[index.name] = "json";
                    }else{
                        url_obj[index.name] = text;
                    }
                    i_length++;
                    if (debug) {
                        console.log(`%c i_length = `, color.css1, i_length);
                    }
                    if(datas_length === i_length){
                        // keys length === demo_datas length
                        // finish url object
                        if (debug) {
                            console.log(`%c full url_obj defaultValue = `, color.css2, url_obj);
                            console.log(`%c full i_length = `, color.css1, i_length);
                        }
                        i_length = 0;
                    }
                    // console.log(`url_obj defaultValue = `, url_obj);
                    if(index.name === "WriteType"){
                        // 1. write global let
                        // 2. use let create new url
                        return(
                            /* disabled no need onChange()*/
                            <Input 
                                onChange={
                                    (e) => {
                                        if (!debug) {
                                            console.log(`e = `, e.target.value);
                                        }
                                    }
                                }
                                defaultValue={text}
                                type="text"
                                disabled/>
                        );
                    }else{
                        return(
                            <FormItem>
                                {
                                    getFieldDecorator(index.name, {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入必填字段值, 必填字段值不可为空!'
                                            }
                                        ],
                                        initialValue: text
                                    })(
                                        <Input 
                                            onChange={
                                                (e) => {
                                                    if (debug) {
                                                        console.log(`index.name = `, index.name);
                                                        console.log(`e = `, e.target.value);
                                                    }
                                                    let key = index.name,
                                                        value = e.target.value;
                                                    {/* url_obj = Object.assign(
                                                        url_obj,
                                                        {
                                                            key: value
                                                        }
                                                    ); */}
                                                    // url_obj.key = value;// key
                                                    url_obj[key] = value;
                                                    // key's value
                                                    if (debug) {
                                                        console.log(`${key} url_obj = `, url_obj); 
                                                    }
                                                    let str_obj = JSON.stringify(url_obj);
                                                    url = `${urls.test}?${str_obj}`;
                                                    {/* 
                                                        this.setState({
                                                            testurl: url
                                                        });
                                                    */}
                                                    if (debug) {
                                                        console.log(`%c changed url = \n`, color.green_16_border, url); 
                                                    }
                                                    return url;
                                                }
                                            }
                                            type="text"
                                            placeholder="☹️ 暂无默认的示例命令值 !"
                                        />
                                    )
                                }
                            </FormItem>
                        );
                    }
                },
                // width: "40%"
            },
            {
                title: "描述",
                dataIndex: "desc",
                key: "desc",
                // width: "30%"
            }
        ];
        return (
            <div 
                onChange={this.autoSave}
                style={{margin: 10, padding: 10, boxSizing: "borderBox"}}>
                {/* input 必填项 */}
                <Form onSubmit={this.handleSubmit}>
                    <Table
                        dataSource={initial_datas}
                        columns={Requiredcolumns}
                        bordered
                        pagination={false}
                    />
                </Form>
            </div>
        );
    }
}

RequiredItems.propTypes = {
    init_datas: PropTypes.array.isRequired,
    TestClick: PropTypes.func.isRequired,
    disableBTN: PropTypes.func.isRequired
};

const RI = Form.create()(RequiredItems);
// const RI = RequiredItems;

export {RI};
export default RI;


/* 

form

wrapped input


*/


/* 

    table input validation

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            if(object[key] === ""){
                // alret & disable fetch data
            }
        }
    }


*/


/* 

name: Info.schema.BasicInformationRow


    表1:基金经理详细信息(基本资料)
    A0	string	性别
    A1	string	出生日期
    A2	string	学历
    A3	number	证券从业年限
    A4	integer	历任管理基金数
    A5	integer	历任基金经理公司数
    A6	string	简历
    A7	string	照片
    A8	integer	PersonalCode（参数）

    表2:基金经理详细信息(历任管理基金)
    A0	string	管理公司
    A1	string	基金简称
    A2	string	投资类型
    A3	string	到任日期(传参)
    A4	string	离职日期(传参)
    A5	number	任职年化回报
    A6	integer	基金编码(不显示)

    表3:基金经理详细信息(历史回报)
    A0	string	历史回报
    A1	number	3月
    A2	number	6月
    A3	number	YTD
    A4	number	1年
    A5	number	2年
    A6	number	3年
    A7	number	5年

    表4:基金经理详细信息(风险分析)
    A0	string	类型
    A1	number	ɑ
    A2	number	β
    A3	number	SharpeRatio
    A4	number	收益标准差
    A5	string	风险度

    表5:基金经理详细信息(折线图基金值)
    A0	string	时间
    A1	number	基金值
    A2	number	同类平均
    A3	number	沪深300

    表6:基金经理详细信息(折线图同类平均)
    A0	string	时间
    A1	number	基金值
    A2	number	同类平均
    A3	number	沪深300




*/


