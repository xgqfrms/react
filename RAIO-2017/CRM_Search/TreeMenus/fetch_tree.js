"use strict";

/**
 * fetch tree datas
 */

// utils
import {color} from '../../../app/color.jsx';
import {debug, xyz_debug} from '../../../app/debug.jsx';

const url = `https://cdn.xgqfrms.xyz/json/crm/tree-menus.json`;

let datas = {};
let temp_obj = {};

fetch(url)
.then(
    (res) => res.json()
)
.then(
    (json) => {
        // Info
        if (xyz_debug(true)) {
            console.log(`json = \n`, json);
            console.log(`json.Info = \n`, json.Info);
        }
        temp_obj = Object.assign({}, json.Info);
        return temp_obj;
    }
);

setTimeout(
    () => {
        datas = temp_obj;
        if(debug) {
            // setTimeOut
            console.log(`after fetched json datas = \n`, datas);
        }
    }, 1000
);

if(debug) {
    console.log(`temp_obj = \n`, temp_obj);
    console.log(`before fetched json datas = \n`, datas);
}

// ??? setTimeout delay

// react props

export {datas};
export default datas;





/* 

// const datas = {};
// Info

*/














