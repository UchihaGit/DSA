// Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

const fun = (arr) => {
  let left = 0,
    right = arr.length - 1,
    squared = [],
    maxIndex = right;
  while (left <= right) {
    let lSquare = arr[left] * arr[left],
      rSquare = arr[right] * arr[right];
    if (lSquare > rSquare) {
      squared[maxIndex] = lSquare;
      left++;
    } else {
      squared[maxIndex] = rSquare;
      right--;
    }
    maxIndex--;
  }
  return squared;
};

console.log(fun([-4, -1, 0, 3, 10]));
console.log(fun([-3, -1, 0, 1, 2]));
