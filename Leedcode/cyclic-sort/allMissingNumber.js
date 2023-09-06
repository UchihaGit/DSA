const func = (nums) => {
  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1; // here we are taking nums[i] as j to swap properly
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i = i + 1;
    }
  }
  console.log(nums);
  let result = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) result.push(i + 1);
  }
  return result;
};

console.log(func([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(func([1, 1]));
