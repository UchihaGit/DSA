// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

// A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children

var pathSum = function (root, targetSum) {
  if (!root) return [];
  let result = [];
  const traverse = (node, sum, current = []) => {
    sum += node.val;
    current.push(node.val);
    console.log("outside ", current, root);

    if (!node.left && !node.right && sum === targetSum) {
      result.push([...current]);
    }

    if (node.left) {
      traverse(node.left, sum, [...current]);
    }
    if (node.right) {
      console.log(current, root);
      traverse(node.right, sum, [...current]);
    }
  };

  traverse(root, 0);
  return result;
};
