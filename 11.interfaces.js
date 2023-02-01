"use strict";
function checkLenght(item) {
    console.log(item.length);
}
checkLenght([1, 2, 3]);
checkLenght("JavaScript");
const obj1 = {
    id: 10,
    name: "Peter",
    skills: ["html", "css", "js"],
};
obj1.location = "MD";
const obj5 = {
    skills: ["html", "css", "js"],
    id: 10,
    name: "Peter",
};
class Dev {
    constructor(id, name, location, skills) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.skills = skills;
    }
}
const dev = new Dev(10, "John", "ca", ["html", "css", "js"]);
console.log(dev);
const obj2 = {};
const obj3 = {};
