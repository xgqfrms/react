# json-server

> producation ready app

```sh

$ npm i -g json-server


$ npm i -D json-server

```




https://github.com/xgqfrms-GitHub/json-server#可选择端口




# free online mongodb

https://mlab.com/



https://mlab.com/home

```js

{ user: "gildata", account: "gildata" }


```
https://mlab.com/databases/gildata_crm/collections/test

https://mlab.com/databases/gildata_crm#users

> admin pwd2017

> user pwd1234 (read only)


# MongoDB URI

> mongod version: 3.2.14 (MMAPv1)

`mongodb://<dbuser>:<dbpassword>@ds139480.mlab.com:39480/gildata_crm`

http://docs.mlab.com/connecting/#connect-string


# mLab Data API

http://docs.mlab.com/data-api/

https://api.mlab.com/api/1/databases?apiKey=2E81PUmPFI84t7UIc_5YdldAp1ruUPKye

https://api.mlab.com/api/1/databases?apiKey=myAPIKey

https://api.mlab.com/api/1/databases/my-db/collections?apiKey=myAPIKey


https://api.mlab.com/api/1/databases/my-db/collections/my-coll?apiKey=myAPIKey

## Optional parameters

`[q=<query>][&c=true][&f=<fields>][&fo=true][&s=<order>][&sk=<skip>][&l=<limit>]`

## API Authentication

http://docs.mlab.com/data-api/#authentication

https://mlab.com/user?username=gildata

> username (not the account name)

# mongo shell:

`% mongo ds139480.mlab.com:39480/gildata_crm -u <dbuser> -p <dbpassword>`


# Access-Control-Allow-Origin

> set the request's mode to 'no-cors'


# URL test:

https://api.mlab.com/api/1/databases/gildata_crm/collections/test?q={%22id%22:%201}&apiKey=YpeswCDPr9CvDfmeIuawnh-iD5-oH0_G

https://api.mlab.com/api/1/databases/gildata_crm/collections/test?f={%22datas%22:%201}&apiKey=YpeswCDPr9CvDfmeIuawnh-iD5-oH0_G


> { "message" : "Please provide a valid API key."}

# Data API accessEnabled

> Enabled Data API access


# SyntaxError: Unexpected end of input at fetch.then



```js


/*

mongodb://<dbuser>:<dbpassword>@ds139480.mlab.com:39480/gildata_crm

mongodb://user:pwd1234@ds139480.mlab.com:39480/gildata_crm

> mongodb://user:pwd1234@ds139480.mlab.com:39480/gildata_crm/test/datas


http://docs.mlab.com/connecting/#connect-string

http://docs.mlab.com/data-api/

https://api.mlab.com/api/1/databases?apiKey=myAPIKey


https://api.mlab.com/api/1/databases/my-db/collections?apiKey=myAPIKey

https://api.mlab.com/api/1/databases/my-db/collections/my-coll?apiKey=myAPIKey


// Optional parameters

[q=<query>][&c=true][&f=<fields>][&fo=true][&s=<order>][&sk=<skip>][&l=<limit>]

*/

/*
Database: gildata_crm

Collections: test

Documents: 

{
    "_id": {
        "$oid": "5982c846f36d2839ce8c6c15"
    },
    "datas": [
        {
            "id": 1,
            "name": "typicode",
            "password": "abc123"
        },
        {
            "id": 2,
            "name": "xgqfrms",
            "password": "xyz123"
        },
        {
            "id": 3,
            "name": "gildata",
            "password": "ufo123"
        }
    ]
}


{
    "_id": {
        "$oid": "5982cf86f36d2839ce8c7023"
    },
    "users": [
        {
            "id": 1,
            "name": "typicode",
            "password": "abc123"
        },
        {
            "id": 2,
            "name": "xgqfrms",
            "password": "xyz123"
        },
        {
            "id": 3,
            "name": "gildata",
            "password": "ufo123"
        }
    ]
}

API Authentication

http://docs.mlab.com/data-api/#authentication


*/


const myAPIKey = `YpeswCDPr9CvDfmeIuawnh-iD5-oH0_G`;
const url = `https://api.mlab.com/api/1/databases/gildata_crm/collections/test?q={}&apiKey=${myAPIKey}`;
// collection === test
// q={} === all

const getdata = () => {
    fetch(url, {
        method: 'GET',
        mode: 'no-cors'
    }).then(
        (response) => {
            console.log(`fetch response`, response);
            return response.json();
        }
    ).then(
        (json) => {
            console.log(`fetch json`, json);
            let data = JSON.stringify(json);
            return data;
        }
    ).catch(
        (err) => {
            const color = `
                color: red;
                background: rgba(125, 125, 125, 0.7);
                font-size: 23px;
            `;
            console.log(`%c Whoops, An Error occurred!`, color, err);
            throw new Error("Whoops, An Error occurred!", err);
        }
    );
};

/*

https://api.mlab.com/api/1/databases/gildata_crm/collections/test?q={}&apiKey=YpeswCDPr9CvDfmeIuawnh-iD5-oH0_G

// query all documents


const myAPIKey = `YpeswCDPr9CvDfmeIuawnh-iD5-oH0_G`;
const url = `https://api.mlab.com/api/1/databases/gildata_crm/collections/test?f={"name":"xgqfrms"}&apiKey=${myAPIKey}`;

// OK
https://api.mlab.com/api/1/databases/gildata_crm/collections/test?f={"name":"xgqfrms"}&apiKey=YpeswCDPr9CvDfmeIuawnh-iD5-oH0_G

https://api.mlab.com/api/1/databases/gildata_crm/collections/test?f={%22name%22:%22xgqfrms%22}&apiKey=YpeswCDPr9CvDfmeIuawnh-iD5-oH0_G


const myAPIKey = `YpeswCDPr9CvDfmeIuawnh-iD5-oH0_G`;
const url = `https://api.mlab.com/api/1/databases/gildata_crm/collections/test?f={"datas": 1}&apiKey=${myAPIKey}`;


https://api.mlab.com/api/1/databases/gildata_crm/collections/test?f={%22datas%22:%201}&apiKey=YpeswCDPr9CvDfmeIuawnh-iD5-oH0_G



[ 
    { 
        "_id" : { 
            "$oid" : "5982c846f36d2839ce8c6c15"
        } , 
        "datas" : [ 
            { "id" : 1 , "name" : "typicode" , "password" : "abc123"} , 
            { "id" : 2 , "name" : "xgqfrms" , "password" : "xyz123"} , 
            { "id" : 3 , "name" : "gildata" , "password" : "ufo123"}
        ]
    } , 
    { 
        "_id" : {
            "$oid" : "5982cf86f36d2839ce8c7023"
        }
    } 
]

*/


```



# MongoDB CURD

> ???






# CodeMirror

> JavaScript Framework

codes format

https://mlab.com/databases/gildata_crm/collections/test?_id=_new&pageSize=10&pageNum=0&totalCount=1&



https://192.168.57.22/Gildata/GFT/trunk/Sources/Server/Source/web/CRM\new-layout\CRM-New



## React 树形 menu

https://ant.design/components/menu-cn/

https://ant.design/components/tree-cn/

https://www.ctolib.com/react-tree-menu.html

children

isParent

{id: "66", name: "债券F9", isParent: true}



http://10.6.1.81/webtool/home.html?resource=tab0&sear_valu=

zTree

http://www.treejs.cn/v3/demo.php#_101




## react 分词 search input 

https://ant.design/components/form-cn/ 
Select[multiple]


http://localhost:3000/immm

关联 关联资源


## Table 

> table





```json

{
  "Success" : true,
  "Info" : [ 
    {
        "name" : "fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail",
        "description" : "基金--> 基金专题统计--> 业绩评价--> 分级基金业绩表现--> 分级基金子基金（A份额）投资价值分析明细",
        "dependtables" : [ "SecuMain", "MF_NetValue" ]
    },
    {
        "name" : "fund.topic.performance_evaluation.fund_rating.TianXiang.Filter",
        "description" : "基金 -> 专题统计 -> 业绩评价 -> 基金评级 -> 天相基金评级(筛选条件)",
        "dependtables" : [ "MF_TXSECFundRating" ]
    },
    {
        "name" : "JYTopic.StockSecondaryMarket.StockMarketPeform",
        "description" : "主板->专题统计->二级市场->市场表现->个股行情表现",
        "dependtables" : [ "LC_DIndicesForValuation", "LC_ExgIndustry", "QT_Performance", "SecuMain", "BaseCode", "Sector", "SectorComponent" ]
    },
    {
        "name" : "fund.topic.agency_study.consignment_agency.FundType",
        "description" : "基金--> 基金专题统计--> 机构研究--> 代销机构--> 代销机构统计(按基金类型)",
        "dependtables" : [ "MF_FundArchives", "LC_IssueAndListAgent", "LC_InstiArchive" ]
    }
}

```



##  remote db 

http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetAllLoad","WriteType":"json"}
































