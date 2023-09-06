// Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.

var connect = function (root) {
  if (!root) return root;
  let queue = [root],
    condition;
  while (queue.length) {
    condition = queue.length;
    for (let i = 0; i < condition; i++) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      if (i === condition - 1) current.next = null;
      else current.next = queue[0];
    }
  }
  return root;
};
