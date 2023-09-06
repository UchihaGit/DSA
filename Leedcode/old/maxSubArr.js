//Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
// [2, 1, 5, 1, 3, 2] k=3 || [2, 3, 4, 1, 5] k=2

//brute force
//time : O(n*k)
//space: O(1)
// const maxSubArr = (arr, k) => {
//   let sum = 0,
//     maxVal = 0;
//   for (let i = 0; i < arr.length - k + 1; i++) {
//     sum = 0;
//     for (let j = i; j < i + k; j++) {
//       sum += arr[j];
//     }
//     maxVal = Math.max(maxVal, sum);
//   }
//   return maxVal;
// };

//optimised
const maxSubArr = (arr, k) => {
  let sum = 0,
    maxVal = 0,
    start = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    if (end >= k - 1) {
      maxVal = Math.max(sum, maxVal);
      sum -= arr[start];
      start++;
    }
  }
  return maxVal;
};
console.log(maxSubArr([2, 3, 4, 1, 5], 2));
