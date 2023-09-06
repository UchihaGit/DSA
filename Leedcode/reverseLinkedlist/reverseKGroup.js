/*
Problem Statement #
Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
*/

var reverseKGroup = function (head, k) {
  if (k <= 1 || head === null) {
    return head;
  }
  let curr = head,
    prev = null;
  while (true) {
    let prevSublistTail = prev;
    let sublistStart = curr;
    for (let i = 0; i < k && curr !== null; i++) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    if (prevSublistTail !== null) {
      prevSublistTail.next = prev;
    } else {
      head = prev;
    }
    sublistStart.next = curr;
    prev = sublistStart;

    if (curr === null) {
      break;
    }
  }
  return head;
};

/*Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed. */

const reverseKSublist = (head, k) => {
  if (!head || k <= 1) {
    return head;
  }

  let prev = null;
  let curr = head;
  let count = 0;
  while (curr) {
    count++;
    curr = curr.next;
  }

  if (count < k) {
    return head;
  }

  prev = null;
  curr = head;
  let next = null;
  let sublistEnd = null;
  let newSublistStart = null;

  while (count >= k) {
    sublistEnd = curr;
    for (let i = 0; i < k; i++) {
      next = curr.next;
      curr.next = newSublistStart;
      newSublistStart = curr;
      curr = next;
    }

    if (prev) {
      prev.next = newSublistStart;
    } else {
      head = newSublistStart;
    }

    sublistEnd.next = curr;
    prev = sublistEnd;
    newSublistStart = null;
    count -= k;
  }

  return head;
};
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
console.log(reverseKGroup(head, 2));
