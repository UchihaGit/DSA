/*Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero. 
[-3, -2, -1, 0, 1, 1, 2]
*/

/*
if (start > 0 && nums[start] === nums[start - 1]) {
    continue;
}
This line checks if the current element is the same as the previous element. If it is, the loop skips to the next iteration. This is done to avoid duplicates in the final output.

if sum is equal to zero, the current combination is added to the result array, and both the second and third pointers (i and j, respectively) are incremented and decremented, respectively, until they no longer point to the same integer as the previous one (to avoid duplicates).

*/

const fun1 = (arr) => {
  arr = arr.sort((a, b) => a - b);
  let triplets = [];
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1,
      right = arr.length - 1,
      target = -arr[i],
      sum;
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    while (left < right) {
      sum = arr[left] + arr[right];
      if (sum === target) {
        triplets.push([-target, arr[left], arr[right]]);
        while (arr[left] === arr[left + 1]) left++;
        while (arr[right] === arr[right - 1]) right--;
        left++, right--;
      } else if (sum > target) {
        right++;
      } else {
        left++;
      }
    }
  }
  return triplets;
};

const fun = (nums) => {
  nums = nums.sort((a, b) => a - b);
  console.log(nums);
};

console.log(fun([-3, 0, 1, 2, -1, 1, -2]));
console.log(fun([-5, 2, -1, -2, 3]));
console.log(fun([-2, 1, 1]));
