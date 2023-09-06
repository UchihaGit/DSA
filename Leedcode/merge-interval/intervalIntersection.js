/*
Problem Statement #
Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

Example 1:

Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
Output: [2, 3], [5, 6], [7, 7]
Explanation: The output list contains the common intervals between the two lists.
Example 2:

Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
Output: [5, 7], [9, 10]
Explanation: The output list contains the common intervals between the two lists.

*/

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */

//secondary solution
// var intervalIntersection = function (A, B) {
//   let Ai = 0,
//     Bi = 0;
//   let res = [];

//   while (Ai < A.length && Bi < B.length) {
//     let maxStart = Math.max(A[Ai][0], B[Bi][0]);
//     let minEnd = Math.min(A[Ai][1], B[Bi][1]);

//     if (maxStart <= minEnd) res.push([maxStart, minEnd]); // overlap found // why this works?????

//     if (A[Ai][1] < B[Bi][1]) Ai++;
//     else Bi++;
//   }

//   return res;
// };

/* 
                ---------
                13     23
    --------
    8      12
    here we are checking B[Bi][1] >= A[Ai][0] cause for data like [8,12] [13, 23]
    B[Bi][0] <= A[Ai][1] matches but B[Bi][1] >= A[Ai][0] doesnt as no overlap is here.
*/
var intervalIntersection = function (A, B) {
  let Ai = 0,
    Bi = 0;
  let res = [];

  while (Ai < A.length && Bi < B.length) {
    if (B[Bi][0] <= A[Ai][1] && B[Bi][1] >= A[Ai][0]) {
      let maxStart = Math.max(A[Ai][0], B[Bi][0]);
      let minEnd = Math.min(A[Ai][1], B[Bi][1]);

      res.push([maxStart, minEnd]); // overlap found
    }

    if (A[Ai][1] < B[Bi][1]) Ai++;
    else Bi++;
  }

  return res;
};
