let arrays = [
    [
        "2016 Pass/Fail Rates by Test Centre","","","","","","","","",""
    ],
    [
        "","Passes","","No ID","","Fails","","Fail Dangerous","","Total"
    ],
    [
        "Sometown",
        "8,25",
        "53.40%",
        "140",
        "0.90%",
        "7,17",
        "45.40%",
        "48",
        "0.30%",
        "16,30"
    ],
    [
        "Some Other Town",
        "12,78",
        "44.80%",
        "193",
        "0.70%",
        "15,22",
        "54.10%",
        "103",
        "0.40%",
        "28,96"
    ]
];


// expect results

let objs_array = [
    {
        "Location":"Sometown",
        "Passes":"8,25",
        "Passes%":"53.40%",
        "No ID":"140",
        "No ID%":"0.90%",
        "Fails":"7,17",
        "Fails%":"45.40%",
        "Fail Dangerous":"48",
        "Fail Dangerous%":"0.30%",
        "Total":"16,30"
    },
    {
        "Location":"Some Other Town",
        "Passes":"12,78",
        "Passes%":"44.80%",
        "No ID":"193",
        "No ID%":"0.70%",
        "Fails":"15,22",
        "Fails%":"54.10%",
        "Fail Dangerous":"103",
        "Fail Dangerous%":"0.40%",
        "Total":"28,96"
    }
];





let keys = arrays[1];
// ["", "Passes", "", "No ID", "", "Fails", "", "Fail Dangerous", "", "Total"];

let temp_obj = {};

// slice(2) ===  slice(2, n-1)
// no needs slice, 
let result = arrays.slice(2).map(
    (array) => {
        let temp = {};
        keys.forEach(
            (key, index) => {
                console.log(`key = `, key);
                console.log(`index = `, index);
                temp[`${key}`] = array[index];
            }
        );
        console.log(`temp = `, temp);
        return temp;
    }
);
console.log(`result = `, result);
























/*

Array to Object

*/




// ["Location", "Passes", "Passes%", "No ID", "No ID%", "Fails", "Fails%", "Fail Dangerous", "Fail Dangerous%", "Total"]

const keys_array = [
    "Location",
    "Passes",
    "Passes%",
    "No ID",
    "No ID%", 
    "Fails",
    "Fails%",
    "Fail Dangerous",
    "Fail Dangerous%",
    "Total"
];

let temp_obj = {};

keys_array.map(
    (value, index) => {
        temp_obj[`${value}`] = "";
        // temp_obj[value] = "";
        return temp_obj;
    }
);

console.log(`temp_obj = `, temp_obj);
// {"Location": "","Passes": "","Passes%": "","No ID": "","No ID%": "", "Fails": "","Fails%": "","Fail Dangerous": "","Fail Dangerous%": "","Total": ""};



for(let k in temp_obj) {
    console.log(`typeof (k) = `, typeof (k));
    // typeof (k) = string
}




/*

Object to Array

*/


const meaningful_objs = {
    "Location": "",
    "Passes": "",
    "Passes%": "",
    "No ID": "",
    "No ID%": "", 
    "Fails": "",
    "Fails%": "",
    "Fail Dangerous": "",
    "Fail Dangerous%": "",
    "Total": ""
};

// {"Location": "","Passes": "","Passes%": "","No ID": "","No ID%": "", "Fails": "","Fails%": "","Fail Dangerous": "","Fail Dangerous%": "","Total": ""};




let keys_array = Object.keys(meaningful_objs);

console.log(`keys_array = \n`, keys_array);

// ["Location", "Passes", "Passes%", "No ID", "No ID%", "Fails", "Fails%", "Fail Dangerous", "Fail Dangerous%", "Total"]






/*

result 

*/



let keys = keys_array;
// ["Location", "Passes", "Passes%", "No ID", "No ID%", "Fails", "Fails%", "Fail Dangerous", "Fail Dangerous%", "Total"]


let arrays = [
    [
        "Sometown",
        "8,25",
        "53.40%",
        "140",
        "0.90%",
        "7,17",
        "45.40%",
        "48",
        "0.30%",
        "16,30"
    ],
    [
        "Some Other Town",
        "12,78",
        "44.80%",
        "193",
        "0.70%",
        "15,22",
        "54.10%",
        "103",
        "0.40%",
        "28,96"
    ]
];

let result = arrays.map(
    (array) => {
        let temp = {};
        keys.forEach(
            (key, index) => {
                console.log(`key = `, key);
                console.log(`index = `, index);
                temp[`${key}`] = array[index];
            }
        );
        console.log(`temp = `, temp);
        return temp;
    }
);
console.log(`result = `, result);



/*

test

*/


let string_objs = JSON.stringify(result);

// "[{"Location":"Sometown","Passes":"8,25","Passes%":"53.40%","No ID":"140","No ID%":"0.90%","Fails":"7,17","Fails%":"45.40%","Fail Dangerous":"48","Fail Dangerous%":"0.30%","Total":"16,30"},{"Location":"Some Other Town","Passes":"12,78","Passes%":"44.80%","No ID":"193","No ID%":"0.70%","Fails":"15,22","Fails%":"54.10%","Fail Dangerous":"103","Fail Dangerous%":"0.40%","Total":"28,96"}]"


let string_obj1 = JSON.stringify(result[0]);

// "{"Location":"Sometown","Passes":"8,25","Passes%":"53.40%","No ID":"140","No ID%":"0.90%","Fails":"7,17","Fails%":"45.40%","Fail Dangerous":"48","Fail Dangerous%":"0.30%","Total":"16,30"}"


/*


    {
        "Location":"Sometown",
        "Passes":"8,25",
        "Passes%":"53.40%",
        "No ID":"140",
        "No ID%":"0.90%",
        "Fails":"7,17",
        "Fails%":"45.40%",
        "Fail Dangerous":"48",
        "Fail Dangerous%":"0.30%",
        "Total":"16,30"
    }

*/


let string_obj2 = JSON.stringify(result[1]);


// "{"Location":"Some Other Town","Passes":"12,78","Passes%":"44.80%","No ID":"193","No ID%":"0.70%","Fails":"15,22","Fails%":"54.10%","Fail Dangerous":"103","Fail Dangerous%":"0.40%","Total":"28,96"}"


/*

    {
        "Location":"Some Other Town",
        "Passes":"12,78",
        "Passes%":"44.80%",
        "No ID":"193",
        "No ID%":"0.70%",
        "Fails":"15,22",
        "Fails%":"54.10%",
        "Fail Dangerous":"103",
        "Fail Dangerous%":"0.40%",
        "Total":"28,96"
    }


*/






























const array = ['zero', 'one', 'two', 'three'];
// index === 0, 1, 2, 3

let sliced_all = array.slice(0);
// [0, n-1]

let sliced_begin = array.slice(3);
// [3, n-1]

let sliced_begin_end = array.slice(1, 3);
// [1, 3)


console.log(`sliced_all = \n`, sliced_all);
// ["zero", "one", "two", "three"]

console.log(`sliced_begin = \n`, sliced_begin);
// ["three"]

console.log(`sliced_begin_end = \n`, sliced_begin_end);
// ["one", "two"]

console.log(`original array = \n`, array);
// ["zero", "one", "two", "three"]



arr.slice();
// [0, end]

arr.slice(begin);
// [begin, end]

arr.slice(begin, end);
// [begin, end)


