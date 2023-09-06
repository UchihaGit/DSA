/*
    Problem Statement #
Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

Example 1:

Appointments: [[1,4], [2,5], [7,9]]
Output: false
Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.
Example 2:

Appointments: [[6,7], [2,4], [8,12]]
Output: true
Explanation: None of the appointments overlap, therefore a person can attend all of them.
Example 3:

Appointments: [[4,5], [2,3], [3,6]]
Output: false
Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.
*/

var maxEvents = function (events) {
  events = events.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < events.length - 1; i++) {
    if (events[i + 1][0] < events[i][1]) return false;
  }
  return true;
};

console.log(
  maxEvents([
    [1, 4],
    [2, 5],
    [7, 9],
  ])
);

console.log(
  maxEvents([
    [6, 7],
    [2, 4],
    [8, 12],
  ])
);

console.log(
  maxEvents([
    [4, 5],
    [2, 3],
    [3, 6],
  ])
);

console.log(
  maxEvents([
    [1, 1],
    [1, 4],
    [2, 2],
    [3, 4],
    [4, 4],
  ])
);

console.log(
  maxEvents([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 2],
  ])
);
