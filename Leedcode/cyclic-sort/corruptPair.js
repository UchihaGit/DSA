// Find the Corrupt Pair (easy) #
// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array originally contained all the numbers from 1 to ‘n’, but due to a data error, one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.

// Example 1:

// Input: [3, 1, 2, 5, 2]
// Output: [2, 4]
// Explanation: '2' is duplicated and '4' is missing.
// Example 2:

// Input: [3, 1, 2, 3, 6, 4]
// Output: [3, 5]
// Explanation: '3' is duplicated and '5' is missing.

/*
To solve this problem, we can use the following algorithm:

Initialize a variable called 'duplicate' to -1 and 'missing' to -1.
Loop through the array and for each number, mark its corresponding index (number - 1) as negative.
While looping through the array, if we encounter a negative number, it means that number has already been marked as visited. This means that it is a duplicate number.
After the loop, the index of the remaining positive number corresponds to the missing number. */

// the second loop works because we mark the indices corresponding to the numbers that we encounter as negative. But missing number's index will not be affected
// so it will still be positive

function findCorruptPair(nums) {
  let duplicate = -1;
  let missing = -1;
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      duplicate = Math.abs(nums[i]);
    } else {
      nums[index] *= -1;
    }
  }
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      missing = i + 1;
      break;
    }
  }
  return [duplicate, missing];
}

console.log(findCorruptPair([3, 1, 2, 5, 2]));
