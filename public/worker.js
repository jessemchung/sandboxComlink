import * as Comlink from "comlink";

const myValue = 42;
class MyClass {
  logSomething() {
    console.log(`myValue = ${myValue}`);
    return myValue;
  }
}
Comlink.expose(MyClass);
