function evenodd(num){
    if(num%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
        }
}

let a=10;
console.log(evenodd(a));

function squre(num){
    return num*num;
}
console.log(squre(a));

function maximumnumber(a,b){
    if(a>b){
        console.log(`${a} is greater then ${b}`);
    }
    else{
        console.log(`${b} is greather then ${a}`);
    }
}

let b=20;
maximumnumber(a,b);


function addstrings(fname,lname){
    return fname+' '+lname
}
fname= 'Vikas';
lname= 'Yadav';
console.log(addstrings(fname,lname));

let sumnum = (a,b)=>a+b;
console.log(sumnum(a,b));


const containsCharacter = (str, char) => str.includes(char);

// Example usage:
const myString = "Hello, World!";
const specificChar = "o";
const result = containsCharacter(myString, specificChar);
console.log(result); // true

function multiply(a, b = 1) {
    return a * b;
}

// Example usage:
console.log(multiply(5, 2)); // 10
console.log(multiply(5));    // 5 (since b defaults to 1)


function greetPerson(name, age = 30) {
    return `Hello, ${name}! You are ${age} years old.`;
}

// Example usage:
console.log(greetPerson("Alice")); // Hello, Alice! You are 30 years old.
console.log(greetPerson("Bob", 25)); // Hello, Bob! You are 25 years old.

function callFunctionNTimes(func, n) {
    for (let i = 0; i < n; i++) {
        func(); // Call the provided function
    }
}

// Example usage:
function greet() {
    console.log("Hello, world!");
}

callFunctionNTimes(greet, 3); // Calls 'greet' function 3 times

function compose(func1, func2) {
    return function(value) {
        const intermediateResult = func1(value);
        const finalResult = func2(intermediateResult);
        return finalResult;
    }
}

// Example usage:
function double(x) {
    return x * 2;
}

function addTen(x) {
    return x + 10;
}

const combinedFunction = compose(double, addTen);
const reslt = combinedFunction(5); // Apply double(addTen(5))
console.log(reslt); // Output: 20
