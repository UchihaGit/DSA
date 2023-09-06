// factorial
// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it;
// e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
// factorial zero (0!) is always 1

const factorial = (val) => {
  if (val === 0) return 1;
  if (val < 0) return 0;
  return val * factorial(--val);
}

console.log(factorial(4));
