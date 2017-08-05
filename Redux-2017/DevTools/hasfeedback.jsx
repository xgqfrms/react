const { Form, Icon, Input, Button, Select } = antd;
const FormItem = Form.Item;
const Option = Select.Option;

function hasErrors(fieldsError) {
    return(
        Object
        .keys(fieldsError)
        .some(
            (field) => (fieldsError[field])
        )
    );
}
// Array.some() 实现的是非贪心算法(Regex: Regular Expression)，
// 只要找到一个 true 就立即返回，不再向后面搜索了！


/* eslint-disable no-console */
// /* eslint-disable react/prop-types */

class HorizontalLoginForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            console.log('values', values);
            this.props.onSearch(values);
        });
    }
    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const formItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 14
            }
        };
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''} 
                    hasFeedback
                    label="用户名"
                    >
                    {
                        getFieldDecorator('userName', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入您的用户名!'
                                }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                                placeholder="Username"
                            />
                        )
                    }
                </FormItem>
                <FormItem
                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError || ''}
                    hasFeedback
                    label="密码"
                    >
                    {
                        getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入您的密码!'
                                }
                            ],
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
                    label="Select"
                    hasFeedback
                    {...formItemLayout}
                    >
                    {
                        getFieldDecorator('select', {
                        rules: [
                            { required: true, message: 'Please select your country!' },
                        ],
                        initialValue: "china"
                        })(
                        <Select  allowClear placeholder="Please select a country" style={{minWidth: 200}}>
                            <Option value="china">China</Option>
                            <Option value="use">U.S.A</Option>
                        </Select>
                        )
                    }
                </FormItem>
                <hr style={{margin: 10}}/>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={
                            hasErrors(getFieldsError())
                        }
                        
                        >
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

// onClick={this.props.onSearch(this.props.form.validateFields((err, values) => values)}

/* eslint-enable */

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

const WHLF = WrappedHorizontalLoginForm;
// App

class APP extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: []
        };
    }
    submitSearchHandler = (values) => {
        console.log(`search values`, values);
        //alert(`Testing...`);
    };
    render() {
        return (
            <div>
                <WHLF onSearch={this.submitSearchHandler} />
            </div>
        );
    }
}


ReactDOM.render(<APP />, mountNode);


/* 

validateStatus={userNameError ? 'error' : ''}
help={userNameError || ''} 


===

hasFeedback

*/