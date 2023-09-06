// Cycle in a Circular Array (hard) #
// We are given an array containing positive and negative numbers. Suppose the array contains a number ‘M’ at a particular index. Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices. You should assume that the array is circular which means two things:

// If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement.
// If, while moving backward, we reach the beginning of the array, we will jump to the last element to continue the movement.
// Write a method to determine if the array has a cycle. The cycle should have more than one element and should follow one direction which means the cycle should not contain both forward and backward movements.
// Input: [1, 2, -1, 2, 2]
// Output: true
// Explanation: The array has a cycle among indices: 0 -> 1 -> 3 -> 0
// Example 2:

// Input: [2, 2, -1, 2]
// Output: true
// Explanation: The array has a cycle among indices: 1 -> 3 -> 1
// Example 3:

// Input: [2, 1, -1, -2]
// Output: false
// Explanation: The array does not have any cycle.

//EXPLANATION FOR MATH PART : https://www.youtube.com/watch?v=2hVinjU-5SA

const findCycle = (array) => {
  for (let i = 0; i < array.length; i++) {
    const isForward = array[i] >= 0;
    let fast = (slow = i);
    while (true) {
      slow = findNextIndex(isForward, array, slow);
      fast = findNextIndex(isForward, array, fast);
      if (fast !== -1) {
        fast = findNextIndex(isForward, array, fast);
      }
      if (fast === -1 || slow === -1 || fast === slow) {
        break;
      }
    }
    if (slow !== -1 && slow === fast) {
      return true;
    }
  }
  return false;
};

const findNextIndex = (isForward, array, i) => {
  let direction = array[i] >= 0;

  if (direction !== isForward) {
    return -1;
  }
  //we use below formula to go to the next index of the cycle
  let nextIndex = (i + array[i]) % array.length;
  if (nextIndex < 0) {
    nextIndex += array.length;
  }

  if (nextIndex === i) {
    return -1;
  }

  return nextIndex;
};

console.log(findCycle([1, 2, -1, 2, 2]));
console.log(findCycle([2, 2, -1, 2]));
console.log(findCycle([2, 1, -1, -2]));
