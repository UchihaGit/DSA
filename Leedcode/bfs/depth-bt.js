// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

var minDepth = function (root) {
  if (!root) return [];
  let finalResult = [],
    queue = [root],
    i = 0;
  while (queue.length) {
    i++;
    let condition = queue.length;
    for (let j = 0; j < condition; j++) {
      let current = queue.shift();
      //   currentLevel.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      if (current.left == null && current.right == null) return i;
    }
  }
  return finalResult;
};
