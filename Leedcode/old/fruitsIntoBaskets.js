// Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both the baskets.
//['A', 'B', 'C', 'A', 'C'] ['C', 'A', 'C'], ['A', 'B', 'C', 'B', 'B', 'C'] ['B', 'C', 'B', 'B', 'C']
const fruitsIntoBasket = (arr) => {
  //can only store two types of fruit, find the starting point
  //use map to store the occurence of trees
  let map = {},
    start = 0,
    maxLen = 0;
  for (let end = 0; end < arr.length; end++) {
    let rightChar = arr[end];
    if (map[rightChar] === undefined) {
      map[rightChar] = 0;
    }
    map[rightChar] += 1;
    while (Object.keys(map).length > 2) {
      let leftChar = arr[start];
      map[leftChar] -= 1;
      if (map[leftChar] === 0) {
        delete map[leftChar];
        start += 1;
      }
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return map;
};

console.log(fruitsIntoBasket(["A", "B", "C", "A", "C"]));
