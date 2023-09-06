class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// const rotateLinkedList = (head, k) => {
//   if (!head || k === 0) {
//     return head;
//   }

//   // Calculate the length of the linked list
//   let length = 0;
//   let current = head;
//   while (current) {
//     current = current.next;
//     length++;
//   }

//   // Adjust 'k' to be within the length of the linked list
//   k = k % length;

//   if (k === 0) {
//     return head;
//   }

//   // Find the new tail and the previous node of the new head
//   let newTail = head;
//   let prevNewHead = null;
//   for (let i = 0; i < length - k - 1; i++) {
//     newTail = newTail.next;
//   }

//   prevNewHead = newTail; //3
//   console.log(prevNewHead);
//   newTail = newTail.next; //4

//   // Connect the new tail to the original head to complete the rotation
//   prevNewHead.next = null; //3.next = null
//   current = newTail; // 4
//   while (current.next) {
//     current = current.next; //5
//   }
//   current.next = head; // 5.next = 1

//   return newTail;
// };

// // Test the implementation with an example
// // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// const k = 2;
// const rotatedHead = rotateLinkedList(head, k);

// // Print the rotated linked list: 4 -> 5 -> 1 -> 2 -> 3
// let current = rotatedHead;
// while (current) {
//   console.log(current.val);
//   current = current.next;
// }

const func = (head) => {
  let curr = head;
  curr.next = null;
  return head;
};

console.log(func(head));
