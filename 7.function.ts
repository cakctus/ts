function myFunction(someNum: number = 10): number {
    return someNum + 10
}

console.log(myFunction())

function nothingReturn(): void {
    console.log("string")
}

nothingReturn()

const s = (a: number, b: number): number => a + b

const newSum: (a: number, b: number) => number = s

console.log(newSum(10, 10))

function error2(msg: string): never {
    throw new Error(msg)
}


error2("error")