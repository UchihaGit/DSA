var findKthPositive = function (arr, k) {
  let i = 0,
    missingNums = [],
    count = 1;
  while (count < arr[arr.length - 1]) {
    if (arr[i] === count) {
      i++;
    } else {
      missingNums.push(count);
      //   i++;
    }
    count++;
  }
  //   console.log(missingNums);
  if (missingNums.length >= k) return missingNums[k - 1];
  else return arr.length + k;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
