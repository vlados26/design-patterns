// Abstract factory
const carProducer = (type) => {
  if (type === "sport") {
    return new SportCarFactory();
  }
  if (type === "family") {
    return new FamilyCarFactory();
  }
  if (type === "electric") {
    return new ElectricCarFactory();
  }
};

// Product
class Car {
  constructor(name, price, maxSpeed) {
    this.model = name;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

// Factories
class SportCarFactory {
  create(name) {
    if (name === "FERRARI") {
      return new Car(name, 470000, 360);
    }
  }
}

class FamilyCarFactory {
  create(name) {
    if (name === "RENAULT") {
      return new Car(name, 40000, 250);
    }
  }
}

class ElectricCarFactory {
  create(name) {
    if (name === "TESLA") {
      return new Car(name, 250000, 280);
    }
  }
}

const sportCarFactory = carProducer("sport");
const familyCarFactory = carProducer("family");
const electricCarFactory = carProducer("electric");

const ferrari = sportCarFactory.create("FERRARI");
const renault = familyCarFactory.create("RENAULT");
const tesla = electricCarFactory.create("TESLA");

console.log("ferrari: ", ferrari); // Car {model: "FERRARI", price: 470000, maxSpeed: 360, constructor: Object}
console.log("renault: ", renault); // Car {model: "RENAULT", price: 40000, maxSpeed: 250, constructor: Object}
console.log("tesla: ", tesla); // Car {model: "TESLA", price: 250000, maxSpeed: 280, constructor: Object}
