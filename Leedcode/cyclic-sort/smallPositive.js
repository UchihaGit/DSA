/*
Find the Smallest Missing Positive Number (medium) #
Given an unsorted array containing numbers, find the smallest missing positive number in it.

Example 1:

Input: [-3, 1, 5, 4, 2]
Output: 3
Explanation: The smallest missing positive number is '3'
Example 2:

Input: [3, -2, 0, 1, 2]
Output: 4
Example 3:

Input: [3, 2, 5, 1]
Output: 4
*/

const smallPositive = (nums) => {
  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] < nums.length && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  console.log(nums);
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
};

// console.log(smallPositive([-3, 1, 5, 4, 2]));
console.log(smallPositive([3, -2, 0, 1, 2]));
// console.log(smallPositive([3, 2, 5, 1]));
