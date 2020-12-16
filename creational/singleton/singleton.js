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

myCount1.increaseCount(); // count: 1
myCount1.increaseCount(); // count: 2
myCount2.increaseCount(); // count: 3
myCount2.increaseCount(); // count: 4

console.log("myCount1: ", myCount1.getCount()); // 4
console.log("myCount2: ", myCount2.getCount()); // 4
