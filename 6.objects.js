"use strict";
const person = {
    name: "John",
    age: 25,
    skills: ["html", "css", "js"],
    getNameAge() {
        return this.name + " " + this.age;
    }
};
console.log(person.getNameAge());
