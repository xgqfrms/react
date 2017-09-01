import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class RequiredItems
 * @extends {Component}
 */

// utils
import {urls}from '../../../../app/urls.js';
import {color}from '../../../../app/color';
import {debug} from '../../../../app/debug';


// libs
import moment from 'moment';
import {Table, Input, Form, DatePicker} from 'antd';
const FormItem = Form.Item;
const dateFormat = 'YYYY-MM-DD';

class RequiredItems extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            datas: this.props.init_datas,
            initialurl: "",
            url: "",
            url_obj: {},
            url_objs: {},
            required_obj: {},
            BeginDate: "",
            EndDate: "",
            diasble_btn: false,
            init_date: ""
        }
    }
    onSaveInput = () => {
        // input onchange
        // let str_obj = JSON.stringify(url_obj);
        // url = `http://10.1.5.31:8080/http/report/query?${str_obj}`;
        // this.onInputChange();
        let temp_obj = {};
        temp_obj.options_obj = this.props.options_datas;
        if (!debug) {
            console.log(`input test url = `, color.css3, this.state.url);
        }
        // TestClick(url)
        temp_obj.required_obj = this.state.required_obj;
        this.setState({
            url_objs: temp_obj
        });
        this.props.TestClick(this.state.url_objs);
    };
    autoSave = () => {
        // global url
        setTimeout(() => {
            // this.onBeginDateChange();
            // this.onEndDateChange();
            this.onSaveInput();
        }, 0);
    };
    // before onChange & update after render
    componentDidMount() { 
        // input value === init datas
        const initial_datas = this.props.init_datas;
        let temp_url_obj = this.state.url_obj;
        if (debug) {
            console.log(`%c initial_datas = \n`, color.color_css3, initial_datas);
            // (4) [{…}, {…}, {…}, {…}]
            // {key: 0, value: "", name: "ApiName", desc: "报表名称(true)", type: "string"}
            console.log(`%c initial temp_url_obj = \n`, color.color_css3, temp_url_obj);
            // {ApiName: "", SecuCode: "", Names: "", WriteType: "json"}
        }
        // example / ""
        const that = this;
        initial_datas.map(
            (data, index) => {
                let key = data.name,
                    value = data.value;
                // "key":"json (json文本格式)"
                if (debug) {
                    console.log(`%c JSON.stringify(data)= ${JSON.stringify(data)} \n`, color.css2);
                    // JSON.stringify(data)= {"key":0,"value":"","name":"ApiName","desc":"报表名称(true)","type":"string"} 
                    console.log(`%c index = ${index} \n`, color.css2);
                    console.log(`%c key = ${key} \n`, color.css2);
                    console.log(`%c value = ${value} \n`, color.css2);
                    // console.log(`%c /""/ig.test(value) = ${/""/ig.test(value)} \n`, color.css2);
                }
                // disable
                if(value === ""){
                    that.setState({
                        diasble_btn: true
                    });
                }
                // fixed
                if(key === "WriteType"){
                    temp_url_obj[key] = "json";
                    this.setState({
                        url_obj: Object.assign(this.state.url_obj, temp_url_obj)
                    });
                    if (debug) {
                        console.log(`%c temp_url_obj = ${temp_url_obj} \n`, color.css3);
                        console.log(`%c temp_url_obj[key] = ${temp_url_obj[key]} \n`, color.css3);
                    }
                }else if(key === "ApiName"){
                    console.log(`%c ApiName = ${temp_url_obj[key]} \n`, color.css3);
                    let path = window.location.pathname.substr(8);
                    temp_url_obj[key] = path;
                }else{
                    temp_url_obj[key] = value;
                    this.setState({
                        url_obj: Object.assign(this.state.url_obj, temp_url_obj)
                    });
                    if (debug) {
                        console.log(`%c temp_url_obj.key = ${temp_url_obj.key} \n`, color.css3);
                        console.log(`%c temp_url_obj[key] = ${temp_url_obj[key]} \n`, color.css3);
                    }
                }
            }
        );
        if (debug) {
            console.log(`%c init temp_url_obj = \n`, color.color_css2, temp_url_obj);
        }
        this.setState({
            required_obj: temp_url_obj
        });
        //no need any more
        // initial url
        this.autoSave();
        // this.onSaveInput();
        // id="required-inputs"
        let inputs_check = document.getElementById("required-inputs");
        document.onload = () => {
            // alert(`inputs_check!`);
        }
        document.addEventListener("DOMContentLoaded", (event) => {
            // - Code to execute when all DOM content is loaded. 
            // - including fonts, images, etc.
            // alert(`inputs_check!`);
        });
        // OK 
        setTimeout(() =>{
            if(this.state.diasble_btn === true){
                this.props.disableBTN(true);
                that.handleSubmit();
            }else{
                this.props.disableBTN(false);
            }
        }, 0);
    }
    handleSubmit = () => {
        // check form
    };
    // get methods from props
    onInputChange = (e) => {
        if (debug) {
            // console.log(`%c e.target = `, color.green_23, e.target);
            // <input type="text" placeholder="☹️ 暂无默认的示例命令值 !" value="111" id="ApiName" data-__meta="[object Object]" class="ant-input ant-input-lg">
            console.log(`%c e.target.id =`, color.green_23, e.target.id);
            console.log(`%c e.target.value =`, color.green_23, e.target.value);
        }
        let temp_url_obj = this.state.url_obj;
        if (debug) {
            console.log(`%c before change temp_url_obj = \n`, color.color_css2, temp_url_obj);
        }
        let key = e.target.id;
        let value = e.target.value;
        let values = value.trim().replace(/([\w]{1})[\s]([\w]{1})/ig, ",").split(",");
        if(values.length > 1){
            // pass array
            temp_url_obj[key] = values;
        }else{
            // pass int string
            temp_url_obj[key] = value;
        }
        /* 
        if(key === "DatePerformType"){
            // value = e.target.value.trim().replace(/s/gi, ",").split(",");
            value = e.target.value.trim().replace(/([\w]{1})[\s]{1,}([\w]{1})/ig, "$1,$2").split();
            // space => , comma
            // multi spaces
            // ss.trim().replace(/([\w]{1})[\s]{1,}([\w]{1})/ig, "$1,$2").split();
                // enhancement solution
                // replace(/([\w]{1})[\s]{1}([\w]{1})/ig, "$1,$2");
                let ss = "xyz,abc, SSS XXX ZZZ, DDD EEE";
                let multi_arr = ss.replace(/([\w]{1})[\s]{1}([\w]{1})/ig, "$1,$2");
                // "xyz,abc, SSS,XXX,ZZZ, DDD,EEE"
                ss.trim().replace(/([\w]{1})[\s]{1}([\w]{1})/ig, "$1,$2").split();
                // ["xyz,abc, SSS,XXX,ZZZ, DDD,EEE"]
             
        }else{
            value = e.target.value;
        }
        */
        /* 
        let obj = {};
        let temp_obj = this.state.options_obj;
        let key = e.target.id;
        let value = e.target.value;
        let values = value.trim().replace(/([\w]{1})[\s]([\w]{1})/ig, ",").split(",");
        if(values.length > 1){
            // pass array
            temp_obj[key] = values;
            obj[key] = values;
        }else{
            // pass int string
            temp_obj[key] = value;
            obj[key] = value;
        }
        this.setState({
            options_obj: temp_obj
        });
        */
        // old
        /* 
        let value;
        if (key !== undefined) {
            // let value = e.target.value.trim();
            switch (key) {
                case "DatePerformType":
                    value = (
                        e.target.value.trim().split(",")
                    );
                    break;
                case "AnyUnKnow":
                    value = (
                        ""
                    );
                    break;
                default:
                    value = (
                        e.target.value.trim()
                    );
                    break;
            }
            return value;
        }
        */
        // trim();
        /* 
            DatePerformType Array ???
            // id = index.type
            // data-* 
            // data-type={index.type}
            e.target.id = DatePerformType
            e.target.value = RBX,JYZBX 
        */
        // temp_url_obj[key] = value;
        let str_obj = JSON.stringify(temp_url_obj);
        if (debug) {
            console.log(`%c after change temp_url_obj = \n`, color.color_css2, temp_url_obj);
            console.log(`%c after change str_obj = \n`, color.color_css2, str_obj);
        }
        // regex test / keys, value === ""
        // /""/ig.test(str_obj)
        if(/""/ig.test(str_obj)){
            this.props.disableBTN(true);
        }else{
            this.props.disableBTN(false);
        }
        // get changed table values
        this.setState({
            url: `${urls.test}?${str_obj}`
        });
    };
    //  no Example initial Date
    noExampleDate = () => {
        const date = new Date().toLocaleDateString().replace(/\//ig, `-`);
        this.setState({
            init_date: date
        });
    };
    // DatePicker
    onBeginDateChange = (date, dateString) => {
        if(debug){
            console.log(`BeginDate dateString = ${dateString}`);
        }
        // BeginDate
        // temp_url_obj["BeginDate"] = dateString;
        let temp_url_obj = this.state.url_obj;
        // index.name === "EndDate" || index.name === "BeginDate"
        temp_url_obj["BeginDate"] = dateString;
        let str_obj = JSON.stringify(temp_url_obj);
        if(/""/ig.test(str_obj)){
            this.props.disableBTN(true);
        }else{
            this.props.disableBTN(false);
        }
        // get changed table values
        this.setState({
            url: `${urls.test}?${str_obj}`
        });
        this.autoSave();
    };
    onEndDateChange = (date, dateString) => {
        if(debug){
            console.log(`EndDate dateString = ${dateString}`);
        }
        // EndDate
        // temp_url_obj["EndDate"] = dateString;
        let temp_url_obj = this.state.url_obj;
        // index.name === "EndDate" || index.name === "BeginDate"
        temp_url_obj["EndDate"] = dateString;
        let str_obj = JSON.stringify(temp_url_obj);
        if(/""/ig.test(str_obj)){
            this.props.disableBTN(true);
        }else{
            this.props.disableBTN(false);
        }
        // get changed table values
        this.setState({
            url: `${urls.test}?${str_obj}`
        });
        this.autoSave();
    };
    onDateChange = (date, dateString) => {
        if(debug){
            console.log(`date = ${date}`);
            // date = 1503455602216
            console.log(`dateString = ${dateString}`);
            // dateString = 2017-08-23
            // console.log(`date e = ${e}`);
            // console.log(`date e = ${JSON.stringify(e)}`);
            // undefined
        }
        let temp_url_obj = this.state.url_obj;
        // index.name === "EndDate" || index.name === "BeginDate"
        if(temp_url_obj["BeginDate"]){
            temp_url_obj["BeginDate"] = dateString;
        }
        if(temp_url_obj["EndDate"]){
            temp_url_obj["EndDate"] = dateString;
        }
        // (index.name === "EndDate" ? this.onEndDateChange : this.onBeginDateChange)
        let str_obj = JSON.stringify(temp_url_obj);
        if(/""/ig.test(str_obj)){
            this.props.disableBTN(true);
        }else{
            this.props.disableBTN(false);
        }
        // get changed table values
        this.setState({
            url: `${urls.test}?${str_obj}`
        });
    };
    /* eslint-disable no-console */
    // initialize
    render() {
        const {getFieldDecorator} = this.props.form;
        // form input
        /* 
            console.log(`new url_obj = `, url_obj);
            let str_obj = JSON.stringify(url_obj);
            let url = `http://10.1.5.31:8080/http/report/query?${str_obj}`;
        */
        const initial_datas = this.props.init_datas;
        const datas_length = initial_datas.length;
        if (!debug) {
            console.log(`%c initial_datas = `, color.color_css3, initial_datas);
            console.log(`%c initial_datas.length = `, color.color_css3, initial_datas.length);
        }
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
                    if (!debug) {
                        // index === object
                        console.log(`%c required index = `, color.green_16_border, index);
                        // {key: 0, value: "", name: "ApiName", desc: "报表名称(true)", type: "string"}
                        // text === value
                        console.log(`%c text = `, color.green_23, text);
                        // "" / "json" / example_value
                    }
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
                                disabled
                            />
                        );
                    }else{
                        if(index.name === "EndDate" || index.name === "BeginDate"){
                            const date = new Date().toLocaleDateString().replace(/\//ig, `-`);
                            let date_placeholder = `☹️ 请输入 ${date } 格式的时间!`;
                            // "2017-8-22"
                            // ??? initial date
                            if(text.length === 0){
                                text = this.state.init_date;
                            }
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
                                            initialValue: moment(text || "", dateFormat)
                                            // initialValue: moment(text || date, dateFormat)
                                            // initialValue: moment(text || this.state.init_date, dateFormat)
                                        })(
                                            <DatePicker 
                                                onChange={(index.name === "EndDate" ? this.onEndDateChange : this.onBeginDateChange)} 
                                                // placeholder="日期格式 2017-08-08"
                                                placeholder={date_placeholder}
                                                style={{minWidth: 300}}
                                                allowClear
                                                id={index.name}
                                                showToday
                                                // defaultValue={moment(text, dateFormat)}
                                                // refs = id
                                                // ref={index.name}
                                            />
                                        )
                                    }
                                </FormItem>
                            );
                        }else if(index.name === "DatePerformType"){
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
                                                onChange={this.onInputChange}
                                                type="text"
                                                // placeholder="☹️ 暂无默认的示例命令值 !"
                                                placeholder="该数组的值支持逗号(,)、空格( )分词!"
                                            />
                                        )
                                    }
                                </FormItem>
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
                                                onChange={this.onInputChange}
                                                type="text"
                                                placeholder="☹️ 暂无默认的示例命令值 !"
                                            />
                                        )
                                    }
                                </FormItem>
                            );
                        }
                    }
                },
                width: "40%"
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
                style={{margin: 10, padding: 10, boxSizing: "border-box"}}
                id="required-inputs"
                >
                {/* input 必填项 */}
                <Form onSubmit={this.handleSubmit}>
                    <Table
                        dataSource={this.state.datas}
                        columns={Requiredcolumns}
                        bordered
                        pagination={false}
                    />
                </Form>
            </div>
        );
    }
    /* eslint-enable no-console */
}

RequiredItems.propTypes = {
    init_datas: PropTypes.array.isRequired,
    TestClick: PropTypes.func.isRequired,
    disableBTN: PropTypes.func.isRequired,
    options_datas: PropTypes.object.isRequired,
};

const RI = Form.create()(RequiredItems);
// const RI = RequiredItems;

export {RI};
export default RI;





