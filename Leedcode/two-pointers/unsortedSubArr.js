// Minimum Window Sort (medium) #
// Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.
// Example 1:
// Input: [1, 2, 5, 3, 7, 10, 9, 12]
// Output: 5
// Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted
// Example 2:
// Input: [1, 3, 2, 0, -1, 7, 10]
// Output: 5
// Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted

const fun = (arr) => {
  let low = 0,
    high = arr.length - 1;
  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) low++;

  if (low == arr.length - 1) {
    return 0;
  }

  while (high > 0 && arr[high] >= arr[high - 1]) high--;

  let min = Infinity,
    max = -Infinity;
  for (let k = low; k <= high; k++) {
    min = Math.min(min, arr[k]);
    max = Math.max(max, arr[k]);
  }

  while (low > 0 && arr[low - 1] > min) low--;
  while (high < arr.length - 1 && arr[high + 1] < max) high++;

  return high - low + 1;
};

// console.log(fun([2, 1]));
// [2, 1];
// console.log(fun([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(func([1, 3, 2, 0, -1, 7, 10])); // -1, 3
// console.log(fun([5, 2, 7, 6, 3, 8, 10]));
