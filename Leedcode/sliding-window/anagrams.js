// String Anagrams (hard) #
// Given a string and a pattern, find all anagrams of the pattern in the given string.
// Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

// Example 1:

// Input: String="ppqp", Pattern="pq"
// Output: [1, 2]
// Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
// Example 2:

// Input: String="abbcabc", Pattern="abc"
// Output: [2, 3, 4]
// Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

// const anagrams = (str, pattern) => {
//   let frequency = {},
//     matched = 0,
//     start = 0;
//   const indecies = [];
//   for (let i = 0; i < pattern.length; i++) {
//     let char = pattern[i];
//     if (!(char in frequency)) {
//       frequency[char] = 0;
//     }
//     frequency[char] += 1;
//   }
//   for (let end = 0; end < str.length; end++) {
//     let rightChar = str[end];
//     if (rightChar in frequency) {
//       frequency[rightChar] -= 1;
//       if (frequency[rightChar] === 0) {
//         matched += 1;
//       }
//     }
//     if (matched === Object.keys(frequency).length) {
//       indecies.push(end);
//     }
//     if (end >= pattern.length - 1) {
//       let leftChar = str[start];
//       start += 1;
//       if (leftChar in frequency) {
//         if (frequency[leftChar] === 0) {
//           matched -= 1;
//         }
//         frequency[leftChar] += 1;
//       }
//     }
//   }
//   return indecies;
// };

// ANSWER 2
var findAnagrams = function (s, p) {
  const isSame = (arr1, arr2) =>
    arr1.every((value, index) => value === arr2[index]);

  let pHash = new Array(26).fill(0);
  let sHash = new Array(26).fill(0);
  let ans = [];
  if (s.length < p.length) return [];
  let windowSize = p.length;
  for (let i = 0; i < windowSize; i++) {
    //console.log("a".charCodeAt(), p[i].charCodeAt(), s[i].charCodeAt());
    pHash[p[i].charCodeAt() - "a".charCodeAt()]++;
    sHash[s[i].charCodeAt() - "a".charCodeAt()]++;
  }
  console.log(pHash, sHash);
  if (isSame(pHash, sHash)) ans.push(0);
  for (let l = windowSize; l < s.length; l++) {
    sHash[s[l].charCodeAt() - "a".charCodeAt()]++;
    console.log(sHash);
    sHash[s[l - windowSize].charCodeAt() - "a".charCodeAt()]--;
    console.log(sHash);
    if (isSame(pHash, sHash)) ans.push(l - windowSize + 1);
    console.log(l - windowSize + 1);
  }
  return ans;
};
// ppqp;
// const anagrams = (str, pattern) => {
//   return str.includes(pattern.split("").sort().join(""));
// };

// BRUTE FORCE ANSWER
// function search(pat, txt) {
//   /*finding lengths of strings pat and txt*/
//   let n = txt.length,
//     m = pat.length;
//   /*string sortedpat stores the sorted version of pat*/
//   let sortedpat = pat;
//   sortedpat = sortedpat.split("").sort().join("");
//   console.log(sortedpat);
//   /*temp for storing the substring of length equal to
//    * pat*/
//   let temp;
//   for (let i = 0; i <= n - m; i++) {
//     temp = "";
//     for (let k = i; k < m + i; k++) temp += txt[k];
//     temp = temp.split("").sort().join("");
//     /*checking whether sorted versions are equal or
//      * not*/
//     if (sortedpat == temp) console.log("Found at Index ", i, "</br>");
//   }
// }

// driver code

// let txt = "abbcabccba";
// let pat = "bca";
// search(pat, txt);

// console.log(anagrams("ppqp", "pq"));
// console.log(anagrams("abbcabccba", "abc"));

console.log(findAnagrams("ppqp", "pq"));
console.log(findAnagrams("abbcabc", "abc"));
