class Node {
  constructor(value, next = null) {
    (this.value = value), (this.next = next);
  }
}

//old
// var middleNode = function (head) {
//   let current = head,
//     length = 1;
//   while (current.next !== null) {
//     current = current.next;
//     length++;
//   }
//   let middle = head;
//   let i = length % 2 === 0 ? 0 : 1;
//   for (i; i < Math.ceil(length / 2); i++) {
//     middle = middle.next;
//   }
//   return middle;
// };

//using algo - much much smoother :)
var middleNode = function (head) {
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);

console.log(middleNode(head));
