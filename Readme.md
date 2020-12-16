<h1 align="center">Design-Patterns</h1>

## List of patterns

There are 3 types of patterns (behavioral, creational, sctructural)

- [Singleton](#singleton)
- [Factory](#factory)
- [Abstract Factory](#abstract-factory)

## Singleton

Sigleton return one instance of the class for every call. <br>
Calling `increateCount()` will change both count in `myCount1` and `myCount2`

```js
class Counter {
  constructor() {
    if (typeof Counter.instance === "object") {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount(); // 1
myCount1.increaseCount(); // 2
myCount2.increaseCount(); // 3
myCount2.increaseCount(); // 4

console.log("myCount1: ", myCount1.getCount()); // 4
console.log("myCount2: ", myCount2.getCount()); // 4
```

## Factory

Factory used to create different objects with the same initial data

```js
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
```

## Abstract Factory

```js
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
```
