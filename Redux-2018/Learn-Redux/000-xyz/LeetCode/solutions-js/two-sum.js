"use strict";

/**
 * @author xgqfrms
 * @description LeetCode Problems: two-sum & https://leetcode.com/problems/two-sum/
 * @language JavaScript & ES6
 * 
 * @param {Int Number Array} nums
 * @param {Int Number} target
 * @return {Int Number Array} result
 * 
 */

const twoSum = (nums = [2, 7, 11, 15], target = 9, debug = false) => {
    let result = [];
    for(let i =  0; i < nums.length; i++){
        for(let ii =  0; ii < nums.length; ii++){
            let temp_a = nums[i];
            let temp_b = nums[ii];
            if(ii !== i){
                let temp_result = temp_a + temp_b;
                if(temp_result === target){
                    // 1. reset;
                    // result = [];
                    // result.push(i);
                    // result.push(ii);
                    // 2. remove duplication
                    if(!result.includes(i)){
                       result.push(i);
                    }
                    if(!result.includes(ii)){
                       result.push(ii);
                    }
                    result.sort();
                }
            }else{
                // break;
            }
        }
    }
    if (!debug) {
        console.log(`result =`, result);
    }
    return result;
};

/* demo */

let nums = [3, 2, 4],
    target = 6;

twoSum(nums, target);
// [1, 2]

let nums = [3, 3],
    target = 6;

twoSum(nums, target);
// [1, 2]