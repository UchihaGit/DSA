/*
Problem Statement #
We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

Write a function to sort the objects in-place on their creation sequence number in O(n) and without any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

Example 1:

Input: [3, 1, 5, 4, 2] => [1,2,3,4,5] num[i] = 3, num[j] = 5
Output: [1, 2, 3, 4, 5]
Example 2:

Input: [2, 6, 4, 3, 1, 5]
Output: [1, 2, 3, 4, 5, 6]
Example 3:

Input: [1, 5, 6, 4, 3, 2]
Output: [1, 2, 3, 4, 5, 6]*/

//here nums[i] -1 is here cause it gives us the index the value should be in and the items are between 1-n.
// in case of 0-n items it will be n[i] as 0 - 1 will give us an invali index.

const func = (nums) => {
  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i += 1;
    }
    console.log(nums);
  }
  return nums;
};

console.log(func([3, 1, 5, 4, 2]));
// console.log(func([2, 6, 4, 3, 1, 5]));
// console.log(func([1, 5, 6, 4, 3, 2]));
