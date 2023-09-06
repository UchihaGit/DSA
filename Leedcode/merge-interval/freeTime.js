/*
Employee Free Time (hard) #
For ‘K’ employees, we are given a list of intervals representing the working hours of each employee. Our goal is to find out if there is a free interval that is common to all employees. You can assume that each list of employee working hours is sorted on the start time.

Example 1:

Input: Employee Working Hours=[[[1,3], [5,6]], [[2,3], [6,8]]]
Output: [3,5]
Explanation: Both the employess are free between [3,5].
Example 2:

Input: Employee Working Hours=[[[1,3], [9,12]], [[2,4]], [[6,8]]]
Output: [4,6], [8,9]
Explanation: All employess are free between [4,6] and [8,9].
Example 3:

Input: Employee Working Hours=[[[1,3]], [[2,4]], [[3,5], [7,9]]]
Output: [5,7]
Explanation: All employess are free between [5,7].
*/
/*
1 error case
2 break down intervals - the trick here is to make all the sub arrays into a single one.
this
[[[1,3], [5,6]], [[2,3], [6,8]]] to this
[[1,3], [2,3], [5,6], [6,8]]
3 sort into ascending
4 check for free window

*/

const func = (intervals) => {
  if (intervals.length === 0) return [];

  let schedule = [];
  intervals.forEach((items) => {
    items.forEach((item) => schedule.push(item));
  });

  schedule = schedule.sort((a, b) => a[0] - b[0]);

  let lastMax = schedule[0][1],
    result = [];
  for (let i = 1; i < schedule.length; i++) {
    const currentItem = schedule[i];
    if (currentItem[0] > lastMax) {
      result.push([lastMax, currentItem[0]]);
    }
    lastMax = Math.max(lastMax, currentItem[1]);
  }
  return result;
};

console.log(
  func([
    [
      [1, 3],
      [5, 6],
    ],
    [
      [2, 3],
      [6, 8],
    ],
  ])
);
console.log(
  func([
    [
      [1, 3],
      [9, 12],
    ],
    [[2, 4]],
    [[6, 8]],
  ])
);
console.log(
  func([
    [[1, 3]],
    [[2, 4]],
    [
      [3, 5],
      [7, 9],
    ],
  ])
);
