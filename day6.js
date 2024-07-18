const a=[1,2,3,4,5];
console.log(a);
console.log(a[0]);
console.log(a[4])
console.log(a.push(6));
console.log(a);
a.pop();
console.log(a);
a.shift()
console.log(a);
a.unshift(1);

console.log(a);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15


for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(num => console.log(num));
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);


// Accessing the element at row 1, column 2 (0-based index)
const element = matrix[1][2];
console.log(element);
