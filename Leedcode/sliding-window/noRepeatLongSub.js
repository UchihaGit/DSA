// Given a string, find the length of the longest substring which has no repeating characters.
// Example 1:
// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring without any repeating characters is "abc".
// Example 2:
// Input: String="abbbb"
// Output: 2
// Explanation: The longest substring without any repeating characters is "ab".

const longSubStr = (str) => {
  let maxLen = 0,
    hash = {},
    start = 0;
  for (let i = 0; i < str.length; i++) {
    if (!hash[str[i]]) {
      hash[str[i]] = 0;
    }
    hash[str[i]] += 1;
    while (hash[str[i]] > 1) {
      hash[str[start]] -= 1;
      if (hash[str[start]] == 0) {
        delete hash[str[start]];
      }
      start++;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

//approach
//normal for and while inside will work but there is even more optimised solution. We can keep track of repeated char in start
//for every loop every loop

const longSubStr1 = (str) => {
  let maxLen = 0,
    hash = {},
    start = 0;
  for (let i = 0; i < str.length; i++) {
    const right = str[i]; //a,a, b, c, c
    if (right in hash) {
      start = Math.max(start, hash[right] + 1); //1
    }
    hash[right] = i; // {a:1, b:2, c:3}
    maxLen = Math.max(maxLen, i - start + 1); //1, 1, 2, 3
  }
  return maxLen;
};

console.log(longSubStr("aabccbb"));
console.log(longSubStr("abbbb"));
console.log(longSubStr("aaaaaaaaaaabbbbbbbbbqwerty"));
console.log(longSubStr("abccde"));
