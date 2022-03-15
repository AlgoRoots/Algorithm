var permute = function (nums) {
  const result = [];

  const dfs = (i, nums) => {
    //base case
    console.log("i start=" + i);
    if (i === nums.length) {
      result.push(nums.slice());
      console.log("i 00=" + i);
      console.log("result", result);
      console.log("------0");
      return;
    }
    for (let j = i; j < nums.length; j++) {
      // [ 1, 2 ] = [ 2, 1]
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      console.log(`i1: ${i}, j1: ${j}`);
      console.log(`nums1`, nums);
      console.log("--------------1");
      [nums[i], nums[j]] = [nums[j], nums[i]];
      console.log(`i2: ${i}, j2: ${j}`);
      console.log(`nums2`, nums);
      console.log("---------------------2");
    }
  };
  dfs(0, nums);
  return result;
};
console.log(permute([1, 2]));
