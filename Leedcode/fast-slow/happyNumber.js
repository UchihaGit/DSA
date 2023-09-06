// Problem Statement #
// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

//instead of tortoise hare can also be done by map.

const findNum = (num) => {
  let slow = num,
    fast = num;
  while (true) {
    slow = fun(slow);
    fast = fun(fun(fast));
    console.log(slow, fast);
    if (slow === fast) {
      break;
    }
  }
  return slow === 1;
};

const fun = (num) => {
  let sum = 0;
  while (num > 0) {
    // here the number is not the sum, but the next remaining number for each iteration eg: 12 -> 1 -> 0
    digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10); // here the last number is removed and remaining number is passed as num
  }
  return sum;
};

console.log(findNum(12));
// console.log(findNum(23));
