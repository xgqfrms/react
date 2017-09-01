import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 2017.08.09
 * xgqfrms
 * 
 * @class SearchForm
 * @extends {Component}
 */

// import {debug} from '../../app/debug.jsx';

import {urls} from '../../app/urls.js';

import {
    Form,
    Input,
    Icon,
    Select,
    Button,
    Checkbox
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const debug = true;

class SearchForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // 
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // e.stopPropagation();
        this.props.form.validateFieldsAndScroll(
            (err, values) => {
                try {
                    if (!err) {
                        if(debug ? debug : true){
                            console.log('Received values of form: ', values);
                        }
                        // object => JSON
                        // fetch data
                        let obj = values,
                            url = "";
                        let key = obj.prefix,
                            value = obj.searchkey;
                        if(value !== undefined){
                            if(debug ? debug : true){
                                console.log(`value = `, value.toString());
                            }
                        }else{
                            value = "undefined";
                            if(debug ? debug : true){
                                console.log(`new value = `, value.toString());
                                console.log(`new value.length = `, value.length);
                            }
                        }
                        if(debug ? debug : true){
                            console.log(`key = `, key);
                            console.log(`value = `, value);
                        }
                        if((value !== "undefined" && value.length > 0)){
                        /* 
                            "Action":"GetSchemaArray"
                            "Action":"GetRowSchemaArray"
                        */
                        // 测试    
                        url = `${urls.search}?{"Admin":"report","Action":"GetSchemaArray","WriteType":"json","${key}":"${value}"}`;
                        /* 
                            if (key === "KeyWord") {
                                url = `${urls.search}?{"Admin":"report","Action":"GetSchemaArray","WriteType":"json","${key}":"${value}"}`;
                            }else{
                                url = `${urls.search}?{"Admin":"report","Action":"GetRowSchemaArray","WriteType":"json","${key}":"${value}"}`;
                            } 
                        */
                        }else{
                            url = `${urls.search}?{'Admin':'report','Action':'GetAllLoad','WriteType':'json'}`;
                            // GetTreeSchema
                        }
                        if(debug ? debug : true){
                            console.log(`fetch url = `, url);
                        }
                        // fetch data & routes = data;
                        // console.log(`this.props.xyzSearch = `, this.props.xyzSearch);
                        this.props.xyzSearch(url);
                    }
                } catch (error) {
                    throw new Error(error.message, error.name, error.fileName, error.lineNumber, error.columnNumber);
                    // new Error([message[, fileName[, lineNumber]]])
                }
            }
        );
    }
    /* 
    <input 
        type="text" 
        id="textfiled" 
        value="多个关键字之间用 空格 分割" 
        onfocus="javascript:if(this.value=='多个关键字之间用 空格 分割')this.value=''" 
        onblur="if(this.value =='') this.value = '多个关键字之间用 空格 分割'" ;="">
     */
    render() {
        const { getFieldDecorator } = this.props.form;
        const prefixSelector = getFieldDecorator(
            'prefix', 
            {
                initialValue: "KeyWord",
                message: "多个关键字之间用 空格 分割"
            }
        )(
            <Select style={{ width: 130 }}>
                <Option value="KeyWord">关键字 查询</Option>
                <Option value="ReportName">ReportName 查询</Option>
            </Select>
        );
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 14,
                    offset: 6
                }
            }
        };
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                {/* 
                    <FormItem
                        {...formItemLayout}
                        label="E-mail"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email', 
                                        message: 'The input is not valid E-mail!',
                                    }, 
                                    {
                                        required: true, 
                                        message: 'Please input your E-mail!',
                                    }
                                ]
                            })(
                                <Input />
                            )
                        }
                    </FormItem>
                */}
                    {/* <Button
                        type="primary"
                        htmlType="submit">
                        查询
                    </Button> */}
                    <FormItem
                        {...formItemLayout}
                        label="查询"
                        >
                        {
                            getFieldDecorator('searchkey', {
                                rules: [
                                    {
                                        required: false,
                                        message: 'Please input your 查询关键字!'
                                    }
                                ]
                        })(
                            <Input
                                addonBefore={prefixSelector}
                                placeholder="多个关键字之间用 空格 分割!"
                                style={{ width: '100%', maxWidth: 600}}
                            />
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button
                            type="primary"
                            htmlType="submit">
                            查询
                        </Button>
                    </FormItem>
                {/* 
                    <FormItem
                        {...tailFormItemLayout}
                        style={{ marginBottom: 8 }}>
                        {
                            getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                                initialValue: false
                            })(
                                <Checkbox>
                                    I have read the <a href="#">agreement</a>
                                </Checkbox>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>
                                Remember me
                            </Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem> 
                */}
                </Form>
            </div>
        );
    }
}

SearchForm.propTypes = {
    xyzSearch: PropTypes.func.isRequired
};

const SF = Form.create()(SearchForm);

export {SF};
export default SF;


        /* 
            "Action":"GetSchemaArray"
            "Action":"GetRowSchemaArray"
        */
/* 

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}


*/




