const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("This message is displayed after 2 seconds");
    }, 2000);
  });
  
  myPromise.then((message) => {
    console.log(message);
  });



  const myPromise1 = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("This is an error message after 2 seconds"));
    }, 2000);
  });
  
  myPromise1.catch((error) => {
    console.error(error.message);
  });
  
// Simulate fetching data from a server with a delay
function fetchData(data, delay) {
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log(`Fetched: ${data}`);
          resolve(data);
      }, delay);
  });
}

// Chain the promises
fetchData('Data 1', 1000)
  .then(() => fetchData('Data 2', 2000))
  .then(() => fetchData('Data 3', 1500))
  .then(() => console.log('All data fetched in order!'))
  .catch((error) => console.error('Error fetching data:', error));

  async function logResolvedValue(promise) {
    try {
        const result = await promise;
        console.log('Resolved value:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example usage:
const examplePromise = new Promise((resolve) => {
    setTimeout(() => resolve('Hello, World!'), 2000);
});

logResolvedValue(examplePromise);

async function handleRejectedPromise(promise) {
  try {
      const result = await promise;
      console.log('Resolved value:', result);
  } catch (error) {
      console.error('Error:', error.message);
  }
}

// Example usage:
const rejectedPromise = new Promise((_, reject) => {
  setTimeout(() => reject(new Error('Something went wrong!')), 2000);
});

handleRejectedPromise(rejectedPromise);

async function handleRejectedPromise(promise) {
  try {
      const result = await promise;
      console.log('Resolved value:', result);
  } catch (error) {
      console.error('Error:', error.message);
  }
}

// Example usage:
const rejectedPromise1 = new Promise((_, reject) => {
  setTimeout(() => reject(new Error('Something went wrong!')), 2000);
});

handleRejectedPromise(rejectedPromise1);

// URL of the public API
const apiUrl = 'https://api.publicapis.org/entries';

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Response data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the async function
fetchData();

// URL of the public API
const apiUrl2 = 'https://api.publicapis.org/entries';

async function fetchData() {
    try {
        const response = await fetch(apiUrl2);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Response data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the async function
fetchData();

// Simulate fetching data with a delay
function fetchData(data, delay) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(data);
      }, delay);
  });
}

// Create multiple promises
const promise1 = fetchData('Data 1', 1000);
const promise2 = fetchData('Data 2', 2000);
const promise3 = fetchData('Data 3', 1500);

// Use Promise.race to log the value of the first promise that resolves
Promise.race([promise1, promise2, promise3])
  .then((value) => {
      console.log('First resolved value:', value);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
