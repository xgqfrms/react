/* 




http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json','KeyWord':'股票--> F10'}



http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json","KeyWord":"股票--> F10"}


// OK





*/
datas[0] = [Object, Object, Object, Object, Object, Object, Object, Object, Object];


// new obj = Object.assign(obj, {new_key: "new value"});

// modify obj[key] = "modify key value" 

// Object.assign(obj, {old_key: "modify key value"}); === overwrite key's value

const nested_array = [
    {
        title: "基金经理详细信息(基本资料)",
        datas: [
            {
                key: "k000",
                name: "A0",
                type: "string",
                Description: "性别"
            },
            {
                key: "k001",
                name: "A1",
                type: "string",
                Description: "出生日期",
                Format: "date-time"
            }
        ]
    },
    {
        title: "基金经理详细信息(历任管理基金)",
        datas: [
            {
                key: "k000",
                name: "A0",
                type: "string",
                Description: "管理公司"
            },
            {
                key: "k001",
                name: "A1",
                type: "string",
                Description: "到任日期(传参)",
                Format: "date-time"
            }
        ]
    }
];

// json object
let js_str_obj = {
    "type": "string",
    "Description": "出生日期",
    "Format": "date-time"
};

// js object
let js_var_obj = {
    type: "string",
    Description: "出生日期",
    Format: "date-time"
};



/* 

http://10.6.1.81/http-report/query?
{
'ApiName':'BasicInformationDeatil',
'BeginDate':'xxx',
'EndDate':'xxx',
'InnerCode':'1',
'SecuCode':'xxx',
'Names':'xxx',

{{{"DispatcherType":"FORWARD",
{{"Classes":["Classes":"undefined",],
{{"CodeSigners":[{{"Encodings":["Encodings":"undefined",],
"Encoded":["Encoded":"undefined",]}}]}}}
{"JspPropertyGroups":[{"UrlPatterns":["UrlPatterns":"undefined",],
"IncludePreludes":["IncludePreludes":"undefined",],
"IncludeCodas":["IncludeCodas":"undefined",]}]}}
{"SkipBuffer":["SkipBuffer":"undefined",],
{"SkipBuffer":["SkipBuffer":"undefined",]}"
Cb":["Cb":"undefined",]}}
{{"WriteBuffer":["WriteBuffer":"undefined",],
{"WriteBuffer":["WriteBuffer":"undefined",]}
{{"WriteBuffer":["WriteBuffer":"undefined",],
"Cb":["Cb":"undefined",]}
{"WriteBuffer":["WriteBuffer":"undefined",],
{"WriteBuffer":["WriteBuffer":"undefined",],
{"Hb":["Hb":"undefined",]}}}}}}}
{"ValueNames":["ValueNames":"undefined",]}
"DispatcherType":"FORWARD"}"
CallPolicy":"INTERNAL"}"

Sorts":[{"Field":"basicinformationrow.a0","Sort":"asc"}],
"Page":{"PageNo":"1","PageSize":"100"},
"FastDateFilterType":"LatestTime",
"WriteType":"json
"}

*/

// test commands

/* 

8081 & manage/admin?

http://10.1.5.31:8081/http/manage/admin?


8080 & report/query?

http://10.1.5.31:8080/http/report/query?


http://10.1.5.31:8080/http/report/query?{"OutField":["a0","a1","a2","a3"],"FastQuarterReportType":["Q1th","Q2nd","Q3rd","Q4th"],"FastDateFilterType":"AllYear","Filters":[{"FilterType":"between","Field":"a0","MaxValue":"2017-08-04","MinValue":"2012-01-01"}],"BeginDate":"2015-08-07","EndDate":"2017-08-07","LX":"6","Sorts":[{"Field":"a0","Sort":"desc"}],"Page":{"PageNo":"1","PageSize":"20"},"ApiName":"JY.Topic.Market_profile.Investors_data_statistics.AccountStatistics","WriteType":"json"}


{
    "OutField":["a0","a1","a2","a3"],
    "FastQuarterReportType":[
        "Q1th",
        "Q2nd",
        "Q3rd",
        "Q4th"
    ],
    "FastDateFilterType":"AllYear",
    "Filters":[
        {
            "FilterType":"between",
            "Field":"a0",
            "MaxValue":"2017-08-04",
            "MinValue":"2012-01-01"
        }
    ],
    "BeginDate":"2015-08-07",
    "EndDate":"2017-08-07",
    "LX":"6",
    "Sorts":[
        {
            "Field":"a0",
            "Sort":"desc"
        }
    ],
    "Page":{
        "PageNo":"1",
        "PageSize":"20"
    },
    "ApiName":"JY.Topic.Market_profile.Investors_data_statistics.AccountStatistics",
    "WriteType":"json"
}

*/



/* 

Warning: 
setState(...): 
Cannot update during an existing state transition (such as within `render` or another component's constructor). 
Render methods should be a pure function of props and state; 
constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`.


isRequred

# react typo error

https://stackoverflow.com/questions/36127842/it-must-be-a-function-usually-from-react-proptypes/45607203#45607203


TestModal.propTypes = {
    title: PropTypes.string,
    // badHideModal: PropTypes.func.required,
    hideModal: PropTypes.func.isRequired,
};






Warning: Failed prop type: TestModal: prop type `hideModal` is invalid; it must be a function, usually from React.PropTypes.




*/



