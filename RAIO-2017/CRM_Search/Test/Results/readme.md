# example



multi-examples.json

commandexample.json


## test & output any 动态表头

http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22}

http://localhost:3000/api/sc/JYTopic.StockSecondaryMarket.StockMarketPeform


http://10.1.5.203/http-report/query?%7B%22Page%22:%7B%22PageNo%22:%221%22,%22PageSize%22:%221%22%7D,%22EndDate%22:%222011-03-11%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:%5B%22RBX%22,%22JYZBX%22%5D,%22SecuType%22:%22All%22,%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22WriteType%22:%22json%22%7D

```js

output_data = [];

// test.results = [{},{}]

attributes

query?dynamic_obj_url

// 调用父组件的方法，设置 output_datas

let cols = JSON.parse(test.results[i].attributes.columns).cols;
// string to array

// shape table data (key, desc, name, type ???)
JSON.stringify(cols, null, 4);




this.setState({
    output_datas: cols
});

if(this.props.output_datas.length > 0){
    <SCT output={this.props.output_datas}  />
}esle{
    <SCT output={this.state.output_datas}  />
}


/*

    ??? Array in Array (recursive)
    // https://stackoverflow.com/questions/9362446/how-can-i-recursively-create-a-ul-lis-from-json-data-multiple-layers-deep

    // let cols = JSON.parse(col).cols;
    // JSON.stringify(cols, null, 4);
    [
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
            "name": "日表现",
            "cols": [
                {
                    "name": "收盘价",
                    "value": "ClosePrice"
                },
                {
                    "name": "涨跌幅(%)",
                    "value": "ChangePCT"
                },
                {
                    "name": "振幅(%)",
                    "value": "RangePCT"
                },
                {
                    "name": "换手率(%)",
                    "value": "TurnoverRate"
                },
                {
                    "name": "成交量(万股)",
                    "value": "TurnoverVolume"
                },
                {
                    "name": "成交额(万元)",
                    "value": "TurnoverValue"
                },
                {
                    "name": "前收盘价",
                    "value": "PrevClosePrice"
                },
                {
                    "name": "开盘价",
                    "value": "OpenPrice"
                },
                {
                    "name": "最高价",
                    "value": "HighPrice"
                },
                {
                    "name": "最低价",
                    "value": "LowPrice"
                },
                {
                    "name": "均价",
                    "value": "AvgPrice"
                }
            ]
        },
        {
            "name": "近一周表现",
            "cols": [
                {
                    "name": "涨跌幅(%)",
                    "value": "ChangePCTRW"
                },
                {
                    "name": "振幅(%)",
                    "value": "RangePCTRW"
                },
                {
                    "name": "换手率(%)",
                    "value": "TurnoverRateRW"
                },
                {
                    "name": "日均换手率(%)",
                    "value": "TurnoverRatePerDayRW"
                },
                {
                    "name": "成交量(万股)",
                    "value": "TurnoverVolumeRW"
                },
                {
                    "name": "成交额(万元)",
                    "value": "TurnoverValueRW"
                },
                {
                    "name": "日均成交额(万元)",
                    "value": "TurnoverValuePerDayRW"
                },
                {
                    "name": "最高价",
                    "value": "HighPriceRW"
                },
                {
                    "name": "最低价",
                    "value": "LowPriceRW"
                },
                {
                    "name": "收盘最高价",
                    "value": "HighestClosePriceRW"
                },
                {
                    "name": "收盘最低价",
                    "value": "LowestClosePriceRW"
                },
                {
                    "name": "均价",
                    "value": "AvgPriceRW"
                }
            ]
        },
        {
            "name": "证监会行业",
            "value": "a8"
        },
        {
            "name": "申万行业",
            "value": "a7"
        }
    ]

*/

```


## normal test

http://10.1.5.203/http-report/query?{%22ApiName%22:%22fund.f9.fund_profile.FundManagerMent%22,%22SecuCode%22:%22000001%22,%22WriteType%22:%22json%22}

> no columns ???



## multi tables 

000011 阳琨 fund.f9.fund_profile.FundManager.BasicInformations

http://10.1.5.203/http-report/query?{%22ApiName%22:%22fund.f9.fund_profile.FundManager.BasicInformations%22,%22SecuCode%22:%22000011%22,%22Names%22:%22%E9%98%B3%E7%90%A8%22,%22WriteType%22:%22json%22}


fund.f9.fund_profile.FundManager.BasicInformations



```js
// todo


```

http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22}


##  show small data & PageSize & any

> `"Page":{"PageNo":1,"PageSize":10}`

http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22,%22Page%22:{%22PageNo%22:1,%22PageSize%22:10},%22Compress%22:%22true%22}


> `"Page":{"PageNo":1,"PageSize":2}`

http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22,%22Page%22:{%22PageNo%22:1,%22PageSize%22:2},%22Compress%22:%22true%22}





## toUpperCase()

> `"a0".toUpperCase() === "A0"`

1. 将获取的 output 所有字段名 `"a0".toUpperCase(); => A0`

`"TurnOverRate".toUpperCase(); => "TURNOVERRATE"`

2. 同时，将获取的 test result 所有字段名 `""a0".toUpperCase(); => A0`

`"turnoverrate".toUpperCase(); => "TURNOVERRATE"`

```js

"turnoverrate".toUpperCase();
// TURNOVERRATE"

"TurnOverRate".toUpperCase();
// "TURNOVERRATE"

```


## SCT 

> line 177

###  再多给一个字段，一个用于 output 展示（大小写不变），一个用于 test 匹配（统一转成大写）


```js

    objs[key].name = key;
    objs[key].test_name = key.toUpperCase();
    // 再多给一个字段，一个用于展示（大小写不变），一个用于比较（统一转成大写）
    // toUpperCase() ??? move to test children component shape data ???

```

## 已经有值了，无需 overwrite ！

```js


    for (let key in objs) {
        if(!objs.hasOwnProperty(key)) continue;
        if (objs.hasOwnProperty(key)) {
            // A0 === name
            // objs[key].name = key;
            objs[key].name = key;
            objs[key].test_name = key.toUpperCase();
            // 再多给一个字段，一个用于展示（大小写不变），一个用于比较（统一转成大写）
            // toUpperCase() ??? move to test children component shape data ???
            if(objs[key].Description){
                // objs[key].name =  key;
                // objs[key].Description = "注释"; ???
                // 已经有值了，无需 overwrite ！
            }else{
                // TestProtocol 暂无注释
                objs[key].Description = `☹️ ${key} 暂无注释`;
                // 没有值了，需要 overwrite === ☹️ 暂无注释！
                if (!debug) {
                    console.log(`%c objs[key].Description === "emoji ☹️ 暂无注释" `, color.color_css2, objs[key].Description);
                }
            }
            objs[key].key = ("k000" + i++);
        }
    }

```






## 暂时防止 multi tables overflow ??? 


基金->F9


```js

    style={{
        // width: "calc(100% - 300px)",
        // width: "100%",
        maxWidth: 850,
        // 暂时防止 multi tables overflow ??? 
        margin: 10,
        padding: 10,
        boxSizing: "border-box",
        overflowX: "hidden"
    }}>


```






## Tabs table & test_name ???

> RT


"name": "A0",

"test_name": "A0",


```js

"B7_count".toUpperCase();
// "B7_COUNT"

```

"name": "B7_count",

"test_name": "B7_COUNT",


??? Topic.GilDataMarketSizeSta 打不开 ？？？






```js

    {
        "title": "基金经理详细信息(折线图同类平均)",
        "tablenamle": "lineChartRows",
        "datas": [
            {
                "type": "string",
                "Description": "时间",
                "Format": "date-time",
                "name": "A0",
                "key": "k0000"
            },
            {
                "type": "number",
                "Description": "基金值",
                "name": "A1",
                "key": "k0001"
            },
            {
                "type": "number",
                "Description": "同类平均",
                "name": "A2",
                "key": "k0002"
            },
            {
                "type": "number",
                "Description": "沪深300",
                "name": "A3",
                "key": "k0003"
            }
        ]
    }

```

## table ???

> datas => cols ???

`"key": "k0000" => "test_name": "A0"`


## ant table

```js

const columns = [
    {
        title: 'Name',
        // Description
        dataIndex: 'name',
        key: 'name',
    }, 
];
// "name": "A0",  => "key": "A0", ???

//  ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "CLOSEPRICE", "CHANGEPCT", "RANGEPCT", "TURNOVERRATE", "TURNOVERVOLUME", "TURNOVERVALUE", "PREVCLOSEPRICE", "OPENPRICE", "HIGHPRICE", "LOWPRICE", "AVGPRICE", "CHANGEPCTRW", "RANGEPCTRW", "TURNOVERRATERW", "TURNOVERRATEPERDAYRW", "TURNOVERVOLUMERW", "TURNOVERVALUERW", "TURNOVERVALUEPERDAYRW", "HIGHPRICERW", "LOWPRICERW", "HIGHESTCLOSEPRICERW", "LOWESTCLOSEPRICERW", "AVGPRICERW"]


const dataSource = [
    {
        key: '1', 
        // unique id
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
];

// "name": "A0",

// add key 
// "key": "key_10002",
// "key": `key_1000${}`,

datas = [
    {
        "key": "key_10001",
        "A0": "2011-03-11", 
        "A1": "000001.SZ", 
        "A2": "平安银行",
    },
    {
        "key": "key_10002",
        "A0": "2011-03-11", 
        "A1": "000002.SZ", 
        "A2": "万 科Ａ",
    }
];


```






```js
// keys

k = {
    "A0": "",
    "A1": "",
    "A2": "",
};

// values

v = [
    [
        "2011-03-11",
        "000001.SZ",
        "平安银行",
    ],
    [
        "2011-03-11",
        "000002.SZ",
        "万  科Ａ",
    ],
];

// (3) ["A0", "A1", "A2"]
Object.keys(k).map(
    (key, index) => {
        // key = A0
        let temp_obj = {};
        let arr = v[index];
        for(let item of arr){
            temp_obj[key] = arr[item];
        }
        console.log(`temp_obj`);
    }
);



// test OK


let result = [];

for(let i = 0; i < v.length; i++){
    let arr = v[i];
    let temp_obj = {};
    Object.keys(k).map(
        (key, index) => {
            temp_obj.key = `key_000${i+1}`;
            temp_obj[key] = arr[index];
            return temp_obj;
        }
    );
    result.push(temp_obj);
}
console.log(`result = \n`, JSON.stringify(result, null, 4));

/*

result = 
 [
    {
        "key": "key_0001",
        "A0": "2011-03-11",
        "A1": "000001.SZ",
        "A2": "平安银行"
    },
    {
        "key": "key_0002",
        "A0": "2011-03-11",
        "A1": "000002.SZ",
        "A2": "万  科Ａ"
    }
]

*/


// keys

r.map(
    // tab
    (tab) => {
        let p_obj = {};
        let c_obj = {};
        p_obj[tab.name] = [];
        // object keys length
        let key_length = Object.keys(tab.columnMeta).length;
        let keys = Object.keys(tab.columnMeta);
        //  ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"]
        for (let key in tab.columnMeta) {
            // let c_obj = {};
            if (tab.columnMeta.hasOwnProperty(key)) {
                c_obj[key.toUpperCase()] = "";
            }
        }
        console.log("%c finish a c_obj!", "color: red", c_obj);
        // c_obj = {"A0": "","A1": "","A2": "",A3: "",A4: "", A5: "", A6: ""}
    }
);

//

// Ok new 

let result = [];
const test_result = r.map(
    // tab
    (tab) => {
        let keys = Object.keys(tab.columnMeta);
        let arrs = tab.rows;
        for(let i = 0; i < arrs.length; i++){
            let arr = arrs[i];
            let temp_obj = {};
            keys.map(
                (key, index) => {
                    temp_obj.key = `key_000${i+1}`;
                    temp_obj[key] = arr[index];
                    return temp_obj;
                }
            );
            result.push(temp_obj);
        }
        console.log(`result = \n`, JSON.stringify(result, null, 4));
        // return c_obj;
        return result;
    }
);

// [{A0: "", A1: "", A2: "", …}]



// Ok old

test_result = r.map(
    // tab
    (tab) => {
        let c_obj = {};
        let keys = Object.keys(tab.columnMeta);
        //  ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"]
        for (let key in tab.columnMeta) {
            // let c_obj = {};
            if (tab.columnMeta.hasOwnProperty(key)) {
                c_obj[key.toUpperCase()] = "";
            }
        }
        console.log("%c finish a c_obj!", "color: red", c_obj);
        // c_obj = {"A0": "","A1": "","A2": "",A3: "",A4: "", A5: "", A6: ""}
        let arrs = tab.rows;
        for(let i = 0; i < arrs.length; i++){
            let arr = arrs[i];
            let temp_obj = {};
            Object.keys(c_obj).map(
                (key, index) => {
                    temp_obj.key = `key_000${i+1}`;
                    temp_obj[key] = arr[index];
                    return temp_obj;
                }
            );
            result.push(temp_obj);
        }
        console.log(`result = \n`, JSON.stringify(result, null, 4));
        // return c_obj;
        return result;
    }
);


http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22,%22Page%22:{%22PageNo%22:1,%22PageSize%22:2},%22Compress%22:%22true%22}






tab.rows = [
    ["2011-03-11", "平安银行"],
    ["2011-03-12", "万  科Ａ",]
];



// josn datas

http://10.1.5.203/http-report/query?{%22ApiName%22:%22fund.f9.fund_profile.FundManager.BasicInformations%22,%22SecuCode%22:%22000011%22,%22Names%22:%22%E9%98%B3%E7%90%A8%22,%22WriteType%22:%22json%22}

http://10.1.5.203/http-report/query?{%22ApiName%22:%22fund.f9.fund_profile.FundManager%22,%22SecuCode%22:%22000011%22,%22WriteType%22:%22json%22}

http://10.1.5.203/http-report/query?{%22ApiName%22:%22fund.f9.fund_profile.FundIntroduce%22,%22SecuCode%22:%22000011%22,%22WriteType%22:%22json%22}


http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22,%22Page%22:{%22PageNo%22:1,%22PageSize%22:2},%22Compress%22:%22true%22}


http://10.1.5.203/http-report/query?{%22ApiName%22:%22fund.f9.fund_profile.FundManager.BasicInformations%22,%22SecuCode%22:%22000011%22,%22Names%22:%22%E9%98%B3%E7%90%A8%22,%22WriteType%22:%22json%22}

http://10.1.5.203/http-report/query?{%22ApiName%22:%22TestProtocol%22,%22WriteType%22:%22json%22}






// bad


 ["A0", "A1", "A2"].map(
    (key, index) => {
        // key = A0
        let temp_obj = {};
        let arr = v[index];
        for(let item in arr){
            temp_obj.key = arr[item];
        }
        console.log(`temp_obj`); 
        return temp_obj;
    }
);


result = ["A0", "A1", "A2"].map(
    (key, index) => {
        // key = A0
        let temp_obj = {};
        let arr = v[index];
        for(let item in arr){
            temp_obj.key = arr[item];
        }
        console.log(`temp_obj`);
        return temp_obj;
    }
);



console.log(`result = \n`, JSON.stringify(result, null, 4));

/*


result = 
[
    {
        "key": "平安银行"
    },
    {
        "key": "万  科Ａ"
    },
    {}
]



*/















// target ???

datas = [
    {
        "key": "key_10001",
        "A0": "2011-03-11", 
        "A1": "000001.SZ", 
        "A2": "平安银行"
    },
    {
        "key": "key_10002",
        "A0": "2011-03-11", 
        "A1": "000002.SZ", 
        "A2": "万 科Ａ"
    }
];



```










> test_results_datas ???


```js

    console.log(`%c RT JSON.stringify(table.datas) = \n`, color.css2, JSON.stringify(table.datas, null, 4));
    /*
        [
            {
                "type": "string",
                "Description": "交易日期",
                "Format": "date-time",
                "name": "A0",
                "new_type": "STRING",
                "desc": "交易日期",
                "test_name": "A0",
                "key": "k0000"
            },
        ]
    */

// 



```


## test results 

> keys

http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22,%22Page%22:{%22PageNo%22:1,%22PageSize%22:2},%22Compress%22:%22true%22}


```js

"columnMeta": {
    "a0": "DATE",
    "a1": "STRING",
    "a2": "STRING",
    "a3": "DOUBLE",
    "a4": "DOUBLE",
    "a5": "DOUBLE",
    "a6": "DOUBLE",
    "a7": "STRING",
    "a8": "STRING",
}

toUpperCase();

rs = [
    {},
    {},
];



rs.map(
    // tab
    (tab) => {
        let p_obj = {};
        let c_obj = {};
        p_obj[tab.name] = [];
        // object keys length
        let key_length = Object.keys(tab.columnMeta).length;
        let keys = Object.keys(tab.columnMeta);
        //  ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"]
        for (let key in tab.columnMeta) {
            // let c_obj = {};
            if (tab.columnMeta.hasOwnProperty(key)) {
                c_obj[key.toUpperCase()] = "";
                // c_obj["type"] = tab.columnMeta[key];
                // "a0".toUpperCase(); === "A0"
            }
            // console.log(`%c ${c_obj[key]}`, "color: #f0f", c_obj);
            // console.log(`%c ${c_obj[type]}`, "color: #f0f", c_obj);
            console.log(`%c $JSON.stringify(c_obj, null, 4) = \n`, "color: #f0f", JSON.stringify(c_obj, null, 4));
            // c_obj = {"A0": ""}
        }
        console.log("%c finish a c_obj!", "color: red", c_obj);
        // c_obj = {"A0": "","A1": "","A2": "",A3: "",A4: "", A5: "", A6: ""}
    }
);

// datas key


 ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "CLOSEPRICE", "CHANGEPCT", "RANGEPCT", "TURNOVERRATE", "TURNOVERVOLUME", "TURNOVERVALUE", "PREVCLOSEPRICE", "OPENPRICE", "HIGHPRICE", "LOWPRICE", "AVGPRICE", "CHANGEPCTRW", "RANGEPCTRW", "TURNOVERRATERW", "TURNOVERRATEPERDAYRW", "TURNOVERVOLUMERW", "TURNOVERVALUERW", "TURNOVERVALUEPERDAYRW", "HIGHPRICERW", "LOWPRICERW", "HIGHESTCLOSEPRICERW", "LOWESTCLOSEPRICERW", "AVGPRICERW"]


```



































## SCT output_data 

> simple / simplify & enhancement


```js

{
    "type": "string",
    "Description": "性别",
    "name": "A0",
    "key": "k0000",
    "desc": "性别",
    "test_name": "A0",
    "new_type": "STRING"
}

// temp_obj

temp_obj[key] = index + 1;
temp_obj[name] = key;
temp_obj[test_name] = key.toUpperCase();
temp_obj[desc] = objs[key].Description.toUpperCase();
temp_obj[new_type] = objs[key].type.toUpperCase();

arr.push(temp_obj);

{
    "name": "A0",
    "key": "k0000",
    "desc": "性别",
    "test_name": "A0",
    "new_type": "STRING"
}



```












## javascript-development-environment

> cory house

```md

Hi, I'm xray, and I'm here to help.

I've benn building rich web applications in Javaascript for over 15 years now, 
and frankly I'm tired of starting from scratch.

So, in this course, I propose a solution.

What if your team had a powerful, rapid feedback development environment?


1. Travis CI 








```
















## RT bug

```jsx


let cols = [];
this.props.columns.map(
    (data, index) => {
        if (!debug) {
            console.log(`%c 注释: ${obj.title} & obj.title = data.Description \n`, color.css1);
        }
        let obj = {};
        // 注释: A份额交易代码
        obj.title = `${data.Description || "暂无表头" }`;
        if (!debug) {
            console.log(`%c 注释: ${obj.title} & obj.title = data.Description \n`, color.css1);
        }
        // 编号: A0
        if(Object.keys(data).length > 1){
            obj.dataIndex = `${data.name.toUpperCase()}`;
            obj.key = `${data.name.toUpperCase()}`;
        }
        /* 
            "B7_count".toUpperCase();
            // "B7_COUNT"
            obj.dataIndex = `${data.name}`;
            obj.key = `${data.name}`;
        */
        if (debug) {
            // console.log(`%c 编号: ${obj.key} & obj.name = data.name \n`, color.css2);
            console.log(`%c 编号: obj.key.toUpperCase() === ${obj.key} \n`, color.css2);
            console.log(`%c 编号: JSON.stringify(obj, null, 4) === ${JSON.stringify(obj, null, 4)} \n`, color.css1);
        }
        cols.push(obj);
        return cols;
    }
);








    /* 
        if(value instanceof Object){
            console.log(`true`);
        }
        // true
    */
    // if (arr[index] instanceof Object || arr[index] instanceof Array)
    // Array instanceof Object
    // true
    if (arr[index] instanceof Object) {
        temp_obj[key.toUpperCase()] = JSON.stringify(arr[index], null, 4);
    }
    else{
        temp_obj[key.toUpperCase()] = arr[index].toString();
    }
    // temp_obj[key.toUpperCase()] = arr[index];
    // .toString();

```









## multi tables/tabs


```js

// Chrome JSON Viewer
// window.json;

const tra = window.json;

let RT_arr = [];

// tables/tabs
tra.map(
    (tab, index) => {
        let RT_obj = {};
        let RT_temp_arr = [];
        // "name": "AnyManagedFundsRow",
        // RT_obj.name = tab.name;
        console.log(`%c RT_obj.name = ${tab.name} \n`, `color: #f0f; font-size: 23px`);
        let temp_obj = {};
        // keys
        console.log(`#@$ tab.columnMeta = \n`, JSON.stringify(tab.columnMeta, null, 4));
        let temp_keys = Object.keys(tab.columnMeta);
        // values
        console.log(`#@$ tab.rows = \n`, JSON.stringify(tab.rows, null, 4));
        let arrs = tab.rows;
        for(let i = 0; i < arrs.length; i++){
            let arr = arrs[i];
            let obj = {};
            // shaped values
            temp_keys.map(
                (key, ii) => {
                    let k = key.toUpperCase();
                    obj["key"] = `RT_key 0000${i+1}`;
                    if(arr[ii] instanceof Object){
                        obj[k] = JSON.stringify(arr[ii], null, 4);
                    }else{
                        obj[k] = arr[ii].toString();
                    }
                }
            );
            console.log(`cols obj = \n`, JSON.stringify(obj, null, 4));
            RT_temp_arr.push(obj);
        }
        RT_obj[tab.name] = RT_temp_arr;
        RT_arr.push(RT_obj);
        // return RT_obj;
    }
);




console.log(`RT_arr cols = \n`, JSON.stringify(RT_arr, null, 4));


```





## tabs Ok


```js

const tra = window.json;
// test result
let RT_arr = [];
// tables/tabs
tra.map(
    (tab, index) => {
        let RT_obj = {};
        let RT_temp_arr = [];
        // keys
        let temp_keys = Object.keys(tab.columnMeta);
        // tabs
        let arrs = tab.rows;
        for(let i = 0; i < arrs.length; i++){
            let arr = arrs[i];
            let obj = {};
            // shaped values
            temp_keys.map(
                (key, ii) => {
                    let k = key.toUpperCase();
                    obj["key"] = `RT_key 0000${i+1}`;
                    if(arr[ii] instanceof Object){
                        if(obj[k] !== null){
                            obj[k] = JSON.stringify(arr[ii], null, 4);
                        }else{
                            obj[k] = "";
                        }
                    }else{
                        obj[k] = arr[ii].toString();
                        // null, undefined, Infinity, NaN
                        if(obj[k] === null || isNaN(obj[k]) || !isFinite(obj[k])){
                            obj[k] = "";
                        }else{
                            obj[k] = arr[ii].toString();
                        }
                    }
                }
            );
            console.log(`cols obj = \n`, JSON.stringify(obj, null, 4));
            RT_temp_arr.push(obj);
        }
        // table name : [{}, {}]
        RT_obj[tab.name] = RT_temp_arr;
        RT_arr.push(RT_obj);
    }
);



// 理论上我们所有字段都会存在null的可能性，要记得处理一下。
// undefined 应该是没有的，数字可能还会出现 NaN 和 Infinity










/*

// Infinity

let z = Infinity;
// Infinity

typeof(z);
// "number"

null === Infinity;
// false

Infinity === Infinity;
// true

false == Infinity;
// false

Number == Infinity;
//false

Infinity instanceof Number;
// false

Infinity instanceof Object;
// false



*/


/*

let y = NaN;
// NaN

y === NaN;
// false

null === NaN;
// false

typeof(NaN);
// "number

NaN === NaN;
// false






let x = NaN;
// NaN

x.length;
// undefined

x.toString();
// "NaN"

x === NaN;
// false

x.toString() === NaN;
// false

x.toString() === "NaN";
// true

typeof(NaN);
// "number"

typeof(x);
// "number"

typeof(x) === "number";
// true

*/


/*

let x = null;
// null

x === null;
// true

!x
// true

!!x
// false


*/

```


## NaN, Null, Infinity & isNaN(), isFinite() 


> NaN, Null, Infinity & isNaN(), isFinite() 


```js


/*
    isFinite(Infinity);
    // false
    isNaN(NaN);
    // true
*/
/*

    let arr = [NaN, null, Infinity];
    // (3) [NaN, null, Infinity]

    arr.map(
        (k) => {
            console.log(`key = \n ${k}`);
        }
    );

    // key = NaN
    // key = null
    // key = Infinity

    let obj = {};

    let i = 0;
    for(let k of arr){
        if(obj[k] === null || isNaN(obj[k]) || !isFinite(obj[k])){
            obj[k] = "";
        }else{
            obj[k] = arr[i].toString();
        }
        i++;
    }
    console.log(`obj = \n`, JSON.stringify(obj, null, 4));




*/
/*
    let x = NaN;
    x.length;
    // undefined
    x.toString();
    // "NaN"
    x.toString() === "NaN";
    // true
    typeof(NaN);
    // "number"
    typeof(x) === "number";
    // true
*/


```








```js
// keys

k = {
    "A0": "",
    "A1": "",
    "A2": "",
};

// values

v = [
    [
        "2011-03-11",
        "000001.SZ",
        "平安银行",
    ],
    [
        "2011-03-11",
        "000002.SZ",
        "万  科Ａ",
    ],
];



// target ???

datas = [
    {
        "key": "key_10001",
        "A0": "2011-03-11", 
        "A1": "000001.SZ", 
        "A2": "平安银行"
    },
    {
        "key": "key_10002",
        "A0": "2011-03-11", 
        "A1": "000002.SZ", 
        "A2": "万 科Ａ"
    }
];










let tables = [
    {
        tab1: []
    },
    {
        tab_name: "AnyManagedFundsRow",
        tab_datas: [
            {
                key:"RT_key 00001",
                A0:"华夏基金管理有限公司",
                A1:"华夏大中华企业精选灵活配置混合(QDII)",
                A2:"其他型基金"
            },
            {
                key:"RT_key 00002",
                A0:"华夏基金管理有限公司",
                A1:"华夏大盘精选混合",
                A2:"混合型基金"
            }
        ]
    }
];







```












## cols


```js


let RT_arr = [];

tra.map(
    (tab, index) => {
        let RT_obj = {};
        let RT_temp_arr = [];
        // "name": "AnyManagedFundsRow",
        RT_obj.tab_name = tab.name;
        console.log(`%c RT_obj.name = ${tab.name} \n`, `color: #f0f; font-size: 23px`);
        let temp_obj = {};
        // keys
        console.log(`#@$ tab.columnMeta = \n`, JSON.stringify(tab.columnMeta, null, 4));
        let temp_keys = Object.keys(tab.columnMeta);
        // values
        console.log(`#@$ tab.rows = \n`, JSON.stringify(tab.rows, null, 4));
        let arrs = tab.rows;
        for(let i = 0; i < arrs.length; i++){
            let arr = arrs[i];
            let obj = {};
            // shaped values
            temp_keys.map(
                (key, ii) => {
                    let k = key.toUpperCase();
                    obj["key"] = `RT_key 0000${i+1}`;
                    if(arr[ii] instanceof Object){
                        obj[k] = JSON.stringify(arr[ii], null, 4);
                    }else{
                        // if(arr[ii] === null || isNaN(arr[ii]) || !isFinite(arr[ii])){
                        // if(arr[ii] === null || isNaN(arr[ii]) || !isFinite(arr[ii])){
                        if(arr[ii] === null || isNaN(arr[ii]) || !isFinite(arr[ii])){
                            // obj[k] = "";
                            // ??? overwrite bug
                            obj[k] = arr[ii];
                            obj[k] = `${arr[ii]}`;
                            obj[k] = `"${arr[ii]}"`;
                        }else{
                           obj[k] = arr[ii].toString();
                        }
                        // obj[k] = arr[ii];
                    }
                }
            );
            console.log(`cols obj = \n`, JSON.stringify(obj, null, 4));
            RT_temp_arr.push(obj);
        }
        RT_obj.tab_datas= RT_temp_arr;
        RT_arr.push(RT_obj);
        // return RT_obj;
    }
);



console.log(`RT_arr cols = \n`, JSON.stringify(RT_arr, null, 4));









```







```js

RT_arr = [];

tra.map(
    (tab, index) => {
        let RT_obj = {};
        let RT_temp_arr = [];
        // "name": "AnyManagedFundsRow",
        RT_obj.tab_name = tab.name;
        console.log(`%c RT_obj.name = ${tab.name} \n`, `color: #f0f; font-size: 23px`);
        let temp_obj = {};
        // keys
        console.log(`#@$ tab.columnMeta = \n`, JSON.stringify(tab.columnMeta, null, 4));
        let temp_keys = Object.keys(tab.columnMeta);
        // values
        console.log(`#@$ tab.rows = \n`, JSON.stringify(tab.rows, null, 4));
        let arrs = tab.rows;
        for(let i = 0; i < arrs.length; i++){
            let arr = arrs[i];
            let obj = {};
            // shaped values
            temp_keys.map(
                (key, ii) => {
                    let k = key.toUpperCase();
                    obj["key"] = `RT_key 0000${i+1}`;
                    if(arr[ii] instanceof Object){
                        obj[k] = JSON.stringify(arr[ii], null, 4);
                    }else{
                        if(arr[ii] === null){
                            obj[k] = arr[ii];
                        }else{
                            obj[k] = arr[ii].toString();
                            // null ???
                        }
                    }
                }
            );
            console.log(`cols obj = \n`, JSON.stringify(obj, null, 4));
            RT_temp_arr.push(obj);
        }
        RT_obj.tab_datas= RT_temp_arr;
        RT_arr.push(RT_obj);
        // return RT_obj;
    }
);



console.log(`RT_arr cols = \n`, JSON.stringify(RT_arr, null, 4));









```






http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetRowSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22fund.f9.fund_profile.FundManager.BasicInformations%22}



## output tables & any tables




```js





```























## 4 tables & dynamic table

JYTopic.StockSecondaryMarket.StockMarketPeform

JYTopic.StockSecondaryMarket.StockMarketPeform


http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22,%22Page%22:{%22PageNo%22:1,%22PageSize%22:%223%22},%22Compress%22:%22true%22}






http://10.1.5.203/http-report/query?{%22SecuCode%22:%22600570%22,%22ApiName%22:%22JYCompanyIntroduction%22,%22WriteType%22:%22json%22}






## tables

> out[put


```js

const info = window.json.Info;

let tabs_cols = [];

if(info.schema.Properties === undefined){
    // single table
}else{
    // multi tables
}





let tabs = [
    {
        tab_name: "AnyManagedFundsRow",
        tab_datas: [
            {
                key:"RT_key 00001",
                A0:"华夏基金管理有限公司",
                A1:"华夏大中华企业精选灵活配置混合(QDII)",
                A2:"其他型基金"
            },
            {
                key:"RT_key 00002",
                A0:"华夏基金管理有限公司",
                A1:"华夏大盘精选混合",
                A2:"混合型基金"
            }
        ]
    },
    {
        tab_name: "BasicInformationRow",
        tab_datas: [
            {
                key:"RT_key 00001",
                A0:"男",
                A1:"1974-01-01",
                A2:"硕士"
            }
        ]
    }
];


let cols = [
    {
        col_name: "AnyManagedFundsRow",
        col_datas: [
            {
                title: "管理公司",
                key: "A0",
                dataIndex: "A0"
            },
            {
                title: "基金简称",
                key: "A1",
                dataIndex: "A1"
            },
            {
                title: "投资类型",
                key: "A2",
                dataIndex: "A2"
            }
        ]
    },
    {
        col_name: "BasicInformationRow",
        col_datas: [
            {
                title: "性别",
                key: "A0",
                dataIndex: "A0"
            },
            {
                title: "出生日期",
                key: "A1",
                dataIndex: "A1"
            },
            {
                title: "学历",
                key: "A2",
                dataIndex: "A2"
            }
        ]
    },
    {
        col_name: "HistoricalReturnsRow",
        col_datas: [
            {
                title: "历史回报",
                key: "A0",
                dataIndex: "A0"
            },
            {
                title: "3月",
                key: "A1",
                dataIndex: "A1"
            },
            {
                title: "6月",
                key: "A2",
                dataIndex: "A2"
            }
        ]
    }
];


/*

    Object.keys(tabs);
    // (2) ["0", "1"]
    tabs[0].tab_name;
    // "AnyManagedFundsRow"
    tabs.length;
    // 2

    Object.keys(cols);
    // (3) ["0", "1", "2"]
    cols[0].col_name;
    // "AnyManagedFundsRow"
    cols.length;
    // 3

*/

if(cols.length > tabs.length){
    // long length
    cols.map(
        (col_obj, index) => {
            console.log(`%c ${index} col_obj.col_name = "${col_obj.col_name}"`, `background-color: #f0f`);
            // console.log(`col_obj.col_datas = \n`, col_obj.col_datas);
            // console.log(`col_obj = \n`, JSON.stringify(col_obj, null, 4));
            let temp_data = [],
                temp_tab = [];
            for(let i =0; i < tabs.length; i++){
                temp_tab = col_obj.col_datas;
                if(col_obj.col_name === tabs[i].tab_name){
                    // <Table dataSource={tab_datas} columns={col_datas} />
                    // console.log(`%c ${index} col_datas = \n`, `color: #f0f`,JSON.stringify(col_obj.col_datas, null, 4));
                    // console.log(`${index} tab_datas = \n`, `color: #0f0`, JSON.stringify(tabs[i].tab_datas, null, 4));
                    // console.log(`<Table dataSource={tab_datas} columns={col_datas} />`);
                    temp_data = tabs[i].tab_datas;
                }else{
                    // console.log(`${index} No matched tab_datas!`, `color: #f00`);
                    // console.log(`<Table dataSource={[]} columns={col_datas} />`);
                    // temp_data = [];
                }
            }
            // return(<Table dataSource={temp_data || []} columns={temp_tab || []} />)
            console.log(`Table = \n`);
            console.log(`
                <Table 
                    dataSource={${JSON.stringify(temp_data)}}
                    columns={${JSON.stringify(temp_tab)}} 
                />
            `);
        }
    );
}











// cols.length >= tabs.length

// ??? which map ??? long id good

// map / for 
if(col_name === tab_name){
    <Table dataSource={tab_datas} columns={col_datas} />
}


// keys ??? 
let new_cols = [
    {
        "AnyManagedFundsRow": [
            {
                title: "基金代码",
                key: "A0",
                dataIndex: "A0"
            },
            {
                title: "基金名称",
                key: "A1",
                dataIndex: "A1"
            },
            {
                title: "成立日期",
                key: "A2",
                dataIndex: "A2"
            }
        ]
    },
    {
        "BasicInformationRow": [
            {
                title: "性别",
                key: "A0",
                dataIndex: "A0"
            },
            {
                title: "出生日期",
                key: "A1",
                dataIndex: "A1"
            },
            {
                title: "学历",
                key: "A2",
                dataIndex: "A2"
            }
        ]
    },
    {
        "HistoricalReturnsRow": [
            {
                title: "历史回报",
                key: "A0",
                dataIndex: "A0"
            },
            {
                title: "3月",
                key: "A1",
                dataIndex: "A1"
            },
            {
                title: "6月",
                key: "A2",
                dataIndex: "A2"
            }
        ]
    }
];










```









































