//instead of adding all possibilities, we minus the array value from the target and store it in hash. when the same value appers in the array it means we found the indeices
// target = 3 arr = [1,2,4] => target - 1 is 2. so the value needed to achieve the target(3) is 2. when next value comes we check whether it exists in the hash, if so we return the indecies.

const twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    console.log(comp);
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};
console.log(twoSum([1, 2, 4], 3));

// {
// }
