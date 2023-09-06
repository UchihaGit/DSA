/*Find the First K Missing Positive Numbers (hard) #
Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.

Example 1:

Input: [3, -1, 4, 5, 5], k=3
Output: [1, 2, 6]
Explanation: The smallest missing positive numbers are 1, 2 and 6.
Example 2:

Input: [2, 3, 4], k=3
Output: [1, 5, 6]
Explanation: The smallest missing positive numbers are 1, 5 and 6.
Example 3:

Input: [-2, -3, 4], k=2
Output: [1, 2]
Explanation: The smallest missing positive numbers are 1 and 2. */

const func = (nums, k) => {
  let i = 0,
    missingNums = [];
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  for (i = 0; i < nums.length; i++) {
    if (missingNums.length === k) return missingNums;
    if (nums[i] !== i + 1) {
      missingNums.push(i + 1);
    }
  }
  if (missingNums.length === k) return missingNums;

  while (missingNums.length < k) {
    i++;
    missingNums.push(i);
  }
  return missingNums;
};

console.log(func([3, -1, 4, 5, 5], 3));
console.log(func([2, 3, 4], 3));
console.log(func([-2, -3, 4], 2));
