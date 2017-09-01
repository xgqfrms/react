fetch(`https://cdn.xgqfrms.xyz/json/tables.json`)
.then((response) => response.json())
.then((json)=> {
    console.log(`json = ${json}`);
    console.log(`json.length = ${json.length}`);
    console.log(`json.Info`, json.Info.schema.Properties);
    // Properties
    let datas = [];
    if(json.Info.schema.Properties !== undefined){
        // datas.BasicInformationRow.Properties
        datas = json.Info.schema.Properties;
    }else{
        let tables = json.Info.schema;
        let i = 0;
        for (let key in tables) {
            let arr = [];
            let new_obj = {};
            if(!tables.hasOwnProperty(key)) continue;
            if (tables.hasOwnProperty(key)) {
                let title = tables[key].desc,
                    objs = tables[key].Properties;
                for (let key in objs) {
                    if (objs.hasOwnProperty(key)) {
                        // A0
                        objs[key].name =  key;
                    }
                    arr.push(objs[key]);
                    console.log(`arr ${key}`, arr);
                }
                console.log(`title ${key}`, title);
                new_obj.title = tables[key].desc;
                new_obj.datas = arr;
                console.log(`new obj = `, new_obj);
            }
            datas.push(new_obj);
            const css = `
                color: #0f0;
                font-size: 23px;
            `;
            const css2 = `
                color: #f00;
                font-size: 16px;
            `;
            console.log(`%c datas key = ${key} \n datas = `, css, datas);
            console.log(`%c datas i = ${i} \n datas = `, css2, datas[i]);
            i++;
        }
    }
    console.log(`datas[0] = `, datas[0]);
    console.log(`datas[0].length = `, datas[0].length);
    // Array.isArrray(datas[0]);
    console.log(`Array.isArray(datas[0]) = `, Array.isArray(datas[0]));
    console.log(`typeof datas[0] = `, typeof(datas[0]));
    return datas;
});




/* 

// todo

datas = [];

let new_obj = {
    Properties: datas[0],
    desc: title;
}

datas.push(new_obj);



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

*/