/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let start,
    end,
    result = [],
    sum;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      (start = j + 1), (end = nums.length - 1);
      while (start < end) {
        sum = nums[i] + nums[j] + nums[start] + nums[end];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[start], nums[end]]);
          while (nums[start] === nums[start + 1]) start++;
          while (nums[end] === nums[end - 1]) end--;
          start++, end--;
        } else if (sum > target) {
          end--;
        } else {
          start++;
        }
      }
    }
  }
  return result;
};

//[-2,-1,0,0,1,2]
//  i      j s e
/*
    Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
*/
