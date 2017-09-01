# search 




```js



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




```




```jsx

/* 
    <input 
        type="text" 
        id="textfiled" 
        value="多个关键字之间用 空格 分割" 
        onfocus="javascript:if(this.value=='多个关键字之间用 空格 分割')this.value=''" 
        onblur="if(this.value =='') this.value = '多个关键字之间用 空格 分割';"
    />
*/




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



    /* 
        "Action":"GetSchemaArray"
        "Action":"GetRowSchemaArray"
        // GetAllLoadSearch 
    */
    // 测试
    url = `${urls.search}?{"Admin":"report","Action":"GetAllLoadSearch","WriteType":"json","${key}":"${value}"}`;
    /* 
        if (key === "KeyWord") {
            url = `${urls.search}?{"Admin":"report","Action":"GetSchemaArray","WriteType":"json","${key}":"${value}"}`;
        }else{
            url = `${urls.search}?{"Admin":"report","Action":"GetRowSchemaArray","WriteType":"json","${key}":"${value}"}`;
        } 
    */
// GetTreeSchema


const debug = true;

```




基金->F9->基金概况 



http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetAllLoadSearch%22,%22WriteType%22:%22json%22,%22KeyWord%22:%22%E5%9F%BA%E9%87%91-%3EF9-%3E%E5%9F%BA%E9%87%91%E6%A6%82%E5%86%B5%20%22}


fund.f9.fund_profile.FundManager.BasicInformations



```jsx

    <Button
        type="primary"
        htmlType="submit"
        icon="search"
        >
        查询
    </Button>


    <Button
        type="primary"
        htmlType="button"
        icon="search"
        loading={this.state.loading}
        onClick={this.onSubmit}
        >
        查询
    </Button>

```




































