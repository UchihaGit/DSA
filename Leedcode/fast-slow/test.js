// Similar Problems #
// Problem 1: Given the head of a LinkedList with a cycle, find the length of the cycle.

class Node {
  constructor(value, next = null) {
    (this.value = value), (this.next = next);
  }
}

const findCycle = () => {
  let fast = (slow = head);
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      console.log(slow);
      return true;
      //   return findCount(slow);
    }
  }
  return false;
};

const findCountOfCycle = (slow) => {
  let current = slow,
    len = 0;
  while (true) {
    current = current.next;
    len++;
    if (current === slow) {
      return len;
    }
  }
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;

console.log(findCycle());
