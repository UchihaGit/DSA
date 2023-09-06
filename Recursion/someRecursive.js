// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true
// when passed to the callback. Otherwise it returns false.

//callback takes in arrayvalues and if its index has true then callback returns true
function someRecursive(arr, fun) {
  if (arr.length === 0) {
    return;
  }
  if (!callback(arr[0])) {
    return someRecursive(arr.slice(1), callback);
  }
  return true;
}

function callback(item) {
  if (item) return item;
}

console.log(someRecursive([false, false, false], callback));
