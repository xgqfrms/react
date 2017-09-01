
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


















## comments


```jsx



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


    bad

    http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22fund.f9.fund_profile.FundIntroduce%22}

    ?{"Admin":"report","Action":"GetSchema","WriteType":"json",%20"ReportName":"fund.f9.fund_profile.FundIntroduce"}



    good

    http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22F10.FinaIndicator.SpecialIndex%22}

    ?{"Admin":"report","Action":"GetSchema","WriteType":"json",%20"ReportName":"F10.FinaIndicator.SpecialIndex"}


*/

/* 

    // Sorts 单选框
    // Sorts === json.Info.schema
    // :基金->F9->基金概况 ->基金经理->基金经理详细信息(基本资料)
    // multi tables
    // fund.f9.fund_profile.FundManager.BasicInformations
    // schema.AnyManagedFundsRow.Properties

    schema: {
        "AnyManagedFundsRow" : {
            "Properties": {
                "A0": {
                    "type": "string",
                    "Description": "管理公司"
                },
                "A1": {
                    "type": "string",
                    "Description": "出生日期"
                }
            },
            "desc" : "基金经理详细信息(历任管理基金)",
            "type" : "object",
        },
        BasicInformationRow : {
            Properties: {
                A0: {
                    "type" : "string",
                    "Description" : "性别"
                }
            },
            desc : "基金经理详细信息(基本资料)",
            type : "object",
        }
    }

    AnyManagedFundsRow: {
        "desc" : "基金经理详细信息(历任管理基金)",
        "cols": {
            A0: "管理公司",
            A1: "出生日期"
        }
        // {}.keys
    }

    BasicInformationRow: {
        desc : "基金经理详细信息(基本资料)",
        "cols": {
            A0: "管理公司",
            A1: "出生日期"
        }
    }




    Field : [
        AnyManagedFundsRow.A0: AnyManagedFundsRow.desc + AnyManagedFundsRow.cols.A0 
        // 
    ]



        基金经理详细信息(基本资料

    "Sorts":[
        {
            "Field":"basicinformationrow.a0",
            "Sort":"asc"
        }
    ]




    // OutField 多选框

    AnyManagedFundsRow: {
        "desc" : "基金经理详细信息(历任管理基金)",
        "cols": {
            A0: "管理公司",
            A1: "出生日期"
        }
        // {}.keys
    }

    "OutField":[
        "BasicInformationRow.A6",
        "BasicInformationRow.A7",
        "AnyManagedFundsRow.A0",
        "AnyManagedFundsRow.A1",
        "AnyManagedFundsRow.A2",
        "HistoricalReturnsRow.A3",
        "HistoricalReturnsRow.A4"
    ]

*/


/* 


    // single table & output
    // fund.f9.fund_profile.FundIntroduce
    // schema.Properties


    // ??? table name ???
    http://10.1.5.203/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetRowSchema%27,%27WriteType%27:%27json%27,%27ReportName%27:%27fund.f9.fund_profile.FundIntroduce%27}?ran=0.027994435157687736

    "Sorts":[
        {
            "Field":"basicinformationrow.a0",
            "Sort":"asc"
        }
    ]

    // A0 ???

    "OutField":[
        "BasicInformationRow.A6",
        "BasicInformationRow.A7",
        "AnyManagedFundsRow.A0",
        "AnyManagedFundsRow.A1",
        "AnyManagedFundsRow.A2",
        "HistoricalReturnsRow.A3",
        "HistoricalReturnsRow.A4"
    ]
    // A0 ???

*/


```

