// Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

// Sequence: [1, 9, 9]Output: true Explaination: The tree has a path 1 -> 9 -> 9.

// using array

// const isSequence = (root, sequence) => {
//   let currSeq = [];
//   const inner = (node, currSeq) => {
//     if (!node) return false;
//     currSeq.push(node.val);
//     if (currSeq.length > sequence.length) {
//       return false;
//     }

//     if (!node.left && !node.right && sequence.length === currSeq.length) {
//       let result = currSeq.every((item, i) => item === sequence[i]);
//       return result;
//     }
//     return inner(node.left, [...currSeq]) || inner(node.right, [...currSeq]);
//   };
//   return inner(root, currSeq);
// };

// using index
const isSequence = (root, sequence) => {
  const inner = (node, idx) => {
    if (!node || node.val !== sequence[idx]) return false;
    if (!node.left && !node.right && sequence.length === idx + 1) return true;

    return inner(node.left, idx + 1) || inner(node.right, idx + 1);
  };
  return inner(root, 0);
};

const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 8,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

console.log(isSequence(tree, [1, 3, 6]));
