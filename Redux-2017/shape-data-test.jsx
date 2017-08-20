const arr = [  
    {  
        "title":"基金经理详细信息(基本资料)",
        "tablenamle":"BasicInformationRow",
        "datas":[  
            {  
                "type":"string",
                "Description":"性别",
                "name":"A0",
                "key":"k0000"
            },
            {  
                "type":"string",
                "Description":"出生日期",
                "Format":"date-time",
                "name":"A1",
                "key":"k0001"
            }
        ]
    },
    {  
        "title":"基金经理详细信息(历任管理基金)",
        "tablenamle":"AnyManagedFundsRow",
        "datas":[  
            {  
                "type":"string",
                "Description":"管理公司",
                "name":"A0",
                "key":"k0000"
            },
            {  
                "type":"string",
                "Description":"基金简称",
                "name":"A1",
                "key":"k0001"
            }
        ]
    }
];

let temp_obj = {};
arr.map(
    (value, index) => {
        if (debug=false) {
            console.log(`index = ${index}`);
            console.log(`value = \n `, value);
            console.log(`JSON.stringify(value) = \n`, JSON.stringify(value));
            console.log(`value tablenamle = `, value.tablenamle);
            console.log(`value title = `, value.title);
            console.log(`value datas \n = `, value.datas);
        }
        let key_prefix = value.tablenamle;
        let value_prefix = value.title;
        value.datas.map(
            (v, i) => {
                if (debug=false) {
                    console.log(`v.name = ${v.name}`);
                    console.log(`v.Description = ${v.Description}`);
                }
                temp_obj[`${key_prefix}.${v.name}`] = `${value_prefix}-${v.Description}`;
            }
        );
        // return temp_obj;
        // bug , repeat twice
    }
);


// MDN
