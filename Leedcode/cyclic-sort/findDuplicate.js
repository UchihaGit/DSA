/*
Problem Statement #
We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

Example 1:

Input: [1, 4, 4, 3, 2]
Output: 4
Example 2:

Input: [2, 1, 3, 3, 5, 4]
Output: 3
Example 3:

Input: [2, 4, 1, 4, 4]
Output: 4
*/
//arr modified
const func = (nums) => {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      let j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
        return nums[i];
      }
    } else {
      i++;
    }
    // console.log(nums, i);
  }
  return nums;
};

console.log(func([1, 4, 4, 3, 2]));
console.log(func([2, 1, 3, 3, 5, 4]));

// below o(1) solution plus not modifying the original arr
// using fast and slow pointer as there is cycle in the array. we r using same techinque as in finding the start of loop in a linkedlist.

const func1 = (nums) => {
  let slow = 0,
    fast = 0,
    start = 0;
  slow = nums[slow];
  fast = nums[nums[fast]];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  while (start !== slow) {
    slow = nums[slow];
    start = nums[start];
  }
  return start;
};

console.log(func1([1, 4, 4, 3, 2]));
console.log(func1([2, 1, 3, 3, 5, 4]));
console.log(func1([2, 4, 1, 4, 4]));
