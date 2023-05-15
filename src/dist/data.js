"use strict";
const startB = (n) => {
    return (n * (n + 1)) / 2;
};
// console.time();
// console.log("Best Result: ", startB(1000000000));
// console.timeEnd();
const startA = (n) => {
    let count = [];
    for (let i = n; i >= 0; i--) {
        count.push(i);
    }
    return count.reduce((a, b) => a + b);
};
// console.time();
// console.log("OK Result: ", startA(1000000000));
// console.timeEnd();
const start = (n) => {
    let count = 0;
    for (let i = n; i >= 0; i--) {
        count += i;
    }
    return count;
};
// console.time();
// console.log("Bad Result: ", start(1000000000));
// console.timeEnd();
const revString = (str) => {
    let strArr = [];
    let forStr = str.split("");
    for (let i of forStr) {
        strArr.push(i);
    }
    return strArr.reverse().join("");
};
const revStringA = (str) => {
    let strArr = [];
    let forStr = str.split("");
    return forStr.reverse().join("");
};
const revStringB = (str) => {
    if (str === "") {
        return "";
    }
    else {
        return revStringB(str.slice(1)) + str.slice(0, 1);
    }
};
console.time();
console.log("Worst Result: ", revString("Franklin is very handsome"));
console.timeEnd();
console.time();
console.log("Best Result: ", revStringA("Franklin is very handsome"));
console.timeEnd();
console.time();
console.log("OK Result: ", revStringB("Franklin is very handsome"));
console.timeEnd();
