"use strick";

import Queue from "./Queue.js";

const cars = new Queue();

cars.enqueue("Honda");
cars.enqueue("Toyota");
cars.enqueue("Mazda");

console.log(cars);

cars.enqueue("tesla");
console.log(cars);
console.log(cars.dequeue());
console.log(cars);
console.log(cars.peek());
console.log(cars);
