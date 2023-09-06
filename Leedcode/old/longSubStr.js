// Given a string, find the length of the longest substring in it with no more than K distinct characters.

const longSubStr = (str, k) => {
  let map = {},
    start = 0,
    maxLen = 0;
  for (let end = 0; end < str.length; end++) {
    const rightChar = str[end];
    if (map[rightChar] === undefined) {
      map[rightChar] = 0;
    }
    map[rightChar] += 1;
    while (Object.keys(map).length > k) {
      let leftChar = str[start];
      map[leftChar] -= 1;
      if (map[leftChar] === 0) {
        delete map[leftChar];
      }
      start += 1;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};

console.log(longSubStr("araaci", 2));
