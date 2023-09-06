// Problem Statement #
// Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

//[2, 1, 5, 2, 3, 2], S=7

const smallestSubarray = (arr, s) => {
  let n = arr.length,
    lengthOfSmallestSubarray = Infinity,
    left = 0,
    currentSum = 0;

  //brute force
  // for (let i = 0; i < n; i++) {
  //   let currentSubarraySum = 0;
  //   for (let j = i; j < n; j++) {
  //     currentSubarraySum += arr[j];

  //     if (currentSubarraySum >= s) {
  //       lengthOfSmallestSubarray = Math.min(
  //         lengthOfSmallestSubarray,
  //         j - i + 1
  //       );
  //       break;
  //     }
  //   }
  // }
  // return lengthOfSmallestSubarray == Infinity ? 0 : lengthOfSmallestSubarray;

  //optimised
  for (let i = 0; i < n; i++) {
    currentSum += arr[i];
    while (currentSum >= s) {
      lengthOfSmallestSubarray = Math.min(
        lengthOfSmallestSubarray,
        i - left + 1
      );
      currentSum = currentSum - arr[left];
      left++;
    }
  }
  return lengthOfSmallestSubarray == Infinity ? 0 : lengthOfSmallestSubarray;
};
//j - i + 1 to find the length of the sub array
console.log(smallestSubarray([2, 1, 5, 2, 3, 2], 7));
console.log(smallestSubarray([3, 4, 1, 1, 6], 8));
