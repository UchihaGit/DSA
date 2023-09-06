// Given a string and a pattern, find out if the string contains any permutation of the pattern.
// Permutation is defined as the re-arranging of the characters of the string.
// For example, “abc” has the following six permutations:
// abc
// acb
// bac
// bca
// cab
// cba
// If a string has ‘n’ distinct characters it will have n!n! permutations.
// Example 1:
// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern.

let str = "abc";
let permutation = (str, result) => {
  if (str.length == 0) {
    console.log(result);
    return;
  }
  for (let i = 0; i < str.length; i++) {
    let rest = str.substring(0, i) + str.substring(i + 1);
    console.log(i, str, result, rest, result + str[i]);
    permutation(rest, result + str[i]);
  }
};
permutation(str, "");
