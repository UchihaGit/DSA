// Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.

//  Example 1:
//  Output: 408 Explaination: The sume of all path numbers: 17 + 192 + 199

var sumNumbers = function (root) {
  if (!root) return 0;
  let num = 0;
  const traverse = (node, sum) => {
    sum += node.val;
    if (!node.left && !node.right) {
      num += +sum;
    }
    if (node.left) {
      traverse(node.left, sum);
    }
    if (node.right) {
      traverse(node.right, sum);
    }
  };
  traverse(root, "");
  return num;
};
