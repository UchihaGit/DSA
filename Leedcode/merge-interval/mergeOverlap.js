// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

// Example 1:

// Intervals: [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]]
// Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
// one [1,5].

class Intervals {
  constructor(start, end) {
    (this.start = start), (this.end = end);
  }
}

const merge = (intervals) => {
  intervals.sort((a, b) => a.start - b.start);
  let mergeIntervals = [];
  let start, end;
  (start = intervals[0].start), (end = intervals[0].end);
  for (let i = 1; i < intervals.length; i++) {
    const currInterval = intervals[i];
    if (currInterval.start <= end) {
      end = Math.max(end, currInterval.end);
    } else {
      mergeIntervals.push(new Intervals(start, end));
      (start = currInterval.start), (end = currInterval.end);
    }
  }
  mergeIntervals.push(new Intervals(start, end));
  return mergeIntervals;
};

console.log(
  merge([new Intervals(1, 4), new Intervals(2, 5), new Intervals(7, 9)])
);
