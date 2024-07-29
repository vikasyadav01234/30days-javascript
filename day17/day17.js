class Node1 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Example usage:
const node1 = new Node1(10);
const node2 = new Node1(20);
node1.next = node2;

console.log(node1.value); // Output: 10
console.log(node1.next.value); // Output: 20


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node to the end of the list
    addNodeToEnd(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Remove the last node from the list
    removeNodeFromEnd() {
        if (!this.head) {
            return; // Empty list
        }
        if (!this.head.next) {
            this.head = null; // Only one node in the list
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    // Display all nodes in the list
    displayNodes() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:
const myList = new LinkedList();
myList.addNodeToEnd(10);
myList.addNodeToEnd(20);
myList.addNodeToEnd(30);

myList.displayNodes(); // Output: 10, 20, 30

myList.removeNodeFromEnd();
myList.displayNodes(); // Output: 10, 20


class Stack {
    constructor() {
        this.items = [];
    }

    // Push an item onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop an item from the stack
    pop() {
        if (this.isEmpty()) {
            return 'Underflow'; // Stack is empty
        }
        return this.items.pop();
    }

    // Peek at the top item without removing it
    peek() {
        if (this.isEmpty()) {
            return null; // Stack is empty
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage:
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log(myStack.peek()); // Output: 30
console.log(myStack.pop()); // Output: 30
console.log(myStack.pop()); // Output: 20
console.log(myStack.isEmpty()); // Output: false


class Stack1 {
    constructor() {
        this.elements = [];
    }

    push(element) {
        this.elements.push(element);
    }

    pop() {
        if (this.elements.length === 0) {
            return "Underflow situation";
        }
        return this.elements.pop();
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

function reverse(str) {
    const stack = new Stack1();
    let reversedStr = "";

    for (let i = 0; i < str.length; i++) {
        stack.push(str.charAt(i));
    }

    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Example usage:
const inputString = "Hello, GFG!";
const reversedString = reverse(inputString);
console.log(reversedString); // Output: "!GFG ,olleH"



class Queue {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    enqueue(item) {
        this.items[this.backIndex] = item;
        this.backIndex++;
        return item + ' inserted';
    }

    dequeue() {
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item;
    }

    peek() {
        return this.items[this.frontIndex];
    }
}

// Example usage:
const myQueue = new Queue();
console.log(myQueue.enqueue(7)); // Output: 7 inserted
console.log(myQueue.enqueue(2)); // Output: 2 inserted
console.log(myQueue.enqueue(6)); // Output: 6 inserted
console.log(myQueue.dequeue()); // Output: 7
console.log(myQueue.peek()); // Output: 2



class Queue1 {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null; // Queue is empty
        }
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage:
const printerQueue = new Queue1();

// Add print jobs to the queue
printerQueue.enqueue("Job #1");
printerQueue.enqueue("Job #2");
printerQueue.enqueue("Job #3");

// Process print jobs in order
while (!printerQueue.isEmpty()) {
    const currentJob = printerQueue.dequeue();
    console.log(`Processing: ${currentJob}`);
}

console.log("All print jobs processed!");




class TreeNode1 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Example usage:
const root = new TreeNode1(10);
root.left = new TreeNode1(5);
root.right = new TreeNode1(15);

console.log(root.value); // Output: 10
console.log(root.left.value); // Output: 5
console.log(root.right.value); // Output: 15


class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertRecursive(this.root, newNode);
        }
    }

    // Perform in-order traversal and display nodes
    inOrderTraversal(node = this.root) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    // Helper function for recursive insertion
    _insertRecursive(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                this._insertRecursive(currentNode.left, newNode);
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                this._insertRecursive(currentNode.right, newNode);
            }
        }
    }
}

// Example usage:
const myTree1 = new BinaryTree();
myTree1.insert(5);
myTree1.insert(3);
myTree1.insert(7);
myTree1.insert(2);
myTree1.insert(4);
myTree1.insert(6);

myTree1.inOrderTraversal(); // Output: 2 3 4 5 6 7






class TreeNode2{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree2 {
    constructor() {
        this.root = null;
    }

    // Insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode2(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertRecursive(this.root, newNode);
        }
    }

    // Perform in-order traversal and display nodes
    inOrderTraversal(node = this.root) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    // Helper function for recursive insertion
    _insertRecursive(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                this._insertRecursive(currentNode.left, newNode);
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                this._insertRecursive(currentNode.right, newNode);
            }
        }
    }
}

// Example usage:
const myTree = new BinaryTree2();
myTree.insert(5);
myTree.insert(3);
myTree.insert(7);
myTree.insert(2);
myTree.insert(4);
myTree.insert(6);

myTree.inOrderTraversal(); // Output: 2 3 4 5 6 7





class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    // Perform BFS starting from a given vertex
    BFS(startVertex) {
        const visited = new Array(Object.keys(this.adjacencyList).length).fill(false);
        const queue = [];

        queue.push(startVertex);
        visited[startVertex] = true;

        while (queue.length !== 0) {
            const currentVertex = queue.shift();
            console.log(currentVertex); // Print the visited vertex

            for (const neighbor of this.adjacencyList[currentVertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

console.log('BFS traversal starting from vertex A:');
graph.BFS('A');










class Graph1 {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    // Perform BFS starting from a given vertex
    BFS(startVertex) {
        const visited = new Array(Object.keys(this.adjacencyList).length).fill(false);
        const queue = [];

        queue.push(startVertex);
        visited[startVertex] = true;

        while (queue.length !== 0) {
            const currentVertex = queue.shift();
            console.log(currentVertex); // Print the visited vertex

            for (const neighbor of this.adjacencyList[currentVertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}

// Example usage:
const graph1 = new Graph1();
graph1.addVertex('A');
graph1.addVertex('B');
graph1.addVertex('C');
graph1.addEdge('A', 'B');
graph1.addEdge('B', 'C');

console.log('BFS traversal starting from vertex A:');
graph1.BFS('A');
