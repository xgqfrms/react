import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Form,
    Input,
    Icon,
    Button,
    Checkbox
} from 'antd';

const FormItem = Form.Item;

/**
 * 2017.08.09 
 * xgqfrms
 * 
 * @class LoginForm
 * @extends {Component}
 */

class LoginForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // 
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll(
            (err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            }
        );
    }
    render() {
        const { getFieldDecorator } = this.props.form;
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
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem
                        {...formItemLayout}
                        label="userName"
                        hasFeedback
                        >
                        {
                            getFieldDecorator('userName', {
                                rules: [ 
                                    {
                                        required: true, 
                                        message: 'Please input your username!',
                                    }
                                ]
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                                    type="text" 
                                    placeholder="Username" 
                                />
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Password"
                        hasFeedback                        
                        >
                        {
                            getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your Password!'
                                    }
                                ]
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ fontSize: 13 }} />} 
                                    type="password" 
                                    placeholder="Password" 
                                />
                            )
                        }
                    </FormItem>
                    <FormItem
                        {...tailFormItemLayout}
                        >
                        {
                            getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )
                        }
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <span style={{margin: 'auto 10px'}}>OR</span>
                        <a href="">register now!</a>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            style={{width: '100%'}}>
                            Log in
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

LoginForm.propTypes = {

};

const LF = Form.create()(LoginForm);

export {LF};
export default LF;


