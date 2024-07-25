// main.js
const add = require('./mathModule.js');

const result = add(5, 3);
console.log(`The result is: ${result}`);

// main.js
const person = require('./personModule');

person.greet(); // Output: Hello, my name is John Doe and I am 30 years old.

person.updateAge(31);
person.greet(); // Output: Hello, my name is John Doe and I am 31 years old.


// main.js
const  { add1, subtract, multiply, divide } =require('./mathFunctions.js');

console.log(`5 + 3 = ${add1(5, 3)}`);        // Output: 5 + 3 = 8
console.log(`5 - 3 = ${subtract(5, 3)}`);   // Output: 5 - 3 = 2
console.log(`5 * 3 = ${multiply(5, 3)}`);   // Output: 5 * 3 = 15
console.log(`5 / 3 = ${divide(5, 3)}`);     // Output: 5 / 3 = 1.6666666666666667

// main.js
const greet =require('./greetModule.js');

greet('Alice'); // Output: Hello, Alice!

// main.js
const utilities = require('./utilities.js');

console.log(`PI: ${utilities.PI}`); // Output: PI: 3.14159
console.log(`E: ${utilities.E}`);   // Output: E: 2.71828

console.log(`5 + 3 = ${utilities.add(5, 3)}`);        // Output: 5 + 3 = 8
console.log(`5 - 3 = ${utilities.subtract(5, 3)}`);   // Output: 5 - 3 = 2
console.log(`5 * 3 = ${utilities.multiply(5, 3)}`);   // Output: 5 * 3 = 15
console.log(`5 / 3 = ${utilities.divide(5, 3)}`);     // Output: 5 / 3 = 1.6666666666666667


// main.js
const _ = require('lodash');

const array = [1, 2, 3, 4, 5];
const reversedArray = _.reverse([...array]);

console.log(`Original array: ${array}`); // Output: Original array: 5,4,3,2,1
console.log(`Reversed array: ${reversedArray}`); // Output: Reversed array: 5,4,3,2,1

// main.js
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
