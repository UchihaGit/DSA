/**
 * @param {string} s
 * @return {number}
 */
//  s     e
//a b c a b c b b
// var lengthOfLongestSubstring = function (s) {
//   var start,
//     end = 1,
//     current = 0,
//     result = 0;
//   //move search pointer forward and check whether it is repeated
//   for (end; end < s.length - 1; end++) {
//     console.log("end", end);
//     for (start = 0; start < end; start++) {
//       console.log("start", start, s[start], s[end], s[start] === s[end]);
//       if (s[start] === s[end]) {
//         start = start - 1;
//         end = end + 1;
//         //else compare with previously stored length
//         if (current > result) {
//           console.log("current ", current);
//           result = current;
//           current = 0;
//         }
//       } else {
//         //if not add it
//         current = current + 1;
//         console.log("in else current", current);
//       }
//     }
//   }
//   //return length
//   return result;
// };

const lengthOfLongestSubstring = (s) => {
  let map = {},
    start = 0,
    maxLen = 0;

  for (let end = 0; end < s.length; end++) {
    let lastChar = s[end]; // a,b
    if (map[lastChar] === undefined) {
      map[lastChar] = 0;
    }
    map[lastChar] += 1; //{a=1, b=1}
    while (map[lastChar] > 1) {
      let firstChar = s[start];
      map[firstChar] -= 1;
      start += 1;
    }
    maxLen = Math.max(maxLen, end - start + 1); //1,2
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
