/*Triplets with Smaller Sum (medium)
Given an array arr of unsorted numbers and a target sum, count all triplets in itsuch that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.
Example 1:
Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
*/

const func1 = (arr, target) => {
  arr = arr.sort((a, b) => a - b);
  let triplets = [],
    ans = 0;
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1,
      right = arr.length - 1,
      sum;
    while (left < right) {
      sum = arr[i] + arr[left] + arr[right];
      //console.log(i, arr[i], arr[left], arr[right]);
      if (sum < target) {
        console.log(ans, right, left);
        ans += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  return triplets;
};

const func = (arr, target) => {
  let start,
    end,
    count = 0,
    sum;
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    (start = i + 1), (end = arr.length - 1);
    while (start < end) {
      sum = arr[i] + arr[start] + arr[end];
      if (sum < target) {
        count += end - start;
        start++;
      } else {
        end--;
      }
    }
  }
  return count;
};

console.log(func([-1, 0, 2, 3], 3));
console.log(func([-1, 4, 2, 1, 3], 5));

//[-1, 1, 2, 3, 4]
// console.log(func([-1, 0, 2, 3], 3));
