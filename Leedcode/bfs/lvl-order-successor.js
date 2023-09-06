// Problem Statement #
// Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

const func = (root, lvlOrder) => {
  let queue = [root],
    condition;
  while (queue.length) {
    condition = queue.length;
    for (let i = 0; i < condition; i++) {
      const current = queue.unshift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      if (lvlOrder.val === current.val) {
        if (queue.length) {
          return queue[0].value;
        }
      }
    }
  }
  return null;
};
