const swap = (arr, ind1, ind2) => {
  [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
};

const selection = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }
    arr[i] !== smallest && swap(arr, i, smallest);
  }
  return arr;
};

console.log(selection([3, 6, 1, 9, 33, 23, 45, 67]));
