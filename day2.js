
let a=5;
let b=11;
function sum(a,b){
    return a+b;
}
console.log(sum(a,b));
function subtrract(a,b){
    return a-b;
}
console.log(subtrract(a,b));
function multiply(a,b){
    return a*b;
}
console.log(multiply(a,b));
function divid(a,b){
    return a/b;
}
console.log(divid(a,b));
function reminder(a,b){
    return a%b;
}
console.log(reminder(a,b));

console.log(b+=10);
console.log(b-=15);
if(a<b){
    console.log("a is less than b");
}
else{
    console.log("a is greater than b");
    }
if(b>a){
    console.log("b is greater than a");
}
else{
    console.log("b is less than a");
    }
if (b>=a) {
    console.log("b is greater than or equal to a");
    
}
if (b<=a) {
    console.log("b is less than or equal to a");
    }
if (a>=b){
    console.log("a is greater than or equal to b");
}
if(a==b){
    console.log("a is equal to b");
}
else{
    console.log("a is not equal to b");
}
if(a===b){
    console.log("a is equal to b");
}
else{
    console.log("a is not equal to b");
}

function checkNumber(number) {
    const result = number >= 0 ? "Positive" : "Negative";
    console.log(`The number ${number} is ${result}.`);
  }
  
  // Example usage:
  checkNumber(5); // Output: The number 5 is Positive.
  checkNumber(-3); // Output: The number -3 is Negative.


  function performArithmeticOperations(a, b) {
    const sum = a + b;
    const difference = a - b;
    const product = a * b;
    const quotient = a / b;
    const remainder = a % b;
  
    console.log(`Sum: ${sum}`);
    console.log(`Difference: ${difference}`);
    console.log(`Product: ${product}`);
    console.log(`Quotient: ${quotient}`);
    console.log(`Remainder: ${remainder}`);
  }
  
  // Example usage:
  performArithmeticOperations(10, 5);

  function compareNumbers(a, b) {
    // Comparison operators
    console.log(`a == b: ${a == b}`);
    console.log(`a === b: ${a === b}`);
    console.log(`a != b: ${a != b}`);
    console.log(`a !== b: ${a !== b}`);
    console.log(`a > b: ${a > b}`);
    console.log(`a < b: ${a < b}`);
    console.log(`a >= b: ${a >= b}`);
    console.log(`a <= b: ${a <= b}`);
  
    // Logical operators
    console.log(`(a > 0) && (b < 10): ${(a > 0) && (b < 10)}`);
    console.log(`(a === 5) || (b === 5): ${(a === 5) || (b === 5)}`);
    console.log(`!(a === b): ${!(a === b)}`);
  }
  
  // Example usage
  compareNumbers(7, 3);
  
  function checkNumber(number) {
    const result = number >= 0 ? "Positive" : "Negative";
    console.log(`The number is ${result}.`);
  }
  
  // Example usage:
  checkNumber(5); // Output: The number is Positive.
  checkNumber(-3); // Output: The number is Negative.
  
  