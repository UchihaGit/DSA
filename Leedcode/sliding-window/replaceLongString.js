// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter,
//find the length of the longest substring having the same letters after replacement.
// Example 1:
// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
// Example 2:
// Input: String="abbcb", k=1
// Output: 4
// Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
// Example 3:
// Input: String="abccde", k=1
// Output: 3
// Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

//explanation
// in the sliding window we are finding the max repeting char and subtracting it with the window length to get how many
//non-same letters exists. Then check whether those non-same letters are below k.

const lenOfLongestSubStr = (str, k) => {
  let maxLen = 0,
    hash = {},
    maxRepeatChar = 0,
    start = 0;
  for (let i = 0; i < str.length; i++) {
    if (!hash[str[i]]) {
      hash[str[i]] = 0;
    }
    hash[str[i]] += 1;
    maxRepeatChar = Math.max(maxRepeatChar, hash[str[i]]);
    console.log("max repeat char ", maxRepeatChar);
    if (i - start + 1 - maxRepeatChar > k) {
      hash[str[start]] -= 1;
      start++;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

console.log(lenOfLongestSubStr("aabccbb", 2));
console.log(lenOfLongestSubStr("abbcb", 1));
console.log(lenOfLongestSubStr("abccde", 1));
