abstract class Phone {
  public abstract price: number

  constructor(public model: string) {}

  public abstract openPhone(): string
}

class Samsung extends Phone {
  constructor(public model: string, public price: number) {
    super(model)
  }

  public openPhone(): string {
    return `${this.model} is open`
  }
}

const samsung = new Samsung("Galaxy S22", 1000)

console.log(samsung.model)
console.log(samsung.price)
