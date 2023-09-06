// works but returns sliced index, we need the index in its original array
// function binary(arr, val) {
//   //   let left = 0,
//   //     right = arr.length - 1,

//   function helper(arr, val) {
//     let middle = parseInt(arr.length / 2); //5, 2
//     console.log(middle);
//     if (arr[middle] === val) return middle; //5==8 false, 8 == 8
//     else if (arr[middle] > val) {
//       //6>8 false
//       //right = middle;
//       return helper(arr.slice(0, middle), val);
//     } else if (arr[middle] < val) {
//       //6<8
//       //left = middle;
//       return helper(arr.slice(middle), val); //[6,7,8,9,10]
//     }
//   }
//   return arr.indexOf(helper(arr, val));
// }

const binary = (arr, val) => {
  //takes middle value
  //compares middle value with val and decides which part of array to compare
  //how to take the subset of the array // by taking start and end value to keep track of middle
  //what condition to set? //if middle is = val return that index
  let middle = Math.floor(arr.length / 2),
    start = 0,
    end = arr.length - 1;
  while (start !== end) {
    if (arr[middle] === val) return middle;
    else if (arr[middle] < val) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }
  return -1;
};

console.log(binary([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
