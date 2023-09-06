/*Problem Statement #
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.
Example 1:
Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target. */

const fun = (arr, target) => {
  arr = arr.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1,
      right = arr.length - 1,
      sum,
      csum;
    while (left < right) {
      sum = arr[i] + arr[left] + arr[right];
      //   csum = target - sum;
      if (sum > target) right--;
      else left++;
      //   min = Math.min(min, Math.abs(csum));
      console.log(min, sum, target);
      if (Math.abs(sum - target) < Math.abs(min - target)) {
        min = sum;
      }
    }
  }
  return min;
};

console.log(fun([-2, 0, 1, 2], 2));
// console.log(fun([-3, -1, 1, 2], 1));
// console.log(fun([1, 0, 1, 1], 100));
