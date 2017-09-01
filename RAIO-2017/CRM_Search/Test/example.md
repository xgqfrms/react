# example



```js


/* 

    // example === input & JSON.parse(json.Info.commandexample


    // 基金->F9-> 基金概况

    "{            "SecuCode": 000011,            "ApiName": "fund.f9.fund_profile.FundIntroduce" }"
    "{            "SecuCode": 000001,            "ApiName": "fund.f9.fund_profile.FundManagerMent" }"
    "{            "SecuCode": 000011,            "ApiName": "fund.f9.fund_profile.FundManager" }"

    // 主板F10-->财务概况

    "{            "SecuCode": "600570",            "ApiName": "F10.FinalSummary.FastView.DuBangAnalysis" }"
    "{            "SecuCode": "601318",            "ApiName": "F10.FinaIndicator.SpecialIndex" }"
    "{            "SecuCode": "600570",            "ApiName": "F10.FinalSummary.AssetsDebtConstitute.Assets" }"
    "{            "SecuCode": "600570",            "ApiName": "F10.FinalSummary.FinancialStatementView" }"
    "{            "SecuCode": "600570",            "ApiName": "F10.FinalSummary.AssetsDebtConstitute.Debt" }"
    "{            "SecuCode": "600570",            "ApiName": "F10.FinalSummary.FastView.NoticePerformance" }"


*/


```


```js

// output = 

const ts = [
    {
        "title":"基金经理详细信息(基本资料)",
        "tablenamle":"BasicInformationRow",
        "datas":[
            {
                "type":"string",
                "Description":"性别",
                "name":"A0",
                "key":"k0000"
            },
            {
                "type":"string",
                "Description":"出生日期",
                "Format":"date-time",
                "name":"A1",
                "key":"k0001"
            }
        ]
    },
    {
        "title":"基金经理详细信息(历任管理基金)",
        "tablenamle":"AnyManagedFundsRow",
        "datas":[
            {
                "type":"string",
                "Description":"管理公司",
                "name":"A0",
                "key":"k0000"
            },
            {
                "type":"string",
                "Description":"基金简称",
                "name":"A1",
                "key":"k0001"
            }
        ]
    }
];



let temp_obj = {},
    temp_sort = {},
    temp_fields = {};



ts.map(
    (value, index) => {
        if (debug=false) {
            console.log(`index = ${index}`);
            console.log(`value = \n `, value);
            console.log(`JSON.stringify(value) = \n`, JSON.stringify(value));
            console.log(`value tablenamle = `, value.tablenamle);
            console.log(`value title = `, value.title);
            console.log(`value datas \n = `, value.datas);
        }
        let key_prefix = value.tablenamle;
        let value_prefix = value.title;
        value.datas.map(
            (v, i) => {
                if (debug=false) {
                    console.log(`v.name = ${v.name}`);
                    console.log(`v.Description = ${v.Description}`);
                }
                if(value_prefix.length > 0){
                    // multi table
                    temp_sort[`${key_prefix}.${v.name}`] = `${value_prefix}-${v.Description}`;
                    temp_fields[`${key_prefix}.${v.name}`] = `${v.Description}`;
                }else{
                    // single table
                    temp_sort[`${v.name}`] = `${v.Description}`;
                    temp_fields[`${v.name}`] = `${v.Description}`;
                }
            }
        );
        temp_obj["sort"] = temp_sort;
        temp_obj["fields"] = temp_fields;
        // return temp_obj;
        // bug , repeat ??? MDN
    }
);





















/*
// demo = 
{
    "BasicInformationRow.A0": "基金经理详细信息(基本资料)-性别",
    "BasicInformationRow.A1": "基金经理详细信息(基本资料)-出生日期",
    "AnyManagedFundsRow.A0": "基金经理详细信息(历任管理基金)-管理公司",
    "AnyManagedFundsRow.A1": "基金经理详细信息(历任管理基金)-基金简称"
}
// ["BasicInformationRow.A0", "BasicInformationRow.A1", "AnyManagedFundsRow.A0", "AnyManagedFundsRow.A1"]
// Object.keys() === Array



*/






```


## regex & replace

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace


```js

let str = 'Twas the night before Xmas...';
let newstr = str.replace(/xmas/i, 'Christmas');

console.log(newstr);
// Twas the night before Christmas...



const str = "{            \"SecuCode\":  000011,            \"ApiName\": \"fund.f9.fund_profile.FundIntroduce\" }";


let nstr_prefix = str.replace(/\"SecuCode\":[\s]*0/i, `\"SecuCode\":"0`);
// "{            "SecuCode":  000011,            "ApiName": "fund.f9.fund_profile.FundIntroduce" }"

let str_suffix = str.replace(/,[\s]*\"ApiName\":/i, `",\"ApiName\":`);
// "{            "SecuCode":  110000",            "ApiName": "fund.f9.fund_profile.FundIntroduce" }"


// newstr = s.replace(/\"SecuCode\":[\s]*0[0-9]*,[\s]*\"ApiName\":/i, `\"SecuCode\":"0${\[0]*\i}",\"ApiName\":`);









const str = "{            \"SecuCode\":  000011,            \"ApiName\": \"fund.f9.fund_profile.FundIntroduce\" }";

// prefix
let newstr_prefix = str.replace(/\"SecuCode\":[\s]*0/i, `\"SecuCode\":"0`);
// "{            "SecuCode":"000011,            "ApiName": "fund.f9.fund_profile.FundIntroduce" }"


// suffix
let newstr_suffix = newstr_prefix.replace(/,[\s]*\"ApiName\":/i, `",\"ApiName\":`);
// "{            "SecuCode":"000011","ApiName": "fund.f9.fund_profile.FundIntroduce" }"


const target_obj = JSON.parse(newstr_suffix);

// {SecuCode: "000011", ApiName: "fund.f9.fund_profile.FundIntroduce"}



// 

const date_str = "{            \"SecuCode\":  2016-01-01,            \"ApiName\": \"fund.f9.fund_profile.FundIntroduce\" }";
// - 无法识别，不是数字！

```





```jsx


ApiName: fund.f9.fund_profile.FundManager.BasicInformations

SecuCode: 000011

Names: 阳琨



000011阳琨



    setTimeout(() => {
        that.setState({
            loading: false
        });
    }, 1000);
    // promise reject ???




const promise = new Promise(
    (resolve, reject) => {
        // do a thing, possibly async, then…
        if (/* everything turned out fine */) {
            resolve("Stuff worked!");
        }
        else {
            reject(Error("It broke"));
        }
    }
);
```

```js

    const createGist = (opts) => {
        ChromeSamples.log('Posting request to GitHub API...');
        fetch(
            'https://api.github.com/gists', 
            {
                method: 'post',
                body: JSON.stringify(opts)
            }
        ).then(
            (response) => response.json()
        ).then(
            (data) => {
                ChromeSamples.log('Created Gist:', data.html_url);
            }
        );
    }

    const submitGist = () => {
        let content = document.querySelector('textarea').value;
        if (content) {
            createGist(
                {
                    description: 'Fetch API Post example',
                    public: true,
                    files: {
                        'test.js': {
                            content: content
                        }
                    }
                }
            );
        } else {
            ChromeSamples.log('Please enter in content to POST to a new Gist.');
        }
    }

    const submitBtn = document.querySelector('button');
    submitBtn.addEventListener('click', submitGist);

```



```js


    const {required_obj={}, options_obj = {}} = url_objs;
    // default value
    /*  
        // alert("testing...");
        // handle undefined ???
        o = {a: 1};
        a = {};
        x = Object.assign({}, o, a);
        // {a: 1}
        x = Object.assign({}, o, undefined);
        // {a: 1}
    */
    /* 
        // mock data
        let {required_obj={}, options_obj={}} = url_objs;
        options_obj = {
            "Sorts": [
                {"Field": "AnyManagedFundsRow.A0", "Sort": "desc"}
            ]
        };
    */


```


















```js


// 测试协议

http://10.1.5.203/http-report/query?
{
    'ApiName':'TestProtocol',
    "Sorts":[
        {
            "Field":"booleanv",
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
    "FastDateFilterType":"Latest6Month",
    "CallBack":"jsonp:",
    "FastQuarterReportType":["Q1th","Q3rd"],
    "WriteType":"json"
}


```



```js
ApiName: fund.f9.fund_profile.FundManager.BasicInformations

SecuCode: 000011

Names: 阳琨

http://10.1.5.203/http-report/query?
{
    'ApiName':'fund.f9.fund_profile.FundManager.BasicInformations',
    'SecuCode':'000011',
    'Names':'阳琨',
    "Sorts":[
        {
            "Field":"basicinformationrow.a0",
            "Sort":"asc"
        }
    ],
    "Page":{
        "PageNo":"1",
        "PageSize":"50"
    },
    "Compress":"true",
    "OutField":["BasicInformationRow.A0","BasicInformationRow.A1"],
    "IgnoreField":["BasicInformationRow.A2","BasicInformationRow.A3"],
    "FastDateFilterType":"Latest2Year",
    "FastQuarterReportType":["Q1th","Q4th"],
    "WriteType":"json"
}


// default value

"Page":{
    "PageNo":"1",
    "PageSize":"50"
},
"FastDateFilterType":"LatestTime",




```





```js

// change

http://10.1.5.203/http-report/query?{"ApiName":"fund.f9.fund_profile.FundManager.BasicInformations","SecuCode":"000011","Names":"阳琨","WriteType":"json","Page":{"PageNo":"11","PageSize":100}}



```



location


url_path





```js

let obj = {"ApiName":"TestProtocol ","WriteType":"json"};
let str = JSON.stringify(obj);
let s =  `"`;

str.replace(/[\s]*[\"]/i, s);
// "{"ApiName":"TestProtocol ","WriteType":"json"}"
// Group Error

str.replace(/[\s]*\"/ig, s);
// "{"ApiName":"TestProtocol","WriteType":"json"}"
// OK

```


