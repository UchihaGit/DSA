// Comparing Strings containing Backspaces (medium) #
// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.
// Example 1:
// Input: str1="xy#z", str2="xzz#"
// Output: true
// Explanation: After applying backspaces the strings become "xz" and "xz" respectively.
// Example 2:
// Input: str1="xp#", str2="xyz##"
// Output: true
// Explanation: After applying backspaces the strings become "x" and "x" respectively.
// In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.

/* Here are some examples of when i1 < 0 || i2 < 0 will happen:

If one of the input strings has only backspaces, and the other input string has non-backspace characters:
vbnet
Copy code
Input:
compare("###", "abc")

Output:
true

Explanation:
- For the first iteration of the `while` loop, `i1` is `-1` (since `fun` couldn't find a non-backspace character in the first string) and `i2` is `2` (index of "c").
- The second condition in the `if` statement is satisfied because `i1` is negative, so the function immediately returns `false`.
If the two input strings have different numbers of backspaces that cancel out all non-backspace characters:
typescript
Copy code
Input:
compare("abc###", "#")

Output:
true

Explanation:
- For the first iteration of the `while` loop, `i1` is `2` (index of "c") and `i2` is `0` (index of "#").
- The `fun` function returns `-1` for `i1` (since the first string has only backspaces after "a") and `-1` for `i2` (since the second string has only backspaces).
- Both `i1` and `i2` are negative, so the function returns `true`. */

const compare = (str1, str2) => {
  let idx1 = str1.length - 1,
    idx2 = str2.length - 1;
  while (idx1 >= 0 || idx2 >= 0) {
    //when one is bigger than the other still loopout remaining.
    let i1 = fun(str1, idx1),
      i2 = fun(str2, idx2);
    // if both becomes -1 then string matches
    if (i1 < 0 && i2 < 0) {
      return true;
    }
    // if only one becomes -1 then string doesn't match
    if (i1 < 0 || i2 < 0) {
      return false;
    }
    //Equal string needs to match, if it is not equal then strings don't match
    if (str1[i1] !== str2[i2]) {
      return false;
    }

    idx1 = i1 - 1;
    idx2 = i2 - 1;
  }
  return true;
};

const fun = (str, idx) => {
  let backspace = 0;
  while (idx >= 0) {
    if (str[idx] === "#") {
      backspace++;
    } else if (backspace > 0) {
      backspace--;
    } else {
      break; // to return at which index char is valid.
    }
    idx--;
  }
  return idx;
};

// console.log(compare("abc#d", "abzz##d"));
console.log(compare("ab", "ab"));

// console.log(compare("xy#z", "xzz#"));
// console.log(compare("xy#z", "xyz#"));
// console.log(compare("xp#", "xyz##"));
// console.log(compare("xywrrmp", "xywrrmu#p"));
// console.log(compare("p", "xywrrmu#p"));
// console.log(compare("a#c###", "ad#c"));
