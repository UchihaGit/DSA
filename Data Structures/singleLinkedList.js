class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unShift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
      return newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this.head;
  }
  get(ind) {
    if (ind < 0 || ind > this.length) return null;
    let node = this.head;
    let counter = 0;
    while (counter !== ind) {
      node = node.next;
      counter++;
    }
    return node;
  }
  set(ind, newVal) {
    let value = this.get(ind);
    if (!value) return false;
    value.val = newVal;
    return true;
  }
  insert(ind, newVal) {
    if (ind < 0 || ind > this.length) {
      return false;
    }
    if (ind === this.length) {
      return !!this.push(newVal);
    }
    if (ind === 0) {
      return !!this.unShift(newVal);
    }
    let leftNode = this.get(ind - 1);
    let rightNode = leftNode.next;
    console.log("left ", leftNode, "right ", rightNode);
    let newNode = new Node(newVal);
    leftNode.next = newNode;
    newNode.next = rightNode;
    this.length++;
    return true;
  }
  remove(ind) {
    if (ind < 0 || ind > this.length) return null;
    if (ind === this.length - 1) return this.pop(ind);
    if (ind === 0) return this.shift(ind);
    let leftNode = this.get(ind - 1);
    let rightNode = leftNode.next;
    leftNode.next = rightNode.next;
    this.length--;
    return rightNode;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.push("<3");
list.push("!!!");

console.log(list.reverse());
console.log(list);
