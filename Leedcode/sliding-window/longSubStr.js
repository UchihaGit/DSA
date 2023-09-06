// Problem Statement #
// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// Example 1:
// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".
// Example 2:
// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".

const longSubStr1 = (str, k) => {
  let obj = {},
    start = 0,
    len = 0;
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 0;
    }
    obj[str[i]]++;
    while (Object.keys(obj).length > k) {
      console.log(obj);
      obj[str[start]] -= 1;
      if (obj[str[start]] == 0) {
        delete obj[str[start]];
      }
      start++;
    }
    len = Math.max(len, i - start + 1);
  }
  return len;
};

const longSubStr = (str, k) => {
  let start = 0,
    len = 0,
    map = {};
  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] += 1;
    }
    // console.log(Object.keys());
    while (Object.keys(map).length > k) {
      let remove = str[start];
      start++;
      map[remove]--;
      if (map[remove] == 0) {
        delete map[remove];
      }
    }
    len = Math.max(len, end - start + 1);
  }
  return len;
};
console.log(longSubStr("araaci", 1));
console.log(longSubStr("araaci", 2));
