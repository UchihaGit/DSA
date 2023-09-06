// isPalindrome
// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

// function isPalindrome(str) {
//   //condition to exit
//   if (str.length === 0) {
//     return "";
//   }
//   //reverse a string
//   return isPalindrome(str.slice(1)) + str[0];
//   //compare
//   //what approach to choose..helper?
// }

function isPalindrome(str) {
  if (str.length === 1) {
    console.log("first if");
    return true;
  }
  if (str.length === 2) {
    console.log("second if");
    return str[0] === str[1];
  }
  if (str[0] === str.slice(-1)) {
    console.log("third if", str[0], str.slice(-1));
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}

// console.log(isPalindrome("lalalalalal"));

const palindrome = (str) => {
  let end = str.length - 1;
  for (let start = 0; start < str.length; start++) {
    if (str[start] === str[end]) {
      end -= 1;
    } else {
      return false;
    }
  }
  return true;
};

console.log(palindrome("lalalalalala"));
