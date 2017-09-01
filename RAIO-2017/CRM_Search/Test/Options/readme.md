# Options


```js

{
  "ApiName": "",
  "Filters": [
    {
      "FilterType": "like",
      "Field": "A0(来自于输出字段)",
      "Value": "hello(用户输入)"
    },
    {
      "FilterType": "equal",
      "Field": "A0(来自于输出字段)",
      "Value": "world(用户输入)"
    },
    {
      "FilterType": "between",
      "Field": "A0(来自于输出字段)",
      "MaxValue": "2017-08-04(时间选择控件)",
      "MinValue": "2012-01-01(时间选择控件)"
    },
    {
      "FilterType": "quarter",
      "Field": "A0(来自于输出字段)",
      "Value": [
        "Q1th(枚举值，固定)",
        "Q2nd(枚举值，固定)",
        "Q3rd(枚举值，固定)",
        "Q4th(枚举值，固定)"
      ]
    },
    {
      "FilterType": "in",
      "Field": "A0(来自于输出字段)",
      "Value": "hello world(用户输入)"
    }
  ],
"Sorts": [
{
    "Field": "A0(来自于输出字段)",
    "Sort": "desc(枚举值，固定)"
}
],
    "Page": {
    "PageNo": "1(用户输入)",
    "PageSize": "100(用户输入)"
    },
    "OutField": [
        "A0(来自于输出字段)",
        "A1(来自于输出字段)",
        "A2(来自于输出字段)"
    ],
    "IgnoreField": [
        "A4(来自于输出字段)",
        "A5(来自于输出字段)"
    ],
    "Group": "A0(来自于输出字段)",
    "FastDateFilterType": "Latest5Year(枚举值，固定)",
    "FastQuarterReportType": [
        "Q1th(枚举值，固定)",
        "Q2nd(枚举值，固定)",
        "Q3rd(枚举值，固定)",
        "Q4th(枚举值，固定)"
    ],
    "Compress": "true or false",
}


  "Sorts": [
    {
      "Field": "AnyManagedFundsRow.A0",
      "Sort": "desc(枚举值，固定)"
    }，
    {
      "Field": "AnyManagedFundsRow.A3",
      "Sort": "desc(枚举值，固定)"
    }，
    {
      "Field": "BasicInformationRow.A0",
      "Sort": "desc(枚举值，固定)"
    }，
    {
      "Field": "T3.A0",
      "Sort": "desc(枚举值，固定)"
    }
]


// sorts demo

output table.name & table.A0






// 这是只是一个笔记！

JY.Topic.Profit_forecast.Stock_performance_forecast.LatestForecastData

http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetSchema%22,%22ReportName%22:%22JY.Topic.Profit_forecast.Stock_performance_forecast.LatestForecastData%22,%22WriteType%22:%22json%22}


> Required": true & "type": "array",

JYTopic.StockSecondaryMarket.StockMarketPeform

> any & output

http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetSchema%22,%22ReportName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22WriteType%22:%22json%22}


http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetRowSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22}


/*


any === 动态表头:

1. 使用测试命令 获取 output

2. 构造 result tabs & tables rows

*/


"Page": {
    "PageNo": "1",
    "PageSize": "100"
  }





"OutField": [
    "AnyManagedFundsRow.A0",
    "AnyManagedFundsRow.A1"，
    "BasicInformationRow.A3",
    "BasicInformationRow.A5"
 ]



// 互斥 ？？ search prefix select ？？


"IgnoreField": [
    "AnyManagedFundsRow.A0",
    "AnyManagedFundsRow.A1"，
    "BasicInformationRow.A3",
    "BasicInformationRow.A5"
 ],






"Group": `/"AnyManagedFundsRow.A0"/"AnyManagedFundsRow.A1"/"BasicInformationRow.A3"/"BasicInformationRow.A5"`

// 单选 radio
// output multi tables to one






```


































```jsx

/* 

Sorts:
    {
        key: "k-s",
        name: "Sorts",
        type: "Array",
        value: "select 1 = 请先选择排序字段: (? multi table ? )dynamic output desc; select 2 =  排序方式，升序或者降序: (升序),(降序),(无序)",
        description: "排序字段，支持排序组合"
    }

// ["Asc(升序)", "desc(降序)", "no(无序)"]

排序方式: 
    <Select
        placeholder="排序方式，升序或者降序: (升序),(降序),(无序)"
        > 
        <Option value="descend">升序</Option>
        <Option value="Ascend">升序</Option>
        <Option value="null">无序</Option>
    </Select>

Page
    {
        key: "k-p",
        name: "ShKindCode",
        type: "object",
        value: "input 1 = 请求的页数：1 ; input 2 = 每页的大小：100",
        description: "分页参数"
    }

OutField:
    {
        key: "k-of",
        name: "OutField",
        type: "Array",
        value: "multi select options 1 = dynamic output desc (全选/全不选/customize)",
        description: "数据输出的字段，用于输出字段过滤，当输出字段数量小于不输出字段数量时采用"
    }

IgnoreField:
    {
        key: "k-if",
        name: "IgnoreField",
        type: "Array",
        value: "multi select options 1 = dynamic output desc (全选/全不选/customize)",
        description: "数据输出的字段，用于输出字段过滤，当输出字段数量大于不输出字段数量时采用"
    }

Group

"Group": `/"AnyManagedFundsRow.A0"/"AnyManagedFundsRow.A1"/"BasicInformationRow.A3"/"BasicInformationRow.A5"`

// 单选 select
// output multi tables to one


    <RadioGroup
        onChange={this.onChange}
        value={this.state.value}>
        <Radio value="true">
            是
        </Radio>
        <Radio value="false">
            否
        </Radio>
    </RadioGroup>


// 单选 radio
// output multi tables to one



Filters

// disabled








FastDateFilterType
    {
        key: "k-fdft",
        name: "FastDateFilterType",
        type: "string",
        value: "select 1 = fixed ((最新日期) (今年以来) (近一月) (近三月) (近六月) (近一年) (近二年) (近三年) (近五年) (全部) (上市以前) (上市以后) (自定义 ? datapicker ))",
        description: "日期 快速过滤类型"
    }

const FDFT = [(最新日期) (今年以来) (近一月) (近三月) (近六月) (近一年) (近二年) (近三年) (近五年) (全部) (上市以前) (上市以后)];

// fixed ("LatestTime" / "CurrentYear") 12 select

// input FastDateFilterType

const FDFT = [
    "LatestTime(最新日期)",
    "CurrentYear(今年以来)",
    "Latest1Month(近一月)",
    "Latest3Month(近三月)",
    "Latest6Month(近六月)",
    "Latest1Year(近一年)",
    "Latest2Year(近二年)",
    "Latest3Year(近三年)",
    "Latest5Year(近五年)",
    "AllYear(全部)",
    "ListedBefore(上市以前)",
    "ListedAfter(上市以后)",
    "Customer(自定义)"
];
// regex


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

FDFT.map(
    (value, index) => {
        console.log(`value = `, value);
        // console.log(`value.index = `, value.index);
        // console.log(`value[index] = `, value[index]);
        for(let key in value){
            console.log(`value[key] = `, value[key]);
            console.log(`value key = `, key);
        }
        // return();
    }
);








FastQuarterReportType
    {
        key: "k-fqrt",
        name: "FastQuarterReportType",
        type: "Array",
        value: "multi checkbox 1 = fixed ((一季报) (中报) (三季报) (年报))",
        description: "季报 快速过滤类型"
    }

// array === checkboxs

// fixed ("Q1th" / "Q2nd") 4 multi checkboxs


// ["Q1th(一季报)", "Q2nd(中报)", "Q3rd(三季报)", "Q4th(年报)"]


const QR = [
    "Q1th(一季报)",
    "Q2nd(中报)",
    "Q3rd(三季报)",
    "Q4th(年报)"
];



const QR = [
    {"label": "一季报", "value": "Q1th"},
    {"label": "中报", "value": "Q2nd"},
    {"label": "三季报", "value": "Q3rd"},
    {"label": "年报", "value": "Q4th"}
];




<CheckboxGroup
    options={QR}
    defaultValue={["Q1th"]}
    onChange={onChange}
/>


QR.map(
    (value, index) => {
        let c_value = value.slice(0, 4);
        let label = value.slice(5);
        if (debug) {
            console.log(`value = `, value);
            console.log(`new value = `, c_value);
            console.log(`new desc = `, label);
        }
        return(
            <Checkbox
                key={index}
                onChange={() => "onChange()"}
                value={c_value}>
                {
                    label
                }
            </Checkbox>
        );
    }
)





const QR = [
    {"label": "Q1th", "value": "一季报"},
    {"label": "Q2nd", "value": "中报"},
    {"label": "Q3rd", "value": "三季报"},
    {"label": "Q4th", "value": "年报"}
];

<CheckboxGroup options={plainOptions} defaultValue={["苹果"]} onChange={onChange} />

// "checked = " ["苹果", "Pear", "Orange"]


const QR = [
    "Q1th 一季报",
    "Q2nd 中报",
    "Q3rd 三季报",
    "Q4th 年报"
];

QR.map(
    (value, index) => {
        console.log(`value = `, value);
        let v = value.slice(0, 4);
        let d = value.slice(5);
        console.log(`new value = `, v);
        console.log(`new desc = `, d);
    }
);


 "Compress": "true or false",

: true
: "true"

  "CallBack": "不要",
  "ExtParams": "不要",

input disabled

"WriteType": "json(固定)"

"Filters": [
    {
      "FilterType": "like",
      "Field": "A0(来自于输出字段)",
      "Value": "hello(用户输入)"
    },
    {
      "FilterType": "equal",
      "Field": "A0(来自于输出字段)",
      "Value": "world(用户输入)"
    },
    {
      "FilterType": "between",
      "Field": "A0(来自于输出字段)",
      "MaxValue": "2017-08-04(时间选择控件)",
      "MinValue": "2012-01-01(时间选择控件)"
    },
    {
      "FilterType": "quarter",
      "Field": "A0(来自于输出字段)",
      "Value": [
        "Q1th(枚举值，固定)",
        "Q2nd(枚举值，固定)",
        "Q3rd(枚举值，固定)",
        "Q4th(枚举值，固定)"
      ]
    },
    {
      "FilterType": "in",
      "Field": "A0(来自于输出字段)",
      "Value": "hello world(用户输入)"
    }
],

// select 1 & select 2 (components ???)

"FilterType": "like",
// In、Between、Like、equal、quarter



// ??? enum multi = array , single = string

date = datepicker(yyyy-MM-dd) / input



*/



```





```jsx
{
    (this.state.isCollapsed === true)
    ?
    <Collapse
        defaultActiveKey={['2']}
        onChange={this.cilicPanel}
        className="options-panal">
        <Panel
            header={ (this.state.isCollapsed === true) ? "展开-可选项" : "收起-可选项"}
            key="1"
            >
            {/* <Table dataSource={this.props.dataSource} columns={this.props.columns} bordered pagination={false}/> */}
            <OI dataSource={this.props.dataSource} columns={this.props.columns}/>
            <Form />
        </Panel>
    </Collapse>
    :
    <Collapse
        defaultActiveKey={['2']}
        onChange={
            (e) => {
                return "callback";
            }
        }
        onClick={this.cilicPanel}
        className="options-panal">
        <Panel
            header={"收起-可选项"}
            key="1"
            onClick={this.cilicPanel}
            >
            <OI dataSource={this.props.dataSource} columns={this.props.columns}/>
            <Form />
        </Panel>
    </Collapse>
}
```









```js

    {
        sort_items.map(
            (value, index) => {
                return(
                    <Option
                        key={index}
                        value={value.name}>
                        {value.description}
                    </Option>
                )
            }
        )
    }

Object.keys(sort_items);


/*

    let obj = {A0: "基本资料-成立日期", A1: "基本资料-总经理", A2: "基本资料-法人代表"};

    Object.keys(obj);
    // ["A0", "A1", "A2"]
    Object.values(obj);
    // ["基本资料-成立日期", "基本资料-总经理", "基本资料-法人代表"]
    Object.entries(obj);
    // [["A0", "基本资料-成立日期"], ["A1", "基本资料-总经理"], ["A2", "基本资料-法人代表"]]
    // map ??

*/

for(let key in obj){
    console.log(`key = `, key);
    console.log(`obj[${key}] === value = `, obj[key]);
}

/*

    key =  A0
    obj[A0] === value =  基本资料-成立日期
    key =  A1
    obj[A1] === value =  基本资料-总经理
    key =  A2
    obj[A2] === value =  基本资料-法人代表

*/


// array / array like object
for(let value of obj){
    console.log(`value`, value);
}

// Uncaught TypeError: obj[Symbol.iterator] is not a function

```



```jsx
// bug


    {
        [sort_items].map(
            (sort_items) => {
                let i = 0;
                for(let key in sort_items){
                    return(
                        <Option
                            key={key.toString()+i}
                            value={key}>
                            {
                                sort_items[key]
                            }
                        </Option>
                    )
                }
            }
        )
    }



[fields_items].map(
    (fields) => {
        let i = 0;
        for(let key in fields){
            return(
                <Option
                    key={key.toString()+i}
                    value={key}>
                    {
                        fields[key]
                    }
                </Option>
            )
        }
    }
)



let obj = {A0: "基本资料-成立日期", A1: "基本资料-总经理", A2: "基本资料-法人代表"};

[obj].map(
    (fields) => {
        let i = 0;
        for(let key in fields){
            console.log(`key`, key);console.log(`fields[key]`, fields[key]);
        }
    }
)
// key A0
// fields[key] 基本资料-成立日期
// key A1
// fields[key] 基本资料-总经理
// key A2
// fields[key] 基本资料-法人代表






```


## shit api


```jsx


// OK

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


    // Bad

    {
        [fields_items].map(
            (fields) => {
                let i = 0;
                let arr = [];
                for(let key in fields){
                    arr.push(
                        <Option
                            key={i++}
                            value={key}>
                            {
                                fields[key]
                            }
                        </Option>
                    )
                }
                return arr;
            }
        )
    }

// Uncaught TypeError: Cannot use 'in' operator to search for 'value' in undefined






```







```js


    // sort_items => array === Object.keys()
    // sort_items for in
    const index_values = [
        {
            "key": "k1",
            "name": "A0",
            "type" : "string",
            "description" : "A份额交易代码"
        },
        {
            "key": "k2",
            "name": "A1",
            "type" : "string",
            "description" : "净值日期"
        },
        {
            "key": "k3",
            "name": "A2",
            "type" : "string",
            "description" : "A份额交易代码"
        },
        {
            "key": "k4",
            "name": "A3",
            "type" : "number",
            "description" : "单位净值（元）"
        }
    ];

```






```js

test_url: "",
test_obj: {},

required_obj: {},
required_url: "",

option_obj: {},
option_url: "",


test_obj = Object.assign({}, required_obj, option_obj);
test_url = `${url}?${JSON.stringify(test_obj)}`;


```




```jsx


    onRadioChange = (e) => {
        // onChange
        console.log('radio checked', e.target.value);
        /* this.setState({
            radio_value: e.target.value,
        }); */
    };
    onSelectChange = (e) => {
        // onChange
        if (debug) {
            console.log('%c pagination target', color.color_css3, e.target);
            console.log('pagination target.id', e.target.id);
            console.log('pagination target.value', e.target.value);
        }
        if (e.target.id === "pages") {
            this.setState({
                input_value: Object.assign(
                    this.state.input_value,
                    {
                        pages: e.target.value
                    }
                )
            });
        }
        if (e.target.id === "size") {
            this.setState({
                input_value: Object.assign(
                    this.state.input_value,
                    {
                        size: e.target.value
                    }
                )
            });
        }
    };
    onSelectsChange = (e) => {
        // onChange
        console.log('selects checked', e.target.value);
        /* this.setState({
            select_value: e.target.value,
        }); */
    };



console.log('%c autoSave ??? = \n', color.css2);
this.autoSave();

// shit Component, do not auto update!


```








```md


endDate:754
beginDate:449
secuCode:395
innerCode:101
reportDate:84
level:75
standard:61
industryCode:49
reportType:46
beganDate:44
year:43
dateTime:37
mark:36
gilCode:32
companyCode:28
currency:26
secCode:25
imageType:21
orgTye:19
statisPeriod:18
queryType:17
dateType:17
type:17
investAdvisorCode:16
transType:15
marketType:15
agentCode:14
bondCode:13
queryImage:13
category:13
tradeType:11
top:11
INVALIDDATE:10
tradingDay:10



companyType:9
industryType:9
gilCodes:8
orgCode:8
listedType:8
code:8
fundType:8
statPeriod:8
tradeDate:8
timingCycle:7
lx:7
industryStandardCode:7
sectorNums:6
holdTypeSet:6
secuType:6
date:6
endYear:6
holdType:6
industry:5
dataType:5
dayRangeType:5
sorTing:5
industryCategory:5
statisPeriodType:5
countTypes:5
period:5
shType:5
report:5
num:5
standcode:5
market:5
endMonth:5
delRule:5
process:5
Beta:4
companyCodes:4
RF:4
RM:4
shKindCode:4
statisType:4
areaCode:4
codeFlag:4
currencyType:4
gildCode:4
industryNum:4
industryLevel:4
calcuType:4
dateLX:4
ifAdjusted:4
shKindCodeSet:4
imageQueryType:4
indexCode:3
sourceType:3
tradeTypes:3
issueID:3
statisRangeType:3
nodeId:3
personalCode:3
ifMerged:3
repurchaseType:3
forecastYear:3
id:3
MktMakeCode:3
agencyType:3
standardCode:3
categoryCode:3
mType:3
names:3
statDateType:3
ListState:3
yearDiv:3
ratingCode:3
ranks:3
yearDate:3
repurchaseTypeSet:3
tradeTypeSet:3
cost:3
marketTypes:3
quartType:3
bondType:3
monthDay:2
issuePlanDateType:2
calcType:2
marketPlates:2
circle:2
secuCoBelongedCode:2
planState:2
imageID:2
sectorCode:2
tradingDate:2
pyShortName:2
shareHolderCode:2
publDate:2
stageDateType:2
wglx:2
EndDate:2
reportDates:2
shList:2
awardUnit:2
periodtype:2
indexCodes:2
departmentName:2
mTypeSet:2
reportYear:2
stageLengthType:2
stateType:2
tradeDayType:2
reportDataType:2
removeRule:2
MarketType:2
indexType:2
sortType:2
innerCodes:2
induCode:2
cflx:2
rid:2
zdf1:2
zdf2:2
secuMarketType:2
flagDate:2
trusteeCode:2
countMethod:2
order:2
classification:2
secondIndustryCode:2
baseDate:2
sourceTypes:2
serverName:2
dataTypes:2
brokerCode:2
flagCode:2
removeDE:2
pointDesc:2
selectDate:2
StartDate:2
secuCoName:2
publicIssueDateType:2
author:2
userDefined:2
dsr:2
TransType:2
dividType:2
oID:2
changeType:2
beganYear:2
listed:2
ignoreNull:1
unLimitDate:1
analystID:1
shareType:1
sortFieldInfo:1
sectorCodes:1
groupFiled:1
AF:1
modConfigId:1
posnNum:1
securityCompany:1
Code:1
assetType:1
ignoreFieldList:1
leaderName:1
sHName:1
configIDs:1
holderType:1
association:1
SD:1
SR:1
flg:1
dateFilterType:1
changeTypes:1
procedure:1
preferStockBasicDateType:1
abnorReason:1
ranking:1
TR:1
quarter:1
holderCode:1
parentNodeId:1
typeSelect:1
language:1
source:1
exclude:1
wglx_MA:1
adj:1
titleSN:1
eventProcedures:1
posnNumSet:1
EV:1
name:1
researchDes:1
adjustment:1
zzl1:1
dateInterval:1
zzl2:

```





## 

```jsx

<Select
    allowClear
    placeholder="排序字段，支持排序组合"
    onChange={this.onSelectSortKeyChange}
    defaultActiveFirstOption
    showSearch
    defaultValue
    // ??? Select dynamic Options, how to set defaultValue ???
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




    <Select
        allowClear
        placeholder="排序字段，支持排序组合"
        onChange={this.onSelectSortKeyChange}
        defaultActiveFirstOption
        showSearch
        defaultValue={Object.keys(sort_items)[0]}
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
    </Select>

```



```js



"orgCode": "001"

"orgCode": ["001", "002", "003"]



"orgCode": []

orgCode.push(value);

if(orgCode.length === 1){
    "orgCode": orgCode.[0].toString()
}
if(orgCode.length > 1){
    "orgCode": orgCode
}

```


```js

// BeginDate & EndDate

const date = new Date().toLocaleDateString().replace(/\//g, "-");
// "2017-8-29"


```



http://exploringjs.com/es2016-es2017/ch_exponentiation-operator.html

```js

/* boolean */
// result === true

['a', 'b', 'c'].includes('a');
// true
['a', 'b', 'c'].includes('d');
// false

/* first index / -1 */
// result >= 0
['a', 'b', 'c'].indexOf('d');
// -1
['a', 'b', 'c'].indexOf('a');
// 0
['a', 'b', 'c'].indexOf('b');
// 1
['a', 'b', 'c'].indexOf('c');
// 2

[-0].includes(+0);
// true
[NaN].includes(NaN);
// true
[-0].indexOf(+0);
// 0
[NaN].indexOf(NaN);
// -1
let TypedArray = Uint8Array.of(12, 5, 3);
console.log(TypedArray.includes(5));
// true


```



```js

let x = 2, y = 3;

Math.pow(x, y);
// 8
x ** y;
// 8




```


jscomplete

ant-form

es6

raio

```js

// output === any & no table / dynamic table

http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetRowSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22fund.f9.FactSheetReturnHis%22}

?{"Admin":"report","Action":"GetRowSchema","WriteType":"json","ReportName":"fund.f9.FactSheetReturnHis"}


{
    "Success": true,
    "Info": {
        "schema": {
            "type": "any"
        },
        "name": "fund.f9.FactSheetReturnHis"
    }
}

// output & multi tables 

http://10.1.5.203/http-report/query?{"ApiName":"fund.f9.fund_profile.FundManager.BasicInformations","SecuCode":"000011","Names":"阳琨","WriteType":"json"}



// test & multi tables 

http://10.1.5.203/http-report/query?{"ApiName":"fund.f9.fund_profile.FundManager.BasicInformations","SecuCode":"000011","Names":"阳琨","WriteType":"json"}



// input & example ? true : false

// required example & options example ???


// no example

http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22fund.f9.FactSheetReturnHis%22}

?{"Admin":"report","Action":"GetSchema","WriteType":"json","ReportName":"fund.f9.FactSheetReturnHis"}



// input single example

"commandexample": "{            \"SecuCode\": \"000011\",            \"ApiName\": \"fund.f9.fund_profile.FundManager\" }",


http://10.1.5.203/http-manage/admin?{"Admin":"report","Action":"GetSchema","ReportName":"fund.f9.fund_profile.FundManager","WriteType":"json"}







let str = "{            \"SecuCode\": \"000011\",            \"ApiName\": \"fund.f9.fund_profile.FundManager\" }";

let s =  ``;

let str_obj = str.replace(/[\s]*\"/ig, s);
// "{"SecuCode":"000011","ApiName":"fund.f9.fund_profile.FundManager"}"

let obj = JSON.parse(str_obj);
// {SecuCode: "000011", ApiName: "fund.f9.fund_profile.FundManager"}

keys = Object.keys(obj);
// ["SecuCode", "ApiName"]




https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

const str = "{            \"SecuCode\":  000011,            \"ApiName\": \"fund.f9.fund_profile.FundIntroduce\" }";


let newstr_prefix = str.replace(/\"SecuCode\":[\s]*0/i, `\"SecuCode\":"0`);
// "{            "SecuCode":"000011,            "ApiName": "fund.f9.fund_profile.FundIntroduce" }"

let newstr_suffix = newstr_prefix.replace(/,[\s]*\"ApiName\":/i, `",\"ApiName\":`);
// "{            "SecuCode":"000011","ApiName": "fund.f9.fund_profile.FundIntroduce" }"


const target_obj = JSON.parse(newstr_suffix);

// {SecuCode: "000011", ApiName: "fund.f9.fund_profile.FundIntroduce"}












// test & null 

http://10.1.5.203/http-report/query?{%22ApiName%22:%22fund.f9.FactSheetReturnHis%22,%22SecuCode%22:%22000011%22,%22WriteType%22:%22json%22}






switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}



```

## no example


http://localhost:3000/api/sc/BasicInformationDeatil

```md

BeginDate

EndDate


ApiName	string	报表名称(true)
BeginDate	string	到任日期(true)
EndDate	string	离任日期(true)
InnerCode	integer	证券编码(true)
SecuCode	string	基金编码(true)
Names	string	姓名(true)

```



## style 850px ???

> good

boxSizing: "border-box",

> bad

boxSizing: "borderBox",

> maxWidth: 900,

```jsx

style={{
    width: "calc(100% - 300px)",
    // maxWidth: 900,
    margin: 10,
    padding: 10,
    boxSizing: "border-box",
    overflowX: "hidden"
}}>



## overflow-x

```css


// box-sizing: border-box;


@charset "UTF-8";
.app-api {
    padding-top: 67px;
    box-sizing: border-box;
    overflow-y: scroll;
    /* overflow-x: hidden; */
    height: 100%;
    width: 100%;
}

```

## 850

```jsx

style={{
    // width: "calc(100% - 300px)",
    //width: "100%",
    maxWidth: 850,
    margin: 10,
    padding: 10,
    boxSizing: "border-box",
    overflowX: "hidden"
}}>



```




## example



multi-examples.json

commandexample.json



如果只是要一个随机的字符， 可以自定义一个 小字典，从中随机取一个字符就行了，字符要有意义！

例如: 

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


```js

let a = "如果只是要一个随机的字符可以自定义一个小字典从中随机取一个字符就行了字符要有意义";

a.length;
// 40

let value = "";


value = a[parseInt(Math.random()*40)];
// "定"
value = a[parseInt(Math.random()*40)];
// "随"
value = a[parseInt(Math.random()*40)];
// "个"
value = a[parseInt(Math.random()*40)];
// "从"
value = a[parseInt(Math.random()*40)];
// "自"
value = a[parseInt(Math.random()*40)];
// "取"
value = a[parseInt(Math.random()*40)];
// "机"
value = a[parseInt(Math.random()*40)];
// "小"
value = a[parseInt(Math.random()*40)];
// "机"



Array.from(a); 
// (40) ["如", "果", "只", "是", "要", "一", "个", "随", "机", "的", "字", "符", "可", "以", "自", "定", "义", "一", "个", "小", "字", "典", "从", "中", "随", "机", "取", "一", "个", "字", "符", "就", "行", "了", "字", "符", "要", "有", "意", "义"]

a.split("");
// (40) ["如", "果", "只", "是", "要", "一", "个", "随", "机", "的", "字", "符", "可", "以", "自", "定", "义", "一", "个", "小", "字", "典", "从", "中", "随", "机", "取", "一", "个", "字", "符", "就", "行", "了", "字", "符", "要", "有", "意", "义"]







// string !== array 
a.map(
    (str, index) => {
        console.log(`str = `, str);
        console.log(`index = `, index);
    }
);

```







```js

let s = "The quick brown fox jumps over the lazy dogs.";

const chunk = (str, n) => {
    let ret = [],
        i = 0,
        len = str.length;
    for(i, len; i < len; i += n) {
       ret.push(str.substr(i, n))
    }
    return ret
};

chunk("The quick brown fox jumps over the lazy dogs.", 5).join('$');
// "The q$uick $brown$ fox $jumps$ over$ the $lazy $dogs."


```

## regex 


```js


let num = 1215464565; 
let newNum = num.toString()
                .match(/.{2}/g)
                .join('-');


console.log(newNum);
// 12-15-46-45-65

// match()
// regex /./ ???


let num = 1215464565; 
let newNum = num.toString()
                .replace(/(?!^)(\d{2})(?=(?:\d{2})*$)/g, '-$1');
// "12-15-46-45-65"

// replace()
// regex \d -$1

```



##  `regex` & `string.split()` & `array.form() `&` slice() `& `map()` & `JSON.parse()`



JYTopic.StockSecondaryMarket.StockMarketPeform

主板->专题统计->二级市场->市场表现->个股行情表现


http://10.1.5.203/http-report/query?%7B%22Page%22:%7B%22PageNo%22:%221%22,%22PageSize%22:%221%22%7D,%22EndDate%22:%222011-03-11%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:%5B%22RBX%22,%22JYZBX%22%5D,%22SecuType%22:%22All%22,%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22WriteType%22:%22json%22%7D



## test

> EndDate ??? bug

`<DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />`



> DatePerformType: array ??? error


### String to Array

[eslint] Unexpected lexical declaration in case block. (no-case-declarations)






```js
    /* 
        DatePerformType Array ???
        // id = index.type
        // data-* 
        // data-type={index.type}
        e.target.id =  DatePerformType
        e.target.value =  RBX,JYZBX 
    */


let s = "RBX,JYZBX";

let arr = s.split(",");

// ["RBX", "JYZBX"]

```


## switch & case

> update bug ???

[eslint] Unexpected lexical declaration in case block. (no-case-declarations)



```js
// Ok
case "DatePerformType":
    value = (
        e.target.value.trim().split(",")
    );
    break;

// bad
// console.log(`switch default`, key);
case "DatePerformType":
    console.log(`switch array`, key);
    // String to Array
    let s = e.target.value.trim();
    // "RBX,JYZBX"
    let arr = s.split(",");
    // ["RBX","JYZBX"]
    value = (
        arr
    );
    break;

```

## enhancement solution

placeholder="该数组的值支持逗号(,)、空格( )分词!"


```js

let s = "xyz,abc, SSS XXX";
let arr = s.replace(/([\w]{1})[\s]{1}([\w]{1})/ig, "$1,$2");

// "xyz,abc, SSS,XXX"


let ss = "xyz,abc, SSS XXX ZZZ, DDD EEE";

let multi_arr = s.replace(/([\w]{1})[\s]{1}([\w]{1})/ig, "$1,$2");

// "xyz,abc, SSS,XXX,ZZZ, DDD,EEE"

```


http://10.1.5.203/http-report/query?{"ApiName":"JYTopic.StockSecondaryMarket.StockMarketPeform","EndDate":"2011-03-11","SecuType":"All","MarketType":"HSLS","DatePerformType":["RBX","JYZBX"],"WriteType":"json"}


"JYTopic.StockSecondaryMarket.StockMarketPeform"

DatePerformType: (2) ["RBX", "JYZBX"]
EndDate: "2011-03-11"
MarketType: "HSLS"
SecuType: "All"
WriteType: "json"


### options ???

> ☹️ 暂无默认的可选项命令值

GilCodes array 聚源代码(可选参数)

SectorNums array 板块代码，一维:表示并集，二维:表示交集(可选参数)

http://localhost:3000/api/sc/JYTopic.StockSecondaryMarket.StockMarketPeform



# defaultValue

> moment() ??? function

```jsx

    // defaultValue={moment('2015-06-06', dateFormat)} 


    // defaultValue={moment('2015-06', 'YYYY-MM')}

    // defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}

    import { DatePicker } from 'antd';
    import moment from 'moment';
    const { MonthPicker, RangePicker } = DatePicker;

    const dateFormat = 'YYYY-MM-DD';
    ReactDOM.render(
    <div>
        <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
        <br />
        <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
        <br />
        <RangePicker
        defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
        disabled
        />
    </div>
    , mountNode);

```


## Invalid date & defaultValue

> example_obj = {}


BeginDate=""

EndDate=""


??? Today

```js

const date = new Date().toLocaleDateString().replace(/\//ig, `-`);

// bad
initialValue: moment(text, dateFormat) || date

// good
initialValue: moment(text || date, dateFormat) 


if(index.name === "EndDate" || index.name === "BeginDate"){
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
                    initialValue: moment(text || date, dateFormat)
                })(
                    <DatePicker 
                        onChange={(index.name === "EndDate" ? this.onEndDateChange : this.onBeginDateChange)} 
                        // placeholder="日期格式 2017-08-08"
                        placeholder={date_placeholder}
                        style={{minWidth: 300}}
                        allowClear
                        id={index.name}
                        showToday
                        // defaultValue={moment(text, dateFormat)}
                    />
                )
            }
        </FormItem>
    );



```







## datepicker bug ???


BasicInformationDeatil

http://localhost:3000/api/sc/BasicInformationDeatil

基金->F9->基金概况 ->基金经理->基金经理详细信息(明细)



## TCB example_obj

http://localhost:3000/api/sc/BasicInformationDeatil

http://localhost:3000/api/sc/JYTopic.StockSecondaryMarket.StockMarketPeform

```js

if (debug) {
    console.log(`%c TCB input_datas = ${input_datas}`, color.color_css3);
    console.log(`%c TCB output_datas = ${output_datas}`, color.color_css2);
    console.log(`%c TCB developer = ${developer}`, color.color_css1);
    console.log(`%c TCB example_obj = ${example_obj}`, color.color_css3);
}

```




## Compress & default Checked ???


```js
// bad

case "Compress": 
    valueType = (
        <RadioGroup
            onChange={this.onRadioGroupChange}
            >
            <Radio value="true" defaultChecked>
                是
            </Radio>
            <Radio value="false">
                否
            </Radio>
        </RadioGroup>
    )
    break;

//ok
case "Compress": 
    valueType = (
        <RadioGroup
            onChange={this.onRadioGroupChange}
            value={this.state.Compress}
            // defaultChecked
            >
            <Radio value="true" defaultChecked>
                是
            </Radio>
            <Radio value="false">
                否
            </Radio>
        </RadioGroup>
    )
    break;

```









issues/77

issues/78


## other ???


holdType:6 string/array

> int to string

> string yto string



sectorNums:6 二维数组[][]

> [[], [], []]

```js

map
keys
push


```

http://10.1.5.203/webtool/home.html?resource=tab0&sear_valu=

基金->F9->基金概况 ->基金经理(信息显示表格)

http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22fund.f9.fund_profile.FundManager%22}


> 删掉了?

Gender和All我都会给出你枚举值，不过Gender是单选，All是多选

All是中文，Gender是1，2，3


我看了下，那俩参数已经没用了，我直接删掉了
你不用管他们了，等我下次统一升级了就没 



##  bad api ???

orgCode: 8 int/array

fundType: 8 int/array


```js

"orgCode": "001"
// int

"orgCode": ["001", "002", "003"]
// array

```



```js

let key = e.target.id;
let value = e.target.value;
let values = value.trim().replace(/([\w]{1})[\s]{1,}([\w]{1})/ig, ",").split(",");

if(values.length > 1){
    // pass array
    obj[key] = values;
}else{
    // pass int string
    obj[key] = value;
}

```

## only one item Array ???

> type of input 

enum, Array
Object

int, string, number



```js

let ignore_Cap = type.replace(/([A-Z]{1})/g, $1);

let type = "Array";

type.toLowerCase();
// "array"



let value = "xyz, abc aaa, ccc";

value.replace(/([\w]{1})[\s]{1,}([\w]{1})/ig, ",").split(",");
// (4) ["xyz", " ab", "aa", " ccc"]

// object ??? selects || select


"Page":{"PageNo":1,"PageSize":100},
"Sorts":[
    {"Field":"BasicInformationRow.A2","Sort":"desc"}
]

```


```js

let key = e.target.id;
let value = e.target.value;

let type = e.target.data_type.toLowerCase();

let values = value.trim().replace(/([\w]{1})[\s]{1,}([\w]{1})/ig, ",").split(",");
// arr

if(type === "array" || values.length > 1 && type === "array"){
    // pass array
    obj[key] = values;
}else{
    // pass int string
    obj[key] = value;
}

let value;

switch(type){
    case "array": 
        obj[key] = values;
        break;
    case "enum": 
        obj[key] = values;
        break;
    case "object": 
        obj[key] = {id: value};
        break;
    default:
        obj[key] = value;
        break;
}



```


# LowerCase & UpperCase



> type.toLocaleUpperCase();

> type.toUpperCase();

```js
let type = "Array";

type.toLowerCase();
// "array"

type.toLocaleLowerCase();
// "array"

type.toLocaleUpperCase();
// "ARRAY"

type.toUpperCase();
// "ARRAY"


```





