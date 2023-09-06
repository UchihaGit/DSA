var reverseBetween = function (head, m, n) {
  let start = head,
    cur = head;
  let i = 1;
  while (i < m) {
    start = cur;
    cur = cur.next;
    i++;
  }
  let prev = null,
    tail = cur;
  while (i <= n) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    i++;
  }
  console.log(start, tail, prev, cur);
  start.next = prev;
  tail.next = cur;
  return m == 1 ? prev : head;
  // if m == 1, we have no need to connect start list with reversed list reversed list itself is the start (or the head)
  // Time Complexity: O(n)
  // Space Complexity: O(1)
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
//   head.next.next.next.next.next = new Node(6);
reverseBetween(head, 2, 4);
// console.log(reverseBetween(head, 2, 4));
