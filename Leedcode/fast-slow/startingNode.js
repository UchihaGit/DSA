// Write a function findFirstLoopNode() that checks whether a given Linked List contains a loop. If the loop is present then it returns point to the first node of the loop. Else it returns NULL.

class Node {
  constructor(value, next = null) {
    (this.value = value), (this.next = next);
  }
}
//explaining the loop start math here: https://leetcode.com/problems/linked-list-cycle-ii/solutions/495311/javascript-two-pointers-w-extended-notes/?orderBy=most_votes&languageTags=javascript
const findFirstLoopNode = (head) => {
  // If list is empty or has
  // only one node without loop
  if (head == null || head.next == null) return null;

  let slow = head,
    fast = head;

  // Move slow and fast 1
  // and 2 steps ahead
  // respectively.
  slow = slow.next;
  fast = fast.next.next;

  // Search for loop using
  // slow and fast pointers
  while (fast != null && fast.next != null) {
    if (slow == fast) break;
    slow = slow.next;
    fast = fast.next.next;
  }

  // If loop does not exist
  if (slow != fast) return null;

  // If loop exists. Start slow from
  // head and fast from meeting point.
  slow = head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};

let head = new Node(3);
head.next = new Node(2);
head.next.next = new Node(0);
head.next.next.next = new Node(-4);

// Create a loop for testing
head.next.next.next.next = head.next;

console.log(findFirstLoopNode(head));
