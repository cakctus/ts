interface Length {
  length: number
}

function checkLenght(item: Length): void {
  console.log(item.length)
}

checkLenght([1, 2, 3])
checkLenght("JavaScript")
// checkLenght({ name: "john", length: 20 })

interface IObj {
  readonly id: number
  name: string
  location?: string
  skills?: string[]
}

interface ISkillss extends IObj {
  skills: string[]
}

const obj1: IObj = {
  id: 10,
  name: "Peter",
  skills: ["html", "css", "js"],
}

obj1.location = "MD"

const obj5: ISkillss = {
  skills: ["html", "css", "js"],
  id: 10,
  name: "Peter",
}

class Dev implements IObj, ISkillss {
  constructor(
    public id: number,
    public name: string,
    public location: string,
    public skills: string[]
  ) {}
}

const dev = new Dev(10, "John", "ca", ["html", "css", "js"])

console.log(dev)

const obj2 = {} as IObj
const obj3 = <IObj>{}
