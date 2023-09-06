class Node {
  constructor(val) {
    (this.val = val), (this.next = null), (this.previous = null);
  }
}

class doubleLinkedList {
  constructor() {
    (this.head = null), (this.tail = null), (this.length = 0);
  }
  push(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return;
    let poppedItem = this.tail;

    if (this.length === 1) {
      this.head = this.tail = null;
      return poppedItem;
    }

    this.tail = this.tail.previous;
    this.tail.next = null;
    this.length--;

    return poppedItem;
  }

  shift() {
    if (!this.head) return;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unShift(val) {
    const node = new Node(val);
    if (!this.head) return;
    let oldHead = this.head;
    this.head = node;
    this.head.next = oldHead;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx > this.length - 1) return null;
    let counter = 0,
      node;

    if (idx > Math.floor(this.length / 2)) {
      node = this.tail;
      counter = this.length - 1;
      while (idx != counter) {
        node = node.previous;
        counter--;
      }
    } else {
      node = this.head;
      while (idx != counter) {
        node = node.next;
        counter++;
      }
    }

    return node;
  }
  set(val, idx) {
    let node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
  }
  insert(val, idx) {
    if (idx < 0 || idx > this.length) return null;
    if (idx === 1) !!this.unShift(val);
    if (idx === this.length) !!this.push(val);

    let node = new Node(val);
    let rightNode = this.get(idx);
    let leftNode = rightNode.previous;

    (leftNode.next = node), (rightNode.previous = node);
    (node.next = rightNode), (node.previous = leftNode);

    this.length++;
    return true;
  }
}
// 1<->2<->3<->4
var list = new doubleLinkedList();
list.push("HELLO");
list.push("second node");
list.push("third node");
list.push("fourth node");
list.push("fifth node");
list.push("sixth node");
console.log(list.insert("new", 6));

// console.log(list.pop());
// console.log(list.pop());
