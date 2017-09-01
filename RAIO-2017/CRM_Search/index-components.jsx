"use strict";

/**
 * xgqfrms
 * 2017.08.13
 * 
 * @class IC
 * @extends {}
 */

// make all components in one
import {SC} from './SC';
import {SCT} from './SCT';
import {LF} from './LoginForm';
import {SF} from './SearchForm/SF';


const IC = {
    SC,
    SCT,
    LF,
    SF
};

export {IC};
export default IC;

/* 

import {IC} from './index-components';
// {...IC} / IC.SCT

const {
    SC,
    SCT,
    LF,
    SF
} = {...IC};

*/