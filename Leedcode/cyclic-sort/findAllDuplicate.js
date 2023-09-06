/*
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
Example 2:

Input: nums = [1,1,2]
Output: [1]
Example 3:

Input: nums = [1]
Output: []
*/

//this uses other items in the array and makes them negative.
// we visit the duplicate then again we could access the same other index
/**
 *
 * Keys:
 *  - Notice that any value x is: 1 <= x <= n and the indices of the array
 * are from 0 to n - 1. We're not allowed to use extra space (except the result)
 * so in this case we can use the array as its own hash table.
 *  - Traverse the array, at any given number, go to the index = number - 1
 * and flip that value to negative. number - 1 because number can be n and end
 * index is n - 1 => we don't want to go out of bound. The same for index 0.
 * Time = O(n) where n is the length of the input array because we only
 * traverse it one time and all other operations take constant time.
 * Space = O(1) NOTE: if we don't count the returned result. In fact,
 * space = O(n) because we might have to store at most O(n/2) elements => remove
 * constant = O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const duplicates = [];

  for (const currentNum of nums) {
    // Get the index that currentNum points to:
    // Note: we have to use Math.abs because the currentNum
    // could have been flipped:
    const otherIndex = Math.abs(currentNum) - 1;

    // If the number at otherIndex > 0 (hasn't been flipped):
    if (nums[otherIndex] > 0) {
      // Flip it to negative to mark that we've visited it:
      nums[otherIndex] = nums[otherIndex] * -1;
    }
    // If the number at otherIndex < 0 (has been flipped):
    else {
      // We know that we've visited this currentNum before because
      // it leads us to the same number.
      duplicates.push(Math.abs(currentNum));
    }
    console.log(nums);
  }
  return duplicates;
};

const func = (nums) => {
  let i = 0,
    result = [];
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  console.log(nums);
  for (i = 0; i < nums.length; i++) {
    // not equal here as other items will be sorted and non sorted items (duplicates) wont match i+1 == nums[i]
    if (nums[i] !== i + 1) result.push(nums[i]);
  }
  return result;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(findDuplicates([1, 1, 2]));
// console.log(findDuplicates([1]));
