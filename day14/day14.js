class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Creating an instance of the class
const personInstance = new Person("Alice", 30);
const greetingMessage = personInstance.greet();
console.log(greetingMessage); // Output: "Hello, my name is Alice and I am 30 years old."

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

// Creating an instance of the class
const personInstance1 = new Person1("Alice", 30);
personInstance1.updateAge(35); // Output: "Updated age: 35"

class Person2{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person2 {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return this.studentId;
    }
}

// Creating an instance of the Student class
const studentInstance = new Student("Alice", 20, "S12345");
console.log(studentInstance.greet()); // Output: "Hello, my name is Alice and I am 20 years old."
console.log(`Student ID: ${studentInstance.getStudentId()}`); // Output: "Student ID: S12345"



class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student1 extends Person3 {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    greet() {
        return `${super.greet()} My student ID is ${this.studentId}.`;
    }
}

// Creating an instance of the Student class
const studentInstance1 = new Student1("Alice", 20, "S12345");
console.log(studentInstance1.greet()); // Output: "Hello, my name is Alice and I am 20 years old. My student ID is S12345."

class Person4{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static genericGreeting() {
        return "Hello, everyone!";
    }
}

// Calling the static method without creating an instance
console.log(Person4.genericGreeting()); // Output: "Hello, everyone!"


class Person5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student2 extends Person5 {
    static studentCount = 0; // Static property to track the number of students

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++; // Increment student count
    }

    greet() {
        return `${super.greet()} My student ID is ${this.studentId}.`;
    }
}

// Creating instances of the Student class
const student1 = new Student2("Alice", 20, "S12345");
const student2 = new Student2("Bob", 22, "S67890");

console.log(student1.greet()); // Output: "Hello, my name is Alice and I am 20 years old. My student ID is S12345."
console.log(student2.greet()); // Output: "Hello, my name is Bob and I am 22 years old. My student ID is S67890."

console.log(`Total number of students: ${Student2.studentCount}`); // Output: "Total number of students: 2"



class Person6{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Creating an instance of the Person class
const personInstance2 = new Person6("John", "Doe");
console.log(personInstance2.fullName); // Output: "John Doe"




class Person7 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Setter for firstName
    setFirstName(newFirstName) {
        this.firstName = newFirstName;
    }

    // Setter for lastName
    setLastName(newLastName) {
        this.lastName = newLastName;
    }

    // Getter for full name
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Creating an instance of the Person class
const personInstance3 = new Person7("John", "Doe");

// Updating the name using setters
personInstance3.setFirstName("Alice");
personInstance3.setLastName("Smith");

// Logging the updated full name
console.log(personInstance3.getFullName()); // Output: "Alice Smith"


class BankAccount {
    #balance; // Private field for balance

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Insufficient funds or invalid withdrawal amount.");
        }
    }
}

// Example usage
const account = new BankAccount(1000);
account.deposit(200); // Deposited $200. New balance: $1200
account.withdraw(150); // Withdrawn $150. New balance: $1050
account.withdraw(1200); // Insufficient funds or invalid withdrawal amount.



class BankAccount1{
    constructor(accountNumber, accountHolder, initialBalance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Invalid deposit amount. Please provide a positive value.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds or invalid withdrawal amount.");
        }
    }
}

// Example usage:
const myAccount = new BankAccount1("123456", "John Doe", 1000);
myAccount.deposit(200); // Deposited $200. New balance: $1200
myAccount.withdraw(500); // Withdrawn $500. New balance: $700
myAccount.withdraw(1000); // Insufficient funds or invalid withdrawal amount.
