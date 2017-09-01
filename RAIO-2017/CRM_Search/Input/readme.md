# input



```js


/* 


GetSchema === input

// 指数--> F10--> 非股票指数--> 指数基金

description === KeyWord (只适用于 模糊 search)


http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json','KeyWord':'指数--> F10--> 非股票指数--> 指数基金'}

{'Admin':'report','Action':'GetSchema','WriteType':'json','KeyWord':'指数--> F10--> 非股票指数--> 指数基金'}:




name": "IndexF10IndexFund",
"description": "指数--> F10--> 非股票指数--> 指数基金",

"name": "IndexF10IndexQuotation",
"description": "指数--> F10--> 非股票指数--> 指数基金--> 指数行情",







name === ReportName (唯一的 query key)


GetRowSchema === output

http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexFund'}

{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexQuotation'}


GetSchema === input

http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json', 'ReportName':'IndexF10IndexFund'}

http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}


*/





```





