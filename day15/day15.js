function createClosure(outerVariable) {
    // Outer function takes an argument (outerVariable)
    return function innerFunction() {
      // Inner function accesses outerVariable
      console.log("Accessed outer variable:", outerVariable);
    };
  }
  
  // Create a closure with an initial value for outerVariable
  const myClosure = createClosure("Hello, world!");
  
  // Call the inner function
  myClosure();
  
  function createCounter() {
    let count = 0; // Private counter variable
  
    return {
      increment: function() {
        count++;
      },
      getCurrentValue: function() {
        return count;
      }
    };
  }
  
  // Create a counter
  const myCounter = createCounter();
  
  // Increment the counter
  myCounter.increment();
  myCounter.increment();
  
  // Get the current value
  console.log("Current value of the counter:", myCounter.getCurrentValue()); // Output: 2
  



  function createUniqueIdGenerator() {
    let lastId = 0; // Initialize the last generated ID
  
    return function generateUniqueId() {
      lastId++; // Increment the ID
      return lastId; // Return the new ID
    };
  }
  
  // Create an ID generator
  const generateId = createUniqueIdGenerator();
  
  // Generate some IDs
  console.log(generateId()); // 1
  console.log(generateId()); // 2
  console.log(generateId()); // 3
  

  function createGreeting(name) {
    // Outer function captures the user's name
    return function greetUser() {
      console.log(`Hello, ${name}! Welcome!`);
    };
  }
  
  // Create a greeting function for a user named "Alice"
  const greetAlice = createGreeting("Alice");
  
  // Call the greeting function
  greetAlice(); // Output: "Hello, Alice! Welcome!"



  function createItemManager() {
    const items = []; // Private array to store items
  
    return {
      addItem: function(item) {
        items.push(item);
      },
      removeItem: function(item) {
        const index = items.indexOf(item);
        if (index !== -1) {
          items.splice(index, 1);
        }
      },
      listItems: function() {
        return items.slice(); // Return a copy of the items array
      }
    };
  }
  
  // Create an item manager
  const myItemManager = createItemManager();
  
  // Add some items
  myItemManager.addItem("Apple");
  myItemManager.addItem("Banana");
  myItemManager.addItem("Cherry");
  
  // Remove an item
  myItemManager.removeItem("Banana");
  
  // List the remaining items
  const itemList = myItemManager.listItems();
  console.log("Items:", itemList); // Output: Items: [ 'Apple', 'Cherry' ]



  function memoize(fn) {
    let cache = {}; // Cache storage for results
  
    return function(...args) {
      const key = JSON.stringify(args); // Create a unique key based on function arguments
  
      if (key in cache) {
        console.log('Fetching from cache'); // Result already cached
        return cache[key];
      } else {
        console.log('Calculating result'); // Compute and cache the result
        const result = fn(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  // Example usage:
  function expensiveFunction(n) {
    // Simulate an expensive computation (e.g., factorial, Fibonacci, etc.)
    if (n <= 1) return 1;
    return n * expensiveFunction(n - 1);
  }
  
  const memoizedExpensiveFunction = memoize(expensiveFunction);
  
  console.log(memoizedExpensiveFunction(5)); // Calculating result, then 120
  console.log(memoizedExpensiveFunction(5)); // Fetching from cache, then 120



  function memoize(fn) {
    let cache = {}; // Cache storage for results
  
    return function(...args) {
      const key = JSON.stringify(args); // Create a unique key based on function arguments
  
      if (key in cache) {
        console.log('Fetching from cache'); // Result already cached
        return cache[key];
      } else {
        console.log('Calculating result'); // Compute and cache the result
        const result = fn(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  // Example usage:
  function expensiveFunction(n) {
    // Simulate an expensive computation (e.g., factorial, Fibonacci, etc.)
    if (n <= 1) return 1;
    return n * expensiveFunction(n - 1);
  }
  
  const memoizedExpensiveFunction1 = memoize(expensiveFunction);
  
  console.log(memoizedExpensiveFunction1(5)); // Calculating result, then 120
  console.log(memoizedExpensiveFunction1(5)); // Fetching from cache, then 120
  