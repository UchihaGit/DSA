// Problem Statement #
// Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal
//is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
// You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree
//until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both the baskets.
// Example 1:
// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
// Example 2:
// Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
// This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

//loop
//map and keep the items

const fruitBasket1 = (trees) => {
  let maxLen = 0,
    hash = {},
    start = 0;
  for (let i = 0; i < trees.length; i++) {
    if (!hash[trees[i]]) {
      hash[trees[i]] = 0;
    }
    hash[trees[i]] += 1;
    while (Object.keys(hash).length > 2) {
      hash[trees[start]] -= 1;
      if (hash[trees[start]] == 0) {
        delete hash[trees[start]];
      }
      start++;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

const fruitBasket = (fruits) => {
  let map = {},
    start = 0,
    len = 0;
  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    if (!map[fruit]) {
      map[fruit] = 0;
    }
    map[fruit]++;
    while (Object.keys(map).length > 2) {
      let remove = fruits[start];
      map[remove]--;
      if (map[remove] == 0) {
        delete map[remove];
      }
      start++;
    }
    len = Math.max(len, i - start + 1);
  }
  return len;
};

console.log(fruitBasket([0, 1, 2, 2]));

console.log(fruitBasket(["A", "B", "C", "A", "C"]));

console.log(fruitBasket(["A", "B", "C", "B", "B", "C"]));
