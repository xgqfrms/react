# required



```jsx


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


```


```jsx

    <Input 
        onChange={
            (e) => {
                if (debug) {
                    console.log(`index.name = `, index.name);
                    console.log(`e = `, e.target.value);
                }
                let key = index.name,
                    value = e.target.value;
                url_obj[key] = value;
                // key's value
                if (debug) {
                    console.log(`${key} url_obj = `, url_obj); 
                }
                let str_obj = JSON.stringify(url_obj),
                    url = `${urls.test}?${str_obj}`;
                if (debug) {
                    console.log(`%c changed url = \n`, color.green_16_border, url); 
                }
                return url;
            }
        }
        type="text"
        placeholder="☹️ 暂无默认的示例命令值 !"
    />

```





```js


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


 
/* eslint-disable no-console */



/* eslint-enable no-console */

```

## setState

```jsx


this.setState(
    (prevState, props) => {
        return {
            counter: prevState.counter + props.step
        };
    }
);


Object.assign(
    previousState,
    {quantity: state.quantity + 1},
    {quantity: state.quantity + 1},
    // ...
)


this.setState(
    (prevState) => {
        return {
            counter: prevState.quantity + 1
        };
    }
);




this.setState(
    (prevState, props) => {
        return Object.assign(
            previousState,
            {counter: prevState.counter + props.step}
        );
    }
);

```




```js

    urlSave = (url) => {
        // global url
    };
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    componentWillUpdate(){
        // this.onSaveInput();
    }
    componentDidUpdate() {
        // this.onSaveInput();
        // this.props.TestClick(url)
    }


// global url

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
    // return url;
    this.onSaveInput(url);
}




    if (!debug) {
        // index === object
        console.log(`%c required index = `, color.green_16_border, index);
        // {key: 0, value: "", name: "ApiName", desc: "报表名称(true)", type: "string"}
        // text === value
        console.log(`%c text = `, color.green_23, text);
        // "" / "json" / example_value
    }
    let init_url_obj = this.state.url_obj,
        url = this.state.url,
        url_obj = this.state.url_obj;
        // componentDidMount
    if (!debug) {
        // disabled
        console.log(`url_obj = `, url_obj);
        // {ApiName: "", EndDate: "", SecuType: "", MarketType: "", DatePerformType: "", WriteType: "json"}
        console.log(`%c text = ${text} \n`, color.css1);
        // text = json 
        console.log(`%c index = ${index} \n`, color.css2);
        // index = [object Object] ???
        console.log(`%c JSON.stringify(index) = ${JSON.stringify(index)} \n`, color.css2);
        // JSON.stringify(index) = {"key":0,"value":"","name":"ApiName","desc":"报表名称(true)","type":"string"} 
    }
    // get initial obj_url
    if(index.name === "WriteType"){
        url_obj[index.name] = "json";
        url_obj = Object.assign(init_url_obj, url_obj)
    }else{
        url_obj[index.name] = text;
        url_obj = Object.assign(init_url_obj, url_obj)
    }
    i_length++;
    if (!debug) {
        console.log(`%c i_length = `, color.css1, i_length);
    }
    if(datas_length === i_length){
        // keys length === demo_datas length
        // finish url object
        if (debug) {
            console.log(`%c full url_obj defaultValue = `, color.css2, url_obj);
            console.log(`%c full i_length = `, color.css1, i_length);
        }
        // reset
        i_length = 0;
    }





```



##  OK



```jsx

    onInputChange = (e) => {
        if (debug) {
            // console.log(`%c e.target = `, color.green_23, e.target);
            // <input type="text" placeholder="☹️ 暂无默认的示例命令值 !" value="111" id="ApiName" data-__meta="[object Object]" class="ant-input ant-input-lg">
            console.log(`%c e.target.id = `, color.green_23, e.target.id);
            console.log(`%c e.target.value = `, color.green_23, e.target.value);
        }
        let temp_url_obj = this.state.url_obj;
        if (debug) {
            console.log(`%c before change temp_url_obj = \n`, color.color_css2, temp_url_obj);
        }
        let key =  e.target.id;
        let value = e.target.value;
        temp_url_obj[key] = value;
        if (debug) {
            console.log(`%c after change temp_url_obj = \n`, color.color_css2, temp_url_obj);
        }
        let str_obj = JSON.stringify(temp_url_obj);
        // get changed table values ?
        // global url ??? update bug (only one input can be update, overwrite)
        this.setState({
            url: `${urls.test}?${str_obj}`
        });
    };


    // regex test / keys, value === ""
    // /""/ig.test(str_obj)
    if(/""/ig.test(str_obj)){
        this.props.disableBTN(true);
    }else{
        this.props.disableBTN(false);
    }


```








```js


// no need any more
        let str_obj = JSON.stringify(temp_url_obj);
        if (debug) {
            console.log(`%c init str_obj = \n`, color.color_css2, str_obj);
        }
        // this.props.disableBTN(true);
        // regex test / keys, value === ""
        if(debug === false){
            this.props.disableBTN(true);
        }else{
            this.props.disableBTN(false);
        }
        // get changed table values ?
        // global url ??? update bug (only one input can be update, overwrite)
        this.setState({
            url: `${urls.test}?${str_obj}`
        });
        let init = 0;
        if (debug && (init === 0)) {
            console.log(`%c initial test url = \n`, color.color_css3, this.state.url);
            init += 1;
        }else{
            console.log(`%c update new test url, index:${init} = \n`, color.color_css3, this.state.url);
        }
// no need any more


```







## DatePicker

```jsx

const { DatePicker } = antd;

onChange = (date, dateString) => {
    if(debug){
        console.log(`date = ${date}`);
        console.log(`dateString = ${dateString}`);
    }
};

<DatePicker 
    onChange={this.onChange} 
    placeholder="日期选择框 2017-08-08 格式"
    style={{minWidth: 200}}
/>


    <Input 
        onChange={this.onInputChange}
        type="text"
        placeholder={date_placeholder}
    />

```


```jsx

// OK

if(index.name === "EndDate" || index.name === "BeginDate" ){
    const date = new Date().toLocaleDateString().replace(/\//ig, `-`);
    let date_placeholder = `☹️ 请输入 ${date } 格式的时间!`;
    // "2017-8-22"
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
                        placeholder={date_placeholder}
                    />
                )
            }
        </FormItem>
    );
}



// shit api

if(index.name === "EndDate" || index.name === "BeginDate" ){
    const date = new Date().toLocaleDateString().replace(/\//ig, `-`);
    let date_placeholder = `☹️ 请输入 ${date } 格式的时间!`;
    // "2017-8-22"
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
                    // initialValue: text
                })(
                    <DatePicker 
                        onChange={this.onDateChange} 
                        placeholder="日期格式 2017-08-08"
                        style={{minWidth: 300}}
                        allowClear
                        id={index.name}
                        showToday
                    />
                )
            }
        </FormItem>
    );
}



// resue component

// save codes ???

    <DatePicker 
        onChange={
            (index.name === "EndDate" ? this.onEndDateChange : this.onBeginDateChange)
        } 
        placeholder="日期格式 2017-08-08"
        style={{minWidth: 300}}
        allowClear
        id={index.name}
        showToday
    />




```
## set state

> todo DatePicker ???

```js


BeginDate: "",
EndDate: ""


onChange={(index.name === "EndDate" ? this.onEndDateChange : this.onBeginDateChange)} 

```






## other ???

orgCode: 8 int/array

fundType: 8 int/array

```js

// default array

// let a = [];

let values = "abc, xyz, ufo";
let value = "smg";

// space to comma ,

values.replace(/([\w]{1})[\s]([\w]{1})/ig, ",");
// value = e.target.value.trim().replace(/([\w]{1})[\s]{1}([\w]{1})/ig, "$1,$2");

// /([\w]{1})[\s]([\w]{1})/ig
// /([\w]{1})[\s]*([\w]{1})/ig
// https://regexper.com/
// \s === any space


// string to array

let array = values.split(",");
// (3) ["abc", " xyz", " ufo"]
let int = value.split(",");
// ["smg"]

if(array.length > 1){
    // pass array
    obj[key] = array;
}else{
    // pass int string
    obj[key] = value;
}


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


```





## update all array / string


```js
// only one 

    if(key === "DatePerformType"){
        // value = e.target.value.trim().replace(/s*/gi, ",").split(",");
        value = e.target.value.trim().replace(/([\w]{1})[\s]{1}([\w]{1})/ig, "$1,$2");
        // space => , comma
        /* 
            // enhancement solution
            // replace(/([\w]{1})[\s]{1}([\w]{1})/ig, "$1,$2");
            let ss = "xyz,abc, SSS XXX ZZZ, DDD EEE";
            let multi_arr = s.replace(/([\w]{1})[\s]{1}([\w]{1})/ig, "$1,$2");
            "xyz,abc, SSS,XXX,ZZZ, DDD,EEE"
            */
    }else{
        value = e.target.value;
    }


    let obj = {};
    let temp_obj = this.state.options_obj;
    let key = e.target.id;
    let value = e.target.value;
    let values = value.trim().replace(/([\w]{1})[\s]([\w]{1})/ig, ",").split(",");
    // multi spaces
    // ss.trim().replace(/([\w]{1})[\s]{1,}([\w]{1})/ig, "$1,$2").split();
    if(values.length > 1){
        // pass array
        temp_obj[key] = values;
    }else{
        // pass int string
        temp_obj[key] = value;
    }
    this.setState({
        options_obj: temp_obj
    });

```

## backup

```js

let ss = "xyz,abc, SSS XXX ZZZ, DDD EEE";

let single_arr = ss.replace(/([\w]{1})[\s]{1}([\w]{1})/ig, "$1,$2");

// multi spaces

let multi_arr = ss.trim().replace(/([\w]{1})[\s]{1,}([\w]{1})/ig, "$1,$2").split();
// {1,} === {1,n}

// [\s]{1,} !=== [\s]{1, }

// x+ 匹配前面的模式 x 1 或多次。等价于 {1,}。

// ??? ss.trim().replace(/([\w]{1})[\s]+([\w]{1})/ig, "$1,$2").split();
// ??? ss.trim().replace(/([\w]{1})[\s+]([\w]{1})/ig, "$1,$2").split();


/*

x{n}	
n 是一个正整数。前面的模式 x 连续出现 n 次时匹配。

例如，/a{2}/ 不匹配 "candy," 中的 "a"，但是匹配 "caandy," 中的两个 "a"，且匹配 "caaandy." 中的前两个 "a"。

x{n,}	
n 是一个正整数。前面的模式 x 连续出现至少 n 次时匹配。

例如，/a{2,}/ 不匹配 "candy" 中的 "a"，但是匹配 "caandy" 和 "caaaaaaandy." 中所有的 "a"。

x{n,m}	
n 和 m 为正整数。前面的模式 x 连续出现至少 n 次，至多 m 次时匹配。

例如，/a{1,3}/ 不匹配 "cndy"，匹配 "candy," 中的 "a"，"caandy," 中的两个 "a"，匹配 "caaaaaaandy" 中的前面三个 "a"。注意，当匹配 "caaaaaaandy" 时，即使原始字符串拥有更多的 "a"，匹配项也是 "aaa"。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp


*/

```

```js

        if(key === "DatePerformType"){
            // value = e.target.value.trim().replace(/s*/gi, ",").split(",");
            value = e.target.value.trim().replace(/([\w]{1})[\s]{1}([\w]{1})/ig, "$1,$2");
            // space => , comma
            /* 
                // enhancement solution
                // replace(/([\w]{1})[\s]{1}([\w]{1})/ig, "$1,$2");
                let ss = "xyz,abc, SSS XXX ZZZ, DDD EEE";
                let multi_arr = s.replace(/([\w]{1})[\s]{1}([\w]{1})/ig, "$1,$2");
                "xyz,abc, SSS,XXX,ZZZ, DDD,EEE"
             */
        }else{
            value = e.target.value;
        }
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

```