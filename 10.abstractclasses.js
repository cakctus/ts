"use strict";
class Phone {
    constructor(model) {
        this.model = model;
    }
}
class Samsung extends Phone {
    constructor(model, price) {
        super(model);
        this.model = model;
        this.price = price;
    }
    openPhone() {
        return `${this.model} is open`;
    }
}
const samsung = new Samsung("Galaxy S22", 1000);
console.log(samsung.model);
console.log(samsung.price);
