const age= 20;
const name = "vikas";
const message = `My name is ${name}.i am ${age} year old`;
const message2 = `Hello, my name is ${name}.
I am ${age} years old.
Nice to meet you!`;
console.log(message);
console.log(message2);

const a=[1,2,3,45,56,4,8];
const [first, second]=a

console.log(first,second);
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
const {title,author}= book;
console.log(title, author);

const oarray=[1,2,3,4,5,6,45];
const narray=[...oarray,[87,49,66,32]];
console.log(narray)

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

const result = sum(1, 2, 3, 4, 5);
console.log(result); // Output: 15


function product(a,b=1){
    return console.log(a*b);
}
product(2,5);
product(23);

const name1 = "Vikas";
const age2 = 25;
const hobby = "coding";

const person = {
    name1,
    age2,
    hobby,
    greet() {
        console.log(`Hello, my name is ${this.name1} and I love ${this.hobby}.`);
    },
    celebrateBirthday() {
        this.age += 1;
        console.log(`Happy Birthday! I am now ${this.age2} years old.`);
    }
};

console.log(person);
person.greet();
person.celebrateBirthday();


const propName1 = "firstName";
const propName2 = "lastName";
const propName3 = "age";

const person2 = {
    [propName1]: "Vikas",
    [propName2]: "Sharma",
    [propName3]: 25
};

console.log(person2);

