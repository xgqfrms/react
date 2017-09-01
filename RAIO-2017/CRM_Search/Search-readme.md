# search




```jsx
// "Action":"GetTreeSchema"


// all
http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json"}


// KeyWord
http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json", "KeyWord":"指数--> F10--> 非股票指数--> 指数基金--> 指数行情"}


指数--> F10--> 非股票指数--> 指数基金--> 指数行情



// ReportName
http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json", "ReportName":"IndexF10IndexQuotation"}




// multi

http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json", "KeyWord":"指数--> F10--> 非股票指数--> 指数基金"}


# search results


Info = [
    {
        description: "指数--> F10--> 非股票指数--> 指数基金"
        name: "IndexF10IndexFund"
    },
    {
        description: "指数--> F10--> 非股票指数--> 指数基金--> 指数行情"
        name: "IndexF10IndexQuotation"
    }
];


https://www.cnblogs.com/laden666666/p/5544572.html


属性页面 => 目标输入框:
--disable-web-security --user-data-dir=D:\chrome



http://local?{"KeyWord":"指数--> F10--> 非股票指数--> 指数基金--> 指数行情"}


// serach cache




## input & ouput


name: "IndexF10IndexQuotation"



> ReportName === unique key


GetSchema === input

http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}


GetRowSchema === output

http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetRowSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}



## test


> 必填项

input.required === table.columns

input.example/ null === table.值\

// ApiName = input name: "IndexF10IndexQuotation"
// WriteType = json

> tets url?{table object}

http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetRowSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}









> 可选项


input.options  === table.值 (null) & [], {}

// multi select, checkboxs, timepicker


> 测试结果

// multi tables, name

output  === table.columns

output  ===  test values

// test






http://10.6.1.81/http-report/query?{'ApiName':'fund.f9.fund_profile.FundManager.BasicInformations','SecuCode':'000011','Names':'阳琨',"Sorts":[{"Field":"basicinformationrow.a0","Sort":"asc"}],"Page":{"PageNo":"1","PageSize":"100"},"FastDateFilterType":"LatestTime","WriteType":"json"}



// schema.AnyManagedFundsRow

// multi tables



http://10.6.1.81/http-report/query?{'ApiName':'fund.f9.fund_profile.FundManager.BasicInformations','SecuCode':'000011','Names':'阳琨',"WriteType":"json"}



columnMeta": {
    "a0": "STRING",
    "a1": "STRING",
    "a2": "STRING",
    "a3": "DATE",
    "a4": "DATE",
    "a5": "DOUBLE",
    "a6": "INT"
},

rows": [
    [
        "华夏基金管理有限公司",
        "华夏大中华企业精选灵活配置混合(QDII)",
        "其他型基金",
        "2016-01-20",
        "",
        21.877086009428236,
        65135
    ],
    [
        "华夏基金管理有限公司",
        "华夏大盘精选混合",
        "混合型基金",
        "2015-09-01",
        "2017-05-02",
        10.307680340705128,
        2944
    ]
];



http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetRowSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22IndexF10IndexFund%22}


Properties": {
    "A0": {
        "type": "string",
        "Description": "基金代码"
    },
    "A1": {
        "type": "string",
        "Description": "基金名称"
    },
}




fund.f9.fund_profile.FundManager

BasicInformations

fund.f9.fund_profile.FundManager.BasicInformations

output
{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'fund.f9.fund_profile.FundManager.BasicInformations'}


input
{'Admin':'report','Action':'GetSchema','WriteType':'json','ReportName':'fund.f9.fund_profile.FundManager.BasicInformations'}


http://10.1.5.203/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json','ReportName':'fund.f9.fund_profile.FundManager.BasicInformations'}

http://10.1.5.203/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json','ReportName':'fund.f9.fund_profile.FundManager'}




test
{'ApiName':'fund.f9.fund_profile.FundManager.BasicInformations','SecuCode':'000011','Names':'阳琨',"WriteType":"json"}



http://10.1.5.203/http-report/query?{'ApiName':'fund.f9.fund_profile.FundManager.BasicInformations','SecuCode':'000011','Names':'王亚伟',"WriteType":"json"}


http://10.1.5.203/http-report/query?{'ApiName':'fund.f9.fund_profile.FundManager','SecuCode':'000011','Names':'阳琨',"WriteType":"json"}


http://10.1.5.203/http-report/query?{'ApiName':'fund.f9.fund_profile.FundManager','SecuCode':'000011','Names':'阳琨',"WriteType":"json"}


fund.f9.fund_profile.FundManager





http://10.1.64.117;8081/http/manage/admin?{'Admin':'report','Action':'GetTreeSchema','WriteType':'json'}

// TreeMenus

http://10.1.5.203/http-manage/admin?{'Admin':'report','Action':'GetTreeSchema','WriteType':'json'}

http://10.1.5.203/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetTreeSchema%27,%27WriteType%27:%27json%27}


// all
http://10.1.64.117:8081/http/manage/admin?{"Admin":"report","Action":"GetTreeSchema","WriteType":"json"}


基金->F9->基金概况 ->基金经理->基金经理详细信息(基本资料)

const data = {
    name: '基金',
    linkname: "",
    toggled: true,
    active: false,
    loading: false,
    children: [
        {
            name: 'F9 基金经理',
            children: [
                {
                    name: '基金经理详细信息(基本资料)',
                    linkname: `${fund.f9.fund_profile.FundManager.BasicInformations}`
                },
                { name: 'child2' }
            ]
        },
        {
            name: 'loading parent',
            loading: true,
            children: []
        },
        {
            name: 'parent',
            children: [
                {
                    name: 'nested parent',
                    children: [
                        { name: 'nested child 1' },
                        { name: 'nested child 2' }
                    ]
                }
            ]
        }
    ]
};




http://10.1.5.203/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetSchema%27,%27WriteType%27:%27json%27,%27ReportName%27:%27fund.f9.fund_profile.FundManager%27}








指数--> F10--> 非股票指数--> 指数基金




http://10.1.5.203/webtool/home.html









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



GetRowSchema === output

{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexQuotation'}


http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexFund'}


http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetRowSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}




GetSchema === input

http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json',ReportName':'IndexF10IndexFund'}

http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}






```





```js

    {
        "AnyManagedFundsRow":
        [
            {
                A0: "华夏基金管理有限公司",
                A1: "华夏大中华企业精选灵活配置混合(QDII)",
                A2: "其他型基金",
                A3: "2016-01-20",
                A4: "其他型基金",
                A5: "21.877086009428236",
                A5: "65135"
            },
                                {
                A0: "华夏基金管理有限公司",
                A1: "华夏大中华企业精选灵活配置混合(QDII)",
                A2: "其他型基金",
                A3: "2016-01-20",
                A4: "其他型基金",
                A5: "21.877086009428236",
                A5: "65135"
            }
        ]
    }

```

# data shape

> map & for in keys

```js
data = {} 

// "name": "AnyManagedFundsRow",
let new_pobj.title = data.name;

let key = data.columnMeta.key;
let value = data.rows[i][i];

new_cobj[key] = value;

new_pobj.table = new_cobj;

new_tables.push(new_pobj);

{
    title: "",
    table: []
}


"AnyManagedFundsRow" : [
    {
        A0: ""
    },
    {
        A0: ""
    }
]

```


```js

    [
        {
            "name": "AnyManagedFundsRow",
            "columnMeta": {
                "a0": "STRING",
                "a1": "STRING",
                "a2": "STRING",
                "a3": "DATE",
                "a4": "DATE",
                "a5": "DOUBLE",
                "a6": "INT"
            },
            "rows": [
                [
                    "华夏基金管理有限公司",
                    "华夏大中华企业精选灵活配置混合(QDII)",
                    "其他型基金",
                    "2016-01-20",
                    "",
                    21.877086009428236,
                    65135
                ],
                [
                    "华夏基金管理有限公司",
                    "华夏大盘精选混合",
                    "混合型基金",
                    "2015-09-01",
                    "2017-05-02",
                    10.307680340705128,
                    2944
                ]
            ]
        }
    ]

```





## `"use strict";`


https://www.w3schools.com/js/js_strict.asp


## Eslint disable


```js

/* eslint-disable no-console, no-unused-vars */


/* eslint-enable no-console */

```

## Destructuring Assignment


### IC.SF 

> VS code

> F12 ? IC.SF : SF




```jsx

// make all components in one
import {SC} from './SC';
import {SCT} from './SCT';
import {LF} from './LoginForm';
import {SF} from './SF';

const IC = {
    SC,
    SCT,
    LF,
    SF
};

export {IC};
export default IC;




import {IC} from './index-components';
// {...IC} / IC.SCT

const {
    SC,
    SCT,
    LF,
    SF
} = {...IC};



```






## query


```md

基金 ->F9
基金 -->F9

// 基金 
// F9


基金->F9
基金-->F9

// 基金F9


// 可以使用正则，忽略掉 ->, -->， 只保留 空格，关键词


```





