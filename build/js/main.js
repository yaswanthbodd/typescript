"use strict";
// Data types
let myName = 'yaswanth';
let year = 19;
let isLoading = true;
let album = 1999; // any type
let album1; // union type
let reg = /\w+/g;
// Arrays
let stringArr = ['yaswanth', 'is', 'good', 'boy'];
let guitars = ['let start', 'yash', 2003];
let mixedData = ['ETH', 2003, true];
stringArr[0] = 'hi';
stringArr.push('hello');
guitars[0] = 1919;
guitars[0] = 'yash';
guitars.unshift('hei');
let test = [];
let bands = [];
bands.push('heeee');
//Tuple
let myTuple = ['yas', 77, true];
let mixed = ['john', 96, false];
mixed = myTuple;
// myTuple = mixed -> It's give an error . The myTuple is fixed data types whereas in mixed or operator
//objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'yash',
    prop2: true,
};
exampleObj.prop1 = 'sai';
let evh = {
    name: 'Eddie',
    active: false,
    album: [1984, 1989]
};
let jp = {
    name: 'Jimmy',
    album: ['I', 'II', 'III']
};
evh = jp;
const greeGuitarist = (gutarist) => {
    return `Hello ${gutarist.name}`;
};
console.log(greeGuitarist(jp));
//Literal types
let myName1;
// myName1 = 'srinu' => error
let myName2;
myName2 = 'syam';
myName2 = 'subbu';
myName2 = 'yash';
// myName2 = 'sai' => error
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('hello');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number 
// }
let mutiply = function (c, d) {
    return c * d;
};
logMsg(subtract(3, 2));
logMsg(mutiply(4, 9));
//optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined')
        return a + b + c;
    return a + b;
};
logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));
//default parameters
const sumAll = (a = 20, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(2, 3));
logMsg(sumAll(3, 4, 5));
// logMsg(sumAll(3)) => gives an error the default parameters set in the last of the function parameters
logMsg(sumAll(undefined, 3));
//Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(2, 3, 4));
//never datatype
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
logMsg(isNumber(2));
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This should never happen');
};
