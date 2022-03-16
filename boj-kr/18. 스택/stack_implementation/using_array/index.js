"use strick";

import Stack from "./Stack.js";

const cars = new Stack();

cars.push("Honda");
cars.push("Toyota");
cars.push("Mazda");

console.log(cars.pop());
console.log(cars);
console.log(cars.peek());
