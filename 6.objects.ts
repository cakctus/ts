type Person = {
    age: number
    name: string
    location?: string
    skills: string[]
    getNameAge: () => (string | number)
}

const person: Person = {
    name: "John",
    age: 25,
    skills: ["html", "css", "js"],
    getNameAge() {
        return this.name + " " + this.age
    }
}

console.log(person.getNameAge())