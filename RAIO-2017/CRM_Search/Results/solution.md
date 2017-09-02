

# Tabs cols & datas OK


## Table cols 😃

https://github.com/gildata/RAIO/issues/129

```js

const ts = window.json.Info;

let cols = [];

if(ts.schema !== undefined && ts.schema.Properties !== undefined){
    // single table cols
    let temp_obj = {
        col_name: "",
        col_datas: ""
    };
    temp_obj.col_name = ts.name;
    let objs = ts.schema.Properties;
    let keys = Object.keys(objs);
    temp_obj.col_datas = keys.map(
        (key, index) => {
            let obj = {};
            obj.title = objs[key].Description;
            obj.key = key;
            obj.dataIndex = key;
            return obj;
        }
    );
    cols.push(temp_obj);
    console.log(`single table cols = \n`, JSON.stringify(cols, null, 4));
}else if(ts.schema !== undefined && ts.schema.Properties === undefined){
    // multi tables cols
    let tabs_obj = ts.schema;
    let tabs_keys = Object.keys(tabs_obj);
    tabs_keys.map(
        (key, index) => {
            let temp_obj = {
                col_name: "",
                col_datas: "",
                col_tab_title: ""
            };
            temp_obj.col_name = key;
            temp_obj.col_tab_title = tabs_obj[key].desc;
            let p_objs = tabs_obj[key].Properties;
            let p_keys = Object.keys(p_objs);
            temp_obj.col_datas = p_keys.map(
                (p_key, p_index) => {
                    let obj = {};
                    obj.title = p_objs[p_key].Description;
                    obj.key = p_key;
                    obj.dataIndex = p_key;
                    return obj;
                }
            );
            cols.push(temp_obj);
        }
    );
    console.log(`multi tables cols = \n`, JSON.stringify(cols, null, 4));
}else{
    // ts.schema === undefined
    // any === single table ???
    let temp_obj = {
        col_name: "",
        col_datas: ""
    };
    cols.push(temp_obj);
    console.log(`any cols = \n`, JSON.stringify(cols, null, 4));
}


```

## any test 😃

https://cdn.xgqfrms.xyz/json/crm/any-test.json

```js

let ts = {
    "Success": true,
    "Info": {
        any: "",
        message: "dynamic table cols/ tables cols ???"
    }
};


```





## Table datas 😃

https://github.com/gildata/RAIO/issues/128

```js

// test results

const tra = window.json;

let tabs = [];

tra.map(
    (tab, index) => {
        let RT_obj = {};
        let RT_temp_arr = [];
        // "name": "AnyManagedFundsRow",
        RT_obj.tab_name = tab.name;
        // console.log(`%c RT_obj.name = ${tab.name} \n`, `color: #f0f; font-size: 23px`);
        let temp_obj = {};
        // keys
        // console.log(`#@$ tab.columnMeta = \n`, JSON.stringify(tab.columnMeta, null, 4));
        let temp_keys = Object.keys(tab.columnMeta);
        // values
        // console.log(`#@$ tab.rows = \n`, JSON.stringify(tab.rows, null, 4));
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
                        // obj[k] = JSON.stringify(arr[ii], null, 4);
                        obj[k] = JSON.stringify(arr[ii]);
                    }else{
                        // null.toString()
                        // Uncaught TypeError: Cannot read property 'toString' of null
                        if(arr[ii] === null){
                            obj[k] = "";
                        }else{
                           // obj[k] = arr[ii].toString();
                           obj[k] = arr[ii];
                        }
                    }
                }
            );
            // console.log(`cols obj = \n`, JSON.stringify(obj, null, 4));
            RT_temp_arr.push(obj);
        }
        RT_obj.tab_datas= RT_temp_arr;
        tabs.push(RT_obj);
    }
);

console.log(`tabs = \n`, JSON.stringify(tabs, null, 4));

```


# cols & datas 😃

https://github.com/gildata/RAIO/issues/125

> match  OK 😃

```js

// test cols

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




// test datas

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


```


# `cols & datas ` match OK 💯 

> continue 语句结束当前（或标签）的循环语句的本次迭代，并继续执行循环的下一次迭代。

```js

// if(cols.length >= tabs.length) cols.map()

// if(cols.length < tabs.length)  tabs.map() ???
​
if(cols.length >= tabs.length){
    // long length
    cols.map(
        (col_obj, index) => {
            console.log(`%c ${index} col_obj.col_name = "${col_obj.col_name}"`, `background-color: #f0f`);
            let temp_data = [],
                temp_col = col_obj.col_datas;
            for(let i = 0; i < tabs.length; i++){
                if(col_obj.col_name === tabs[i].tab_name){
                    temp_data = tabs[i].tab_datas;
                    console.log(`${i} col_obj.col_name = "${col_obj.col_name}"`);
                    console.log(`${i} tabs[i].tab_name = "${tabs[i].tab_name}"`);                                                                                             continue; // 
                }else{
                    console.log(`☹️ ${i} tabs[i].tab_name  ☹️ = "${tabs[i].tab_name}"`);
                    // temp_data = [];
                }
            }
            console.log(`Table = \n`);
            console.log(`
                <Table 
                    dataSource={${JSON.stringify(temp_data)}}
                    columns={${JSON.stringify(temp_col)}} 
                />
            `);
        }
    );
}

```



![image](https://user-images.githubusercontent.com/18028768/29982501-8604ab68-8f84-11e7-9a62-c73a9c6a9051.png)


# continue

https://hacks.mozilla.org/2015/07/es6-in-depth-generators-continued/
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/continue








## any


```js

/*
    this.state = {
        test_tabs = []
    };

    const setTestCols = (cols) => {
        this.setState({
            test_tabs: cols
        });
    }
*/

if(output.cols.length > 0){
    //pass cols
    test_cols: output_shaped_cols
}else{
    this.setState({
        test_cols: test_tabs
    });
}



```










