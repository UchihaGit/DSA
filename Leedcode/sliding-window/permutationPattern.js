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

//this sliding window concept is used for permutation. the perm of pattern inside the str should be of length of the pattern.
//so window size is pattern. We create a map to hold the pattern's frequency. when ever a item from window matches with the frequency and frequency[item]
//becomes 0 then one item in the window is matched. when the current window is about to be moved and we still have not found the perm then we increment
// left, and reset the matched and frequency.

//only when frequency[item] === 0, item frequency matches with pattern frequency. thats y we increment match after that

//if matched and keys of the frequency are same then perm exists in str

const permutation1 = (str, pattern) => {
  let frequency = {},
    matched = 0,
    start = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (!frequency[pattern[i]]) {
      frequency[pattern[i]] = 0;
    }
    frequency[pattern[i]] += 1;
  }
  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i];
    if (rightChar in frequency) {
      frequency[rightChar] -= 1;
      if (frequency[rightChar] === 0) {
        matched++;
      }
    }
    if (matched === Object.keys(frequency).length) {
      return true;
    }
    if (i >= pattern.length - 1) {
      let leftChar = str[start];
      start++;
      if (leftChar in frequency) {
        if (frequency[leftChar] === 0) {
          matched--;
        }
        frequency[leftChar]++;
      }
    }
  }
  return false;
};

const permutation = (str, pattern) => {
  let frequency = {},
    start = 0,
    matched = 0;
  for (const char in pattern) {
    frequency[pattern[char]] = (frequency[pattern[char]] || 0) + 1;
  }
  console.log(frequency);
  for (let end = 0; end < str.length; end++) {
    const element = str[end];
    console.log("element ", element);

    if (element in frequency) {
      console.log("element in frequency ", frequency[element]);

      frequency[element]--;
      console.log("element in frequency ", frequency[element]);

      if (frequency[element] === 0) {
        matched++;
      }
      console.log("matched ", matched);
    }

    if (matched === Object.keys(frequency).length) {
      return true;
    }

    if (end >= pattern.length - 1) {
      let left = str[start];
      console.log("left ", left);
      if (left in frequency) {
        console.log("left in frequency ", frequency[left]++);

        console.log("left in frequency ", frequency[left]++);

        if (frequency[left] == 0) {
          matched--;
        }
        frequency[left]++;

        start++;
      }
    }
  }
  return false;
};

// console.log(permutation("oidbcaf", "abc"));
console.log(permutation("odicf", "dc"));
// console.log(permutation("bcdxabcdy", "bcdyabcdx"));
// console.log(permutation("aaacb", "abc"));
