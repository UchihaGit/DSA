// Problem Statement #
// Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

//how to loop
// add and compare the sum

const maxSubArr1 = (arr, k) => {
  let start = 0,
    maxSum = 0,
    sum = 0;
  for (let index = 0; index < arr.length - 1; index++) {
    console.log(sum, arr[index], sum + arr[index]);
    sum = sum + arr[index];
    if (index >= k - 1) {
      maxSum = Math.max(maxSum, sum);
      sum = sum - arr[start];
      start++;
    }
  }
  return maxSum;
};

const maxSubArr = (arr, k) => {
  let start = 0,
    maxVal = 0,
    sum = 0,
    end = 0;
  while (arr[end]) {
    console.log("top ", sum, start, end, maxVal);

    sum = sum + arr[end]; // 13
    end = end + 1; //5
    if (end > k) {
      sum = sum - arr[start]; //10
      start = start + 1; //2
    }
    maxVal = Math.max(maxVal, sum); //10
    console.log("bottom ", sum, start, end, maxVal);
  }
  return maxVal;
};

console.log(maxSubArr([2, 3, 4, 1, 5], 3));
