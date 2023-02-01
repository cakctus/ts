"use strict";
class Car {
    constructor(engine) {
        this.engine = engine;
        //this.engine = engine
    }
    get fuels() {
        return this.fuel;
    }
    set fuels(fuel) {
        if (fuel !== "gas")
            throw new Error("only gas");
        else
            this.fuel = fuel;
    }
}
// const honda = new Car(2.0)
// honda.fuels = "gas"
// console.log(honda.engine);
// console.log(honda.fuels)
class Honda extends Car {
    constructor(engine, model, type) {
        super(engine);
        this.engine = engine;
        this.model = model;
        this.type = type;
    }
    get years() {
        return this.year;
    }
    set years(year) {
        if (year < 2022)
            throw new Error("only 2022 or more");
        else
            this.year = year;
    }
}
const honda = new Honda(2.0, "civic", "hatchback");
honda.fuel = "gas";
honda.year = 2022;
console.log(honda.engine);
console.log(honda.fuels);
console.log(honda.model);
console.log(honda.years);
console.log(honda.type);
