# First Plain JavaScript game

## Notes

- Classes in JavaScript are not hoisted the same way as functions. So, if you want to use a class, you need
to define it before you use it. The class itself is not fully available until the class definition is
processed. This means that you cannot access the class before it is defined.

```javascript
const myDog = new Dog(); // Uncaught ReferenceError: Dog is not defined

class Dog {
  constructor(name) {
    this.name = name;
  }
}
```