//multiple pointers

function uniqueValues(arr) {
  if (arr.length === 0) return 0;
  let left = 0;
  let right = 1;
  while (right <= arr.length - 1) {
    if (arr[left] == arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
      right++;
    }
  }
  return left + 1;
}

// console.log(uniqueValues([1, 1, 1, 2, 2, 3, 4, 4, 5, 6, 8, 9, 9]));
console.log(uniqueValues([-2, -1, -1, 0, 1]));
