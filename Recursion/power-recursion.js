// power
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow().
// Do not worry about negative bases and exponents.

//should return base^exponent
//return when exponent is 0
//figure out how to multiply base the to times of exponent

// function power(base, exponent) {
//   let multiple = 1;
//   function innerRecursion(exponent) {
//     if (exponent === 0) return;
//     multiple = base * multiple;
//     innerRecursion(--exponent);
//   }
//   innerRecursion(exponent);
//   return multiple;
// }

// console.log(power(7, 3));

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, --exponent);
}
console.log(power(2, 3));
