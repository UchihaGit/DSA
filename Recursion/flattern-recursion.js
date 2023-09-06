// flatten
// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.
let newArr = [];
// function flattern(arr) {
//   //console.log(arr.length === 0, newArr);
//   if (arr.length === 0) return newArr;
//   if (Array.isArray(arr[0])) {
//     console.log("if ", arr[0]);
//     newArr = newArr.concat(flattern(arr[0]));
//     console.log(newArr);
//   } else if (arr[0] !== undefined) {
//     console.log("else ", arr[0]);
//     newArr.push(arr[0]);
//   }
//   flattern(arr.slice(1));
//   //console.log(newArr);
//   return newArr;
// }

function flatternLoop(arr) {
  arr.forEach((item) =>
    Array.isArray(item) ? flatternLoop(item) : newArr.push(item)
  );
  return newArr;
}

console.log(flattern([0, 1, [1, 2], [1, [1, 2]]]));
