//const num: number = 10

//const str: string = "String"

//const bool: boolean = true

let anyConst: any = "String"
console.log(anyConst)
anyConst = 10
console.log(anyConst)

//const arr: Array<number> = [10, 100, 100]
//console.log(arr)

const arr2: Array<string> = ["String", "String"]
console.log(arr2)

const typl: [number, string] = [10, "String"]

const func = (arg1: number): number => {
    return arg1
}
console.log(func(10));

function error(message: string): never {
    throw new Error(message);
}


type Point = {
    x: number;
    y: string | number;
};

const obj: Point = {
    x: 10,
    y: 20,
}
console.log(obj)

// function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 100 });