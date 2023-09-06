// Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose
//sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.
// Example 1:
// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
// Example 2:
// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

//loop over each element
//check whether it is greater than or equal to seven.

const minSubArrayLen1 = (array, s) => {
  let sum = 0,
    left = 0,
    len = Infinity;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
    while (sum >= s) {
      len = Math.min(len, index - left + 1);
      sum = sum - array[left];
      left++;
    }
  }
  return len;
};

const minSubArrayLen = (array, s) => {
  let sum = 0,
    minVal = Infinity,
    start = 0;
  for (let end = 0; end < array.length; end++) {
    // 0,1,2,3,4
    sum = sum + array[end]; // 2,3,8,8,
    while (sum >= s) {
      minVal = Math.min(minVal, end - start + 1); //_,_,8,8,7
      sum = sum - array[start]; //_,_,6,7,2
      start++; //_,_,1,2,3
    }
  }
  return minVal;
};

console.log(8 - 2 + 1);
console.log(minSubArrayLen([2, 1, 5, 2, 3, 2], 7));
console.log(minSubArrayLen([2, 1, 5, 2, 8], 7));
