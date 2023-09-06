// Problem Statement #
// Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let finalResult = [],
    queue = [root],
    flag = false;
  while (queue.length) {
    let currentList = [],
      condition = queue.length;
    for (let i = 0; i < condition; i++) {
      let current = queue.shift();
      currentList.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    if (flag) {
      finalResult.push(currentList.reverse());
      flag = false;
    } else {
      finalResult.push(currentList);
      flag = true;
    }
  }
  return finalResult;
};
