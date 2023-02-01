class Car {
  //engine = 2.0
  //fuel = "gas"

  //public engine: number
  public fuel!: string
  public year!: number

  constructor(public engine: number) {
    //this.engine = engine
  }

  public get fuels() {
    return this.fuel
  }

  public set fuels(fuel: string) {
    if (fuel !== "gas") throw new Error("only gas")
    else this.fuel = fuel
  }
}

// const honda = new Car(2.0)
// honda.fuels = "gas"
// console.log(honda.engine);
// console.log(honda.fuels)

class Honda extends Car {
  constructor(
    public engine: number,
    public model: string,
    public type: string
  ) {
    super(engine)
  }

  public get years(): number {
    return this.year
  }

  public set years(year: number) {
    if (year < 2022) throw new Error("only 2022 or more")
    else this.year = year
  }
}

const honda = new Honda(2.0, "civic", "hatchback")

honda.fuel = "gas"
honda.year = 2022
console.log(honda.engine)
console.log(honda.fuels)
console.log(honda.model)
console.log(honda.years)
console.log(honda.type)
