// Rearrange a LinkedList (medium) #
// Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print() {
    console.log(this);
  }
}

const findMiddle = (head) => {
  if (head == null || head.next == null) return;
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let prev = null,
    temp,
    secondHalf = slow.next; // here they are breaking the link to reverse list.
  // console.log(slow);
  slow.next = null;
  // console.log(slow);

  while (secondHalf) {
    // console.log(secondHalf, temp, secondHalf.next, prev);
    temp = secondHalf.next;
    secondHalf.next = prev;
    prev = secondHalf;
    secondHalf = temp;
  }
  // console.log(prev);
  while (head !== null && prev !== null) {
    temp = head.next;
    head.next = prev;
    head = temp;

    temp = prev.next;
    prev.next = head;
    prev = temp;
  }
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

findMiddle(head);

// head.print();
// console.log(head.next.next);
