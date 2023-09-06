// Palindrome LinkedList (medium) #
// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

// Your algorithm should use constant space O(1) and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

class Node {
  constructor(value, next = null) {
    (this.value = value), (this.next = next);
  }
}

const palindrome = (head) => {
  let firstHalf = findMiddle(head);
  let reversed = reverse(firstHalf);
  console.log("head ", head);
  console.log("first ", firstHalf);
  console.log("reverse ", reversed);

  let p1 = head,
    p2 = reversed;
  while (p1 !== null && p2 !== null) {
    if (p1.value !== p2.value) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  firstHalf.next = reverse(reversed).next;
  console.log("final ", head);

  if (p1 === null || p2 === null) {
    return true;
  }
  return false;
};

const findMiddle = (head) => {
  let fast = head,
    slow = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const reverse = (head) => {
  let prev = null,
    node;
  // we store head.next as node to not lose link, then we make head's next as null for initial iteration.
  // then we store head as prev to later reverse link it
  // then we make node as head. we then repeat it.
  // we reassign head.next as node to not lose link, then we make head's next as prev. (here we link it with prev)
  // then we store head as prev to later reverse link it
  // then we make node as head. we then repeat it.
  while (head !== null) {
    node = head.next;
    head.next = prev;
    prev = head;
    head = node;
  }

  return prev;
};

//leetcode sol
var isPalindrome = function (head) {
  let slow = head,
    fast = head,
    prev,
    temp;
  while (fast && fast.next) (slow = slow.next), (fast = fast.next.next);
  (prev = slow), (slow = slow.next), (prev.next = null);
  while (slow)
    (temp = slow.next), (slow.next = prev), (prev = slow), (slow = temp);
  (fast = head), (slow = prev);
  while (slow)
    if (fast.val !== slow.val) return false;
    else (fast = fast.next), (slow = slow.next);
  return true;
};
const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);

console.log(palindrome(head));
// 2 -> 4 -> 6 -> 4 -> 2 -> null
//6 -> 4 -> 2
