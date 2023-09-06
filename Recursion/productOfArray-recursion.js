// productOfArray
// Write a function called productOfArray which takes in an array of numbers
// and returns the product of them all.

//restate
//multiply all the values of the given array and return it
//inputs
//arrays, empty arrays, other than array values?

//where to declare val
// add val and arr[0]
//condition to return
//recursion call

function sumOfArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + productOfArray(arr.slice(1));
}

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3]));
