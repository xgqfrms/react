# api module structure


https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/

Web Server for Chrome






index
    SC = route menus
    SCT = route content

SCT
    TCB = tabs (in, out, test)

TCB
    IT = in
    OTS = out
    TTF = test

TTF
    RI = required
    OI = options
    RTS = test results

RI





## fetch_url

> `ljs_urls.ljs_info` local json server

```js
        // ljs_info 
        if(debug){
            fetch_url = `${ljs_urls.ljs_info}`;
        }else{
            // GetAllLoadSearch
            fetch_url = `${urls.init}?{"Admin":"report","Action":"GetAllLoadSearch","WriteType":"json"}`;
            // GetTreeSchema
        }


```









defaultValue={text}

```jsx


/* eslint-disable no-console */



/* eslint-enable no-console */




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
        defaultValue={text}
        type="text"
    />
```









```js

http://10.1.5.203/http-report/query?
{
    'ApiName':'TestProtocol',
    "Sorts":[
        {
            "Field": "",
            "Sort":"no"
        }
    ],
    "Page":{
        "PageNo":"2",
        "PageSize":"50"
    },
    "Compress":"true",
    "OutField":[
        "ByteV","BooleanV","DoubleV","FloatV","IntV","ShortV","CharV","ByteArray","BooleanArray","DoubleArray","FloatArray","IntArray","ShortArray","LongV","LongArray","CharArray","DateV","DateArray","TimeStampV","TimestampArray","ListV","StringV","StringArray","TableV"
    ],
    "IgnoreField":[
        "ByteV","BooleanV","DoubleV","FloatV","IntV","ShortV","CharV","ByteArray","BooleanArray","DoubleArray","FloatArray","IntArray","ShortArray","LongV","LongArray","CharArray","DateV","DateArray","TimeStampV","TimestampArray","ListV","StringV","StringArray","TableV"
    ],
    "Group":"group",
    "FastDateFilterType": "Latest6Month",
    "CallBack":"jsonp:",
    "FastQuarterReportType":["Q1th","Q3rd"],
    "WriteType":"json"
}


http://10.1.5.203/http-report/query?{'ApiName':'OtherAccountReceiveAge','SecuCode':'000002',"BeginDate":"2012-06-30","EndDate":"2016-06-30","Sorts":[{"Field":"accountreceiveage.enddate","Sort":"asc"}],"Page":{"PageNo":"1","PageSize":"100"},"FastDateFilterType":"Customer","WriteType":"json"}


Customer
"EndDate":"2016-06-30",
"BeginDate":"2012-06-30"



http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetAllLoadSearch%22,%22WriteType%22:%22json%22,%22ReportName%22:%22OtherAccountReceiveAge%22}


GetAllLoadSearch === init


ReportName

KeyWord



// no value, no key






``` 











# query all


{'Admin':'report','Action':'GetSchema','WriteType':'json'}:


# click link 

> ReportName

{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'TestProtocol'}








查看全部报表Schema：

// {"Admin":"report","Action":"GetAllLoad","WriteType":"json"}  

 // {""} error!


http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetAllLoad","WriteType":"json"}

查看指定报表Schema（通过关键字模糊查询）：
http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","KeyWord":"开户情况","WriteType":"json"}

查看指定报表Schema（通过ReportName精确查找）：
http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","ReportName":"JY.Topic.Market_profile.Investors_data_statistics.AccountStatistics","WriteType":"json"}

查看指定报表RowSchema（通过ReportName精确查找）：
http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetRowSchema","ReportName":"JY.Topic.Market_profile.Investors_data_statistics.AccountStatistics","WriteType":"json"}

测试命令：
http://10.1.5.31:8080/http/report/query?{"BeginDate":"2015-08-07","EndDate":"2017-08-07","LX":"6","ApiName":"JY.Topic.Market_profile.Investors_data_statistics.AccountStatistics","WriteType":"json"}




http://10.6.1.81/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetSchema%27,%27WriteType%27:%27json%27,%27KeyWord%27:%27%E5%9F%BA%E9%87%91-%3EF9%27}87833


# KeyWord

http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json','KeyWord':'基金->F9'}



# input

http://10.6.1.81/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetRowSchema%27,%27WriteType%27:%27json%27,%27ReportName%27:%27fund.f9.fund_profile.FundManager.BasicInformations%27}?ran=0.8659173158329834


http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'fund.f9.fund_profile.FundManager.BasicInformations'}?ran:0.8659173158329834

{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'fund.f9.fund_profile.FundManager.BasicInformations'}?ran:0.8659173158329834



{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'TestProtocol'}







# output (fetch {'ReportName': data.name})

> output-tables

// ReportName === name

{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'fund.f9.fund_profile.FundManager'}?ran:0.038250282539534775




```js
const json = 
{
    "Success": true,
    "Info": {
        "schema": {
            "type": "object",
            "Properties": {
                "ByteV": {
                    "type": "integer"
                },
                "BooleanV": {
                    "type": "boolean"
                },
                "DoubleV": {
                    "type": "number"
                },
                "FloatV": {
                    "type": "number"
                },
            }
        },
        "name": "TestProtocol"
    }
};

let objs = json.Info.schema.Properties;

for (let key in objs) {
    if(!objs.hasOwnProperty(key)) continue;
    if(objs.hasOwnProperty(key)) {
        console.log(`key = `, key);
        console.log(`objs[key] =`, objs[key]);
        console.log(`objs[key].type =`, objs[key].type);
    }
    let props = objs[key];
    console.log(`***************************************`);
    for (let prop in props ) {
        if(!props.hasOwnProperty(prop)) continue;
        if(props.hasOwnProperty(prop)) {
            console.log(`prop = `, prop);
            console.log(`props[prop] = `, props[prop]);
        }
    }
    console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
}


// `for of` , can not be used for `object`, `array` is OK
for (let key of objs) {
    console.log(`key = `, key);
    console.log(`objs[key] =`, objs[key]);
    console.log(`objs[key].type =`, objs[key].type);
    console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
    console.log(`key = `, key);
    console.log(`objs.key = `, objs.key);
    console.log(`key.type =`, key.type);
}

```


# object > array



```js

const json = 
{
    "Success": true,
    "Info": {
        "schema": {
            "type": "object",
            "Properties": {
                "ByteV": {
                    "type": "integer"
                },
                "BooleanV": {
                    "type": "boolean"
                },
                "DoubleV": {
                    "type": "number"
                },
                "FloatV": {
                    "type": "number"
                },
            }
        },
        "name": "TestProtocol"
    }
};

let objs = json.Info.schema.Properties;

// let arr = [];
// arr.push(objs);
// let data = arr[0];

// arr[0].ByteV === Object {type: "integer"}
// arr[0].ByteV.type === "integer"


let arr = [];

for (let key in objs) {
    // if(!objs.hasOwnProperty(key)) continue;
    if(objs.hasOwnProperty(key)) {
        console.log(`key = `, key);
        console.log(`objs[key] =`, objs[key]);
        console.log(`objs[key].type =`, objs[key].type);
        // arr.push(objs[key]);
        // arr.push({key: objs[key]});
        let obj = {
            num: key,
            type: objs[key].type
        };
        console.log(`arr[obj]=`, obj);
        arr.push(obj);
    }
    console.log(`***************************************`, arr);
}

console.log(`arr = `, arr);

```



# object => JOSN

```js

// Object {prefix: "keywords", searchkey: "xxxx yyyyy xxxxx"}
// Object {prefix: "reportname", searchkey: "xxxx yyyyy xxxxx"}
// object => JSON


let obj = {
    prefix: "reportname", 
    searchkey: "xxxx yyyyy xxxxx"
};

let str = JSON.stringify(obj);

let url = `https://stackoverflow.com/search?q=`;

let new_url = url + str;

// "https://stackoverflow.com/search?q={"prefix":"reportname","searchkey":"xxxx yyyyy xxxxx"}"

http://10.6.1.81/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetSchema%27,%27WriteType%27:%27json%27}


obj.prefix
// "reportname"

obj.searchkey
// "xxxx yyyyy xxxxx"

let key = obj.prefix,
    value = obj.searchkey;

key.toString();
// "reportname"


// ES6

let url = `http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json",${key}:${value}}`;
// "http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json",reportname:xxxx yyyyy xxxxx}"

let url = `http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json","${key}":"${value}"}`;
// "http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json","reportname":"xxxx yyyyy xxxxx"}"


if(key !== ""){
    url = `http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json","${key}":"${value}"}`;
}else{
    // key === ""
    url = `http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json'}`;
}



KeyWord
// "http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json","KeyWord":""}"

KeyWord === keywords

ReportName === reportname

// switch case default

// ? : 

// Object {prefix: "keywords", searchkey: "xxxx yyyyy xxxxx"}
// Object {prefix: "reportname", searchkey: "xxxx yyyyy xxxxx"

// {"Admin":"report","Action":"GetSchema","WriteType":"json","KeyWord":"股票--> F10"}

if(key === "reportname"){
    // 'ReportName':'fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail'
    url = `http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json'}`;
}else if(key === "keywords"){
    // 'KeyWord':'股票 F10'
    url = `http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json'}`;
}else{
    // key === ""
    url = `http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json'}`;
}

// all === {'Admin':'report','Action':'GetSchema','WriteType':'json'}:


// Object.assign

Object.assign();

let query_obj = {
    'Admin':'report',
    'Action':'GetSchema',
    'WriteType':'json',
    JSON.stringify(key): value
};
// key error ???
// Object {Admin: "report", Action: "GetSchema", WriteType: "json", key: "xxxx yyyyy xxxxx"}




// 'KeyWord':'股票 F10'

// 'ReportName':'fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail'

/*

{
    'Admin':'report','Action':'GetSchema','WriteType':'json',
    'KeyWord':'股票 F10'
}

{
    'Admin':'report','Action':'GetSchema','WriteType':'json',
    'ReportName':'fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail'
}


{'Admin':'report','Action':'GetSchema','WriteType':'json','KeyWord':'股票--> F10'}31746:

http://10.6.1.81/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetSchema%27,%27WriteType%27:%27json%27,%27KeyWord%27:%27%E8%82%A1%E7%A5%A8--%3E%20F10%27}


http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json','KeyWord':'股票--> F10'}

http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json","KeyWord":"股票--> F10"}


*/ 



const debug = true;
if(debug ? debug : true){
    console.log(`key = `, key);
    console.log(`value = `, value);
}



```



```js

    handleSubmit = (e) => {
        e.preventDefault();
        // e.stopPropagation();
        this.props.form.validateFieldsAndScroll(
            (err, values) => {
                try {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                } catch (error) {
                    throw new Error(error.message, error.name, error.fileName, error.lineNumber, error.columnNumber);
                    // new Error([message[, fileName[, lineNumber]]])
                }
                try {
                    throw new Error('Whoops!');
                } catch (e) {
                    const debug = true;
                    // debug module
                    if(debug){
                        console.log(`error.message : `, e.message);
                        console.log(`error.name : `, e.name);
                        console.log(`error.fileName : `, e.fileName);
                        console.log(`error.lineNumber : `, e.lineNumber);
                        console.log(`error.columnNumber : `, e.columnNumber);
                    }
                }
            }
        );
    }

```

# random length of array

```js

    // random length of array
    // Math.random()*10;
    const favorites = [
        {"url": "https://www.google.com"}, 
        {"url": "https://www.yahoo.com"}, 
        {"url": "https://www.news.com"}, 
        {"url": "https://www.acer.com"},
        {"url": "https://www.nasa.com"},
        {"url": "https://www.nba.com"},
        {"url": "https://www.ufo.com"}
    ];
    // let new_array = (favorites.length = parseInt(Math.random()*7) + 1);
    let new_array = favorites;
    new_array.length = parseInt(Math.random()*7 + 1);
    console.log(`new_array`, new_array);
    // json = new_array;

```



```js

/* 


GetSchema === input

// 指数--> F10--> 非股票指数--> 指数基金

description === KeyWord (只适用于 模糊 search)


http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json','KeyWord':'指数--> F10--> 非股票指数--> 指数基金'}

{'Admin':'report','Action':'GetSchema','WriteType':'json','KeyWord':'指数--> F10--> 非股票指数--> 指数基金'}:





name": "IndexF10IndexFund",
"description": "指数--> F10--> 非股票指数--> 指数基金",

"name": "IndexF10IndexQuotation",
"description": "指数--> F10--> 非股票指数--> 指数基金--> 指数行情",









name === ReportName (唯一的 query key)


GetRowSchema === output

{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexQuotation'}


http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexFund'}


http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetRowSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}




GetSchema === input

http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json',ReportName':'IndexF10IndexFund'}

http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}



*/

```



# input data

```js

fetch(`http://localhost:7777/input`)
.then((response) => response.json())
.then((json)=> {
    console.log(`json = ${json}`);
    console.log(`json.length = ${json.length}`);
    console.log(`json.Info`, json.Info.schema.Properties);
    // Properties
    let datas = json.Info.schema.Properties;
    let {ApiName, SecuCode} = datas;
    console.log(`ApiName = ${ApiName.Description}`);
    console.log(`SecuCode = ${SecuCode.Description}`);
    // Objects to Array
    let arr = [];
    for (let key in datas) {
        if(!datas.hasOwnProperty(key)) continue;
        if(datas.hasOwnProperty(key)) {
            // key === index
            arr.push(datas[key]);
        }
    }
    console.log(`arr result = `, arr);
    return inputs = arr;
});

```

# test

```js

http://10.1.5.31:8080/http/report/query?
{
    "OutField": [
        "a0",
        "a1",
        "a2",
        "a3"
    ],
    "FastQuarterReportType": [
        "Q1th",
        "Q2nd",
        "Q3rd",
        "Q4th"
    ],
    "FastDateFilterType": "AllYear",
    "Filters": [{
        "FilterType": "between",
        "Field": "a0",
        "MaxValue": "2017-08-04",
        "MinValue": "2012-01-01"
    }],
    "BeginDate": "2015-08-07",
    "EndDate": "2017-08-07",
    "LX": "6",
    "Sorts": [{
        "Field": "a0",
        "Sort": "desc"
    }],
    "Page": {
        "PageNo": "1",
        "PageSize": "20"
    },
    "ApiName": "JY.Topic.Market_profile.Investors_data_statistics.AccountStatistics",
    "WriteType": "json"
}




{
    "OutField": [
        "a0",
        "a1",
        "a2",
        "a3"
    ],
    "FastQuarterReportType": [
        "Q1th",
        "Q2nd",
        "Q3rd",
        "Q4th"
    ],
    "FastDateFilterType": "AllYear",
    "Filters": [{
        "FilterType": "between",
        "Field": "a0",
        "MaxValue": "2017-08-04",
        "MinValue": "2012-01-01"
    }],
    "BeginDate": "2015-08-07",
    "EndDate": "2017-08-07",
    "LX": "6",
    "Sorts": [{
        "Field": "a0",
        "Sort": "desc"
    }],
    "Page": {
        "PageNo": "1",
        "PageSize": "20"
    },
    "ApiName": "fund.f9.fund_profile.FundManager.BasicInformations",
    "WriteType": "json"
}

ApiName SecuCode Names WriteType

阳琨


## test

10.1.5.31:8080/http/report/query?{"SecuCode":"000011","Names":"阳琨","ApiName":"fund.f9.fund_profile.FundManager.BasicInformations","WriteType":"json"}

华夏大盘精选(前端：000011  后端：000012)



http://10.6.1.81/webtool/home.html?resource=tab0&sear_valu=


基金->F9

600570 恒生电子(恒生电子-全资子公司(恒生聚源 hsjy ))



10.1.5.31:8080/http/report/query?{"SecuCode":"600570","Names":"张国强","ApiName":"fund.f9.fund_profile.FundManager.BasicInformations","WriteType":"json"}




http://10.1.5.31:8081/http/report/query?{"SecuCode":"000011","ApiName":"fund.f9.fund_profile.FundManager","WriteType":"json"}


http://10.1.5.31:8081/http/report/query?{"SecuCode":"000011","Names":"陈伟彦","ApiName":"fund.f9.fund_profile.FundManager.BasicInformations","WriteType":"json"}




```






```js

let state = {
    loading: false,
    visible: false
};

// same key, auto get values!

const {visible, loading} = state;
visible;
// false

state = {
    loading: true,
    visible: true
};

visible;
// false (const will not change any more)

// react state auto update ???


let keys = {
    key1: 1,
    key2: 2
};

let {key1, key2} = keys;

key1;
// 1

keys = {
    key1: 11,
    key2: 22
};

key1;
// 1




// auto ...spread & ...rest

> $ npm i -D babel-plugin-transform-object-rest-spread

https://babeljs.io/docs/plugins/transform-object-rest-spread/


## Objects


let {x, y, ...rest} = {x: 1, y: 2, a: 3, b: 4};
// Uncaught SyntaxError: Unexpected token ...

rest;
// 

let spread = { x, y, ...rest };
// Uncaught SyntaxError: Unexpected token ...

spread;
// { x: 1, y: 2, a: 3, b: 4 }


## Arrays

let [x, y, ...rest] = [1, 2, 3, 4];

rest;
// [3, 4]

let spread = [x, y, ...rest];

spread;
// [1, 2, 3, 4]






```

# modal footer & form submit

```jsx


    footer={
        [
            <Button 
                key="submit" 
                type="primary" 
                size="large"
                onClick={this.testOK}
                htmlType="submit">
                测试
            </Button>,
            <Button 
                key="back" 
                size="large" 
                onClick={this.testCancel}>
                关闭
            </Button>
        ]
    }

```


Warning: setState(...): 
Cannot update during an existing state transition 
(such as within `render` or another component's constructor).
Render methods should be a pure function of props and state; 
constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`.


https://facebook.github.io/react/docs/react-component.html#setstate


```jsx

setState(updater, [callback])



(prevState, props) => stateChange

// componentDidUpdate()

// setState(updater, callback))

// setState() will always lead to a re-render unless shouldComponentUpdate() returns false.

setState(
    (prevState, props),
    () => {
        //
    }
);

```



# input in table

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys


https://stackoverflow.com/questions/126100/how-to-efficiently-count-the-number-of-keys-properties-of-an-object-in-javascrip

https://stackoverflow.com/questions/5223/length-of-a-javascript-object

```jsx

Object.keys(obj).length;


const obj = {
    title: "字段",
    dataIndex: "name",
    key: "name"
};

Object.keys(obj).length;
// 3



let url_obj = {};

// const datas_length = this.props.datas.length;
const datas_length = 4;
let i_length = 0;

const Requiredcolumns = [
    {
        title: "字段",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "类型",
        dataIndex: "type",
        key: "type"
    },
    {
        title: "值",
        dataIndex: "value",
        key: "value",
        render: (text, index) => {
            // disabled
            console.log(`url_obj = `, url_obj);
            console.log(`%c text = `, color.css1, text);
            console.log(`%c index = `, color.css2, index);
            url_obj[index.name] = text;
            i_length++;
            console.log(`%c i_length = `, color.css1, i_length);
            if(datas_length === i_length){
                // keys length === demo_datas length
                // finish url object
                console.log(`%c full url_obj defaultValue = `, color.css2, url_obj);
                console.log(`%c full i_length = `, color.css1, i_length);
            }
            // console.log(`url_obj defaultValue = `, url_obj);
            if(index.name === "WriteType"){
                // 1. write global let
                // 2. use let create new url
                return(
                    <Input 
                        onChange={
                            (e) => {
                                console.log(`e = `, e);
                                console.log(`e = `, e.target.value);
                            }
                        }
                        defaultValue={text}
                        type="text"
                        disabled/>
                );
            }else{
                return(
                    <Input 
                        onChange={
                            (e) => {
                                console.log(`index.name = `, index.name);
                                console.log(`e = `, e.target.value);
                                let key = index.name,
                                    value = e.target.value;
                                {/* url_obj = Object.assign(
                                    url_obj,
                                    {
                                        key: value
                                    }
                                ); */}
                                // url_obj.key = value;// key
                                url_obj[key] = value;// key's value
                                console.log(`new url_obj = `, url_obj);
                            }
                        }
                        defaultValue={text}
                        type="text" />
                );
            }
        }
        
    },
    {
        title: "描述",
        dataIndex: "desc",
        key: "desc"
    }
];


```


# string to json

```js

let x = `{
    key: "k4",
    name: "WriteType",
    type: "string",
    value: "json (json文本格式)",
    desc: "返回的数据协议格式 "
}`;

let y = eval(`(${x})`);
// Object {key: "k4", name: "WriteType", type: "string", value: "json (json文本格式)", desc: "返回的数据协议格式 "}

let z = eval(`${x}`);

// VM825:3 Uncaught SyntaxError: Unexpected token :


JSON.parse()


/ab+c/i;

new RegExp('ab+c', 'i');
new RegExp(/ab+c/, 'i');

String.replace();


{/* template for may Table */}

<Table dataSource={this.state.datas} columns={this.state.columns} />


```






 http://10.1.5.31:8080/http/report/query?{"ApiName":"JY.Topic.Market_profile.Investors_data_statistics.AccountStatistics", "WriteType":"json"}







## table input validation


onbulr

```js

for (let key in object) {
    if (object.hasOwnProperty(key)) {
        if(object[key] === ""){
            // alret & disable fetch data
        }
    }
}


```


## pagination={false} & bordered

> shit API

no demo, bull shit


https://ant.design/components/table-cn/#API

```jsx


    <Table
        dataSource={
            (
                this.props.dataSource.length > 0
                ?
                this.props.dataSource
                :
                demo_datas
            )
        }
        columns={Requiredcolumns}
        bordered
        pagination={false}
    />

```


# any


## output === test url

> columns


http://localhost:7777/info/


http://10.1.5.203/http-report/query?{%22EndDate%22:%222011-03-11%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22SecuType%22:%22All%22,%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22WriteType%22:%22json%22}


> "Page":{"PageNo":"1","PageSize":"1"}

http://10.1.5.203/http-report/query?{%22Page%22:{%22PageNo%22:%221%22,%22PageSize%22:%221%22},%22EndDate%22:%222011-03-11%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22SecuType%22:%22All%22,%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22WriteType%22:%22json%22}



```js
let columns = "\\\\";
let json = JSON.parse(columns);

"columns" : "{\"cols\":[{\"name\":\"交易日期\",\"value\":\"a0\"},{\"name\":\"证券代码\",\"value\":\"a1\"},{\"name\":\"证券简称\",\"value\":\"a2\"},{\"name\":\"总市值(亿元)\",\"value\":\"a3\"},{\"name\":\"流通市值(亿元)\",\"value\":\"a4\"},{\"name\":\"市盈率\",\"value\":\"a5\"},{\"name\":\"市净率\",\"value\":\"a6\"},{\"name\":\"日表现\",\"cols\":[{\"name\":\"收盘价\",\"value\":\"ClosePrice\"},{\"name\":\"涨跌幅(%)\",\"value\":\"ChangePCT\"},{\"name\":\"振幅(%)\",\"value\":\"RangePCT\"},{\"name\":\"换手率(%)\",\"value\":\"TurnoverRate\"},{\"name\":\"成交量(万股)\",\"value\":\"TurnoverVolume\"},{\"name\":\"成交额(万元)\",\"value\":\"TurnoverValue\"},{\"name\":\"前收盘价\",\"value\":\"PrevClosePrice\"},{\"name\":\"开盘价\",\"value\":\"OpenPrice\"},{\"name\":\"最高价\",\"value\":\"HighPrice\"},{\"name\":\"最低价\",\"value\":\"LowPrice\"},{\"name\":\"均价\",\"value\":\"AvgPrice\"}]},{\"name\":\"近一周表现\",\"cols\":[{\"name\":\"涨跌幅(%)\",\"value\":\"ChangePCTRW\"},{\"name\":\"振幅(%)\",\"value\":\"RangePCTRW\"},{\"name\":\"换手率(%)\",\"value\":\"TurnoverRateRW\"},{\"name\":\"日均换手率(%)\",\"value\":\"TurnoverRatePerDayRW\"},{\"name\":\"成交量(万股)\",\"value\":\"TurnoverVolumeRW\"},{\"name\":\"成交额(万元)\",\"value\":\"TurnoverValueRW\"},{\"name\":\"日均成交额(万元)\",\"value\":\"TurnoverValuePerDayRW\"},{\"name\":\"最高价\",\"value\":\"HighPriceRW\"},{\"name\":\"最低价\",\"value\":\"LowPriceRW\"},{\"name\":\"收盘最高价\",\"value\":\"HighestClosePriceRW\"},{\"name\":\"收盘最低价\",\"value\":\"LowestClosePriceRW\"},{\"name\":\"均价\",\"value\":\"AvgPriceRW\"}]},{\"name\":\"证监会行业\",\"value\":\"a8\"},{\"name\":\"申万行业\",\"value\":\"a7\"}]}"
  }



http://10.1.5.203/http-report/query?{%22Page%22:{%22PageNo%22:%221%22,%22PageSize%22:%221%22},%22EndDate%22:%222011-03-11%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22SecuType%22:%22All%22,%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22WriteType%22:%22json%22}




{
    "cols": [
        {
            "name": "交易日期",
            "value": "a0"
        },
        {
            "name": "证券代码",
            "value": "a1"
        },
        {
            "name": "证券简称",
            "value": "a2"
        },
        {
            "name": "总市值(亿元)",
            "value": "a3"
        },
        {
            "name": "流通市值(亿元)",
            "value": "a4"
        },
        {
            "name": "市盈率",
            "value": "a5"
        },
        {
            "name": "市净率",
            "value": "a6"
        },
        {
            "name": "申万行业",
            "value": "a7"
        },
        {
            "name": "证监会行业",
            "value": "a8"
        },
        {
            "name": "日表现",
            "cols": [
                { "name": "收盘价", "value": "ClosePrice" },
                { "name": "涨跌幅(%)", "value": "ChangePCT" },
                { "name": "振幅(%)", "value": "RangePCT" },
                { "name": "换手率(%)", "value": "TurnoverRate" },
                { "name": "成交量(万股)", "value": "TurnoverVolume" },
                { "name": "成交额(万元)", "value": "TurnoverValue" },
                { "name": "前收盘价", "value": "PrevClosePrice" },
                { "name": "开盘价", "value": "OpenPrice" },
                { "name": "最高价", "value": "HighPrice" },
                { "name": "最低价", "value": "LowPrice" },
                { "name": "均价", "value": "AvgPrice" }
            ]
        },
        {
            "name": "近一周表现",
            "cols": [
                { "name": "涨跌幅(%)", "value": "ChangePCTRW" },
                { "name": "振幅(%)", "value": "RangePCTRW" },
                { "name": "换手率(%)", "value": "TurnoverRateRW" },
                { "name": "日均换手率(%)", "value": "TurnoverRatePerDayRW" },
                { "name": "成交量(万股)", "value": "TurnoverVolumeRW" },
                { "name": "成交额(万元)", "value": "TurnoverValueRW" },
                { "name": "日均成交额(万元)", "value": "TurnoverValuePerDayRW" },
                { "name": "最高价", "value": "HighPriceRW" },
                { "name": "最低价", "value": "LowPriceRW" },
                { "name": "收盘最高价", "value": "HighestClosePriceRW" },
                { "name": "收盘最低价", "value": "LowestClosePriceRW" },
                { "name": "均价", "value": "AvgPriceRW" }
            ]
        }
    ]
}


```


"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"


C:\Program Files (x86)\Google\Chrome\Application


```js


{
    "Properties": {
        "A0": {
            "Description": "交易日期",
            "type": "DATE"
        },
        "A1": {
            "Description": "证券代码",
            "type": "STRING"
        },
        "A2": {
            "Description": "证券简称",
            "type": "STRING"
        },
        "A3": {
            "Description": "总市值(亿元)",
            "type": "DOUBLE"
        },
        "A4": {
            "Description": "流通市值(亿元)",
            "type": "DOUBLE"
        },
        "A5": {
            "Description": "市盈率",
            "type": "DOUBLE"
        },
        "A6": {
            "Description": "市净率",
            "type": "DOUBLE"
        },
        "A7": {
            "Description": "申万行业",
            "type": "STRING"
        },
        "A8": {
            "Description": "证监会行业",
            "type": "STRING"
        },
        "日表现": {
            "ClosePrice": {
                "Description": "收盘价",
                "type": "DOUBLE"
            },
            "ChangePCT": {
                "Description": "涨跌幅(%)",
                "type": "DOUBLE"
            },
            "RangePCT": {
                "Description": "振幅(%)",
                "type": "DOUBLE"
            },
            "TurnoverRate": {
                "Description": "换手率(%)",
                "type": "DOUBLE"
            },
            "TurnoverVolume": {
                "Description": "成交量(万股)",
                "type": "DOUBLE"
            },
            "TurnoverValue": {
                "Description": "成交额(万元)",
                "type": "DOUBLE"
            },
            "PrevClosePrice": {
                "Description": "前收盘价",
                "type": "DOUBLE"
            },
            "OpenPrice": {
                "Description": "开盘价",
                "type": "DOUBLE"
            },
            "HighPrice": {
                "Description": "最高价",
                "type": "DOUBLE"
            },
            "LowPrice": {
                "Description": "最低价",
                "type": "DOUBLE"
            },
            "AvgPrice": {
                "Description": "均价",
                "type": "DOUBLE"
            }
        },
        "近一周表现": {
            "ChangePCTRW": {
                "Description": "涨跌幅(%)",
                "type": "DOUBLE"
            },
            "RangePCTRW": {
                "Description": "振幅(%)",
                "type": "DOUBLE"
            },
            "TurnoverRateRW": {
                "Description": "换手率(%)",
                "type": "DOUBLE"
            },
            "TurnoverRatePerDayRW": {
                "Description": "日均换手率(%)",
                "type": "DOUBLE"
            },
            "TurnoverVolumeRW": {
                "Description": "成交量(万股)",
                "type": "DOUBLE"
            },
            "TurnoverValueRW": {
                "Description": "成交额(万元)",
                "type": "DOUBLE"
            },
            "TurnoverValuePerDayRW": {
                "Description": "日均成交额(万元)",
                "type": "DOUBLE"
            },
            "HighPriceRW": {
                "Description": "最高价",
                "type": "DOUBLE"
            },
            "LowPriceRW": {
                "Description": "最低价",
                "type": "DOUBLE"
            },
            "HighestClosePriceRW": {
                "Description": "收盘最高价",
                "type": "DOUBLE"
            },
            "LowestClosePriceRW": {
                "Description": "收盘最低价",
                "type": "DOUBLE"
            },
            "AvgPriceRW": {
                "Description": "均价",
                "type": "DOUBLE"
            }
        }
    }
}


```












# import * as & debug read-only

```js

/* 

import * as name from "module-name";
import { member } from "module-name";
import { member as alias } from "module-name";

*/

import {color} from '../../../app/color';
import {debug}  from '../../../app/debug';
// import { debug as xyz_debug}  from '../../../app/debug';
// import * as xyz_debug  from '../../../app/debug';

// debug = false;
// const "debug" is read-only

```











































