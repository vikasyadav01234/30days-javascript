function factorial(x, result = 1) {
    // Base case: factorial of 0 or 1 is 1.
    if (x === 0 || x === 1) {
        return result;
    }
    // Recursive case: x! = x * (x-1)!
    return factorial(x - 1, x * result);
}

// Example usage: Calculate and print the factorial of 5.
console.log(factorial(5));

function fibonacci(n) {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example: Calculate and log the first few Fibonacci numbers
const nTerms = 5; // Change this to the desired number of terms
for (let i = 0; i < nTerms; i++) {
    console.log(fibonacci(i));
}

function sumArray(arr, index) {
    if (index === arr.length) {
        return 0;
    }
    return arr[index] + sumArray(arr, index + 1);
}

// Example usage: Calculate and log the sum of elements in the array [4, 8, 7, 13, 12].
const myArray = [4, 8, 7, 13, 12];
console.log("Sum is " + sumArray(myArray, 0));

function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        const [head, ...tail] = arr;
        const subMax = findMax(tail);
        return head > subMax ? head : subMax;
    }
}

// Example usage: Find the maximum in [5, 8, 3, 12, 7]
const myArray1 = [5, 8, 3, 15, 7];
console.log("Maximum value:", findMax(myArray1));


function reverseString(str) {
    if (str.length <= 1) {
        return str;
    } else {
        return str.charAt(str.length - 1) + reverseString(str.substring(0, str.length - 1));
    }
}

// Example usage: Reverse and log some test cases
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("racecar")); // Output: "racecar"


function reverseString(str) {
    if (str.length <= 1) {
        return str;
    } else {
        return str.charAt(str.length - 1) + reverseString(str.substring(0, str.length - 1));
    }
}

// Example usage: Reverse and log some test cases
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("racecar")); // Output: "racecar"


function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1; // Target not found
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        return mid; // Target found at index 'mid'
    } else if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, start, mid - 1); // Search left half
    } else {
        return binarySearchRecursive(arr, target, mid + 1, end); // Search right half
    }
}

// Example usage: Perform binary search on a sorted array
const sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetValue = 5;
const resultIndex = binarySearchRecursive(sortedArray, targetValue);

if (resultIndex !== -1) {
    console.log(`The target value ${targetValue} is found at index ${resultIndex}.`);
} else {
    console.log(`The target value ${targetValue} is not present in the array.`);
}


function countOccurrences(arr, target, index = 0) {
    // Base case: If we've reached the end of the array, return 0.
    if (index === arr.length) {
        return 0;
    }

    // Recursive case: Check if the current element matches the target.
    // If yes, add 1 to the count and move to the next index.
    const currentElement = arr[index];
    const count = currentElement === target ? 1 : 0;

    // Recurse with the next index.
    return count + countOccurrences(arr, target, index + 1);
}

// Example usage:
const myArray2 = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const targetElement = 2;

const result = countOccurrences(myArray2, targetElement);
console.log(`Occurrences of ${targetElement}: ${result}`);



class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Function to perform in-order traversal
    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.data); // Log the current node
            this.inOrderTraversal(node.right);
        }
    }
}

// Creating the tree nodes
const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

// Perform in-order traversal
tree.inOrderTraversal(tree.root);



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Calculate the maximum depth of a binary tree.
 * @param {TreeNode} root The root node of the binary tree.
 * @return {number} The depth of the tree.
 */
const maxDepth = function(root) {
    if (!root) {
        return 0; // Base case: Empty tree has depth 0
    } else {
        // Recurse on left and right subtrees
        const leftDepth = maxDepth(root.left);
        const rightDepth = maxDepth(root.right);
        // Return the maximum depth plus 1 (for the current level)
        return Math.max(leftDepth, rightDepth) + 1;
    }
};

// Example usage:
// Create a sample binary tree
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(`Depth of the binary tree: ${maxDepth(root)}`);
