// Creating the book object
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

// Logging the book object to the console
console.log(book);

console.log(book.title);
console.log(book.author);
console.log(book.year)
// Creating the book object with a method
const book1 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    }
};

// Logging the result of calling the getDetails method
console.log(book1.getDetails());

// Creating the book object with an updateYear method
const book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear;
        console.log(this);
    }
};

// Updating the year and logging the updated book object
book2.updateYear(2024);

// Creating the library object with nested book objects
const library = {
    name: "City Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        }
    ]
};

// Logging the library object to the console
console.log(library);
// Logging the name of the library
console.log("Library Name:", library.name);

// Logging the titles of all the books in the library
library.books.forEach(book => {
    console.log("Book Title:", book.title);
});


// Creating the book object with a method to get title and year
const book4 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    getTitleAndYear: function() {
        return `${this.title} (${this.year})`;
    }
};

// Logging the result of calling the getTitleAndYear method
console.log(book4.getTitleAndYear());

// Creating the duck object with some properties
const duck = {
    name: "Daffy",
    color: "black",
    age: 5,
    canFly: true
};

// Using a for...in loop to iterate over the properties of the duck object
for (let property in duck) {
    console.log(property + ": " + duck[property]);
}

// Creating the book object
const book5 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

// Logging all the keys of the book object
console.log("Keys:", Object.keys(book));

// Logging all the values of the book object
console.log("Values:", Object.values(book));