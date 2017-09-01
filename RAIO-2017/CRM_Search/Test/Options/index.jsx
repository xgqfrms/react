import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * xgqfrms
 * 2017.08.10
 * 
 * @class OptionsItems
 * @extends {Component}
 */
// utils
import {debug, xyz_debug} from '../../../../app/debug';
import {color} from '../../../../app/color';

// libs
import {Table, Input, DatePicker, Form, Select, Checkbox, Radio} from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;

// global count i
let page_i = 1;

// BeginDate & EndDate
const date = new Date().toLocaleDateString().replace(/\//g, "-");
// "2017-8-29"

class OptionsItems extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            Page: {
                PageNo: 1,
                PageSize: 100
            },
            Sorts: [{}], 
            /* 
                {
                    // Field: "",
                    // Sort: ""
                }
             */
            Compress: "true",
            FastQuarterReportType: [],// ["Q1th", "Q2nd", "Q3rd", "Q4th"]
            FastDateFilterType: "",
            OutField: [], // ["TableName.A0", "BasicInformationRow.A3"]
            IgnoreField: [], // ["TableName.A0", "BasicInformationRow.A5"]
            Group: "",
            defaultInput: {},
            url_objs: {},
            options_obj: {},
            BeginDate: "",
            EndDate: "", // "BeginDate":"2017-08-03","EndDate":"2017-08-26"
        };
    }
    autoSave = () => {
        // onChange={this.autoSave}
        if (xyz_debug(false)) {
            alert(`Auto Saving...!`);
        }
        /*
            // empty value
            // move to options
            if(value !== ""){
                obj[key] = value;
            }
        */
        // form item 
        // Select change bug ???
        let temp_obj = {};
        temp_obj.required_obj = this.props.required_datas;
        // required_obj
    /* 
        this.setState(
            (prevState, props) => {
                const {Page, Sorts, Compress} = this.state;
                // const {Page, Sorts, Compress} = {...this.state};
                if (debug) {
                    console.log(`%c this.state `, color.color_css3, JSON.stringify(this.state));
                    console.log(`%c this.state.Page `, color.color_css3, Page);
                    console.log(`%c this.state.Sorts `, color.color_css3,  Sorts);
                    console.log(`%c this.state.Compress `, color.color_css3, Compress);
                    // console.log(`%c this.state.Page `, color.color_css3, Page);
                }
                return {
                    options_obj: Object.assign(
                        prevState.options_obj, 
                        {
                            "Page": Page, 
                            "Sorts": Sorts, 
                            "Compress": Compress
                        }
                    )
                }
            }
        );
    */
        temp_obj.options_obj = this.state.options_obj;
        // options_obj
        this.setState({
            url_objs: temp_obj
        });
        this.props.TestClick(temp_obj);
    };
    // init
    componentDidMount() {
        let temp_obj = this.state.url_objs;
        temp_obj.required_obj = this.props.required_datas;
        if (debug) {
            console.log(`%c this.props.required_datas `, color.color_css3, JSON.stringify(this.props.required_datas));
        }
        // this
        let that = this;
        this.setState(
            (prevState, props) => {
                const {Page, Sorts, Compress} = this.state;
                // const {Page, Sorts, Compress} = {...this.state};
                if (debug) {
                    console.log(`%c this.state `, color.color_css3, JSON.stringify(this.state));
                    console.log(`%c this.state.Page `, color.color_css3, Page);
                    console.log(`%c this.state.Sorts `, color.color_css3,  Sorts);
                    console.log(`%c this.state.Compress `, color.color_css3, Compress);
                    // console.log(`%c this.state.Page `, color.color_css3, Page);
                }
                /* 
                    console.log('%c autoSave ??? = \n', color.css2);
                    this.autoSave();
                */
                // init sort key
                /* let sort_key_init = this.props.sort_items;
                let arr = this.state.Sorts;
                arr[0].Field = Object.keys(sort_key_init)[0];
                that.setState({
                    Sorts: arr
                }); */
                return {
                    options_obj: Object.assign(
                        prevState.options_obj, 
                        {
                            "Page": Page, 
                            // "Sorts": Sorts, 
                            "Compress": Compress
                        }
                    )
                }
            }
        );
        if (debug) {
            console.log(`%c this.state.url_objs `, color.color_css3, JSON.stringify(this.state.url_objs));
        }
        temp_obj.options_obj = this.state.options_obj;
        // options_obj
        this.setState({
            url_objs: temp_obj
        });
        this.props.TestClick(temp_obj);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // handleSubmit
        // TestClick(url)
        let temp_obj = this.state.url_objs;
        temp_obj.options_obj = this.state.options_obj;
        this.setState({
            url_objs: temp_obj
        });
        this.props.TestClick(this.state.url_objs);
        // autosave ???
    };
    // Compress
    onRadioGroupChange = (e) => {
        // onRadioGroupChange
        if (debug) {
            console.log('selects checked', e.target);
            // {value: "false", type: "radio", checked: true, disabled: false, onChange: ƒuntion, ...}
            console.log('selects checked', e.target.value);
            // true / false
        }
        let str_bool = e.target.value.toString();
        // value={this.state.Compress}
        this.setState({
            Compress: str_bool
        });
        let temp_obj = this.state.options_obj;
        temp_obj.Compress = str_bool;
        this.setState({
            options_obj: temp_obj
        });
        if (debug) {
            console.log('%c new this.state.Compress = ', color.color_css2, this.state.Compress);
        }
        if (debug) {
            console.log('%c autoSave ??? = \n', color.css2);
        }
        this.autoSave();
    };
    // FastDateFilterTyp
    onSelectDateChange = (e) => {
        if (debug) {
            console.log('%c select Date checked', color.css1, e);
        }
        this.setState({
            FastDateFilterType: e
        });
        let temp_obj = this.state.options_obj;
        temp_obj.FastDateFilterType = e;
        this.setState({
            options_obj: temp_obj
        });
        if (debug) {
            console.log('%c autoSave ??? = \n', color.css2);
        }
        this.autoSave();
    };
    // FastQuarterReportType
    onCheckboxGroupChange = (e) => {
        if (debug) {
            console.log('Checkbox Group checked = ', e);
            // ["Q1th", "Q2nd", "Q3rd", "Q4th"]
        }
        this.setState({
            FastQuarterReportType: e
        });
        let temp_obj = this.state.options_obj;
        temp_obj.FastQuarterReportType = e;
        this.setState({
            options_obj: temp_obj
        });
        console.log('%c autoSave ??? = \n', color.css2);
        this.autoSave();
    };
    // Page
    onPageInputChange = (e) => {
        if (!debug) {
            console.log('page value', e.target.value);
            console.log('page id', e.target.id);
        }
        if (debug & (page_i === 1)) {
            console.log('initial this.state.Page = ', this.state.Page);
            // {PageNo: "1", PageSize: 100}
            page_i += 1;
        }
        let obj = {};
        if(e.target.id === "pages"){
            obj["PageNo"] = e.target.value;
        }
        if(e.target.id === "size"){
            obj["PageSize"] = e.target.value;
        }
        this.setState({
            Page: Object.assign(this.state.Page, obj)
        });
        // page_pages page_size
        if (!debug) {
            console.log('changed this.state.Page ', this.state.Page);
        }
    };
    // Sorts Key
    onSelectSortKeyChange = (e) => {
        // onSelectSortChange
        if (debug) {
            console.log('%c select Sort Key checked', color.color_css2, e);
            console.log('%c old Sort Key = \n', color.css1, JSON.stringify(this.state.Sorts));
        }
        let temp_obj = this.state.options_obj,
            arr = this.state.Sorts,
            obj = {};
        if(arr.length === 0){
            arr.push(obj);
        }
        if(e !== undefined){
            obj.Field = e;
            // in case arr === [], caouse error
            arr[0] = Object.assign(arr[0],obj);
           /*  this.setState({
                Sorts: arr
            }); */
            temp_obj.Sorts = arr;
            this.setState({
                options_obj: temp_obj
            });
            this.autoSave();
        }else if(e === undefined){
            // no key, no value ???
            // Sort
            if(arr[0].Key === undefined){
                // arr
                arr = [];
                // reset []
                /* this.setState({
                    Sorts: arr
                }); */
                temp_obj.Sorts = arr;
                this.setState({
                    options_obj: temp_obj
                });
                this.autoSave();
            }
        }
    };
    // Sorts Methods
    onSelectSortMethodChange = (e) => {
        // onSelectSortChange
        if (debug) {
            console.log('%c select Sort Method checked', color.color_css2, e);
            // asc/desc/no
            // undefined
            console.log('%c old Sorts Sort = \n', color.css1, JSON.stringify(this.state.Sorts));
        }
        let temp_obj = this.state.options_obj,
            arr = this.state.Sorts,
            obj = {};
        if(arr.length === 0){
            arr.push(obj);
        }
        if(e !== undefined){
            obj.Sort = e;
            // in case arr === [], caouse error
            arr[0] = Object.assign(arr[0],obj);
            /* this.setState({
                Sorts: arr
            }); */
            temp_obj.Sorts = arr;
            this.setState({
                options_obj: temp_obj
            });
            this.autoSave();
        }else if(e === undefined){
            // no key, no value ???
            // Field
            if(arr[0].Key === undefined){
                // arr
                arr = [];
                // reset []
                /* this.setState({
                    Sorts: arr
                }); */
                temp_obj.Sorts = arr;
                this.setState({
                    options_obj: temp_obj
                });
                this.autoSave();
            }
        }
    };
    // OutField
    onOutFieldChange = (e) => {
        if (debug) {
            console.log('%c select OutField checked', color.color_css3, e);
            // ["BasicInformationRow.A0", "BasicInformationRow.A2", "BasicInformationRow.A5"]
        }
        // e.toString()
        // let out = JSON.stringify(e);
        // OutField":"[\"A0\",\"A1\"]"
        // "["A1","A0","A2","A3"]"
        // out.toString();
        // "A1,A0,A2,A3"
        let out = e;
        if (debug) {
            console.log('%c new OutField checked', color.color_css3, out);
            //  ["A1", "A0", "A2", "A3"]
        }
        this.setState({
            OutField: out
        });
        let temp_obj = this.state.options_obj;
        temp_obj.OutField = out;
        this.setState({
            options_obj: temp_obj
        });
        if (debug) {
            console.log('%c autoSave ??? = \n', color.css2);
        }
        this.autoSave();
    };
    // IgnoreField
    onIgnoreFieldChange = (e) => {
        if (debug) {
            console.log('select IgnoreField checked', e);
            // 
        }
        this.setState({
            IgnoreField: e
        });
        let temp_obj = this.state.options_obj;
        temp_obj.IgnoreField = e;
        this.setState({
            options_obj: temp_obj
        });
        if (debug) {
            console.log('%c autoSave ??? = \n', color.css2);
        }
        this.autoSave();
    };
    // Group
    onGroupChange = (e) => {
        if (debug) {
            console.log('%c select Group checked', color.color_css3, e);
            // ["BasicInformationRow.A0"/"BasicInformationRow.A2"/ "BasicInformationRow.A5"]
        }
        // single select ???
        this.setState({
            Group: e
        });
        let temp_obj = this.state.options_obj;
        temp_obj.Group = e;
        this.setState({
            options_obj: temp_obj
        });
        if (debug) {
            console.log('%c autoSave ??? = \n', color.css2);
        }
        this.autoSave();
    };
    // BeginDate
    BeginDateChange = (date, dateString) => {
        // timepicker
        // "BeginDate":"2017-08-03","EndDate":"2017-08-26"
        if(debug){
            console.log(`BeginDate dateString = ${dateString}`);
        }
        // dateString
        this.setState({
            BeginDate: dateString
        });
        let temp_obj = this.state.options_obj;
        temp_obj["BeginDate"] = dateString;
        this.setState({
            options_obj: temp_obj
        });
        if (debug) {
            console.log('%c autoSave ??? = \n', color.css2);
        }
        this.autoSave();
    }
    // EndDateChange
    EndDateChange = (date, dateString) => {
        // timepicker
        // "BeginDate":"2017-08-03","EndDate":"2017-08-26"
        if(debug){
            console.log(`EndDate dateString = ${dateString}`);
        }
        this.setState({
            EndDate: dateString
        });
        let temp_obj = this.state.options_obj;
        temp_obj["EndDate"] = dateString;
        this.setState({
            options_obj: temp_obj
        });
        if (debug) {
            console.log('%c autoSave ??? = \n', color.css2);
        }
        this.autoSave();
    };
    // default
    onDefaultInputChange = (e) => {
        // onDefaultInputChange
        if (debug) {
            console.log('Default Input e.target checked = ', e.target);
            // <input type="text" placeholder="☹️ 暂无默认的可选项命令值" value="" id="GilCodes" class="ant-input">
            console.log('Default Input e.target.value checked = ', e.target.value);
            // value = this.state.defaultInput[id] ???
            console.log('Default e.target.id = ', e.target.id);
            // GilCodes
            console.log('Default e.target.key = ', e.target.key);
            // undefined
        }
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
        this.setState(
            (prevState, props) => {
                return{
                    defaultInput : Object.assign(prevState.defaultInput, obj)
                }
            }
        );
        if (debug) {
            console.log('%c autoSave ??? = \n', color.css2);
        }
        this.autoSave();
        // obj[key] = value;
        /* 
            let key = e.target.id;
            let value = e.target.value;
            let values = value.trim().replace(/([\w]{1})[\s]([\w]{1})/ig, ",").split(",");

            if(values.length > 1){
                // pass array
                obj[key] = values;
            }else{
                // pass int string
                obj[key] = value;
            }
        */
    };
    render() {
        const {sort_items, fields_items, option_datas} = this.props;
        const { getFieldDecorator } = this.props.form;
        // value === output name & desc
        /* const option_datas = [
            {
                key: "k1",
                name: "EndDate",
                type: "string",
                value: "2016-09-30",
                description: "报告期"
            },
            {
                key: "k2",
                name: "InnerCode",
                type: "integer",
                value: "报表[267:财务公司,1517:保险,1360:券商,9971:信托,1565:券商集合理财,36721:企业年金,35793:社保基金]",
                description: "证券内码"
            },
            {
                key: "k3",
                name: "Mark",
                type: "integer",
                value: "仅SHKindCode=3时有效，默认0:券商,1:信托",
                description: "SHKindCode=3时有效，通用标示用于对以下{默认0:券商,1:信托}特殊处理"
            },
            {
                key: "k4",
                name: "ShKindCode",
                type: "integer",
                value: "json (json文本格式)",
                description: "机构类型代码{15:财务公司,4:保险,3:券商/信托,37:券商集合理财,35:企业年金,30:社保基金}"
            },
            {
                key: "k-f",
                name: "Filters",
                type: "array",
                value: "数据过滤，支持In、Between、Like、==、quarter(季报) 过滤器，参见具体过滤器的使用",
                description: "数据过滤，支持In、Between、Like、==、quarter(季报) 过滤器，参见具体过滤器的使用"
            },
            {
                key: "k-s",
                name: "Sorts",
                type: "array",
                value: "select 1 = 请先选择排序字段: (? multi table ? )dynamic output desc; select 2 =  排序方式，升序或者降序: (升序),(降序),(无序)",
                description: "排序字段，支持排序组合"
            },
            {
                key: "k-p",
                name: "Page",
                type: "object",
                value: "input 1 = 请求的页数：1 ; input 2 = 每页的大小：100",
                description: "分页参数"
            },
            {
                key: "k-of",
                name: "OutField",
                type: "array",
                value: "multi select options 1 = dynamic output desc (全选/全不选/customize)",
                description: "数据输出的字段，用于输出字段过滤，当输出字段数量小于不输出字段数量时采用"
            },
            {
                key: "k-if",
                name: "IgnoreField",
                type: "array",
                value: "multi select options 1 = dynamic output desc (全选/全不选/customize)",
                description: "数据输出的字段，用于输出字段过滤，当输出字段数量大于不输出字段数量时采用"
            },
            {
                key: "k-fdft",
                name: "FastDateFilterType",
                type: "array",
                value: "select 1 = fixed ((最新日期) (今年以来) (近一月) (近三月) (近六月) (近一年) (近二年) (近三年) (近五年) (全部) (上市以前) (上市以后) (自定义 ? datapicker ))",
                description: "日期 快速过滤类型"
            },
            {
                key: "k-fqrt",
                name: "FastQuarterReportType",
                type: "array",
                value: "multi checkbox 1 = fixed ((一季报) (中报) (三季报) (年报))",
                description: "季报 快速过滤类型"
            }
        ]; */
        // ???
        // fixed columns 
        const options_columns = [
            {
                title: "字段名",
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
                title: "赋值",
                dataIndex: "value",
                key: "value",
                render: (text, index) => {
                    /* 
                        dynamic type (array, enum, object, date, string, int, flaot, boolean)
                        input 
                        datepicker
                        select options
                    */
                    /* 
                        <input 
                            type="text"
                            placeholder="可选项 赋值"
                            style={{minWidth: 100}}
                            size="40"
                        />
                    */
                    if (!debug) {
                        console.log(`%c index = ${index}`, color.css1);
                        // index = [object Object] === row datas
                        console.log(`%c JSON.stringify(index) = ${JSON.stringify(index)}`, color.color_css3);
                        /* 
                            {
                                "key":"k-fdft",
                                "name":"FastDateFilterType",
                                "type":"array",
                                "value":"select 1 = fixed ((最新日期) (今年以来) (近一月) (近三月) (近六月) (近一年) (近二年) (近三年) (近五年) (全部) (上市以前) (上市以后) (自定义 ? datapicker ))",
                                "description":"日期 快速过滤类型"
                            }
                        */
                        console.log(`%c text = ${text}`, color.css2);
                        //  text = select 1 = fixed ((最新日期) (今年以来) (近一月) (近三月) (近六月) (近一年) (近二年) (近三年) (近五年) (全部) (上市以前) (上市以后) (自定义 ? datapicker ))
                    }
                    // switch
                    let valueType;
                    const FDFT = [
                        {"LatestTime":"最新日期"},
                        {"CurrentYear":"今年以来"},
                        {"Latest1Month":"近一月"},
                        {"Latest3Month":"近三月"},
                        {"Latest6Month":"近六月"},
                        {"Latest1Year":"近一年"},
                        {"Latest2Year":"近二年"},
                        {"Latest3Year":"近三年"},
                        {"Latest5Year":"近五年"},
                        {"AllYear":"全部"},
                        {"ListedBefore":"上市以前"},
                        {"ListedAfter":"上市以后"},
                        {"Customer":"自定义"}
                    ];
                    // datepicker 自定义
                    // demo index_values 
                    const QR = [
                        {"label": "一季报", "value": "Q1th"},
                        {"label": "中报", "value": "Q2nd"},
                        {"label": "三季报", "value": "Q3rd"},
                        {"label": "年报", "value": "Q4th"}
                    ];
                    // BeginDate & EndDate
                    // const date = new Date().toLocaleDateString().replace(/\//g, "-");
                    // "2017-8-29"
                    const date = new Date().toLocaleDateString().replace(/\//ig, `-`);
                    let date_placeholder = `☹️ 请输入 ${date } 格式的时间!`;
                    // switch cases
                    let input_name = index.name;
                    switch (index.name) {
                        case "Sorts":
                            valueType = (
                                <div>
                                    {/* 
                                        1. input options === table columns
                                        2. multi tables to one array === input options table columns value
                                        3. map values = [{A0: desciption}, ..., {B0: desciption}]
                                        4. update obj url
                                    */}
                                    请先选择排序字段:
                                    {/* mode="multiple" */}
                                    <Select
                                        allowClear
                                        placeholder="排序字段，支持排序组合"
                                        onChange={this.onSelectSortKeyChange}
                                        defaultActiveFirstOption
                                        showSearch
                                        // defaultValue={sort_items[Object.keys(sort_items)[0]]}
                                        // ??? Select dynamic Options, how to set defaultValue ???
                                        /*
                                            obj = {k1: 1, k2: 2, k3: 3};
                                            // {k1: 1, k2: 2, k3: 3}
                                            Object.keys(obj)[0];
                                            // "k1"
                                            obj[Object.keys(obj)[0]];
                                            // 1
                                        */
                                        >
                                        {/* 
                                            Select.js:630 Uncaught TypeError: Cannot read property 'type' of null
                                        */}
                                        {
                                            [sort_items].map(
                                                (sort_items) => {
                                                    let i = 0;
                                                    let arr = [];
                                                    for(let key in sort_items){
                                                        arr.push(
                                                            <Option
                                                                key={i}
                                                                value={key}>
                                                                {
                                                                    sort_items[key]
                                                                }
                                                            </Option>
                                                        )
                                                    }
                                                    return arr;
                                                }
                                            )
                                        }
                                    </Select>
                                    排序方式: 
                                    <Select
                                        allowClear
                                        placeholder="排序方式: (升序) 或 (降序) 或 (无序)"
                                        onChange={this.onSelectSortMethodChange}
                                        showSearch
                                        // defaultValue="no"
                                        > 
                                        <Option value="asc">升序</Option>
                                        <Option value="desc">降序</Option>
                                        <Option value="no">无序</Option>
                                    </Select>
                                </div>
                            )
                            break;
                        case "FastDateFilterType":
                            valueType = (
                                <Select
                                    allowClear
                                    placeholder="数据快速过滤类型"
                                    onChange={this.onSelectDateChange}
                                    defaultValue="LatestTime"
                                    > 
                                    {
                                        FDFT.map(
                                            (value, index) => {
                                                if (!debug) {
                                                    console.log(`value = `, value);
                                                }
                                                for(let key in value){
                                                    if (!debug) {
                                                        console.log(`value[key] = `, value[key]);
                                                        console.log(`key = `, key);
                                                    }
                                                    return(
                                                        <Option
                                                            key={index}
                                                            value={key}>
                                                            {
                                                                value[key]
                                                            }
                                                        </Option>
                                                    );
                                                }
                                            }
                                        )
                                    }
                                </Select>
                            )
                            break;
                        case "FastQuarterReportType":
                            valueType = (
                                <CheckboxGroup
                                    options={QR}
                                    defaultValue={[]}
                                    onChange={this.onCheckboxGroupChange}
                                />
                            )
                            break;
                        case "OutField":
                            valueType = (
                                <Select
                                    mode="multiple"
                                    allowClear
                                    placeholder="数据输出的字段，用于输出字段过滤，当输出字段数量小于不输出字段数量时采用"
                                    onChange={this.onOutFieldChange}
                                    >
                                    {
                                        Object.keys(fields_items).map(
                                            (key, i) => {
                                                return(
                                                    <Option
                                                        key={i}
                                                        value={key}>
                                                        {
                                                            fields_items[key]
                                                        }
                                                    </Option>
                                                );
                                            }
                                        )
                                    }
                                </Select>
                            )
                            break;
                        case "IgnoreField":
                            valueType = (
                                <Select
                                    mode="multiple"
                                    allowClear
                                    placeholder="数据输出的字段，用于输出字段过滤，当输出字段数量小于不输出字段数量时采用"
                                    onChange={this.onIgnoreFieldChange}
                                    >
                                    {
                                        Object.keys(fields_items).map(
                                            (key, i) => {
                                                return(
                                                    <Option
                                                        key={i}
                                                        value={key}>
                                                        {
                                                            fields_items[key]
                                                        }
                                                    </Option>
                                                );
                                            }
                                        )
                                    }
                                </Select>
                            )
                            break;
                        case "Page":
                            valueType = (
                                <div>
                                    <lable>请求的页数: </lable>
                                    <Input 
                                        placeholder="请求的页数"
                                        value={this.state.Page.PageNo}
                                        type="text"
                                        onChange={this.onPageInputChange}
                                        id="pages"
                                    />
                                    <lable>每页的大小: </lable>
                                    <Input 
                                        placeholder="每页的大小"
                                        value={this.state.Page.PageSize}
                                        type="text"
                                        onChange={this.onPageInputChange}
                                        id="size"
                                    />
                                </div>
                            )
                            break; 
                        case "Compress": 
                            valueType = (
                                <RadioGroup
                                    onChange={this.onRadioGroupChange}
                                    value={this.state.Compress}
                                    // defaultChecked
                                    >
                                    <Radio value="true">
                                        是
                                    </Radio>
                                    <Radio value="false">
                                        否
                                    </Radio>
                                </RadioGroup>
                            )
                            break;
                        case "Group": 
                            valueType = (
                                <Select
                                    allowClear
                                    placeholder="分组字段，当选择分组时，pageInfo 同样针对组分页"
                                    onChange={this.onGroupChange}
                                    > 
                                    {
                                        Object.keys(fields_items).map(
                                            (key, i) => {
                                                return(
                                                    <Option
                                                        key={i}
                                                        value={key}>
                                                        {
                                                            fields_items[key]
                                                        }
                                                    </Option>
                                                );
                                            }
                                        )
                                    }
                                </Select>
                            )
                            break;
                        case "Filters": 
                            valueType = (
                                <Input 
                                    placeholder="可选项 Filters 赋值"
                                    value=""
                                    type="text"
                                    key={index.name}
                                    disabled
                                />
                            )
                            break;
                        case "CallBack": 
                            valueType = (
                                <Input 
                                    placeholder="可选项 CallBack 赋值"
                                    value=""
                                    type="text"
                                    key={index.name}
                                    disabled
                                />
                            )
                            break;
                        case "ExtParams": 
                            valueType = (
                                <Input 
                                    placeholder="可选项 ExtParams 赋值"
                                    value=""
                                    type="text"
                                    key={index.name}
                                    disabled
                                />
                            )
                            break;
                        case "BeginDate": 
                            valueType = (
                                /* 
                                    <Input 
                                        placeholder="可选项 BeginDate 赋值"
                                        value={this.state.BeginDate ? this.state.BeginDate : date}
                                        type="text"
                                        key={index.name}
                                        onChange={this.BeginDateChange}
                                        disabled
                                    /> 
                                */
                                <FormItem>
                                    {
                                        getFieldDecorator(index.name, {
                                            rules: [
                                                {
                                                    required: false,
                                                    message: '请输入可选项 BeginDate 字段值, 可选项字段值可为空!'
                                                }
                                            ],
                                            // initialValue: text
                                        })(
                                            <DatePicker 
                                                onChange={this.BeginDateChange} 
                                                // placeholder="日期格式 2017-08-08"
                                                placeholder={date_placeholder}
                                                style={{minWidth: 300}}
                                                allowClear
                                                id={index.name}
                                                showToday
                                            />
                                        )
                                    }
                                </FormItem>
                            )
                            break;
                        case "EndDate": 
                            valueType = (
                                <FormItem>
                                    {
                                        getFieldDecorator(index.name, {
                                            rules: [
                                                {
                                                    required: false,
                                                    message: '请输入可选项 EndDate 字段值, 可选项字段值可为空!'
                                                }
                                            ],
                                            // initialValue: text
                                        })(
                                            <DatePicker 
                                                onChange={this.EndDateChange} 
                                                // placeholder="日期格式 2017-08-08"
                                                placeholder={date_placeholder}
                                                style={{minWidth: 300}}
                                                allowClear
                                                id={index.name}
                                                showToday
                                            />
                                        )
                                    }
                                </FormItem>
                            )
                            break;
                        default:
                            valueType = (
                                <Input 
                                    placeholder="☹️ 暂无默认的可选项命令值"
                                    value={
                                        this.state.defaultInput[index.name] 
                                        ?
                                        this.state.defaultInput[index.name] 
                                        :
                                        (text ? text : "")
                                    }
                                    type="text"
                                    id={input_name}
                                    key={index.key + 1}
                                    onChange={this.onDefaultInputChange}
                                    // disabled
                                /> 
                            )
                            // break;
                    }
                    return valueType;
                },
                // width: "55%"
            },
            {
                title: "描述",
                dataIndex: "desc",
                key: "desc",
                width: "40%"
            }
        ];
        return (
            <div
                style={{
                    // width: "calc(100% - 300px)",
                    // margin: 0,
                    // padding: 0,
                    width: "100%",
                    boxSizing: "border-box",
                    // overflowY: "scroll"
                    overflowX: "hidden",
                }}
                onChange={this.autoSave}
                >
                    <Form
                        onSubmit={this.handleSubmit}
                        >
                        <Table
                            dataSource={(this.props.dataSource ? this.props.dataSource : option_datas)}
                            columns={options_columns}
                            bordered
                            pagination={false}
                        />
                    </Form>
            </div>
        );
    }
}



OptionsItems.propTypes = {
    // init_options_datas: PropTypes.array.isRequired,
    sort_items: PropTypes.object.isRequired,
    fields_items: PropTypes.object.isRequired,
    option_datas: PropTypes.array.isRequired,
    TestClick: PropTypes.func.isRequired,
    required_datas: PropTypes.object.isRequired,
};

// const OI = OptionsItems;

const OI = Form.create()(OptionsItems);
export {OI};
export default OI;