<h1 align="center">Design-Patterns</h1>

## List of patterns

There are 3 types of patterns (behavioral, creational, sctructural)

- [Singleton](#singleton)

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
