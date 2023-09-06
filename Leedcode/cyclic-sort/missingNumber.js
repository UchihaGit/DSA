/*
Problem Statement #
We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

Example 1:

Input: [4, 0, 3, 1]
Output: 2
Example 2:

Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7
*/

var missingNumber = function (nums) {
  let n = nums.length;
  let map = {};
  for (let item of nums) {
    map[item] = true;
  }
  console.log(map);
  for (let i = 0; i <= n; i++) {
    console.log(i in map);
    if (!(i in map)) return i;
  }
};

//solution 2 with fast implementation
var missingNumber = function (nums) {
  // construct array of size n+1, to leave a spot for the missing element.
  // Assign each val to -1 so we can see which position was not filled
  // O(n)
  const res = new Array(nums.length + 1).fill(-1);

  // "sort" the elements by assigning to the array based on val
  // O(n)
  for (const num of nums) {
    res[num] = num;
  }

  // the remaining -1 index is the missing value
  // O(n-1)
  return res.indexOf(-1);
};

//solution 3 with o(1) space
const func = (nums) => {
  let i = 0;
  while (i < nums.length) {
    let j = nums[i]; // here we are taking nums[i] as j to swap properly
    if (nums[i] < nums.length && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i = i + 1;
    }
    console.log(nums, i);
  }
  for (let idx = 0; idx <= nums.length; idx++) {
    if (!(idx === nums[idx])) return idx;
  }
};

//[0,1]

// console.log(missingNumber([3, 0, 1]));
// console.log(func([3, 0, 1]));
console.log(func([0, 1]));
