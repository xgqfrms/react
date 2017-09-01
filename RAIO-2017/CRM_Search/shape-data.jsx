const test_array = [
    {
        "name": "AnyManagedFundsRow",
        "columnMeta": {
            "a0": "STRING",
            "a1": "STRING",
            "a2": "STRING",
            "a3": "DATE",
            "a4": "DATE",
            "a5": "DOUBLE",
            "a6": "INT"
        },
        "rows": [
            [
                "华夏基金管理有限公司",
                "华夏大中华企业精选灵活配置混合(QDII)",
                "其他型基金",
                "2016-01-20",
                "",
                21.877086009428236,
                65135
            ],
            [
                "华夏基金管理有限公司",
                "华夏大盘精选混合",
                "混合型基金",
                "2015-09-01",
                "2017-05-02",
                10.307680340705128,
                2944
            ]
        ]
    }
];

const tabs_obj = {};
let p_obj = {};

const tabs = test_array.map(
    // tab
    (tab) => {
        let c_obj = {};
        p_obj[tab.name] = [];
        // p_obj[tab.name].Properties = [];
        // object keys length
        let key_length = Object.keys(tab.columnMeta).length;
        for (let key in tab.columnMeta) {
            if (tab.columnMeta.hasOwnProperty(key)) {
                c_obj[key.toUpperCase()] = {};
                // A0: {type:"STRING"}
                // ??? // A0: {"Description": "华夏基金管理有限公司"}
                c_obj[key.toUpperCase()].type = tab.columnMeta[key];
                // c_obj[key.toUpperCase()] = tab.columnMeta[key];
                // "a0".toUpperCase(); === "A0"
            }
            console.log(`%c ${c_obj[key.toUpperCase()]}`, "color: #f0f", c_obj);
            // c_obj = {"A0": ""}
        }
        console.log("%c finish a c_obj!", "color: red", c_obj);
        // c_obj = {"A0": "","A1": "","A2": "",A3: "",A4: "", A5: "", A6: ""}
        /* 
            Object keys to Array
        */
        let obj_keys =  Object.keys(c_obj);
        console.log(`obj_keys = `, obj_keys);
        // ["A0", "A1", "A2", "A3", "A4", "A5", "A6"]
        console.log(`tab.rows`, tab.rows);
        // array length
        for(let array of tab.rows){
            let temp_array = [];
            // push 
            let temp_obj = {};
            temp_array = array.map(
                (value, index) => {
                    // value
                    console.log(`index = `, index);
                    console.log(`value = `, value);
                    console.log(`typeof value = `, typeof(value));
                    c_obj[obj_keys[index]].Description = value;
                    console.log(`typeof c_obj[obj_keys[index]].Description = `, typeof(c_obj[obj_keys[index]].Description));
                    // c_obj[obj_keys[index]].Description = JSON.stringify(value);
                    console.log( `obj_keys[${index}]= `, obj_keys[index]);
                    // temp_obj
                    // reset object ???
                }
            );
            console.log(`%c finish a new c_obj!`, "color: #f0f", c_obj);
            console.log(`%c type of c_obj["A5"].Description !`, "color: #f0f", typeof(c_obj["A5"].Description));
            // number
            p_obj[tab.name].push(c_obj);
            // p_obj[tab.name].push(temp_array); 
        }
        return p_obj;
    }
);



 







/* 


const rows: [
    [
        "华夏基金管理有限公司",
        "华夏大中华企业精选灵活配置混合(QDII)",
        "其他型基金",
        "2016-01-20",
        "",
        21.877086009428236,
        65135
    ],
    [
        "华夏基金管理有限公司",
        "华夏大盘精选混合",
        "混合型基金",
        "2015-09-01",
        "2017-05-02",
        10.307680340705128,
        2944
    ]
];

let p_obj = {};
let p_array = [];

for(let array of rows){
    // array === []
    let obj = {};
    array.map(
        (value, index) => {
            console.log(`index = `, index);
            console.log(`value = `, value);
            obj[`A${index}`] = value;
            console.log( `obj[A${index}]= `, obj[`A${index}`]);
        }
    );
    console.log("%c finish a obj!", "color: red", obj);
    p_array.push(obj);
}

console.log("%c finish p_array!", "color: #ff0", p_array);

let name = "table name";
p_obj[name] = p_array;

console.log("%c finish p_obj!", "color: #f0f", p_obj);


*/