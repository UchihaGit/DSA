// Problem Statement #
// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

// Example 1:

// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
// Output: [[1,3], [4,7], [8,12]]
// Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
// Example 2:

// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
// Output: [[1,3], [4,12]]
// Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].
// Example 3:

// Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
// Output: [[1,4], [5,7]]
// Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].

// class Intervals {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }
// }

// const interval = (intervals, newInterval) => {
//   let merged = [],
//     i = 0;
//   while (i < intervals.length && intervals[i].end <= newInterval.start) {
//     merged.push(intervals[i]);
//     console.log(merged);
//     i++;
//   }
//   //if new interval's ending is bigger that the current interval's start then there is overlap
//   while (i < intervals.length && intervals[i].start <= newInterval.end) {
//     newInterval.start = Math.min(intervals[i].start, newInterval.start);
//     newInterval.end = Math.max(intervals[i].end, newInterval.end);
//     i++;
//   }

//   merged.push(newInterval);

//   while (i < intervals.length) {
//     merged.push(intervals[i]);
//     i++;
//   }
//   return merged;
// };

/*
  --------  new Interval
  4      6
    --------   Interval
    5       7

  intervals[i][end] must be greater than newInterval[start] only then there is overlap
*/

// using array;
var insert = function (intervals, newInterval) {
  let merged = [],
    i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    merged.push(intervals[i]);
    console.log(merged);
    i++;
  }
  //if new interval's ending is bigger that the current interval's start then there is overlap
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  merged.push(newInterval);

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }
  return merged;
};
console.log(
  interval(
    [new Intervals(1, 3), new Intervals(5, 7), new Intervals(8, 12)],
    new Intervals(4, 10)
  )
);

console.log(
  interval([new Intervals(5, 7), new Intervals(8, 12)], new Intervals(1, 3))
);
