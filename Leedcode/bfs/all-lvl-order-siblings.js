// Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.

const func = (root) => {
  let queue = [root];
  while (queue.length) {
    let current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    if (queue.length === 0) current.next = null;
    else current.next = queue[0];
  }
  return root;
};

//         1
//     2       5
// 3       4
