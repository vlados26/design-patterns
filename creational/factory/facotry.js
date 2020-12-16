class Car {
  constructor(name, price, maxSpeed) {
    this.model = name;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class CarFactory {
  create(name) {
    if (name === "TOYOTA") {
      return new Car(name, 256000, 340);
    }
    if (name === "AUDI") {
      return new Car(name, 470000, 360);
    }
  }
}

const factory = new CarFactory();

const toyota = factory.create("TOYOTA");
const audi = factory.create("AUDI");

console.log("toyota: ", toyota); // Car {model: "TOYOTA", price: 256000, maxSpeed: 340, constructor: Object}
console.log("audi: ", audi); // Car {model: "AUDI", price: 470000, maxSpeed: 360, constructor: Object}
