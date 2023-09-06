/*Smallest Window containing Substring (hard) #
Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.
Example 1:
Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"
Example 2:
Input: String="abdabca", Pattern="abc"
Output: "abc"
Explanation: The smallest substring having all characters of the pattern is "abc".
Example 3:
Input: String="adcad", Pattern="abc"
Output: ""
Explanation: No substring in the given string has all characters of the pattern.*/

//same logic as previous hard one but one doubt. why math.min(maxlen, end - start + 1) not working????

const fun = (str, pattern) => {
  let map = {},
    minlength = str.length + 1,
    matched = 0,
    start = 0,
    substrStart = 0;

  for (let i = 0; i < pattern.length; i++) {
    const element = pattern[i];
    if (!(element in map)) {
      map[element] = 0;
    }
    map[element]++;
  }

  for (let end = 0; end < str.length; end++) {
    const element = str[end];
    if (element in map) {
      map[element]--;
      //here it is >= not === because for datas like str=aa, pattern=aa, '===' will not work.
      if (map[element] >= 0) {
        matched++;
      }
    }

    while (matched === pattern.length) {
      //why math.min(maxlen, end - start + 1) not working????
      if (minlength > end - start + 1) {
        minlength = end - start + 1;
        substrStart = start;
      }

      let leftChar = str[start];
      start++;
      if (leftChar in map) {
        if (map[leftChar] === 0) matched--;
        map[leftChar]++;
      }
    }
  }
  if (minlength > str.length) {
    return "";
  }
  console.log(substrStart, minlength, substrStart + minlength);
  return str.substring(substrStart, substrStart + minlength);
};

console.log(fun("aabcdec", "abc"));
console.log(fun("ababcc", "abc"));
console.log(fun("abdabca", "abc"));
console.log(fun("adcad", "abc"));
console.log(fun("his is a test string", "tist"));
console.log(fun("ADOBECODEBANC", "ABC"));
console.log(fun("aa", "aa"));
