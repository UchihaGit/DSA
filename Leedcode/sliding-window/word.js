var findSubstring = function (s, words) {
  let res = [];

  let wordLength = words[0].length;
  let wordCount = words.length;
  let len = wordCount * wordLength; //Length of sliding window

  let map = {};

  for (let word of words) map[word] = map[word] + 1 || 1; //Hash word freq

  for (let i = 0; i < s.length - len + 1; i++) {
    let sub = s.slice(i, i + len); //Generate substring of sliding window length
    if (isConcat(sub, map, wordLength)) res.push(i);
  }

  return res;
};

function isConcat(sub, map, wordLength) {
  let seen = {};
  for (let i = 0; i < sub.length; i += wordLength) {
    let word = sub.slice(i, i + wordLength);
    seen[word] = seen[word] + 1 || 1;
  }

  for (let key in map) {
    if (map[key] !== seen[key]) return false; //Word freq must match between map and seen
  }
  return true;
}

// (String = "catfoxcat"), (Words = ["cat", "fox"]);

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring2 = function (s, words) {
  let res = [];
  if (s.length == 0 || words.length == 0) return res;
  let n = words.length,
    m = words[0].length;
  let m1 = {};
  //     将所有单词存入哈希表
  for (let w of words) {
    m1[w] ? m1[w]++ : (m1[w] = 1);
  }

  for (let i = 0; i <= s.length - n * m; i++) {
    let m2 = {};
    let j = 0;
    for (j = 0; j < n; j++) {
      //             获取长度为m的字串t
      let t = s.substr(i + j * m, m);
      //             如果m1中不存在则跳出循环
      if (!m1[t]) break;
      //             如果m1中存在字串t,则存入m2
      m2[t] ? m2[t]++ : (m2[t] = 1);
      //             如果m2中出现的单词次数比m1多，跳出循环
      if (m2[t] > m1[t]) break;
    }
    if (j == n) res.push(i);
  }
  return res;
};

const findSubstring1 = (str, words) => {
  let frequency = {},
    wordLength = words[0].length,
    wordCount = words.length,
    substr,
    results = [];
  for (let word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
  }
  // console.log(frequency);
  for (let i = 0; i <= str.length - wordLength * wordCount; i++) {
    const seen = {};
    for (let j = 0; j < wordCount; j++) {
      substr = str.substring(
        i + j * wordLength,
        i + j * wordLength + wordLength
      );
      // console.log(i, j, (i + j) * wordLength, substr);

      if (!(substr in frequency)) {
        break;
      }
      if (!(substr in seen)) {
        seen[substr] = 0;
      }
      seen[substr]++;
      if ((frequency[substr] || 0) < seen[substr]) {
        break;
      }
      if (j + 1 === wordCount) {
        results.push(i);
      }
    }
  }
  return results;
};
console.time();
console.log(findSubstring("catfoxcat", ["cat", "fox"]));
console.timeEnd();
