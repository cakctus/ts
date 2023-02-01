"use strict";
//const num: number = 10
//const str: string = "String"
//const bool: boolean = true
let anyConst = "String";
console.log(anyConst);
anyConst = 10;
console.log(anyConst);
//const arr: Array<number> = [10, 100, 100]
//console.log(arr)
const arr2 = ["String", "String"];
console.log(arr2);
const typl = [10, "String"];
const func = (arg1) => {
    return arg1;
};
console.log(func(10));
function error(message) {
    throw new Error(message);
}
const obj = {
    x: 10,
    y: 20,
};
console.log(obj);
// function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
// }
// printCoord({ x: 100, y: 100 });
