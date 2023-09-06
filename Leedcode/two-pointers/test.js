// Input: [2, 3, 3, 3, 6, 9, 9];
// Output: 4;

const fun = (arr) => {
  let start = 1;
  for (let end = 1; end < arr.length; end++) {
    if (arr[end] !== arr[end - 1]) {
      arr[start] = arr[end];
      start = start + 1;
    }
  }
};
