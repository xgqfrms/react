# output


```js






/* 

GetRowSchema === output

description === KeyWord (只适用于 模糊 search)


http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetRowSchema","KeyWord":"指数--> F10--> 非股票指数--> 指数基金","WriteType":"json"}



name": "IndexF10IndexFund",
"description": "指数--> F10--> 非股票指数--> 指数基金",

"name": "IndexF10IndexQuotation",
"description": "指数--> F10--> 非股票指数--> 指数基金--> 指数行情",




ReportName':'IndexF10IndexFund'


name === ReportName (唯一的 query key)


GetRowSchema === output

http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexFund'}

{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexQuotation'}


GetSchema === input

http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json',ReportName':'IndexF10IndexFund'}


http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}


*/



{/* map Tables*/}

{/* {title: "基金经理详细信息(折线图同类平均)", datas: Array(4)} */}




```



