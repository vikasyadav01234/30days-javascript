function throwError() {
  throw new Error("This is an intentional error!");
}

try {
  throwError();
} catch (error) {
  console.error("An error occurred: ", error.message);
}

function divideNumbers(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return numerator / denominator;
}

try {
  let result = divideNumbers(10, 0); // Change the second argument to test different cases
  console.log("Result: ", result);
} catch (error) {
  console.error("An error occurred: ", error.message);
}

function executeWithError() {
  try {
    console.log("Inside try block.");
    // Intentionally throwing an error
    throw new Error("This is an intentional error.");
  } catch (error) {
    console.error("Inside catch block: ", error.message);
  } finally {
    console.log("Inside finally block.");
  }
}

executeWithError();

// Define the custom error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// Function that throws an instance of the custom error
function throwCustomError() {
  throw new CustomError("This is a custom error message.");
}

try {
  throwCustomError();
} catch (error) {
  if (error instanceof CustomError) {
    console.error("Caught a custom error: ", error.message);
  } else {
    console.error("Caught an unexpected error: ", error.message);
  }
}

// Define the custom error class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Function to validate user input
function validateInput(input) {
  if (input.trim() === "") {
    throw new ValidationError("Input cannot be empty.");
  }
  return true;
}

try {
  let userInput = ""; // Change this to test different inputs
  validateInput(userInput);
  console.log("Input is valid.");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation error: ", error.message);
  } else {
    console.error("Unexpected error: ", error.message);
  }
}

function randomPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve("Promise resolved successfully!");
    } else {
      reject(new Error("Promise rejected."));
    }
  });
}

randomPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("An error occurred: ", error.message);
  });

function randomPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve("Promise resolved successfully!");
    } else {
      reject(new Error("Promise rejected."));
    }
  });
}

randomPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("An error occurred: ", error.message);
  });

  function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve("Promise resolved successfully!");
        } else {
            reject(new Error("Promise rejected."));
        }
    });
}

async function handleRandomPromise() {
    try {
        const message = await randomPromise();
        console.log(message);
    } catch (error) {
        console.error("An error occurred: ", error.message);
    }
}

handleRandomPromise();


const invalidUrl = "https://invalid.url/api/data";

fetch(invalidUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error.message);
    });

    const fetchData = async () => {
        try {
          const response = await fetch('https://invalid-url.com/data');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Failed to fetch data:', error.message);
        }
      };
      
      fetchData();
      