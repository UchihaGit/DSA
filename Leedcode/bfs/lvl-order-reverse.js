// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

var levelOrderBottom = function (root) {
  if (!root) return [];
  let finalResult = [],
    queue = [root];
  while (queue.length) {
    let currentLevel = [],
      condition = queue.length;
    for (let i = 0; i < condition; i++) {
      let current = queue.shift();
      currentLevel.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    finalResult.unshift(currentLevel);
  }
  return finalResult;
};
