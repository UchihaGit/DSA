function sameFrequency(num1, num2) {
  const str1 = `${num1}`;
  const str2 = `${num2}`;
  if (str1.length !== str2.length) return false;
  const obj = {};

  for (const char of str1) {
    obj[char] = ++obj[char] || 1;
  }

  for (const char of str2) {
    if (obj[char]) {
      --obj[char];
    } else {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(12345, 543121));
