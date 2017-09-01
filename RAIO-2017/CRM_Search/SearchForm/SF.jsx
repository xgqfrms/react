import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 2017.08.09
 * xgqfrms
 * 
 * @class SearchForm
 * @extends {Component}
 */

// utils
import {debug, xyz_debug} from '../../../app/debug.jsx';
import {urls} from '../../../app/urls.js';

// libs
import {
    Form,
    Input,
    Select,
    Button,
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class SearchForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // e.stopPropagation();
        this.props.form.validateFieldsAndScroll(
            (err, values) => {
                this.setState({
                    loading: !this.state.loading
                });
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
                            if(debug){
                                console.log(`value = `, value.toString());
                            }
                        }else{
                            value = "undefined";
                            if(debug){
                                console.log(`new value = `, value.toString());
                                console.log(`new value.length = `, value.length);
                            }
                        }
                        if(xyz_debug(false)){
                            console.log(`key = `, key);
                            console.log(`value = `, value);
                        }
                        if((value !== "undefined" && value.length > 0)){
                            // Search 
                            url = `${urls.search}?{"Admin":"report","Action":"GetAllLoadSearch","WriteType":"json","${key}":"${value}"}`;
                        }else{
                            url = `${urls.search}?{'Admin':'report','Action':'GetAllLoadSearch','WriteType':'json'}`;
                            // GetTreeSchema
                        }
                        if(xyz_debug(false)){
                            console.log(`fetch url = `, url);
                        }
                        // fetch data & routes = data;
                        if (!debug) {
                            console.log(`this.props.xyzSearch = `, this.props.xyzSearch);
                        }
                        this.props.xyzSearch(url);
                    }
                } catch (error) {
                    throw new Error(error.message, error.name, error.fileName, error.lineNumber, error.columnNumber);
                    // new Error([message[, fileName[, lineNumber]]])
                }
                setTimeout(
                    () => {
                    this.setState({
                        loading: !this.state.loading
                    });
                }, 1000);
            }
        );
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        const prefixSelector = getFieldDecorator(
            'prefix', 
            {
                initialValue: "KeyWord",
                message: "多个关键字之间用 空格 分割"
            }
        )(
            <Select style={{width: 130}}>
                <Option value="KeyWord">
                    关键字 查询
                </Option>
                <Option value="ReportName">
                    ReportName 查询
                </Option>
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
                        <Button
                            type="primary"
                            htmlType="submit">
                            查询
                        </Button>
                    */}
                    <FormItem
                        {...formItemLayout}
                        label=""
                        colon={false}
                        style={{
                            textAlign: "center", 
                            marginLeft: "25%"
                        }}
                        >
                        {
                            getFieldDecorator(
                                'searchkey', 
                                {
                                    rules: [
                                        {
                                            required: false,
                                            message: 'Please input your 查询关键字!'
                                        }
                                    ]
                                }
                            )(
                                <Input
                                    addonBefore={prefixSelector}
                                    placeholder="多个关键字之间用 空格 分割!"
                                    style={{ width: '100%', maxWidth: 600}}
                                />
                            )
                        }
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            icon="search"
                            >
                            查询
                        </Button>
                    </FormItem>
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





