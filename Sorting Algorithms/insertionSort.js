const swap = (arr, ind1, ind2) => {
  [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
};

const insertion = (arr) => {
  //take second item and compare with first item. If order is wrong swap
  //then move to third item and check whether the items before it are in correct order, if not re order

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    console.log(j);
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log(insertion([3, 6, 1, 9, 33, 23, 45, 67]));
// i: 0, j: 1 -> 3 > 6
// i: 1, j: 2 -> 6 > 1 = [3,1,6, 9, 33, 23, 45, 67] [3, 6, 1, 9, 33, 23, 45, 67]
