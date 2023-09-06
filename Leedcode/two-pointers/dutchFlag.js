/*Dutch National Flag Problem (medium)

Problem Statement #
Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem. 
Input: [1, 0, 2, 1, 0]
Output: [0 0 1 1 2]
*/

const fun = (arr) => {
  let low = 0,
    high = arr.length - 1,
    i = 0;

  while (i <= high) {
    if (arr[i] === 0) {
      [arr[low], arr[i]] = [arr[i], arr[low]];
      i++;
      low++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      [arr[high], arr[i]] = [arr[i], arr[high]];
      high--;
    }
  }
  return arr;
};

console.log(fun([2, 2, 0, 1, 2, 0]));
console.log(fun([1, 0, 2, 1, 0]));
