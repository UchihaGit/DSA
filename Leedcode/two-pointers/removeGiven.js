// Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.
//[3, 2, 3, 6, 3, 10, 9, 3], Key=3

const fun = (array, key) => {
  let left = 0;
  for (let right = 0; right < array.length; right++) {
    if (array[right] !== key) {
      array[left] = array[right];
      left++;
    }
  }
  return array;
};

console.log(fun([3, 2, 3, 6, 3, 10, 9, 3], 3));
console.log(fun([2, 11, 2, 2, 1], 2));
