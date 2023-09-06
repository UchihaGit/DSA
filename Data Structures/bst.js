class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value > val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
  find(val) {
    if (this.root.value === val) {
      return this.root;
    }
    let currentNode = this.root;

    while (currentNode && currentNode.value !== val) {
      if (currentNode.value > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    if (currentNode === null) return undefined;
    return currentNode;
  }
  BFS() {
    let queue = [],
      value = [];
    queue.push(this.root);
    while (queue.length) {
      value.push(queue[0].value);
      if (queue[0].left) queue.push(queue[0].left);
      if (queue[0].right) queue.push(queue[0].right);
      queue.shift();
    }
    return value;
  }
  DFSpreorder() {
    let value = [];
    function traverse(node) {
      value.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return value;
  }
  DFSpostorder() {
    let value = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      value.push(node.value);
    }
    traverse(this.root);
    return value;
  }
  DFSinorder() {
    let value = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      value.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return value;
  }
}

//     10
//   5    13
// 2  7 11  16
const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree.DFSinorder());
//[10, 5, 13, 2, 7, 11, 16];
//[10, 5, 2, 7, 13, 11, 16];
//[2, 7, 5, 11, 16, 13, 10];
//[2, 5, 7, 10, 11, 13, 16];
