/*
Maximum CPU Load (hard) #
We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

Example 1:

Jobs: [[1,4,3], [2,5,4], [7,9,6]]
Output: 7
Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the 
jobs are running at the same time i.e., during the time interval (2,4).
Example 2:

Jobs: [[6,7,10], [2,4,11], [8,12,15]]
Output: 15
Explanation: None of the jobs overlap, therefore we will take the maximum load of any job which is 15.
Example 3:

Jobs: [[1,4,2], [2,4,1], [3,6,5]]
Output: 8
Explanation: Maximum CPU load will be 8 as all jobs overlap during the time interval [3,4]. 

*/

const func = (jobs) => {
  jobs = jobs.sort((a, b) => a[0] - b[0]);
  let max = 0;
  for (let i = 1; i < jobs.length; i++) {
    let prev = jobs[i - 1],
      curr = jobs[i];
    if (curr[0] <= prev[1]) {
      if (max === 0) max = curr[2] + prev[2];
      else max = max + curr[2];
      //   console.log(max);
    } else {
      max = Math.max(max, curr[2], prev[2]);
    }
  }
  return max;
};

console.log(
  func([
    [1, 4, 3],
    [2, 5, 4],
    [7, 9, 6],
  ])
);

console.log(
  func([
    [6, 7, 10],
    [2, 4, 11],
    [8, 12, 15],
  ])
);

console.log(
  func([
    [1, 4, 2],
    [2, 4, 1],
    [3, 6, 5],
  ])
);
