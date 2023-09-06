/*
Minimum Meeting Rooms (hard) #
Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.

Example 1:

Meetings: [[1,4], [2,5], [7,9]]
Output: 2
Explanation: Since [1,4] and [2,5] overlap, we need two rooms to hold these two meetings. [7,9] can 
occur in any of the two rooms later.
Example 2:

Meetings: [[6,7], [2,4], [8,12]]
Output: 1
Explanation: None of the meetings overlap, therefore we only need one room to hold all meetings.
Example 3:

Meetings: [[1,4], [2,3], [3,6]]
Output:2
Explanation: Since [1,4] overlaps with the other two meetings [2,3] and [3,6], we need two rooms to 
hold all the meetings.
 
Example 4:

Meetings: [[4,5], [2,3], [2,4], [3,5]]
Output: 2
Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].
*/
//sort it
//how to find mow many rooms needed
//  if overlaps then count++ -> if i.start < i-1.end
// [[4,5], [2,3], [2,4], [3,5]]
// [[2,3], [2,4], [3,5], [4,5]]
/*
    -------
    2     3
    ---------
    2       4
          --------
          3      5
            ------
            4    5
//using queue
place each item in queue, 
condition = when new start is greater than the old end remove from queue
when condition matches do nothing. 
if overlap add count
*/

const func = (m) => {
  m = m.sort((a, b) => a[0] - b[0]);
  let count = 0,
    uniqueRoom = true,
    p = 0;
  for (let i = 1; i < m.length; i++) {
    if (i != 1 && m[p][1] < m[i][0]) {
      p++;
      continue;
    }

    if (m[i - 1][1] > m[i][0]) {
      count++;
    } else if (uniqueRoom) {
      count++;
      uniqueRoom = false;
    }
  }
  return count;
};

console.log(
  func([
    [1, 4],
    [2, 5],
    [7, 9],
  ])
);

console.log(
  func([
    [6, 7],
    [2, 4],
    [8, 12],
  ])
);

console.log(
  func([
    [1, 4],
    [2, 3],
    [3, 6],
  ])
);

console.log(
  func([
    [4, 5],
    [2, 3],
    [2, 4],
    [3, 5],
  ])
);
