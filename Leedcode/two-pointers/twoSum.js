//Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
//[1, 2, 3, 4, 6], target=6
const fun1 = (arr, target) => {
  let start = 0,
    end = arr.length - 1;
  while (arr[start] + arr[end] !== target) {
    if (arr[start] + arr[end] > target) {
      end--;
    } else if (arr[start] + arr[end] < target) {
      start++;
    }
  }
  return [start, end];
};

const fun = (arr, target) => {
  let start = 0,
    end = arr.length - 1,
    sum = 0;
  while (sum != target) {
    sum = arr[start] + arr[end];
    if (sum > target) {
      end--;
    } else if (target > sum) {
      start++;
    }
  }
  return [start, end];
};

console.log(fun([1, 2, 3, 4, 6], 6));
console.log(fun([2, 5, 9, 11], 11));
