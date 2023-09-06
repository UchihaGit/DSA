const swap = (arr, ind1, ind2) => {
  [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
};

const bubble = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < arr.length - 1; j++) {
      //   console.log(arr[i], arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        swap(arr, j, j + 1);
      }
    }
  }
};

bubble([5, 6, 2, 3, 7, 4]);
