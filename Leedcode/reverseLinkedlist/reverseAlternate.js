/*
Reverse alternating K-element Sub-list (medium) #
Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too
*/

const reverseAlternate = (head, k) => {
  console.log(head);

  let curr = head,
    nodeListEnd,
    prevListEnd,
    i = k,
    temp,
    prev = null;
  while (curr !== null) {
    nodeListEnd = curr;
    prevListEnd = prev;
    if (i < k) {
      i++;
      prev = curr;
      curr = curr.next;
      continue;
    }
    while (curr !== null && i > 0) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
      --i;
    }
    if (prevListEnd !== null) {
      prevListEnd.next = prev;
    } else {
      head = prev;
    }
    nodeListEnd.next = curr;
  }
  return head;
};

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print() {
    console.log(this);
  }
}
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
console.log(reverseAlternate(head, 2));
