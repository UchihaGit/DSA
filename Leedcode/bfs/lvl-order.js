// Problem Statement #
// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//[1,2,3,4,null,null,5]
//           1
//     2           3
// 4       3  7          5

//both are same
var levelOrder = function (root) {
  let q = [root],
    ans = [];
  while (q[0]) {
    let qlen = q.length,
      row = [];
    for (let i = 0; i < qlen; i++) {
      let curr = q.shift();
      row.push(curr.val);
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    ans.push(row);
  }
  return ans;
};

var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root],
    curResult = [],
    final = [[root.val]];
  while (queue.length) {
    let loopCount = queue.length;
    for (let i = 0; i < loopCount; i++) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
        curResult.push(current.left.val);
      }
      if (current.right) {
        queue.push(current.right);
        curResult.push(current.right.val);
      }
    }
    curResult.length && final.push(curResult);
    curResult = [];
  }
  return final;
};
