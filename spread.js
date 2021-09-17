"use strict";

// You need the module.exports when testing in node.  Comment it out when you send your file to the browser 

module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests


/**
 * @param {Array} arr any array input
 * @returns {Array} newArr returns new array result
 */
function copyArray(arr){
    let newArr = [...arr];
    return newArr;
}

/**
 * @param {Array} arr1 any input array
 * @param {Array} arr2 any input array
 * @returns {Array} result concated array
 */

function concat(arr1, arr2){
    let result = arr1.concat(arr2);
    return result;
}

/**
 * @param  {...any} numbers any input numbers 
 * @returns {number} min returns minimum value 
 */
function findMin(...numbers) {
    let min = Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

/**
 * 
 * @param {Object} obj1 any new input object 
 * @param {Object} obj2 any new input object 
 * @returns {return} obj returns new object
 */
function combineObjs(obj1, obj2){
    let obj = {...obj1,...obj2};
    return obj;
}
