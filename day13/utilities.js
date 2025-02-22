// utilities.js
const PI = 3.14159;
const E = 2.71828;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        throw new Error("Division by zero is not allowed.");
    }
}

module.exports = {
    PI,
    E,
    add,
    subtract,
    multiply,
    divide
};
