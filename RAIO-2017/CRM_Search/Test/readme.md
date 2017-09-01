# test


> options

```js

    if (!debug) {
        console.log(`%c index = ${index}`, color.css1);
        // index = [object Object] === row datas
        console.log(`%c JSON.stringify(index) = ${JSON.stringify(index)}`, color.color_css3);
        /* 
            {
                "key":"k-fdft",
                "name":"FastDateFilterType",
                "type":"array",
                "value":"select 1 = fixed ((最新日期) (今年以来) (近一月) (近三月) (近六月) (近一年) (近二年) (近三年) (近五年) (全部) (上市以前) (上市以后) (自定义 ? datapicker ))",
                "description":"日期 快速过滤类型"
            }
        */
        console.log(`%c text = ${text}`, color.css2);
        //  text = select 1 = fixed ((最新日期) (今年以来) (近一月) (近三月) (近六月) (近一年) (近二年) (近三年) (近五年) (全部) (上市以前) (上市以后) (自定义 ? datapicker ))
    }


```



主板F9->财务数据->报表附注->其他应收账款账龄结构

OtherAccountReceiveAge


http://10.1.5.203/http-report/query?{'ApiName':'OtherAccountReceiveAge','SecuCode':'000002',"BeginDate":"2012-06-30","EndDate":"2016-06-30","Sorts":[{"Field":"accountreceiveage.enddate","Sort":"asc"}],"Page":{"PageNo":"1","PageSize":"100"},"FastDateFilterType":"Customer","WriteType":"json"}

```js

/*


any === 动态表头:

1. 使用测试命令 获取 output

2. 构造 result tabs & tables rows

*/

```






http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetRowSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22StaticReportImageData%22}


{
  "Success" : true,
  "Info" : {
    "name" : "StaticReportImageData"
  }
}








```jsx


/* 

    import {OI} from './Options/';
    import {OI} from './Options/index';

    // bug ???

    import {OI} from './Options';


    // ./src/components/CRM_Search/TestTableForms.jsx
    // Module not found: `E:\xgqfrms\src-2017-6-22\src\components\CRM_Search\Options.json` 
    // does not match the corresponding path on disk - File does not exist.

*/


/*
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
*/



    // ApiName = url
    /* 
        1. pass props
        2. get window.location path
    */
    /* 
        dead code: "ApiName" & "WriteType":"json"
        window.location.pathname === "/api/sc/TestProtocol"
        slice / indexof / substr
        "/api/sc/TestProtocol".slice(8); === "TestProtocol"
        "/api/sc/TestProtocol".substr(8); === "TestProtocol"
    */
    /* 
        // "commandexample": "{\"StatPeriod\":\"6\",\"ApiName\":\"MarketMakerPracticeEndDateList\"}",
        // example : MarketMakerPracticeEndDateList
        // http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22MarketMakerPracticeEndDateList%22}
        // WriteType === enum: ["json(json文本格式)", "binary(二维表二进制格式)"]
        // http://10.1.5.203/http-report/query?{"key":"json"}
        // TestProtocol
        // http://10.1.5.203/http-report/query?{"ApiName": "TestProtocol", "WriteType":"json"}
        // http://10.1.5.203/http-report/query?{"ApiName": "MarketMakerPracticeEndDateList", "StatPeriod": "6", "WriteType":"json"}
    */





/* eslint-disable no-console */



/* eslint-enable no-console */









```











http://localhost:3000/api/sc/F9Tree#F9Tree






## test cols


```js


    // result[i].attributes.columns = RT cols
    /* 
        {
            cols: [
                {name: "交易日期", value: "a0"},
                {name: "证券代码", value: "a1"}
            ]
        }
        // convert to
        // {name: "交易日期", value: "a0"},
        // obj.title = cols[i].name
        // obj.title = cols[i].value.toUpperCase(),
        cols: [
            {
                "title": "交易日期 || ☹️ 暂无注释",
                "key": "BYTEV",
                "dataIndex": "BYTEV"
            },
        ]
    */

```


