// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.
// Example 1:
// Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
// Output: 6
// Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
// Example 2:
// Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
// Output: 9
// Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.

const zeroOne = (array, k) => {
  let start = 0,
    maxLen = 0,
    count = 0;
  for (let i = 0; i < array.length; i++) {
    console.log(i);
    if (array[i] == 1) {
      count += 1;
      console.log("count ", count);
    }

    if (i - start + 1 - count > k) {
      console.log("in if ", start);

      if (array[start] == 1) {
        count -= 1;
        console.log("nested if ", count);
      }
      start++;
    }
    maxLen = Math.max(maxLen, i - start + 1);
    console.log("maxLen ", maxLen);
  }
  return maxLen;
};

console.log(zeroOne([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
// console.log(zeroOne([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));
// console.log(zeroOne([1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1], 1));
