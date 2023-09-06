// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.
//[2, 3, 3, 3, 6, 9, 9]

/*
The function works as follows:

Initialize two pointers, left and right, both pointing to the first element of the array.
Iterate over the array from the second element (right = 1) to the last element (right < arr.length).
If the current element is not equal to the previous element (arr[right] !== arr[right - 1]), t
then it is a unique element that has not been seen before.
Set the value of the left pointer to the value of the current element (arr[left] = arr[right]).
Increment the left pointer (left++), so that it now points to the index in the array where a unique element can be stored.
Continue iterating over the array until all elements have been checked.
Return the value of the left pointer, which represents the number of unique elements in the modified array.
*/
const fun = (arr) => {
  let left = 1;
  for (let right = 1; right < arr.length; right++) {
    if (arr[right] !== arr[right - 1]) {
      arr[left] = arr[right];
      left++;
    }
  }
  console.log(arr);
  return left;
};

console.log(fun([2, 3, 3, 3, 6, 9, 9]));
