"use strict";
function myFunction(someNum = 10) {
    return someNum + 10;
}
console.log(myFunction());
function nothingReturn() {
    console.log("string");
}
nothingReturn();
const s = (a, b) => a + b;
const newSum = s;
console.log(newSum(10, 10));
function error2(msg) {
    throw new Error(msg);
}
error2("error");
