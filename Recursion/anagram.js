const { performance } = require("perf_hooks");

//mine
// function anagram(str1, str2) {
//   //check if length of both strings are same
//   if (str1.length !== str2.length) {
//     return;
//   }
//   //create objects of no of letters appearing in the string
//   var strObj1 = {};
//   var strObj2 = {};
//   for (var val of str1) {
//     strObj1[val] = (strObj1[val] || 0) + 1;
//   }
//   for (var val of str2) {
//     strObj2[val] = (strObj2[val] || 0) + 1;
//   }
//   //loop over one object and check the value of another object
//   for (var key in strObj1) {
//     if (strObj1[key] === strObj2[key]) {
//       return true;
//     }
//     return false;
//   }
// }

// console.log(anagram("iceman", "cinema"));

// //colt
function anagram(str1, str2) {
  //check if length of both strings are same
  if (str1.length !== str2.length) {
    return;
  }
  //create objects of no of letters appearing in the string
  var strObj1 = {};
  for (var val of str1) {
    strObj1[val] = (strObj1[val] || 0) + 1;
  }

  for (var key of str2) {
    if (!strObj1[key]) {
      return false;
    } else {
      strObj1[key] -= 1;
    }
  }
  return true;
}
// // {i: 1, c: 0, e: 1, m:1, a:1, n:1}
// console.log(anagram("iceman", "cinema"));

// function anagram(str1, str2) {
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// console.log(anagram("iceman", "cinema"));
//tedst

var t0 = performance.now();
anagram(
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
);
var t1 = performance.now();
console.log("Took", (t1 - t0).toFixed(4), "milliseconds to generate:");
